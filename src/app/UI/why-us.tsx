"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Clock
} from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Unrivaled Domain Mastery",
    description:
      "Our elite team brings battle-tested experience across digital strategy, cinematic production, and large-scale event logistics—ensuring every project is handled with absolute authority and intent.",
    icon: <Award className="h-8 w-8 text-red-600" />,
  },
  {
    id: 2,
    title: "Strategic First-Principles",
    description:
      "We align every creative decision with your core business objectives. We don't just make things look good; we build frameworks designed to capture attention and convert at scale.",
    icon: <Users className="h-8 w-8 text-red-600" />,
  },
  {
    id: 3,
    title: "Precision-Driven Delivery",
    description:
      "In an industry of delays, we pride ourselves on surgical execution. From global campaign launches to high-stakes event production, we hit our targets with unwavering consistency.",
    icon: <Clock className="h-8 w-8 text-red-600" />,
  },
];

export function WhyUs() {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="why-us" className="py-12  relative" ref={sectionRef}>
      <div className="mx-auto w-[90%]">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Heading and description - stays fixed */}
          <div className={`w-full lg:w-1/2 lg:sticky lg:top-20 lg:self-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              The AFX Digital <span className="text-red-600 italic">Edge.</span>
            </h2>
            <p className={`text-muted-foreground text-lg md:text-xl font-medium mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              At AFX Digital, we don't just execute projects; we architect growth. Our multi-disciplinary approach fuses strategic intelligence with raw creative power to build brands that don't just exist—they dominate.
            </p>
            <p className={`text-muted-foreground text-lg md:text-xl font-medium transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: '0.3s' }}>
              We operate as your high-performance growth partner, translating complex visions into seamless digital presences, cinematic narratives, and high-impact live experiences. Every move we make is calculated for maximum engagement and measurable results.
            </p>
          </div>

          {/* Right side - Cards in column with scroll-based animation */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {reasons.map((reason, index) => {
                return (
                  <div
                    key={reason.id}
                    className={`sticky top-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    style={{
                      height: '400px',
                      zIndex: index,
                      transitionDelay: `${index * 0.2}s`
                    }}
                  >
                    <Card
                      className="max-w-lg mx-auto lg:mx-0 shadow-lg transition-all duration-700 ease-out opacity-100 border-none"
                    >
                      <CardContent className="p-10">
                        <div className="flex items-start gap-4">
                          <div className={`mt-1 flex-shrink-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`} style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}>
                            {reason.icon}
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                              }`} style={{ transitionDelay: `${index * 0.2 + 0.5}s` }}>
                              {reason.title}
                            </h3>
                            <p className={`text-muted-foreground text-base transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                              }`} style={{ transitionDelay: `${index * 0.2 + 0.7}s` }}>
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
