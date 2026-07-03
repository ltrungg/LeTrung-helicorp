import './ProductVisual.css';

/** SVG product illustration with floating metric cards and ambient orbs. */
export function ProductVisual() {
  return (
    <div
      className="product-visual"
      aria-label="Minh họa nhẫn thông minh VitaRing AI"
      role="img"
    >
      <div className="product-visual__orb product-visual__orb--one" />
      <div className="product-visual__orb product-visual__orb--two" />

      <svg
        className="product-visual__ring"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="ringGradient"
            x1="83"
            y1="69"
            x2="437"
            y2="453"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D1FAE5" />
            <stop offset="0.46" stopColor="#34D399" />
            <stop offset="1" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient
            id="innerGlow"
            x1="260"
            y1="140"
            x2="260"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ECFDF5" />
            <stop offset="1" stopColor="#6EE7B7" />
          </linearGradient>
          <filter
            id="shadow"
            x="0"
            y="0"
            width="520"
            height="520"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feDropShadow
              dx="0"
              dy="28"
              stdDeviation="26"
              floodColor="#064E3B"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        <circle
          cx="260"
          cy="260"
          r="160"
          stroke="url(#ringGradient)"
          strokeWidth="64"
          filter="url(#shadow)"
        />
        <circle
          cx="260"
          cy="260"
          r="82"
          fill="url(#innerGlow)"
          opacity="0.98"
        />
        <path
          d="M210 260c22 30 55 30 99 0"
          stroke="#047857"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle cx="207" cy="223" r="12" fill="#047857" />
        <circle cx="313" cy="223" r="12" fill="#047857" />
        <path
          d="M363 145l26-33 7 41 38 16-39 12-11 40-22-35-42 2 27-32-13-39 29 28z"
          fill="#A7F3D0"
          opacity="0.78"
        />
      </svg>

      <div className="product-visual__metric product-visual__metric--sleep">
        <span>Sleep score</span>
        <strong>91%</strong>
      </div>
      <div className="product-visual__metric product-visual__metric--heart">
        <span>Heart rate</span>
        <strong>68 bpm</strong>
      </div>
    </div>
  );
}
