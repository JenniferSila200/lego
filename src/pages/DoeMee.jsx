import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Bricks } from "../components/Bricks";
import { Glyph, ArrowLeft, ArrowRight, Check, HeartDoodle, ImagePlus, Sparkles } from "../components/Icons";
import { readDrawing, useSubmission, validateDetails } from "../context/SubmissionContext";
import { flowSteps, hospitalName, hospitalsByName, journey, prompts, tips } from "../data/site";

const paths = ["/doe-mee", "/doe-mee/droom", "/doe-mee/gegevens", "/doe-mee/verzonden"];
const heroes = {
  0: "/images/flow1-hero.jpg",
  1: "/images/flow2-hero.jpg",
  2: "/images/flow3-hero.jpg",
  3: "/images/flow4-hero.jpg",
};

function furthest(data) {
  if (!data.imageName) return 0;
  if (!data.story.trim()) return 1;
  if (!data.submitted || Object.keys(validateDetails(data)).length) return 2;
  return 3;
}

export function DoeMee() {
  const { step } = useParams();
  const navigate = useNavigate();
  const { data, update } = useSubmission();
  const index = step ? { droom: 1, gegevens: 2, verzonden: 3 }[step] : 0;

  useEffect(() => {
    if (index === undefined) {
      navigate("/doe-mee", { replace: true });
      return;
    }
    const max = furthest(data);
    if (index > max) navigate(paths[max], { replace: true });
  }, [index, data, navigate]);

  if (index === undefined) return null;

  return (
    <div className="flow">
      <section className="flow-hero">
        <div className="flow-hero__photo">
          <img src={heroes[index]} alt="LEGO-figuur met een kindtekening" />
          <HeartDoodle className="flow-heart" />
        </div>
        <div className="flow-hero__copy">
          <p className="eyebrow eyebrow--red">Doe mee</p>
          <Sparkles className="sparkles--title" />
          <h1>
            Deel jouw droom
            <br />
            door een tekening
          </h1>
          <p>
            Vertel met een tekening waar jij van droomt. Wij kijken naar jouw tekening en gebruiken
            deze als inspiratie voor een echte, bestaande LEGO-set. Zo kan jouw droom misschien tot
            leven komen!
          </p>
        </div>
        <Bricks className="hero-bricks" />
      </section>

      <div className="shell flow-wrap">
        <ol className="stepper">
          {flowSteps.map((item, itemIndex) => {
            const state = itemIndex < index ? "done" : itemIndex === index ? "current" : "todo";
            const enabled = itemIndex <= furthest(data);
            const inner = (
              <>
                <span className="step__dot">{state === "done" ? <Check /> : itemIndex + 1}</span>
                <span className="step__label">{item.label}</span>
              </>
            );
            return (
              <li key={item.id} className={`step step--${state}`}>
                {enabled && itemIndex !== index ? (
                  <Link to={item.to}>{inner}</Link>
                ) : (
                  <span>{inner}</span>
                )}
                {itemIndex < flowSteps.length - 1 && <span className="step__line" />}
              </li>
            );
          })}
        </ol>

        <div className="flow-panel">
          {index === 0 && <UploadStep />}
          {index === 1 && <StoryStep />}
          {index === 2 && <DetailsStep />}
          {index === 3 && <DoneStep />}
          <Bricks />
        </div>
      </div>
    </div>
  );
}

