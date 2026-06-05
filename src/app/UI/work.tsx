"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const workCategories = [
  { id: "all", name: "All Work" },
  { id: "marketing", name: "Campaigns" },
  { id: "events", name: "Experiences" },
  { id: "content", name: "Content" },
  { id: "photography", name: "Photography" },
];

const workItems = [
  {
    id: 1,
    title: "Global Tech Summit",
    category: "events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "End-to-end event production and marketing.",
  },
  {
    id: 2,
    title: "Urban Fashion Lookbook",
    category: "photography",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    description: "High-end editorial fashion campaign.",
  },
  {
    id: 3,
    title: "FinTech App Launch",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Go-to-market strategy and execution.",
  },
  {
    id: 4,
    title: "Automotive Commercial",
    category: "content",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
    description: "Cinematic commercial for a luxury EV.",
  },
  {
    id: 5,
    title: "Music Festival '23",
    category: "events",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    description: "Event management for 10,000+ attendees.",
  },
  {
    id: 6,
    title: "Beverage Rebranding",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1525999146528-7fa09a7b9e71?w=800&q=80",
    description: "Complete visual identity and social strategy.",
  },
];

export function Work() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWork = activeCategory === "all" 
    ? workItems 
    : workItems.filter(item => item.category === activeCategory);

  return (
    <section id="work" className="py-12 lg:py-16 bg-background relative min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="mx-auto w-[90%] max-w-7xl">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              Work That <span className="text-primary italic">Speaks.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {workCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-muted text-foreground hover:bg-muted/80 hover:text-primary"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ willChange: "transform" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredWork.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" as const, bounce: 0.3 }}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] cursor-pointer bg-muted"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                      {workCategories.find(c => c.id === item.category)?.name}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
