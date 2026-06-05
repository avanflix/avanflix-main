"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="py-12 bg-background relative text-foreground">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 md:right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Elevating Brands Through <br className="hidden md:block"/>
            <span className="text-red-600 italic font-serif">Strategic</span> Innovation.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            We combine creative vision with technical precision to deliver high-impact digital experiences.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 pb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="sticky overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl bg-[#262626]"
              style={{
                top: `calc(80px + 2rem + ${index * 20}px)`,
                zIndex: index + 1,
              }}
            >
              <div className="flex flex-col-reverse lg:flex-row lg:h-full lg:min-h-[calc(100vh-80px-6rem)]">
                {/* Content Side */}
                <div className="w-full lg:w-auto lg:flex-1 p-6 md:p-8 lg:p-16 flex flex-col justify-center pt-0 lg:pt-16">
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-red-600/40 font-mono text-sm tracking-[0.3em] font-bold">
                      0{index + 1} // MODULE
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-medium max-w-xl">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 group">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-foreground/80 font-bold text-sm tracking-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-6 lg:pt-8">
                      <Link href={`/services/${service.id}`}>
                        <Button 
                          variant="outline" 
                          className="rounded-full px-8 lg:px-10 py-6 lg:py-7 text-base lg:text-lg font-bold border-2 border-border hover:border-red-600 hover:text-red-600 transition-all duration-300 group shadow-xl shadow-transparent hover:shadow-red-600/20 bg-background/50"
                        >
                          Explore Solutions
                          <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-auto lg:flex-[0.8] relative h-[300px] sm:h-[350px] lg:h-auto lg:min-h-full p-4 lg:p-6 pb-2 lg:pb-6">
                  <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden bg-white/5 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
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