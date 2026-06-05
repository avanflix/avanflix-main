"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight
} from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Why Us", href: "#why-us" },
  { name: "Events", href: "/events" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Connect", href: "#connect" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="h-5 w-5" /> },
  { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" /> },
  { name: "YouTube", href: "https://youtube.com", icon: <Youtube className="h-5 w-5" /> },
  { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="h-5 w-5" /> },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-6 relative overflow-hidden text-foreground">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-600/5 to-transparent -z-10" />
      
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16 py-4">
          
          {/* Brand & Mission */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 space-y-8">
            <Link href="/" className="group flex items-center gap-2 relative h-16 md:h-20 w-56 md:w-80">
              <Image
                src="/logo.png"
                alt="AFX Digital Logo"
                fill
                className="object-contain object-left transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-medium">
              We engineer high-performance digital experiences that scale brands and captivate audiences worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-red-600 transition-colors font-bold text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1 lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Solutions</h4>
            <ul className="space-y-4">
              {[
                "Digital Strategy",
                "Visual Storytelling",
                "Brand Architecture",
                "Event Management",
                "Content Production"
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-muted-foreground hover:text-red-600 transition-colors font-bold text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                <p className="text-muted-foreground font-bold text-sm leading-relaxed">
                  Villa No : 178, Chitrapuri Row House Rd,<br />
                  Chitrapuri Colony, Hyderabad, TS 500104
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-muted-foreground font-bold text-sm">+91 70367 77677</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-muted-foreground font-bold text-sm">info@avanflix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">
              &copy; {currentYear} AFX Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-red-600 text-[10px] font-black uppercase tracking-widest transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-red-600 text-[10px] font-black uppercase tracking-widest transition-colors">
                Terms
              </Link>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-600 transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}