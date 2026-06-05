"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    images: string[];
    speed?: number; // Duration in seconds
    className?: string;
    reverse?: boolean;
}

export function Marquee({ images, speed = 20, className, reverse = false }: MarqueeProps) {
    // Duplicate images to ensure seamless infinite scroll
    // We need enough copies to fill the screen width + buffer
    const duplicatedImages = [...images, ...images, ...images];

    return (
        <div className={cn("relative overflow-hidden w-full", className)}>
            <div
                className={cn(
                    "flex gap-4 w-max",
                    reverse ? "animate-marquee-reverse" : "animate-marquee"
                )}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {duplicatedImages.map((src, index) => (
                    <div
                        key={`${index}-${src}`}
                        className="flex-shrink-0 relative h-64 w-96 rounded-xl overflow-hidden"
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
