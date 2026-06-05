"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Discover & Define.",
    description: "We audit your brand, analyze your audience, and establish a bulletproof strategic foundation before a single pixel is pushed.",
    image: "/process/discovery.png", 
  },
  {
    id: 2,
    title: "Plan & Create.",
    description: "Our creative directors and strategists craft concepts that perfectly align raw creativity with your strict business objectives.",
    image: "/process/creative.png",
  },
  {
    id: 3,
    title: "Execute & Deliver.",
    description: "From massive digital campaigns to high-end video shoots and elite events, we bring ideas to life with flawless precision.",
    image: "/process/production.png",
  },
  {
    id: 4,
    title: "Optimize & Scale.",
    description: "Post-launch, we rigorously track performance metrics, refine our strategies in real-time, and aggressively scale what works.",
    image: "/process/delivery.png",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-16 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-5" />
      
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="text-center mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs"
          >
            Methodology
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tight"
          >
            How We <span className="text-primary italic">Build.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Central Timeline */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/50 -translate-x-1/2" />
          <motion.div 
            className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-24 md:space-y-40">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-32 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-14 h-14 bg-background border-4 border-muted rounded-full -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10 shadow-2xl shadow-primary/10">
                  <span className="text-primary font-black text-xl">{step.id}</span>
                </div>

                {/* Content Side */}
                <div className={`flex-1 w-full pl-20 md:pl-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">{step.title}</h3>
                  <p className="text-muted-foreground text-xl leading-relaxed max-w-lg ml-auto mr-0 md:mx-0 inline-block font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full pl-20 md:pl-0">
                  <div className="glass-card p-6 rounded-[3rem] transform hover:scale-105 transition-all duration-700 shadow-2xl border-primary/5">
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-primary/5">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}