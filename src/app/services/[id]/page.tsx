"use client";

import React, { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/UI/navbar";
import { Footer } from "@/app/UI/footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ServicePage({ params }: ServicePageProps) {
    const { id } = use(params);
    const serviceId = parseInt(id);
    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground w-full">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="100vw"
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>
                
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
                            {service.title.split(' ').map((word, i) => (
                                <span key={i} className={i === service.title.split(' ').length - 1 ? "text-red-600 italic" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>
                    </motion.div>
                </div>
                
                {/* Decorative fade bottom */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Content Section */}
            <section className="py-12 mx-auto w-[90%] max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Column - Core Content */}
                    <div className="lg:col-span-7 space-y-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-red-600" />
                                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Overview</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Strategic Approach to {service.title}.</h2>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>

                        {service.features && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-2xl font-black tracking-tight">{service.featuresTitle}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 text-foreground font-semibold hover:border-red-600/30 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column - Highlights & CTA */}
                    <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-[3rem] border-border/50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Quote className="w-24 h-24 rotate-12" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <h3 className="text-2xl font-black tracking-tight">Key Deliverables</h3>
                                <div className="space-y-4">
                                    {service.events.map((event, idx) => (
                                        <div key={idx} className="flex items-center gap-4 py-4 border-b border-border/50 last:border-0 group">
                                            <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 transition-transform shrink-0" />
                                            <span className="text-lg font-bold tracking-tight">{event}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full py-8 rounded-2xl text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-600/20 group border-none" onClick={() => window.location.href = '/#connect'}>
                                    Get a Custom Proposal
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-12w bg-muted/20 relative">
                <div className="mx-auto w-[90%] max-w-7xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 block">Visual Proof</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Recent <span className="text-red-600">Deliverables.</span></h2>
                        </div>
                        <p className="text-muted-foreground text-lg max-w-xs font-medium">A curated selection of our high-impact work in this sector.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.photos.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl"
                            >
                                <Image
                                    src={photo}
                                    alt={`Gallery ${i}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-8 bg-background relative overflow-hidden border-t border-border/20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
                <div className="mx-auto w-[90%] max-w-4xl text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Ready to Elevate Your <span className="text-red-600 italic">Brand?</span></h2>
                    <Button 
                        size="lg" 
                        className="rounded-full px-12 py-8 text-xl font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-2xl shadow-red-600/20 border-none"
                        onClick={() => window.location.href = '/#connect'}
                    >
                        Book a Strategy Session
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}