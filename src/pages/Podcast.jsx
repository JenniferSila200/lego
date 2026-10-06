import { useState } from "react";
import { Link } from "react-router-dom";
import { Bricks } from "../components/Bricks";
import { ArrowRight, Calendar, Clock, Heart, Mic, People, Play, Sparkles, Spotify } from "../components/Icons";
import { episodes } from "../data/site";

const spotify = "https://open.spotify.com/search/mijn%20droom";

export function Podcast() {
  const [active, setActive] = useState(null);
  const selected = episodes.find((episode) => episode.id === active);

  return (
    <>
      <section className="split-hero split-hero--pink">
        <div className="split-hero__photo">
          <img src="/images/pod-hero.jpg" alt="LEGO-figuur met koptelefoon achter een microfoon" />
        </div>
        <div className="split-hero__copy">
          <p className="eyebrow eyebrow--pink">Podcast</p>
          <Sparkles className="sparkles--title" />
          <h1>Mijn Droom</h1>
          <p>
            In de podcast ‘Mijn droom’ worden ouders van zieke kinderen geïnterviewd. Ze vertellen
            over hun kind, hun ervaringen, het dagelijks leven en de dromen van hun kind.
          </p>
          <a className="btn btn-pink" href={spotify} target="_blank" rel="noreferrer">
            <Spotify /> Luister op Spotify <ArrowRight />
          </a>
        </div>
        <Bricks className="hero-bricks" />
      </section>

      <section className="shell about-pod">
        <article className="about-pod__card">
          <div>
            <h2>Over de podcast</h2>
            <p>
              Mijn droom is een podcast vol open en eerlijke verhalen. Ouders van kinderen in het
              ziekenhuis delen hun ervaringen, het dagelijks leven met hun kind en de dromen van hun
              kind. Van kleine gelukjes tot grote toekomstdromen. Verhalen die laten zien wat een
              droom kan betekenen.
            </p>
          </div>
          <ul className="icon-pills">
            <li>
              <span className="bubble bubble--yellow">
                <Heart />
              </span>
              Voor zieke kinderen
            </li>
            <li>
              <span className="bubble bubble--blue">
                <People />
              </span>
              Echte verhalen
            </li>
            <li>
              <span className="bubble bubble--pink">
                <Mic />
              </span>
              Plezier en ontspanning
            </li>
          </ul>
          <Sparkles className="sparkles--corner" />
        </article>
      </section>

      <section className="shell episodes" id="afleveringen">
        <div className="episodes__head">
          <h2>Luister naar de afleveringen</h2>
          <a href="#afleveringen">
            Bekijk alle afleveringen <ArrowRight />
          </a>
        </div>
        <div className="episode-grid">
          {episodes.map((episode) => (
            <article key={episode.id} className={`episode${active === episode.id ? " is-active" : ""}`}>
              <div className="episode__visual">
                <img src={episode.image} alt={episode.alt} />
                <button
                  type="button"
                  className="play-btn"
                  aria-pressed={active === episode.id}
                  aria-label={`Luister naar aflevering ${episode.number}: ${episode.title}`}
                  onClick={() => setActive((current) => (current === episode.id ? null : episode.id))}
                >
                  <Play />
                </button>
              </div>
              <p className="episode__kicker">Aflevering {episode.number}</p>
              <h3>{episode.title}</h3>
              <p className="episode__quote">“{episode.quote}”</p>
              <p className="episode__meta">
                <span>
                  <Clock /> {episode.minutes} min
                </span>
                <span>
                  <Calendar /> {episode.date}
                </span>
              </p>
            </article>
          ))}
        </div>
        {selected && (
          <div className="now-playing" role="status">
            <div>
              <p className="eyebrow">Aflevering {selected.number}</p>
              <h3>{selected.title}</h3>
              <p>{selected.quote}</p>
            </div>
            <a className="btn btn-pink" href={spotify} target="_blank" rel="noreferrer">
              <Spotify /> Luister op Spotify <ArrowRight />
            </a>
          </div>
        )}
      </section>

      <section className="shell voice-section">
        <article className="voice-card">
          <div>
            <h2>
              Laat jouw stem horen. <Sparkles className="sparkles--inline" />
            </h2>
            <p>
              Ben jij ouder van een kind dat Bouw samen aan morgen raakt? In deze podcast vertellen
              ouders openhartig over hun kind, hun dromen en hun ervaringen. Samen geven we deze
              bijzondere verhalen een plek en laten we zien wat een droom allemaal kan betekenen.
            </p>
            <Link to="/doe-mee" className="btn btn-yellow">
              Doe mee <ArrowRight />
            </Link>
          </div>
          <img src="/images/pod-mic.jpg" alt="Microfoon met het LEGO-logo in een podcaststudio" />
        </article>
      </section>
    </>
  );
}
