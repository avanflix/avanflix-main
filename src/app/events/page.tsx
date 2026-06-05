"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/app/UI/navbar";
import { Footer } from "@/app/UI/footer";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { events } from "@/lib/data";

export default function EventsPage() {
    return (
        <main className="min-h-screen w-full">
            <Navbar />
            
            {/* Page Header */}
            <section className="pt-20 pb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10" />
                <div className="mx-auto w-[90%] max-w-7xl relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        Events That <span className="text-red-600 italic">Inspire</span>.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-2xl mx-auto"
                    >
                        From large-scale festivals to elite corporate gatherings, we engineer moments that resonate forever.
                    </motion.p>
                </div>
            </section>

            {/* Event Listing */}
            <section className="py-12 mx-auto w-[90%] max-w-7xl">
                <div className="space-y-32">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
                        >
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-red-600/5 rounded-[2.5rem] blur-2xl group-hover:bg-red-600/10 transition-colors" />
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">{event.title}</h2>
                                    <p className="text-muted-foreground text-xl leading-relaxed">{event.shortDescription}</p>
                                    
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 text-muted-foreground font-semibold text-sm shadow-sm">
                                            <MapPin className="w-4 h-4 text-red-600" /> {event.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button size="lg" className="rounded-full px-8 py-7 text-lg font-bold shadow-xl shadow-red-600/10 bg-background border-2 text-white border-border hover:border-red-600 hover:bg-background group transition-all">
                                                Event Case Study
                                                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-[3rem] p-0 border-none glass-card">
                                            <div className="relative h-[40vh] w-full">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    sizes="100vw"
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                                <div className="absolute bottom-12 left-12">
                                                    <h2 className="text-4xl font-black text-white tracking-tight">{event.title}</h2>
                                                </div>
                                            </div>
                                            <div className="p-12 space-y-12">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-border/50">
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Venue</p>
                                                        <p className="text-lg font-bold">{event.location}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Service</p>
                                                        <p className="text-lg font-bold">End-to-End Production</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-black tracking-tight">The Challenge & Execution</h3>
                                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                                        {event.fullDescription}
                                                    </p>
                                                </div>

                                                <div className="space-y-8">
                                                    <h3 className="text-2xl font-black tracking-tight">Gallery Highlights</h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                        {event.gallery.map((img, idx) => (
                                                            <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                                                                <Image
                                                                    src={img}
                                                                    alt={`${event.title} highlight ${idx + 1}`}
                                                                    fill
                                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-12  relative overflow-hidden border-t border-border/20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
                <div className="mx-auto w-[90%] max-w-4xl text-center relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Plan Your Next <span className="text-red-600 italic">Bigger</span> Experience.</h2>
                    <Button 
                        size="lg" 
                        className="rounded-full px-12 py-8 text-xl font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-2xl shadow-red-600/20 border-none"
                        onClick={() => window.location.href = '/#connect'}
                    >
                        Book an Event Consultation
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}