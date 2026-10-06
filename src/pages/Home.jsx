import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "../components/Icons";

export function Home() {
  return (
    <>
      <section className="home-hero">
        <img src="/images/home-hero.jpg" alt="" />
        <div className="shell home-hero__content">
          <Sparkles className="sparkles--hero" />
          <h1>
            Bouw samen
            <br />
            aan morgen
          </h1>
          <p>
            Voor kinderen in het ziekenhuis begint het met een droom. Samen geven we die droom een
            plek in een wereld van LEGO.
          </p>
          <Link to="/het-idee" className="btn btn-yellow">
            Ontdek de campagne <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="shell home-section">
        <article className="idea-card">
          <div>
            <p className="eyebrow">Het idee</p>
            <h2>
              Van droom
              <br />
              naar LEGO-set
            </h2>
            <p>
              Kinderen in het ziekenhuis maken een tekening van iets waar ze van dromen. Op basis
              daarvan kiezen we een bestaande LEGO-set die bij hun droom past. Daarna kunnen ze deze
              bouwen in de LEGO-ruimte en wordt hun droom onderdeel van een grote, gedeelde
              LEGO-wereld.
            </p>
            <Link to="/het-idee" className="btn btn-yellow">
              Meer over het idee <ArrowRight />
            </Link>
          </div>
          <img
            src="/images/home-transform.jpg"
            alt="Een kindtekening van een raket naast een gebouwde LEGO-raket"
          />
        </article>

        <div className="home-split">
          <article className="tint-card tint-card--blue">
            <div>
              <p className="eyebrow">LEGO-ruimte</p>
              <h2>
                Een plek om
                <br />
                samen te bouwen
              </h2>
              <p>
                In het ziekenhuis kunnen kinderen samen bouwen, spelen en hun dromen laten groeien.
                Een plek vol fantasie, plezier en contact met andere kinderen.
              </p>
              <Link to="/lego-ruimte" className="btn btn-yellow">
                Meer over de LEGO-ruimte <ArrowRight />
              </Link>
            </div>
            <img
              src="/images/home-kids.jpg"
              alt="Twee LEGO-figuren bouwen samen een kleurrijk kasteel"
            />
          </article>

          <article className="tint-card tint-card--pink">
            <div>
              <p className="eyebrow">Podcast</p>
              <h2>Mijn droom</h2>
              <p>
                In onze podcast vertellen ouders over hun kind, hun dromen en hun ervaringen.
                Persoonlijke verhalen die laten zien wat een droom kan betekenen.
              </p>
              <Link to="/mijn-droom" className="btn btn-pink">
                Luister op Spotify <ArrowRight />
              </Link>
            </div>
            <img
              src="/images/home-mic.jpg"
              alt="Gele microfoon met het LEGO-logo"
            />
          </article>
        </div>
      </section>
    </>
  );
}
