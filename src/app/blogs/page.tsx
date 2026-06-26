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
    title: "The Future of Digital Marketing",
    description:
      "Explore the emerging trends shaping digital marketing, from AI-powered personalization to automation, predictive analytics, and immersive customer experiences.",
    content:
      "Digital marketing is evolving at an unprecedented pace. Artificial Intelligence, machine learning, and automation are enabling businesses to deliver personalized experiences at scale. Search behavior is shifting toward voice and visual search, while first-party data is becoming more valuable in a privacy-first world. Brands that embrace AI-powered content creation, predictive analytics, omnichannel marketing, and immersive technologies like AR and VR will gain a competitive edge. Success in 2025 will depend on agility, data-driven decision-making, and creating authentic customer experiences that build trust and long-term loyalty.",
    image:
      "/images/digitalmarketing.jpg",
    date: "April 12, 2024",
    author: "Strategy Team",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Creating Content That Resonates",
    description:
      "Discover how meaningful storytelling and audience-focused content can increase engagement, trust, and long-term customer relationships.",
    content:
      "Creating impactful content is more than publishing articles or social media posts. Successful brands understand their audience's needs, pain points, and aspirations before crafting stories that educate, inspire, and entertain. High-quality visuals, consistent brand messaging, SEO optimization, and authentic storytelling all contribute to better engagement. Whether you're producing blogs, videos, or social media campaigns, valuable content builds credibility, encourages sharing, and transforms visitors into loyal customers.",
    image:
      "/images/contentcreation.png",
    date: "March 28, 2024",
    author: "Creative Team",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Event Management: Beyond Logistics",
    description:
      "Learn how strategic event planning creates memorable brand experiences that strengthen customer relationships and business growth.",
    content:
      "Modern event management goes far beyond coordinating schedules and venues. Every successful event is built around creating meaningful experiences that connect people with a brand. From corporate conferences and product launches to experiential marketing campaigns, every detail matters—from registration and stage design to audience engagement and post-event communication. Technology, live streaming, interactive sessions, and data-driven insights are helping businesses create memorable events that generate lasting impressions and measurable ROI.",
    image:"/images/event.png",
    date: "March 15, 2024",
    author: "Events Hub",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Building a Personal Brand",
    description:
      "Build a powerful personal brand that establishes authority, attracts opportunities, and creates lasting professional influence.",
    content:
      "Your personal brand is one of your most valuable professional assets. Whether you're an entrepreneur, creator, freelancer, or executive, your online presence shapes how others perceive your expertise. Consistent messaging, authentic storytelling, thought leadership, and active engagement across platforms help establish credibility and trust. Sharing valuable insights, networking strategically, and maintaining a professional digital identity can open doors to partnerships, speaking engagements, and long-term career growth.",
    image:
      "/images/personalbranding.png",
    date: "February 22, 2024",
    author: "PR Expert",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Video Marketing Essentials",
    description:
      "Understand why video remains the most effective content format for engagement, brand awareness, and customer conversions.",
    content:
      "Video continues to dominate digital platforms because it communicates ideas quickly and creates emotional connections with audiences. From short-form reels and social media stories to educational YouTube content and brand documentaries, video marketing offers unmatched engagement. Businesses investing in professional production, compelling storytelling, optimized captions, and platform-specific strategies consistently outperform competitors. A strong video strategy also improves SEO, increases website retention, and drives higher conversion rates.",
    image:
      "/images/videomarketing.jpg",
    date: "January 18, 2024",
    author: "Production Team",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "The Power of Influencer Marketing",
    description:
      "Explore how strategic influencer partnerships help brands reach targeted audiences, build trust, and increase conversions.",
    content:
      "Influencer marketing has become a cornerstone of modern digital strategy. Rather than focusing solely on celebrity endorsements, brands are increasingly partnering with micro and niche influencers who have highly engaged communities. Successful campaigns prioritize authenticity, creative freedom, and long-term relationships over one-time promotions. When influencers genuinely align with a brand's values, their recommendations feel natural, leading to stronger audience trust, increased brand awareness, and measurable business results.",
    image:
      "/images/inflencer.png",
    date: "January 5, 2024",
    author: "Social Team",
    readTime: "6 min read",
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
                                        <Button className="rounded-full px-8 py-6 text-lg font-bold bg-red-600 hover:bg-red-700 text-white border-none" onClick={() => window.location.href = '/#connect'}>
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