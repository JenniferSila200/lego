function Svg({ children, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowRight() {
  return (
    <Svg size={18}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}

export function ArrowLeft() {
  return (
    <Svg size={18}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </Svg>
  );
}

export function Check() {
  return (
    <Svg size={18}>
      <path d="M5 12.5 9.2 17 19 7" />
    </Svg>
  );
}

export function Heart() {
  return (
    <Svg>
      <path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
    </Svg>
  );
}

export function BrickIcon() {
  return (
    <Svg>
      <rect x="3" y="9" width="18" height="10" rx="1.5" />
      <path d="M7 9V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2M13 9V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
    </Svg>
  );
}

export function People() {
  return (
    <Svg>
      <circle cx="9" cy="8" r="2.2" />
      <circle cx="16" cy="9" r="1.8" />
      <path d="M4.5 18c.6-2.6 2.5-4 4.5-4s3.9 1.4 4.5 4" />
      <path d="M14 14.2c1.2-.4 2.4-.2 3.4.6 1 1.2 1.4 2.4 1.6 3.2" />
    </Svg>
  );
}

export function Palette() {
  return (
    <Svg>
      <path d="M12 4a8 8 0 1 0 0 16h1.2a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4 8 8 0 0 0 0-8z" />
      <circle cx="8" cy="9" r="0.8" fill="currentColor" />
      <circle cx="10.5" cy="7" r="0.8" fill="currentColor" />
      <circle cx="14" cy="8.5" r="0.8" fill="currentColor" />
    </Svg>
  );
}

export function Cloud() {
  return (
    <Svg>
      <path d="M7 17h9a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.6-1.2A3.5 3.5 0 0 0 7 17z" />
    </Svg>
  );
}

export function Bulb() {
  return (
    <Svg>
      <path d="M9 18h6M10 21h4" />
      <path d="M8 14a5 5 0 1 1 8 0c-.8.8-1.4 1.5-1.6 2.5H9.6C9.4 15.5 8.8 14.8 8 14z" />
    </Svg>
  );
}

export function Smile() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 13.5c1 1.6 2.2 2.3 3.5 2.3s2.5-.7 3.5-2.3" />
      <path d="M9 10h.01M15 10h.01" />
    </Svg>
  );
}

export function Gamepad() {
  return (
    <Svg>
      <rect x="3" y="8" width="18" height="9" rx="4" />
      <path d="M8 11v4M6 13h4M16 12h.01M18 14h.01" />
    </Svg>
  );
}

export function Wand() {
  return (
    <Svg>
      <path d="M4 20 16 8" />
      <path d="M14 6l2-2 2 2-2 2-2-2zM18 4l1-2M19 8l2-1" />
    </Svg>
  );
}

export function Lock() {
  return (
    <Svg>
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" />
    </Svg>
  );
}

export function Shield() {
  return (
    <Svg>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3z" />
      <path d="M9 12.2 11 14l4-4" />
    </Svg>
  );
}

export function Mail() {
  return (
    <Svg>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function Pencil() {
  return (
    <Svg>
      <path d="M4 20h4l10-10-4-4L4 16v4z" />
      <path d="m13 7 4 4" />
    </Svg>
  );
}

export function Building() {
  return (
    <Svg>
      <path d="M4 20h16M6 20V6h8v14M14 10h4v10" />
      <path d="M8.5 9h.01M8.5 12h.01M8.5 15h.01M11.5 9h.01M11.5 12h.01M11.5 15h.01" />
    </Svg>
  );
}

export function User() {
  return (
    <Svg>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19c1-3 3-4.5 6.5-4.5S17.5 16 18.5 19" />
    </Svg>
  );
}

export function Mic() {
  return (
    <Svg>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
    </Svg>
  );
}

export function Clock() {
  return (
    <Svg size={16}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </Svg>
  );
}

export function Calendar() {
  return (
    <Svg size={16}>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </Svg>
  );
}

export function ImagePlus() {
  return (
    <Svg size={42}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 16 4.5-4 3 3 2-2 6.5 5" />
      <path d="M16 8h4M18 6v4" />
    </Svg>
  );
}

export function Play() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

export function Flower() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
    </Svg>
  );
}

export function Instagram() {
  return (
    <Svg>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" />
    </Svg>
  );
}

export function YouTube() {
  return (
    <Svg>
      <rect x="3" y="7" width="18" height="11" rx="3" />
      <path d="m11 10 4 2.5-4 2.5v-5z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function Spotify() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8" />
      <path d="M7.5 10.2c3-1 6.4-.7 9 1M8 13c2.4-.7 5-.4 7 .7M8.6 15.6c1.8-.4 3.6-.2 5 .5" />
    </Svg>
  );
}

export function Sparkles({ className = "" }) {
  return (
    <svg className={`sparkles ${className}`} viewBox="0 0 72 54" aria-hidden="true">
      <path d="M8 46 18 10" stroke="#F5C400" strokeWidth="5" strokeLinecap="round" />
      <path d="M26 50 33 8" stroke="#FFD000" strokeWidth="5" strokeLinecap="round" />
      <path d="M44 46 48 14" stroke="#F5C400" strokeWidth="5" strokeLinecap="round" />
      <path d="M60 40 56 16" stroke="#FFE14A" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function HeartDoodle({ className = "" }) {
  return (
    <svg className={className} width="42" height="38" viewBox="0 0 42 38" aria-hidden="true">
      <path
        d="M21 34s-12-7.4-12-15.2C9 13 13 9 17.2 9c2.4 0 3.8 1.2 3.8 1.2S22.4 9 24.8 9C29 9 33 13 33 18.8 33 26.6 21 34 21 34z"
        fill="none"
        stroke="#E3000B"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const iconMap = {
  heart: Heart,
  brick: BrickIcon,
  people: People,
  palette: Palette,
  cloud: Cloud,
  bulb: Bulb,
  smile: Smile,
  gamepad: Gamepad,
  wand: Wand,
  lock: Lock,
  shield: Shield,
  mail: Mail,
  pencil: Pencil,
  building: Building,
  user: User,
  mic: Mic,
  flower: Flower,
};

export function Glyph({ name }) {
  const Icon = iconMap[name] || Heart;
  return <Icon />;
}
