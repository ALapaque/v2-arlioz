"use client";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Interlocking rings inspired by the Arlioz logo */}
      <defs>
        <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C63FF" />
          <stop offset="100%" stopColor="#8B83FF" />
        </linearGradient>
        <linearGradient id="ring2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4AA" />
          <stop offset="100%" stopColor="#00F0C0" />
        </linearGradient>
        <linearGradient id="ring3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#FF8E8E" />
        </linearGradient>
        <linearGradient id="ring4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD93D" />
          <stop offset="100%" stopColor="#FFE566" />
        </linearGradient>
        <linearGradient id="ring5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#6EE7DE" />
        </linearGradient>
      </defs>

      {/* Ring 1 - Purple (top-left) */}
      <circle
        cx="75"
        cy="70"
        r="38"
        fill="none"
        stroke="url(#ring1)"
        strokeWidth="8"
        opacity="0.9"
      />

      {/* Ring 2 - Teal (top-right) */}
      <circle
        cx="125"
        cy="70"
        r="38"
        fill="none"
        stroke="url(#ring2)"
        strokeWidth="8"
        opacity="0.9"
      />

      {/* Ring 3 - Coral (bottom-left) */}
      <circle
        cx="65"
        cy="120"
        r="38"
        fill="none"
        stroke="url(#ring3)"
        strokeWidth="8"
        opacity="0.9"
      />

      {/* Ring 4 - Amber (bottom-right) */}
      <circle
        cx="135"
        cy="120"
        r="38"
        fill="none"
        stroke="url(#ring4)"
        strokeWidth="8"
        opacity="0.9"
      />

      {/* Ring 5 - Teal-green (center) */}
      <circle
        cx="100"
        cy="95"
        r="38"
        fill="none"
        stroke="url(#ring5)"
        strokeWidth="8"
        opacity="0.9"
      />
    </svg>
  );
}
