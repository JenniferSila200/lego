import { Link } from "react-router-dom";
import { Instagram, Spotify, YouTube } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <div className="footer-mark">
            <Logo />
            <strong>
              Bouw samen
              <br />
              aan morgen
            </strong>
          </div>
          <p>Ieder kind verdient iets om naar uit te kijken.</p>
        </div>
        <nav aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/het-idee">Het idee</Link>
          <Link to="/lego-ruimte">LEGO-ruimte</Link>
          <Link to="/mijn-droom">Mijn droom</Link>
        </nav>
        <nav aria-label="Informatie">
          <Link to="/contact">Contact</Link>
          <Link to="/veelgestelde-vragen">Veelgestelde vragen</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookie-instellingen</Link>
        </nav>
        <div className="footer-social">
          <p>Volg ons</p>
          <div className="social-row">
            <a href="https://www.instagram.com/lego/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://www.youtube.com/@LEGO" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YouTube />
            </a>
            <a href="https://open.spotify.com/" target="_blank" rel="noreferrer" aria-label="Spotify">
              <Spotify />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
