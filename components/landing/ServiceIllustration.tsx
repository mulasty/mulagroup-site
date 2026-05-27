"use client";

import React from "react";

function DevOpsIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Large gear */}
      <g style={{ transformOrigin: "44px 60px", animation: "spin-cw 10s linear infinite" }}>
        <circle cx="44" cy="60" r="18" stroke="currentColor" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x1 = 44 + Math.cos(rad) * 14;
          const y1 = 60 + Math.sin(rad) * 14;
          const x2 = 44 + Math.cos(rad) * 24;
          const y2 = 60 + Math.sin(rad) * 24;
          return (
            <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          );
        })}
        <circle cx="44" cy="60" r="4" fill="currentColor" opacity="0.6" />
      </g>
      {/* Small gear */}
      <g style={{ transformOrigin: "78px 60px", animation: "spin-ccw 7s linear infinite" }}>
        <circle cx="78" cy="60" r="12" stroke="currentColor" strokeWidth="2" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x1 = 78 + Math.cos(rad) * 9;
          const y1 = 60 + Math.sin(rad) * 9;
          const x2 = 78 + Math.cos(rad) * 16;
          const y2 = 60 + Math.sin(rad) * 16;
          return (
            <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          );
        })}
        <circle cx="78" cy="60" r="3" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  );
}

function ShieldIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Shield outline */}
      <path
        d="M60 20 L90 32 L90 60 Q90 85 60 100 Q30 85 30 60 L30 32 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner check */}
      <path
        d="M45 58 L55 68 L75 48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Radar sweep arc */}
      <path
        d="M40 60 A20 20 0 0 1 80 60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Sweep line */}
      <line
        x1="60"
        y1="60"
        x2="60"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ transformOrigin: "60px 60px", animation: "sweep 3s ease-in-out infinite" }}
      />
    </svg>
  );
}

function AuditIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Grid behind */}
      <rect x="28" y="28" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <rect x="56" y="28" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <rect x="28" y="56" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <rect x="56" y="56" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />

      {/* Magnifying glass */}
      <circle cx="72" cy="72" r="18" stroke="currentColor" strokeWidth="2.5" />
      <line x1="85" y1="85" x2="96" y2="96" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Scanning highlight */}
      <rect
        x="26"
        y="42"
        width="58"
        height="6"
        rx="3"
        fill="currentColor"
        opacity="0.35"
        style={{ animation: "scan-h 2.5s ease-in-out infinite" }}
      />
    </svg>
  );
}

function AIIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Connection lines */}
      <line x1="60" y1="30" x2="35" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="60" y1="30" x2="85" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="35" y1="80" x2="85" y2="80" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />

      {/* Top node */}
      <circle cx="60" cy="30" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="60" cy="30" r="2.5" fill="currentColor" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />

      {/* Bottom left node */}
      <circle cx="35" cy="80" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="35" cy="80" r="2.5" fill="currentColor" style={{ animation: "pulse-dot 2s ease-in-out 0.6s infinite" }} />

      {/* Bottom right node */}
      <circle cx="85" cy="80" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="85" cy="80" r="2.5" fill="currentColor" style={{ animation: "pulse-dot 2s ease-in-out 1.2s infinite" }} />

      {/* Traveling particle along top-left path */}
      <circle r="2" fill="currentColor" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M60 30 L35 80" />
      </circle>
      {/* Traveling particle along top-right path */}
      <circle r="2" fill="currentColor" opacity="0.9">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M60 30 L85 80" />
      </circle>
    </svg>
  );
}

function MonitoringIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Baseline */}
      <line x1="20" y1="90" x2="100" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {/* The chart line */}
      <path
        d="M20 75 L35 75 L45 55 L60 80 L75 40 L90 65 L100 65"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="120"
        style={{ animation: "draw-path 4s ease-in-out infinite" }}
      />
      {/* Data points */}
      <circle cx="45" cy="55" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="60" cy="80" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="75" cy="40" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function OpsIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Top server */}
      <rect x="25" y="25" width="70" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="39" r="3" fill="currentColor" style={{ animation: "blink-led 1.8s steps(1) infinite" }} />
      <circle cx="50" cy="39" r="3" fill="currentColor" opacity="0.2" />
      <line x1="62" y1="39" x2="85" y2="39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Bottom server */}
      <rect x="25" y="63" width="70" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="77" r="3" fill="currentColor" opacity="0.2" />
      <circle cx="50" cy="77" r="3" fill="currentColor" style={{ animation: "blink-led 1.8s steps(1) 0.6s infinite" }} />
      <line x1="62" y1="77" x2="85" y2="77" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* Connection between servers */}
      <line x1="60" y1="53" x2="60" y2="63" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
    </svg>
  );
}

const illustrations: Record<string, () => React.ReactNode> = {
  lightning: DevOpsIllustration,
  shield: ShieldIllustration,
  search: AuditIllustration,
  cpu: AIIllustration,
  activity: MonitoringIllustration,
  servers: OpsIllustration,
};

export default function ServiceIllustration({ name }: { name: string }) {
  const Component = illustrations[name] || DevOpsIllustration;
  return <Component />;
}
