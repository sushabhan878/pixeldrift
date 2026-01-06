"use client";

export default function DarkGridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glowing Gradient Effects */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-t from-purple-600/30 via-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 via-purple-500/15 to-transparent blur-3xl" />

      {/* Glowing Grid Lines with Neon Effect */}
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Apply all grid patterns */}
        <rect width="100%" height="100%" fill="url(#purpleNeonGrid)" />
        <rect width="100%" height="100%" fill="url(#blueNeonGrid)" />
        <rect width="100%" height="100%" fill="url(#cyanGrid)" />
      </svg>
    </div>
  );
}
