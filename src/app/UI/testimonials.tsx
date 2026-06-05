"use client";

import React, { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director @ TechCorp",
    testimonial: "AFX Digital transformed our digital marketing strategy. Their creative approach and attention to detail helped us reach new audiences and increase engagement across all platforms.",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "VP of Growth @ Global Events Inc.",
    testimonial: "The team at AFX Digital delivered an exceptional experience for our annual conference. From planning to execution, they handled every detail with professionalism and creativity.",
    initials: "MC"
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "CEO @ Fashion Forward",
    testimonial: "The photography and videography services provided by AFX Digital exceeded our expectations. They captured the essence of our brand and delivered stunning visuals.",
    initials: "PP"
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Founder @ University Innovation",
    testimonial: "AFX Digital helped us organize our flagship festival with limited budget. Their expertise in event management made it a record-breaking success.",
    initials: "DR"
  },
  {
    id: 5,
    name: "Alex Thompson",
    position: "Creative Lead @ Digital Solutions",
    testimonial: "Working with AFX Digital was a game-changer. Their innovative solutions and dedication to excellence helped us achieve results beyond our wildest expectations.",
    initials: "AT"
  },
  {
    id: 6,
    name: "Elena Rossi",
    position: "Brand Manager @ Luxury Goods",
    testimonial: "The most professional agency we have ever worked with. Their ability to translate complex brand values into simple, beautiful visuals is unmatched.",
    initials: "ER"
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
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">
                      {item.position}
                    </p>
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