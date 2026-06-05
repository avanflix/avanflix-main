"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/avanflix.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/f&f.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/bb.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/eleve.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/chiguru.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/eleve1.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/dermadock.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/eleve2.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/f&f1.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/eleve3.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/jamjunxion.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/yajur.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/eleve4.mp4",
    "https://pub-960024d73c05488896944e01057e8018.r2.dev/f&f2.mp4",
];

const duplicatedVideos = [...videos, ...videos];

function VideoCard({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [isNearView, setIsNearView] = useState(false);

    useEffect(() => {
        // Preload observer: Triggers way before the video is visible to start downloading
        const loadObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsNearView(true);
                    loadObserver.disconnect();
                }
            },
            { rootMargin: "1500px" }
        );

        // Play observer: Triggers only when the video actually enters the screen
        const playObserver = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            loadObserver.observe(containerRef.current);
            playObserver.observe(containerRef.current);
        }

        return () => {
            loadObserver.disconnect();
            playObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        if (videoRef.current && isNearView) {
            if (isInView) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, isNearView]);

    if (hasError) {
        return (
            <div className="h-full w-full overflow-hidden rounded-[2rem] bg-secondary/10 border border-white/5 flex items-center justify-center">
                <p className="text-xs text-muted-foreground p-2 font-mono uppercase tracking-widest">Media Unavailable</p>
            </div>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="h-full w-full overflow-hidden rounded-[2rem] bg-black relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
            {isNearView ? (
                <video
                    ref={videoRef}
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 filter brightness-110' : 'scale-105 filter brightness-75 grayscale-[30%]'}`}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={(e) => {
                        console.error("Video error:", src, e);
                        setHasError(true);
                    }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            ) : (
                <div className="w-full h-full bg-zinc-900 animate-pulse" />
            )}
            
            {/* Hover UI */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 transition-opacity duration-500 flex flex-col justify-end p-8 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {/* <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">Play Reel</p> */}
            </div>
        </div>
    );
}

export function WorkShowcase() {
    return (
        <section id="showcase" className="py-12  bg-black text-white overflow-hidden relative  flex flex-col justify-center">
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
            
            <div className="mx-auto w-[90%] mb-12 relative z-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black tracking-tight"
                        >
                            Motion That <span className="text-primary italic">Captivates.</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg max-w-sm"
                    >
                        Experience the raw quality and creative direction we bring to our production pipeline.
                    </motion.p>
                </div>
            </div>

            <div className="relative w-full pb-8 pt-4">
                {/* Gradient Fades for Marquee */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee pause-on-hover gap-8">
                    {duplicatedVideos.map((videoSrc, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] md:w-[340px] aspect-[9/16] relative group"
                        >
                            <VideoCard src={videoSrc} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