function UploadStep() {
  const { data, update } = useSubmission();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [error, setError] = useState("");

  async function takeFile(file) {
    if (!file) return;
    try {
      const drawing = await readDrawing(file);
      update(drawing);
      setError("");
    } catch (reason) {
      setError(reason.message);
    }
  }

  function next() {
    if (!data.imageName) {
      setError("Upload eerst je tekening.");
      return;
    }
    navigate("/doe-mee/droom");
  }

  const hasFile = Boolean(data.imageName);

  return (
    <>
      <div className="flow-main">
        <h2>1. Upload je tekening</h2>
        <p>
          Upload een foto of scan van jouw tekening. Deze kan later worden gebruikt als inspiratie
          voor een echte LEGO-set!
        </p>
        <div
          className={`dropzone${drag ? " is-drag" : ""}${hasFile ? " has-file" : ""}`}
          onDragOver={(event) => {
            event.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDrag(false);
            takeFile(event.dataTransfer.files?.[0]);
          }}
        >
          {hasFile ? (
            <>
              {data.imageType === "application/pdf" || !data.imageData.startsWith("data:image") ? (
                <div className="pdf-file">
                  <ImagePlus />
                  <strong>{data.imageName}</strong>
                  <span>PDF geüpload</span>
                </div>
              ) : (
                <img src={data.imageData} alt="Voorbeeld van je geüploade tekening" />
              )}
              <div className="drop-actions">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => update({ imageData: "", imageName: "", imageType: "" })}
                >
                  Verwijderen
                </button>
                <button type="button" className="btn btn-yellow" onClick={() => inputRef.current?.click()}>
                  Vervangen
                </button>
              </div>
            </>
          ) : (
            <button type="button" className="drop-empty" onClick={() => inputRef.current?.click()}>
              <ImagePlus />
              <strong>Klik om je tekening te uploaden</strong>
              <span>Of sleep je bestand hier naartoe</span>
              <small>JPG, PNG of PDF · Max. 10 MB</small>
            </button>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,application/pdf"
            hidden
            onChange={(event) => {
              takeFile(event.target.files?.[0]);
              event.target.value = "";
            }}
          />
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="flow-actions">
          <span />
          <button type="button" className="btn btn-red" onClick={next}>
            Volgende stap <ArrowRight />
          </button>
        </div>
      </div>
      <aside className="flow-aside">
        <h3>
          Tips voor je tekening <Sparkles className="sparkles--inline" />
        </h3>
        <ul className="aside-list">
          {tips.map((tip) => (
            <li key={tip.id}>
              <span className={`bubble bubble--${tip.color}`}>
                <Glyph name={tip.id === "liefst" ? "heart" : tip.id === "alles" ? "brick" : tip.id === "kleur" ? "palette" : "cloud"} />
              </span>
              {tip.text}
            </li>
          ))}
        </ul>
        <HeartDoodle className="aside-heart" />
      </aside>
    </>
  );
}

function StoryStep() {
  const { data, update } = useSubmission();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function addPrompt(text) {
    const addition = data.story.trim() ? `${data.story.trim()}\n${text} ` : `${text} `;
    if (addition.length > 500) return;
    update({ story: addition });
  }

  function next() {
    if (!data.story.trim()) {
      setError("Schrijf iets over jouw droom.");
      return;
    }
    navigate("/doe-mee/gegevens");
  }

  return (
    <>
      <div className="flow-main">
        <h2>2. Vertel iets over jouw droom</h2>
        <p>Schrijf in je eigen woorden wat er op je tekening staat en wat je zou willen dat er gebeurt.</p>
        <label className="story-field">
          <span className="sr-only">Jouw verhaal</span>
          <textarea
            value={data.story}
            maxLength={500}
            placeholder="Schrijf hier jouw verhaal"
            onChange={(event) => {
              update({ story: event.target.value.slice(0, 500) });
              setError("");
            }}
          />
          <span className="counter">{data.story.length}/500 tekens</span>
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="flow-actions">
          <Link to="/doe-mee" className="btn btn-ghost">
            <ArrowLeft /> Vorige stap
          </Link>
          <button type="button" className="btn btn-red" onClick={next}>
            Volgende stap <ArrowRight />
          </button>
        </div>
      </div>
      <aside className="flow-aside">
        <h3>
          Geen inspiratie? <Sparkles className="sparkles--inline" />
        </h3>
        <ul className="aside-list">
          {prompts.map((prompt) => (
            <li key={prompt.id}>
              <button type="button" className="prompt" onClick={() => addPrompt(prompt.text)}>
                <span className={`bubble bubble--${prompt.color}`}>
                  <Glyph
                    name={
                      prompt.id === "getekend"
                        ? "bulb"
                        : prompt.id === "leuk"
                          ? "heart"
                          : prompt.id === "wie"
                            ? "people"
                            : prompt.id === "doen"
                              ? "smile"
                              : prompt.id === "waar"
                                ? "gamepad"
                                : "wand"
                    }
                  />
                </span>
                {prompt.text}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

function DetailsStep() {
  const { data, update } = useSubmission();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validateDetails(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    update({
      firstName: data.firstName.trim(),
      email: data.email.trim(),
      submitted: true,
    });
    navigate("/doe-mee/verzonden");
  }

  return (
    <>
      <form className="flow-main" onSubmit={onSubmit} noValidate>
        <h2>3. Jouw gegevens</h2>
        <p>Vul hieronder jouw gegevens in.</p>
        <div className="form-grid">
          <label className={errors.firstName ? "is-invalid" : ""}>
            Voornaam*
            <input
              value={data.firstName}
              placeholder="Schrijf hier uw voornaam"
              onChange={(event) => update({ firstName: event.target.value })}
            />
            {errors.firstName && <small>{errors.firstName}</small>}
          </label>
          <label className={errors.age ? "is-invalid" : ""}>
            Leeftijd*
            <input
              inputMode="numeric"
              value={data.age}
              placeholder="Vul hier uw leeftijd in"
              onChange={(event) => update({ age: event.target.value.replace(/\D/g, "").slice(0, 2) })}
            />
            {errors.age && <small>{errors.age}</small>}
          </label>
          <label className={errors.email ? "is-invalid" : ""}>
            E-mail van ouder/verzorger*
            <input
              type="email"
              value={data.email}
              placeholder="Schrijf hier uw e-mail"
              onChange={(event) => update({ email: event.target.value })}
            />
            {errors.email && <small>{errors.email}</small>}
          </label>
          <label className={errors.hospital ? "is-invalid" : ""}>
            Ziekenhuis*
            <select value={data.hospital} onChange={(event) => update({ hospital: event.target.value })}>
              <option value="">Kies een ziekenhuis</option>
              {hospitalsByName.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.name}
                </option>
              ))}
            </select>
            {errors.hospital && <small>{errors.hospital}</small>}
          </label>
        </div>
        <label className={`check${errors.consentShare ? " is-invalid" : ""}`}>
          <input
            type="checkbox"
            checked={data.consentShare}
            onChange={(event) => update({ consentShare: event.target.checked })}
          />
          <span>Mijn ouder of verzorger geeft toestemming voor het delen van mijn tekening en verhaal</span>
        </label>
        {errors.consentShare && <p className="form-error">{errors.consentShare}</p>}
        <label className={`check${errors.consentPrivacy ? " is-invalid" : ""}`}>
          <input
            type="checkbox"
            checked={data.consentPrivacy}
            onChange={(event) => update({ consentPrivacy: event.target.checked })}
          />
          <span>
            Ik ga akkoord met de <Link to="/privacy">privacyverklaring</Link>
          </span>
        </label>
        {errors.consentPrivacy && <p className="form-error">{errors.consentPrivacy}</p>}
        <div className="flow-actions">
          <Link to="/doe-mee/droom" className="btn btn-ghost">
            <ArrowLeft /> Vorige stap
          </Link>
          <button type="submit" className="btn btn-red">
            Volgende stap <ArrowRight />
          </button>
        </div>
      </form>
      <aside className="flow-aside flow-aside--guide">
        <img src="/images/flow3-guide.jpg" alt="LEGO-figuur met een klembord en een vinkje" />
        <ul className="aside-list">
          <li>
            <span className="bubble bubble--pink">
              <Glyph name="mail" />
            </span>
            We gebruiken je gegevens alleen voor deze actie.
          </li>
          <li>
            <span className="bubble bubble--yellow">
              <Glyph name="lock" />
            </span>
            Je gegevens zijn veilig en worden niet gedeeld.
          </li>
          <li>
            <span className="bubble bubble--green">
              <Glyph name="shield" />
            </span>
            Samen maken we dromen waar, steen voor steen!
          </li>
        </ul>
      </aside>
    </>
  );
}

function DoneStep() {
  const { data } = useSubmission();
  const showImage = data.imageData.startsWith("data:image");

  return (
    <>
      <div className="flow-main">
        <h2>
          Je tekening is verzonden! <Sparkles className="sparkles--inline" />
        </h2>
        <ol className="journey">
          {journey.map((item) => (
            <li key={item.title}>
              <span className={`bubble bubble--${item.color} bubble--lg`}>
                <Glyph name={item.icon} />
              </span>
              {item.title}
            </li>
          ))}
        </ol>
        <div className="next-box">
          <span className="bubble bubble--pink">
            <Glyph name="mail" />
          </span>
          <div>
            <h3>Wat gebeurt er nu?</h3>
            <p>
              Je ontvangt een bevestiging per e-mail. Zodra er meer bekend is over jouw tekening en
              of deze wordt gebruikt als inspiratie voor een echte LEGO-set, laten we het je weten!
            </p>
          </div>
        </div>
        <div className="flow-actions">
          <Link to="/doe-mee/gegevens" className="btn btn-ghost">
            <ArrowLeft /> Vorige stap
          </Link>
          <Link to="/" className="btn btn-red">
            Naar de homepage
          </Link>
        </div>
      </div>
      <aside className="flow-aside summary-card">
        <h3>
          Jouw inzending <Sparkles className="sparkles--inline" />
        </h3>
        <div className="summary-drawing">
          {showImage ? (
            <img src={data.imageData} alt="Ingezonden tekening" />
          ) : (
            <div className="pdf-file">
              <ImagePlus />
              <strong>{data.imageName}</strong>
            </div>
          )}
        </div>
        <ul className="summary-list">
          <li>
            <span className="bubble bubble--pink">
              <Glyph name="pencil" />
            </span>
            <div>
              <strong>Tekening</strong>
              <p>{data.imageName}</p>
            </div>
          </li>
          <li>
            <span className="bubble bubble--yellow">
              <Glyph name="heart" />
            </span>
            <div>
              <strong>Jouw droom</strong>
              <p>{data.story}</p>
            </div>
          </li>
          <li>
            <span className="bubble bubble--blue">
              <Glyph name="user" />
            </span>
            <div>
              <strong>Naam</strong>
              <p>{data.firstName}</p>
            </div>
          </li>
          <li>
            <span className="bubble bubble--green">
              <Glyph name="people" />
            </span>
            <div>
              <strong>Leeftijd</strong>
              <p>{data.age} jaar</p>
            </div>
          </li>
          <li>
            <span className="bubble bubble--orange">
              <Glyph name="building" />
            </span>
            <div>
              <strong>Ziekenhuis</strong>
              <p>{hospitalName(data.hospital)}</p>
            </div>
          </li>
          <li>
            <span className="bubble bubble--pink">
              <Glyph name="mail" />
            </span>
            <div>
              <strong>E-mailadres ouder/verzorger</strong>
              <p>{data.email}</p>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}
