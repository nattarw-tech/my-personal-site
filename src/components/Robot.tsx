interface RobotProps {
  className?: string;
  wave?: boolean;
  float?: boolean;
}

/** Original robot mascot for the site. Pure SVG, no external assets. */
export default function Robot({ className = "", wave = false, float = false }: RobotProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      role="img"
      aria-label="Friendly robot mascot"
      className={`${float ? "bot-float " : ""}${className}`}
    >
      {/* antenna */}
      <line x1="100" y1="38" x2="100" y2="18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="14" r="7" fill="#0f8a5f">
        <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* head */}
      <rect x="55" y="38" width="90" height="64" rx="18" fill="currentColor" />
      <rect x="66" y="50" width="68" height="40" rx="12" fill="#fbfcfe" />
      {/* eyes */}
      <g className="bot-eye">
        <circle cx="86" cy="70" r="7" fill="#1a2333" />
        <circle cx="114" cy="70" r="7" fill="#1a2333" />
      </g>
      {/* smile */}
      <path d="M88 82 Q100 90 112 82" stroke="#1a2333" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* body */}
      <rect x="62" y="110" width="76" height="62" rx="16" fill="currentColor" />
      <rect x="76" y="124" width="48" height="24" rx="7" fill="#0f8a5f" opacity="0.92" />
      <circle cx="86" cy="160" r="4" fill="#fbfcfe" />
      <circle cx="100" cy="160" r="4" fill="#fbfcfe" opacity="0.7" />
      <circle cx="114" cy="160" r="4" fill="#fbfcfe" opacity="0.4" />

      {/* left arm */}
      <rect x="38" y="118" width="18" height="42" rx="9" fill="currentColor" />
      {/* right arm (waves when asked) */}
      <g className={wave ? "bot-arm" : ""}>
        <rect x="144" y="98" width="18" height="46" rx="9" fill="currentColor" transform={wave ? "rotate(-35 153 140)" : ""} />
      </g>

      {/* legs */}
      <rect x="76" y="172" width="16" height="26" rx="8" fill="currentColor" />
      <rect x="108" y="172" width="16" height="26" rx="8" fill="currentColor" />
      <ellipse cx="84" cy="202" rx="14" ry="6" fill="currentColor" opacity="0.9" />
      <ellipse cx="116" cy="202" rx="14" ry="6" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
