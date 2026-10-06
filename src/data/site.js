export const hospitals = [
  { id: "emma", name: "Emma Kinderziekenhuis", city: "Amsterdam", left: "30%", top: "40%" },
  { id: "wakz", name: "Willem-Alexander Kinderziekenhuis", city: "Leiden", left: "24%", top: "48%" },
  { id: "juliana", name: "Juliana Kinderziekenhuis", city: "Den Haag", left: "18%", top: "55%" },
  { id: "sophia", name: "Sophia Kinderziekenhuis", city: "Rotterdam", left: "22%", top: "63%" },
  { id: "maxima", name: "Prinses Máxima Centrum", city: "Utrecht", left: "42%", top: "43%" },
  { id: "wkz", name: "Wilhelmina Kinderziekenhuis", city: "Utrecht", left: "48%", top: "50%" },
  { id: "amalia", name: "Amalia Kinderziekenhuis", city: "Nijmegen", left: "60%", top: "61%" },
  { id: "beatrix", name: "Beatrix Kinderziekenhuis", city: "Groningen", left: "74%", top: "16%" },
  { id: "isala", name: "Isala Kinderziekenhuis", city: "Zwolle", left: "62%", top: "33%" },
  { id: "mumc", name: "MUMC+ Kinderziekenhuis", city: "Maastricht", left: "54%", top: "88%" },
];

export const hospitalsByName = [...hospitals].sort((a, b) =>
  a.name.localeCompare(b.name, "nl")
);

export const episodes = [
  {
    id: "maan",
    number: 1,
    title: "Naar de maan",
    quote: "Hij wil later astronaut worden, en nu kan hij al een beetje dichterbij komen met LEGO.",
    minutes: 15,
    date: "12 april",
    image: "/images/pod-ep1.jpg",
    alt: "LEGO-figuur met een kasteel op de achtergrond",
  },
  {
    id: "dieren",
    number: 2,
    title: "Dieren helpen",
    quote: "Ze droomt van een eigen dierenziekenhuis. In de LEGO-ruimte leeft die droom echt.",
    minutes: 20,
    date: "3 mei",
    image: "/images/pod-ep2.jpg",
    alt: "LEGO-figuur met een hond",
  },
  {
    id: "wereld",
    number: 3,
    title: "Mijn eigen wereld",
    quote: "In haar eigen wereld is alles mogelijk. Met LEGO bouwt ze elke dag aan die wereld.",
    minutes: 18,
    date: "17 juni",
    image: "/images/pod-ep3.jpg",
    alt: "LEGO-figuur met een wereldbol",
  },
  {
    id: "kind",
    number: 4,
    title: "Gewoon kind zijn",
    quote: "Je wilt dat je kind weer gewoon kan spelen, lachen en kind kan zijn. Dat is onbetaalbaar.",
    minutes: 22,
    date: "8 juli",
    image: "/images/pod-ep4.jpg",
    alt: "LEGO-figuur met een bril en een hart",
  },
];

export const tips = [
  { id: "liefst", color: "pink", text: "Teken wat je het liefst zou willen" },
  { id: "alles", color: "yellow", text: "Alles mag: groot, klein, echt of fantasie" },
  { id: "kleur", color: "blue", text: "Gebruik zoveel kleuren als je wilt" },
  { id: "wereld", color: "green", text: "Je kunt ook mensen, dieren of een wereld tekenen" },
];

export const prompts = [
  { id: "getekend", color: "pink", text: "Wat heb je getekend?" },
  { id: "leuk", color: "yellow", text: "Wat vind je er zo leuk aan?" },
  { id: "wie", color: "blue", text: "Wie zijn er bij?" },
  { id: "doen", color: "green", text: "Wat zou jij het er liefst mee doen?" },
  { id: "waar", color: "purple", text: "Waar speelt het zich af?" },
  { id: "speciaal", color: "orange", text: "Wat maakt jouw droom speciaal?" },
];

export const howSteps = [
  {
    n: "1",
    tone: "red",
    title: "De droom",
    image: "/images/idee-step1.jpg",
    alt: "Kindtekening van een kasteel met bomen en een zon",
    text: "Een kind vertelt waar het van droomt of gaat zelf aan de slag met een tekening. Hierin staat hun fantasie en alles wat ze graag willen doen of zijn.",
  },
  {
    n: "2",
    tone: "yellow",
    title: "Van tekening naar LEGO",
    image: "/images/idee-step2.jpg",
    alt: "LEGO-kasteel dat bij de tekening past",
    text: "We kijken samen naar de tekening en kiezen een bestaande LEGO-set die het beste bij de droom past. Zo wordt de tekening vertaald naar een set die echt bestaat.",
  },
  {
    n: "3",
    tone: "blue",
    title: "Samen bouwen in het ziekenhuis",
    image: "/images/idee-step3.jpg",
    alt: "Kind dat met LEGO bouwt",
    text: "De LEGO-set wordt in het ziekenhuis gebruikt, zodat het kind samen met andere kinderen, familie en vrijwilligers de set kan bouwen.",
  },
  {
    n: "4",
    tone: "green",
    title: "Een gedeelde wereld",
    image: "/images/idee-step4.jpg",
    alt: "Grote LEGO-wereld vol bouwwerken",
    text: "Alle verhalen en LEGO-sets worden onderdeel van onze grote LEGO-wereld in het ziekenhuis. Een wereld vol dromen die steeds verder groeit.",
  },
];

export const activities = [
  {
    title: "Vrij bouwen",
    text: "Laat je fantasie de vrije loop en bouw wat je wilt.",
    color: "yellow",
    icon: "brick",
  },
  {
    title: "Werken aan sets",
    text: "Bouw jouw droom tot leven, alleen of samen met anderen.",
    color: "pink",
    icon: "flower",
  },
  {
    title: "Samen met anderen",
    text: "Ontmoet kinderen en bouw samen.",
    color: "blue",
    icon: "people",
  },
];

export const journey = [
  { title: "We hebben je tekening ontvangen", color: "pink", icon: "mail" },
  { title: "Ons team bekijkt je tekening", color: "yellow", icon: "people" },
  { title: "We ontwerpen jouw LEGO-set", color: "blue", icon: "brick" },
  { title: "Jouw set wordt naar het ziekenhuis gebracht", color: "green", icon: "building" },
];

export const flowSteps = [
  { id: "upload", to: "/doe-mee", label: "Upload jouw tekening" },
  { id: "droom", to: "/doe-mee/droom", label: "Vertel iets over jouw droom" },
  { id: "gegevens", to: "/doe-mee/gegevens", label: "Jouw gegevens" },
  { id: "verzonden", to: "/doe-mee/verzonden", label: "Verzenden" },
];

export function hospitalName(id) {
  return hospitals.find((hospital) => hospital.id === id)?.name || "";
}
