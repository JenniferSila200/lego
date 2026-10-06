import { useState } from "react";
import { Link } from "react-router-dom";

function Page({ eyebrow, title, children }) {
  return (
    <section className="subpage">
      <article className="subpage-card">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children}
      </article>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Page eyebrow="Contact" title="Neem contact op">
      <p>
        Heb je een vraag over de campagne, de LEGO-ruimte of de podcast? Stuur ons een bericht. Dit
        is een demonstratie: het bericht blijft in je browser en wordt niet naar een server
        gestuurd.
      </p>
      {sent ? (
        <p className="success-note" role="status">
          Bedankt. Je bericht is in deze demo genoteerd.
        </p>
      ) : (
        <form className="info-form" onSubmit={onSubmit}>
          <label>
            Naam
            <input name="naam" required placeholder="Je naam" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required placeholder="je@email.nl" />
          </label>
          <label>
            Bericht
            <textarea name="bericht" required placeholder="Waar kunnen we je mee helpen?" />
          </label>
          <button type="submit" className="btn btn-red">
            Verstuur
          </button>
        </form>
      )}
    </Page>
  );
}

const faqs = [
  {
    q: "Voor wie is Bouw samen aan morgen?",
    a: "Voor kinderen die in het ziekenhuis liggen of daar vaak komen, en voor hun ouders en verzorgers. Kinderen delen een droom met een tekening. Ouders kunnen hun verhaal kwijt in de podcast.",
  },
  {
    q: "Wat gebeurt er met de tekening?",
    a: "Het team bekijkt de tekening en zoekt een bestaande LEGO-set die bij de droom past. Niet elke tekening wordt automatisch een set. Als er meer bekend is, volgt er bericht.",
  },
  {
    q: "Moet een kind zelf worden geïnterviewd voor de podcast?",
    a: "Nee. In de podcast Mijn droom worden ouders geïnterviewd over hun kind, hun ervaringen, het dagelijks leven en de dromen van hun kind.",
  },
  {
    q: "Welke gegevens vragen jullie?",
    a: "Voornaam en leeftijd van het kind, het e-mailadres van een ouder of verzorger, het ziekenhuis en toestemming om de tekening en het verhaal te delen.",
  },
  {
    q: "Waar zijn de LEGO-ruimtes?",
    a: "In verschillende kinderziekenhuizen in Nederland. Op de pagina LEGO-ruimte zie je de locaties op de kaart.",
  },
];

export function Faq() {
  return (
    <Page eyebrow="Veelgestelde vragen" title="Vragen over de campagne">
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </Page>
  );
}

export function Privacy() {
  return (
    <Page eyebrow="Privacy" title="Privacyverklaring">
      <p>
        Bouw samen aan morgen vraagt alleen gegevens die nodig zijn om een tekening en een verhaal
        te kunnen bekijken: voornaam, leeftijd, ziekenhuis en het e-mailadres van een ouder of
        verzorger.
      </p>
      <p>
        In deze website blijven die gegevens in de browser staan, via localStorage. Ze worden niet
        naar een server verstuurd en niet gedeeld met anderen. Je kunt ze wissen door de
        opgeslagen sitegegevens van deze pagina te verwijderen.
      </p>
      <p>
        Een tekening en verhaal worden alleen gedeeld als een ouder of verzorger daar toestemming
        voor geeft. Die toestemming geef je aan in het formulier bij Doe mee.
      </p>
      <p>
        <Link to="/doe-mee">Terug naar Doe mee</Link>
      </p>
    </Page>
  );
}

export function Cookies() {
  const [choice, setChoice] = useState(() => localStorage.getItem("bsam-cookies") || "functioneel");

  function choose(value) {
    setChoice(value);
    localStorage.setItem("bsam-cookies", value);
  }

  return (
    <Page eyebrow="Cookies" title="Cookie-instellingen">
      <p>
        Deze website gebruikt geen volgcookies. De tekening en de formuliergegevens blijven lokaal
        in je browser bewaard, zodat je tussen de stappen van Doe mee kunt wisselen.
      </p>
      <div className="cookie-choices">
        <button
          type="button"
          className={`btn ${choice === "functioneel" ? "btn-red" : "btn-ghost"}`}
          onClick={() => choose("functioneel")}
        >
          Alleen functioneel
        </button>
        <button
          type="button"
          className={`btn ${choice === "alles" ? "btn-red" : "btn-ghost"}`}
          onClick={() => choose("alles")}
        >
          Functioneel aan laten
        </button>
      </div>
      <p className="cookie-status" role="status">
        Huidige keuze: {choice === "alles" ? "functionele opslag staat aan" : "alleen functionele opslag"}.
      </p>
    </Page>
  );
}
