import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FORM_KEY = "bouw-samen-aan-morgen";
const IMAGE_KEY = "bouw-samen-aan-morgen-tekening";

const emptyForm = {
  story: "",
  firstName: "",
  age: "",
  email: "",
  hospital: "",
  consentShare: false,
  consentPrivacy: false,
  submitted: false,
};

const emptyImage = { data: "", name: "", type: "" };

function loadForm() {
  try {
    const raw = JSON.parse(localStorage.getItem(FORM_KEY) || "null");
    if (!raw || typeof raw !== "object") return { ...emptyForm };
    const next = { ...emptyForm };
    for (const key of Object.keys(emptyForm)) {
      if (raw[key] !== undefined) next[key] = raw[key];
    }
    next.story = String(next.story || "").slice(0, 500);
    next.consentShare = Boolean(next.consentShare);
    next.consentPrivacy = Boolean(next.consentPrivacy);
    next.submitted = Boolean(next.submitted);
    return next;
  } catch {
    return { ...emptyForm };
  }
}

function loadImage() {
  try {
    const raw = JSON.parse(localStorage.getItem(IMAGE_KEY) || "null");
    if (!raw || typeof raw !== "object") return { ...emptyImage };
    return {
      data: typeof raw.data === "string" ? raw.data : "",
      name: typeof raw.name === "string" ? raw.name : "",
      type: typeof raw.type === "string" ? raw.type : "",
    };
  } catch {
    return { ...emptyImage };
  }
}

const SubmissionContext = createContext(null);

export function SubmissionProvider({ children }) {
  const [form, setForm] = useState(loadForm);
  const [image, setImage] = useState(loadImage);

  useEffect(() => {
    localStorage.setItem(FORM_KEY, JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    try {
      localStorage.setItem(IMAGE_KEY, JSON.stringify(image));
    } catch {
      try {
        localStorage.setItem(IMAGE_KEY, JSON.stringify({ ...image, data: "" }));
      } catch {
        /* De tekening blijft beschikbaar zolang deze pagina open is. */
      }
    }
  }, [image]);

  const update = (partial) => {
    const imagePartial = {};
    const formPartial = {};
    Object.entries(partial).forEach(([key, value]) => {
      if (key === "imageData" || key === "imageName" || key === "imageType") {
        imagePartial[key] = value;
      } else if (key in emptyForm) {
        formPartial[key] = value;
      }
    });
    if (Object.keys(formPartial).length) {
      setForm((current) => ({ ...current, ...formPartial }));
    }
    if (Object.keys(imagePartial).length) {
      setImage((current) => ({
        data: "imageData" in imagePartial ? imagePartial.imageData : current.data,
        name: "imageName" in imagePartial ? imagePartial.imageName : current.name,
        type: "imageType" in imagePartial ? imagePartial.imageType : current.type,
      }));
    }
  };

  const value = useMemo(
    () => ({
      data: {
        ...form,
        imageData: image.data,
        imageName: image.name,
        imageType: image.type,
      },
      update,
    }),
    [form, image]
  );

  return <SubmissionContext.Provider value={value}>{children}</SubmissionContext.Provider>;
}

export function useSubmission() {
  const context = useContext(SubmissionContext);
  if (!context) {
    throw new Error("useSubmission moet binnen SubmissionProvider staan.");
  }
  return context;
}

export function readDrawing(file) {
  const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
  if (!allowed.includes(file.type)) {
    return Promise.reject(new Error("Gebruik een JPG, PNG of PDF."));
  }
  if (file.size > 10 * 1024 * 1024) {
    return Promise.reject(new Error("Dit bestand is te groot. Kies een bestand tot 10 MB."));
  }
  if (file.type === "application/pdf") {
    return readFile(file).then((data) => ({
      imageData: data,
      imageName: file.name,
      imageType: file.type,
    }));
  }
  return compressImage(file).then((data) => ({
    imageData: data,
    imageName: file.name,
    imageType: "image/jpeg",
  }));
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Het bestand kon niet worden gelezen."));
    reader.readAsDataURL(file);
  });
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const max = 1100;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.78));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Deze afbeelding kon niet worden geopend."));
    };
    img.src = url;
  });
}

export function validateDetails(data) {
  const errors = {};
  if (!data.firstName.trim()) errors.firstName = "Vul je voornaam in.";
  const age = Number(data.age);
  if (!data.age || Number.isNaN(age) || age < 1 || age > 18) {
    errors.age = "Vul een leeftijd in tussen 1 en 18 jaar.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Vul een geldig e-mailadres van een ouder of verzorger in.";
  }
  if (!data.hospital) errors.hospital = "Kies een ziekenhuis.";
  if (!data.consentShare) {
    errors.consentShare = "Toestemming van een ouder of verzorger is nodig.";
  }
  if (!data.consentPrivacy) {
    errors.consentPrivacy = "Ga akkoord met de privacyverklaring om verder te gaan.";
  }
  return errors;
}
