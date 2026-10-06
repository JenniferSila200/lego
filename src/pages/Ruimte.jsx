import { Bricks } from "../components/Bricks";
import { BrickIcon, Flower, Heart, People, Sparkles } from "../components/Icons";
import { NetherlandsMap } from "../components/NetherlandsMap";
import { activities } from "../data/site";

const activityIcons = { brick: BrickIcon, flower: Flower, people: People };

export function Ruimte() {
  return (
    <>
      <section className="room-hero">
        <img src="/images/ruimte-hero.jpg" alt="" />
        <div className="room-hero__scrim" />
        <div className="shell room-hero__content">
          <p className="eyebrow eyebrow--on-photo">De LEGO-ruimte</p>
          <Sparkles className="sparkles--room" />
          <h1>
            Een plek om
            <br />
            samen te bouwen
          </h1>
          <p>
            In de LEGO-ruimte in het ziekenhuis kunnen kinderen hun dromen bouwen. Een plek vol
            LEGO, waar fantasie, plezier en contact met lotgenoten centraal staat.
          </p>
        </div>
        <Bricks className="hero-bricks" />
      </section>

      <section className="shell room-intro-wrap">
        <article className="room-intro">
          <div>
            <h2>Wat is de LEGO-ruimte?</h2>
            <p>
              De LEGO-ruimte is een speciale speelruimte in het ziekenhuis waar kinderen samen
              kunnen bouwen, spelen en hun fantasie de vrije loop kunnen laten. Hier kunnen ze hun
              eigen dromen omzetten in LEGO-bouwwerken, nieuwe vrienden ontmoeten en even
              ontsnappen aan de dagelijkse werkelijkheid.
            </p>
          </div>
          <ul className="icon-pills">
            <li>
              <span className="bubble bubble--yellow">
                <BrickIcon />
              </span>
              Voor zieke kinderen
            </li>
            <li>
              <span className="bubble bubble--blue">
                <People />
              </span>
              Samen bouwen
            </li>
            <li>
              <span className="bubble bubble--pink">
                <Heart />
              </span>
              Plezier en ontspanning
            </li>
          </ul>
          <Sparkles className="sparkles--corner" />
        </article>
      </section>

      <section className="shell quote-grid">
        <img
          src="/images/ruimte-quote.jpg"
          alt="Vrolijke LEGO-figuur met een klein bouwwerk"
        />
        <blockquote className="quote-card">
          <Sparkles className="sparkles--quote" />
          <p>“Hier kan ik gewoon even kind zijn en bouwen wat ik zelf wil. Dat geeft me energie.”</p>
          <footer>Lisa, 11 jaar</footer>
        </blockquote>
      </section>

      <section className="shell room-bottom">
        <article className="activity-card">
          <h2>
            Wat kun je er doen? <Sparkles className="sparkles--inline" />
          </h2>
          <ul>
            {activities.map((item) => {
              const Icon = activityIcons[item.icon];
              return (
                <li key={item.title}>
                  <span className={`bubble bubble--${item.color}`}>
                    <Icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="map-card">
          <h2>
            Waar zijn de LEGO-ruimtes? <Sparkles className="sparkles--inline" />
          </h2>
          <p>De LEGO-ruimtes zijn te vinden in verschillende kinderziekenhuizen in Nederland.</p>
          <NetherlandsMap />
        </article>
      </section>
    </>
  );
}
