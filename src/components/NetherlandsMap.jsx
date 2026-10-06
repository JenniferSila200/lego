import { useState } from "react";
import { hospitals } from "../data/site";

const NL =
  "M162 34c22-8 48-2 66 16 16 16 22 28 28 48 6 18-2 32-12 44 12 12 26 20 22 40-4 18-20 28-28 42 6 18 12 34 2 50-10 16-24 28-36 42-8 16-14 34-28 42-16 8-30 0-42-14-14-16-22-8-36-22-12-12-22 2-34-12-10-12-18-28-12-44 4-10-8-22-4-36 6-16-2-34 8-48-8-12-6-28 4-40-6-16 2-34 14-46 14-14 22-34 42-44 16-8 32-12 46-8z";

export function NetherlandsMap() {
  const [active, setActive] = useState(null);

  return (
    <div
      className="nl-map"
      onMouseLeave={() => setActive(null)}
    >
      <svg className="nl-svg" viewBox="0 0 340 460" role="img" aria-label="Kaart van Nederland">
        <path d={NL} fill="#4E9E57" transform="translate(14 18)" />
        <path d={NL} fill="#7ED07A" />
        <ellipse cx="126" cy="46" rx="18" ry="7" fill="#7ED07A" />
        <ellipse cx="158" cy="34" rx="14" ry="6" fill="#7ED07A" />
        <ellipse cx="188" cy="28" rx="12" ry="5" fill="#7ED07A" />
        <ellipse cx="214" cy="32" rx="10" ry="4.5" fill="#7ED07A" />
        <path
          d="M48 250c28-36 54-18 78-48"
          fill="none"
          stroke="#79C7E6"
          strokeWidth="4"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <path
          d="M46 292c8 8 8 16 0 22-10 8-22 2-20-10 1-8 10-16 20-12z"
          fill="#E23B4A"
        />
        <g transform="translate(236 78) rotate(-8)">
          <rect x="0" y="8" width="46" height="26" rx="3" fill="#1F6FE5" />
          <circle cx="12" cy="8" r="6" fill="#1F6FE5" />
          <circle cx="32" cy="8" r="6" fill="#1F6FE5" />
        </g>
      </svg>
      {hospitals.map((hospital) => (
        <button
          key={hospital.id}
          type="button"
          className={`map-pin${active === hospital.id ? " is-active" : ""}`}
          style={{ left: hospital.left, top: hospital.top }}
          aria-label={`${hospital.name}, ${hospital.city}`}
          onMouseEnter={() => setActive(hospital.id)}
          onFocus={() => setActive(hospital.id)}
          onClick={() => setActive((current) => (current === hospital.id ? null : hospital.id))}
        >
          <span className="map-pin__head" />
          <span className="map-pin__tip" role="tooltip">
            {hospital.name}
            <small>{hospital.city}</small>
          </span>
        </button>
      ))}
    </div>
  );
}
