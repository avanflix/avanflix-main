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
];

const logos2 = [
  { id: 9, name: "Brand 9", logo: "/logos/9.png" },
  { id: 10, name: "Brand 10", logo: "/logos/10.png" },
  { id: 11, name: "Brand 11", logo: "/logos/11.png" },
  { id: 12, name: "Brand 12", logo: "/logos/12.png" },
  { id: 13, name: "Brand 13", logo: "/logos/13.png" },
  { id: 14, name: "Brand 14", logo: "/logos/14.PNG" },
  { id: 15, name: "Brand 15", logo: "/logos/15.png" },
];

export function Brands() {
  return (
    <section id="brands" className="py-12  bg-background overflow-hidden relative  flex flex-col justify-center">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="text-center mb-12 lg:mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Powering Global <span className="text-primary italic">Innovators.</span>
          </motion.h2>
        </div>

        <div className="relative space-y-12">
          {/* Fading Edges Overlay */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* First Marquee */}
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[...logos1, ...logos1, ...logos1].map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="group relative flex-shrink-0 transition-all duration-700 cursor-pointer px-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 md:h-20 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Second Marquee */}
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-16 items-center">
            {[...logos2, ...logos2, ...logos2].map((brand, i) => (
              <div
                key={`${brand.id}-reverse-${i}`}
                className="group relative flex-shrink-0 transition-all duration-700 cursor-pointer px-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 md:h-20 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}