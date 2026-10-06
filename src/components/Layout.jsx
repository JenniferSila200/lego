import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Bouw samen aan morgen",
      "/het-idee": "Het idee · Bouw samen aan morgen",
      "/lego-ruimte": "LEGO-ruimte · Bouw samen aan morgen",
      "/mijn-droom": "Mijn droom · Bouw samen aan morgen",
      "/doe-mee": "Doe mee · Bouw samen aan morgen",
      "/doe-mee/droom": "Jouw droom · Bouw samen aan morgen",
      "/doe-mee/gegevens": "Jouw gegevens · Bouw samen aan morgen",
      "/doe-mee/verzonden": "Verzonden · Bouw samen aan morgen",
      "/contact": "Contact · Bouw samen aan morgen",
      "/veelgestelde-vragen": "Veelgestelde vragen · Bouw samen aan morgen",
      "/privacy": "Privacy · Bouw samen aan morgen",
      "/cookies": "Cookie-instellingen · Bouw samen aan morgen",
    };
    document.title = titles[pathname] || "Bouw samen aan morgen";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">
      <a className="skip-link" href="#inhoud">
        Ga naar de inhoud
      </a>
      <Header />
      <main id="inhoud">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
