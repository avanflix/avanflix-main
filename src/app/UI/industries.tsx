"use client";

import React from "react";
import {
    UtensilsCrossed,
    Stethoscope,
    CalendarHeart,
    UserCircle,
    Pill,
    Gem,
    ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
    {
        name: "Food & Beverages",
        icon: UtensilsCrossed,
        description: "Crafting digital experiences for culinary brands and beverage leaders.",
    },
    {
        name: "Healthcare",
        icon: Stethoscope,
        description: "High-trust medical institution branding and patient reach.",
    },
    {
        name: "Luxury & Jewellery",
        icon: Gem,
        description: "Exquisite marketing for the world's most refined luxury goods.",
    },
    {
        name: "Events & Media",
        icon: CalendarHeart,
        description: "End-to-end management and high-impact media promotion.",
    },
    {
        name: "Personal Brands",
        icon: UserCircle,
        description: "Scaling influence for visionary industry leaders.",
    },
    {
        name: "Pharmaceutical",
        icon: Pill,
        description: "Precision marketing for life sciences and health tech innovators.",
    }
];

export function Industries() {
    return (
        <section id="industries" className="relative py-16 bg-background flex items-center overflow-hidden border-b border-border/50">
            {/* Background Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/[0.03] rounded-full blur-[120px] pointer-events-none" />
            
            <div className="mx-auto w-[90%] max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Left side: Heading */}
                    <div className="lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-12 h-[2px] bg-red-600 mb-8" />
                            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                                Sectors <br />
                                We <span className="text-red-600 italic">Fuel.</span>
                            </h2>
                            <p className="text-muted-foreground text-xl font-medium leading-relaxed max-w-md">
                                We don't just work across industries. We engineer dominance through tailored marketing and visual storytelling.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right side: Dense Grid */}
                    <div className="lg:w-7/12 w-full">
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-6 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-muted/30 border border-transparent hover:border-red-600/20 hover:bg-muted/50 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-red-600/5"
                                >
                                    <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-white flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500 shadow-sm group-hover:shadow-lg">
                                        <industry.icon className="w-5 h-5 md:w-7 md:h-7 text-red-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xs md:text-xl font-black tracking-tight transition-colors leading-tight">{industry.name}</h3>
                                        <p className="text-muted-foreground font-bold text-[10px] md:text-xs leading-relaxed line-clamp-1 hidden sm:block">
                                            {industry.description}
                                        </p>
                                    </div>
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0 hidden md:block">
                                        <ArrowUpRight className="w-5 h-5 text-red-600" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}