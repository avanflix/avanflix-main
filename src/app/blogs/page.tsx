"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/app/UI/navbar";
import { Footer } from "@/app/UI/footer";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const blogs = [
    {
        id: 1,
        title: "The Future of Digital Marketing in 2025",
        description: "Explore the emerging trends that will shape the digital marketing landscape, from AI-driven personalization to immersive experiences.",
        content: "As we approach 2025, digital marketing is undergoing a seismic shift. Artificial Intelligence is no longer a buzzword but a fundamental component of strategy, enabling hyper-personalization at scale. Voice search optimization, immersive augmented reality experiences, and sustainability-focused branding are becoming key differentiators. Brands that adapt to these changes will thrive, while those that stick to traditional methods may find themselves left behind.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        date: "April 12, 2024",
        author: "Strategy Team",
        readTime: "6 min read"
    },
    {
        id: 2,
        title: "Creating Content That Resonates",
        description: "Learn the secrets behind crafting content that connects deeply with your audience and drives meaningful engagement.",
        content: "In an era of information overload, content that resonates is content that adds value. It's not just about selling a product; it's about telling a story that interacts with the audience's emotions and needs. Authenticity, consistency, and a clear brand voice are the pillars of successful content strategy. Understanding your audience's pain points and aspirations allows you to create content that serves them, fostering loyalty and trust.",
        image: "https://images.unsplash.com/photo-1598899134739-9609cdefdb20",
        date: "March 28, 2024",
        author: "Creative Team",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Event Management: Beyond Logistics",
        description: "Discover how to transform events into unforgettable experiences that leave a lasting impact on attendees.",
        content: "Successful event management goes far beyond logistics and checklists. It's about engineering experiences. From the moment an attendee receives an invitation to the post-event follow-up, every touchpoint matters. Creating immersive environments, facilitating networking opportunities, and delivering seamless execution are what turn a standard corporate gathering into a memorable event that strengthens brand equity.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        date: "March 15, 2024",
        author: "Events Hub",
        readTime: "8 min read"
    },
    {
        id: 4,
        title: "Building a Personal Brand",
        description: "Strategies for entrepreneurs and creators to build a strong, authentic personal brand that stands out.",
        content: "Your personal brand is your reputation in the digital age. It's what people say about you when you're not in the room. Building a strong personal brand requires a mix of strategic visibility, thought leadership, and networking. Consistency across platforms, sharing your unique journey, and engaging with your community are essential steps to establishing authority and trust in your niche.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        date: "Feb 22, 2024",
        author: "PR Expert",
        readTime: "5 min read"
    },
    {
        id: 5,
        title: "Video Marketing Essentials",
        description: "Why video is king in modern marketing and how you can leverage it to grow your business.",
        content: "Video content has the highest engagement rates across all social platforms. It conveys information quickly, builds emotional connections, and boosts SEO. Whether it's short-form videos for TikTok and Reels or long-form educational content for YouTube, incorporating video into your marketing mix is non-negotiable for brands looking to capture attention in a crowded marketplace.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
        date: "Jan 18, 2024",
        author: "Production Team",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "The Power of Influencer Marketing",
        description: "How to effectively collaborate with influencers to reach new audiences and build credibility.",
        content: "Influencer marketing has evolved from simple product placements to deep, strategic partnerships. Micro-influencers with highly engaged, niche audiences often offer better ROI than mega-celebrities. The key is to find influencers whose values align with your brand. Authentic collaborations where the influencer has creative freedom tend to perform best, feeling less like ads and more like genuine recommendations.",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
        date: "Jan 05, 2024",
        author: "Social Team",
        readTime: "6 min read"
    },
];

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            
            {/* Page Header */}
            <section className="pt-40 pb-20 bg-muted/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10" />
                <div className="mx-auto w-[90%] max-w-7xl relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        Insights for the <span className="text-red-600 italic">Modern</span> Brand.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-xl max-w-2xl mx-auto"
                    >
                        Deep dives into digital strategy, creative execution, and the future of brand storytelling.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <div className="py-24 mx-auto w-[90%] max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, i) => (
                        <Dialog key={blog.id}>
                            <DialogTrigger asChild>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card group cursor-pointer rounded-[2rem] overflow-hidden flex flex-col h-full"
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-red-600 shadow-sm">
                                                Article
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col justify-between">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                                <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</div>
                                                <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</div>
                                            </div>
                                            <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-red-600 transition-colors">
                                                {blog.title}
                                            </h3>
                                            <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                                                {blog.description}
                                            </p>
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-red-600/10 flex items-center justify-center">
                                                    <User className="w-3 h-3 text-red-600" />
                                                </div>
                                                <span className="text-xs font-bold text-foreground/80">{blog.author}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] p-0 border-none glass-card">
                                <div className="relative h-96 w-full">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="100vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12">
                                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-none">
                                            {blog.title}
                                        </h2>
                                        <div className="flex items-center gap-6 text-white/80 text-sm font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.date}</div>
                                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {blog.readTime}</div>
                                            <div className="flex items-center gap-2"><User className="w-4 h-4" /> {blog.author}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-12 space-y-8">
                                    <p className="text-2xl font-medium leading-relaxed italic text-red-600">
                                        {blog.description}
                                    </p>
                                    <div className="text-xl text-foreground/80 leading-relaxed space-y-6">
                                        {blog.content}
                                        <p>
                                            In the rapidly evolving landscape of today's market, staying ahead requires more than just following trends—it demands a fundamental understanding of consumer psychology and technological capabilities. We focus on building bridges between technical excellence and creative intuition.
                                        </p>
                                        <p>
                                            Our methodology is rooted in data but driven by human insights. By analyzing performance metrics alongside qualitative feedback, we refine our approach to ensure every campaign resonates at a deeper level. This continuous feedback loop is the engine of sustainable brand growth.
                                        </p>
                                    </div>
                                    <div className="pt-12 border-t border-border/50">
                                        <Button className="rounded-full px-8 py-6 text-lg font-bold bg-red-600 hover:bg-red-700 text-white border-none" onClick={() => window.location.href = '#connect'}>
                                            Discuss This Strategy
                                        </Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}