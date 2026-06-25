"use client";

import React from "react";
import { motion } from "framer-motion";

const logos1 = [
  { id: 1, name: "Brand 1", logo: "/logos/1.png" },
  { id: 2, name: "Brand 2", logo: "/logos/2.png" },
  { id: 3, name: "Brand 3", logo: "/logos/3.png" },
  { id: 4, name: "Brand 4", logo: "/logos/4.png" },
  { id: 5, name: "Brand 5", logo: "/logos/5.png" },
  { id: 6, name: "Brand 6", logo: "/logos/6.png" },
  { id: 7, name: "Brand 7", logo: "/logos/7.png" },
  { id: 8, name: "Brand 8", logo: "/logos/8.png" },
  { id: 9, name: "Brand 9", logo: "/logos/9.png" },
  { id: 10, name: "Brand 10", logo: "/logos/10.png" },
  { id: 10, name: "Brand 10", logo: "/logos/11.png" },
  { id: 10, name: "Brand 10", logo: "/logos/12.png" },
];

const logos2 = [
  { id: 13, name: "Brand 13", logo: "/logos/13.png" },
  { id: 14, name: "Brand 14", logo: "/logos/14.PNG" },
  { id: 15, name: "Brand 15", logo: "/logos/15.png" },
  { id: 16, name: "Brand 16", logo: "/logos/16.png" },
  { id: 17, name: "Brand 17", logo: "/logos/17.png" },
  { id: 18, name: "Brand 18", logo: "/logos/18.png" },
  { id: 19, name: "Brand 19", logo: "/logos/19.png" },
  { id: 20, name: "Brand 20", logo: "/logos/20.png" },
  { id: 20, name: "Brand 20", logo: "/logos/21.png" },
  { id: 20, name: "Brand 20", logo: "/logos/22.png" },
  { id: 20, name: "Brand 20", logo: "/logos/23.png" },
  { id: 20, name: "Brand 20", logo: "/logos/24.png" },
];

interface LogoItem {
  id: number;
  name: string;
  logo: string;
}

function LogoCard({ brand }: { brand: LogoItem }) {
  return (
    <div className="group flex-shrink-0 px-6">
      <div className="w-40 h-16 flex items-center justify-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  logos: LogoItem[];
  reverse?: boolean;
  /** Animation duration in seconds — higher = slower */
  duration?: number;
}

/**
 * Two identical tracks laid end-to-end.
 * The animation translates exactly –50% (one full track width),
 * so when it resets the visual is identical — perfectly seamless.
 */
function MarqueeRow({ logos, reverse = false, duration = 40 }: MarqueeRowProps) {
  const animationStyle: React.CSSProperties = {
    display: "flex",
    width: "max-content",
    animation: `marquee-scroll ${duration}s linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
  };

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused !important; }
        }
      `}</style>
      {/* Outer clip window */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        {/* Inner scrolling track — TWO copies back-to-back */}
        <div className="marquee-track" style={animationStyle}>
          {logos.map((brand, i) => (
            <LogoCard key={`a-${brand.id}-${i}`} brand={brand} />
          ))}
          {/* Identical second copy — fills the gap when first copy exits */}
          {logos.map((brand, i) => (
            <LogoCard key={`b-${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </>
  );
}

export function Brands() {
  return (
    <section
      id="brands"
      className="py-12 bg-background relative flex flex-col justify-center"
      style={{ overflow: "hidden" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center mb-12 lg:mb-20 space-y-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Powering Global{" "}
            <span className="text-primary italic">Innovators.</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {/* Row 1 — scrolls left, 45 s per full cycle */}
          <MarqueeRow logos={logos1} duration={45} />

          {/* Row 2 — scrolls right, 50 s per full cycle (slightly different speed adds depth) */}
          <MarqueeRow logos={logos2} reverse duration={50} />
        </div>
      </div>
    </section>
  );
}