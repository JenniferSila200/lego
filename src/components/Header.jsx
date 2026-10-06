import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight } from "./Icons";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/het-idee", label: "Het idee" },
  { to: "/lego-ruimte", label: "LEGO-ruimte" },
  { to: "/mijn-droom", label: "Mijn droom" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className={`nav-pill ${open ? "is-open" : ""}`}>
        <Link to="/" className="logo-link" aria-label="Home, Bouw samen aan morgen">
          <Logo />
        </Link>
        <nav id="hoofdmenu" className="nav-links" aria-label="Hoofdmenu">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Sluit menu" : "Open menu"}</span>
          <span />
          <span />
          <span />
        </button>
      </div>
      <Link to="/doe-mee" className="btn btn-yellow header-cta">
        Doe mee <ArrowRight />
      </Link>
    </header>
  );
}
