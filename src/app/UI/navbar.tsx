"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  // { name: "Process", href: "/#process" },
  { name: "Work", href: "/#work" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Blogs", href: "/blogs" },
  { name: "Events", href: "/events" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link to the home page (e.g., /#services)
    if (href.startsWith("/#")) {
      // If we are already on the home page (either "/" or just empty string if that happens)
      if (pathname === "/") {
        e.preventDefault();
        const id = href.replace("/", ""); // Remove the leading slash to get "#id"
        // Check if the id is just "#" (home), then scroll to top
        if (id === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
      // If we are NOT on the home page, let the Link component handle navigation to "/" with the hash
    }
  };

  const scrollToConnect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.querySelector("#connect");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto w-[90%] flex items-center justify-between py-4 animate-fade-in-up">
        {/* Brand Logo */}
        <Link href="/#home" onClick={(e) => handleLinkClick(e, "/#home")} className="hover:scale-105 transition-transform duration-300 relative h-16 md:h-20 w-40 md:w-64">
          <Image
            src="/logo.png"
            alt="AFX Digital Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-foreground hover:text-red-600 font-medium transition-colors duration-300 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side - CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/#connect" onClick={scrollToConnect}>
            <Button
              className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white"
            >
              Let&apos;s Talk
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-border/50">
              <SheetHeader className="p-8 pb-4 text-left">
                <Link href="/#home" onClick={(e) => handleLinkClick(e, "/#home")} className="relative h-12 w-40 block">
                  <Image
                    src="/logo.png"
                    alt="AFX Digital Logo"
                    fill
                    className="object-contain object-left"
                  />
                </Link>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-6 pt-0">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="relative text-left text-foreground hover:text-red-600 transition-all duration-300 py-4 px-2 font-bold text-lg border-b border-border/10 last:border-0 group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <div className="mt-8 px-2">
                  <Link href="/#connect" onClick={scrollToConnect} className="w-full">
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white w-full py-7 text-lg font-bold rounded-2xl shadow-xl shadow-red-600/20"
                    >
                      Let&apos;s Talk
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
