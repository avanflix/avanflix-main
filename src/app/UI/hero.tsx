"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("avanflix_visited");
    if (hasVisited) {
      setIsLoading(false);
    } else {
      setIsFirstVisit(true);
      sessionStorage.setItem("avanflix_visited", "true");
      // Cinematic loading sequence for first-time visitors
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Advanced Scroll-Linked Parallax for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered reveal variants
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: isFirstVisit ? 0.4 : 0.1 }
    }
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring' as const, bounce: 0.4, duration: 1.2 } }
  };

  const subtitleVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.2, duration: 1.5, delay: isFirstVisit ? 1.0 : 0.6 } }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && isFirstVisit && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 1.5, filter: "blur(20px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="relative w-48 h-20 flex items-center justify-center ">
                <Image 
                  src="/logo.png" 
                  alt="AFX Digital Loader" 
                  fill 
                  className="object-contain" 
                  priority 
                />
              </div>
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                className="h-[2px] bg-red-600 mt-8 w-48 relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-white/50 text-[10px] tracking-[0.4em] uppercase mt-4 font-mono"
              >
                Loading Experience
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section 
        ref={containerRef} 
        id="home" 
        className="relative h-screen w-full overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Video Background with Parallax */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full origin-top"
        >
          {!isLoading && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-[120%] -top-[10%] relative scale-105"
              poster="/placeholder-video-poster.jpg"
            >
              <source
                src="/hero.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
          {/* Dynamic Overlay with radial gradient for depth */}
          <div className="absolute inset-0 bg-black/50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-4 max-w-5xl mx-auto">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate={!isLoading ? "show" : "hidden"}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none flex gap-3 flex-wrap justify-center">
              {["AFX Digital:", "Where", "Vision", "Meets", "Reality"].map((word, i) => (
                <motion.span key={i} variants={wordVariant} className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50">
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p 
            variants={subtitleVariant}
            initial="hidden"
            animate={!isLoading ? "show" : "hidden"}
            className="text-base md:text-2xl max-w-3xl mb-12 text-zinc-300 font-light tracking-wide px-2"
          >
            Your Growth Partner in Digital Marketing, Visual Storytelling & Events
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.5, delay: isFirstVisit ? 1.4 : 0.8, duration: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-70 transition duration-500 group-hover:duration-200" />
            <Button
              onClick={scrollToServices}
              className="relative bg-zinc-950/80 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-black text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-full transition-all duration-500 hover:shadow-[0_0_40px_8px_rgba(220,38,38,0.3)] flex items-center gap-3"
            >
              Explore Our Services
            </Button>
          </motion.div>

        </div>
      </motion.section>
    </>
);
}
