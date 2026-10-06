import { Link } from "react-router-dom";
import { Bricks } from "../components/Bricks";
import { ArrowRight, HeartDoodle, Sparkles } from "../components/Icons";
import { howSteps } from "../data/site";

export function Idee() {
  return (
    <>
      <section className="split-hero">
        <div className="split-hero__photo">
          <img
            src="/images/idee-hero.jpg"
            alt="LEGO-figuur met een tekening van een raket, naast een LEGO-raket"
          />
        </div>
        <div className="split-hero__copy">
          <p className="eyebrow">Het idee</p>
          <Sparkles className="sparkles--title" />
          <h1>
            Van droom
            <br />
            naar LEGO-set
          </h1>
          <p>
            Elk kind heeft een droom. Bij ‘Bouw samen aan morgen’ geven we die droom een LEGO-vorm.
            Een tekening van een droom wordt gekoppeld aan een bestaande LEGO-set die bij hun droom
            past. Daarna kunnen kinderen die set bouwen in het ziekenhuis en samen een grote
            LEGO-wereld vol dromen maken.
          </p>
        </div>
        <Bricks className="hero-bricks" />
      </section>

      <section className="shell how-section">
        <div className="how-panel">
          <Sparkles className="sparkles--how" />
          <h2>Zo werkt het</h2>
          <p className="how-lead">Van een droom in het hoofd, naar een LEGO-set in de echte wereld.</p>
          <div className="how-grid">
            {howSteps.map((step) => (
              <article key={step.n} className="how-card">
                <header>
                  <span className={`num num--${step.tone}`}>{step.n}</span>
                  <h3>{step.title}</h3>
                </header>
                <img src={step.image} alt={step.alt} />
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell">
        <figure className="story-banner">
          <img
            src="/images/idee-banner.jpg"
            alt="Een groot kleurrijk LEGO-kasteel op een tafel"
          />
          <figcaption>Samen bouwen we aan morgen</figcaption>
        </figure>
      </section>

      <section className="shell why-section">
        <article className="why-card">
          <div>
            <p className="eyebrow">Waarom dit belangrijk is</p>
            <h2>Dromen geven kracht.</h2>
            <p>
              In het ziekenhuis is het niet altijd makkelijk. Bouwen met LEGO geeft kinderen de kans
              om hun fantasie te gebruiken, plezier te maken en even te ontsnappen aan de dagelijkse
              werkelijkheid. Het geeft kracht, moed en verbondenheid met lotgenoten.
            </p>
            <Link to="/doe-mee" className="btn btn-yellow">
              Doe mee <ArrowRight />
            </Link>
          </div>
          <div className="why-photo">
            <img src="/images/idee-girl.jpg" alt="Vrolijke LEGO-figuur met een muts met sterren" />
            <HeartDoodle className="why-heart" />
          </div>
        </article>
      </section>
    </>
  );
}
