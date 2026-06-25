"use client";

import React, { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Mutyala Uma Mahesh",
    testimonial: "Avanflix digital marketing stands out with a young and innovative team dedicated to creating unique identities through conceptual designs. Their passion for branding and commitment to creativity drives them to deliver growth-oriented results.",
    initials: "MU"
  },
  {
    id: 2,
    name: "Swapne Kota",
    testimonial: "AvanFlix is a digital marketing company that helps businesses improve their online presence. Their goal is to boost visibility, engage audiences, and drive growth through strategic digital marketing. I am very Fascinated about the work done by the AvanFlix.",
    initials: "SK"
  },
  {
    id: 3,
    name: "Shyam Teja",
    testimonial: "A New Era of Marketing Content Creation evolves you to the Best ever approaches by Avanflix Digital Marketing for the Genuine Requiem of Productivity Services. Absolutely deserves an Ensured Recommendation.",
    initials: "ST"
  },
  {
    id: 4,
    name: "Nishant S",
    testimonial: "A game-changer for our startup! Their digital marketing expertise helped us gain traction and reach the right audience. Amazing team!",
    initials: "NS"
  },
  {
    id: 5,
    name: "Radhika mittal",
    testimonial: "Phenomenal results! From SEO to social media, every strategy was on point. Our website traffic and sales have doubled in just a few months!",
    initials: "RM"
  },
  {
    id: 6,
    name: "Jash",
    testimonial: "I feel like I have chosen the perfect place for digital marketing services",
    initials: "JS"
  }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const currentRef = sectionRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-12 bg-background relative overflow-hidden  flex-col justify-center" ref={sectionRef}>
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] -z-10" />

      <div className="mx-auto w-[90%] max-w-7xl mb-12">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            What Our <span className="text-red-600 italic">Partners</span> Say.
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Container (Marquee) */}
      <div className="relative w-full overflow-hidden pb-4">
        {/* Gradient Fades for Marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee pause-on-hover items-stretch gap-6 px-4">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[400px] glass-card p-8 rounded-[2rem] flex flex-col justify-between border-red-600/5 relative group min-h-[300px] transition-transform hover:-translate-y-2"
            >
              <div className="absolute top-4 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-12 h-12 rotate-12 text-red-600" />
              </div>

              <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                    ))}
                  </div>
                  
                  <p className="text-lg font-medium leading-relaxed italic text-foreground/80">
                    &quot;{item.testimonial}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="w-12 h-12 border-2 border-red-600/20">
                    <AvatarFallback className="bg-red-600/10 text-red-600 font-bold text-sm">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground leading-none text-base">{item.name}</h4>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}