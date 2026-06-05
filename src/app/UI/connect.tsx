"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Connect() {
  const [formData, setFormData] = useState({
    brandName: "",
    phoneNumber: "",
    email: "",
    location: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Strategy session booked! We'll reach out shortly.");
      setFormData({ brandName: "", phoneNumber: "", email: "", location: "" });
    }, 1500);
  };

  return (
    <section id="connect" className="py-12 bg-background relative overflow-x-hidden text-foreground flex flex-col justify-center w-full">
      {/* Background Decor - Changed to prevent right-side overflow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/2 pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                Ready to <br />
                <span className="text-red-600 italic">Scale</span> Your <br />
                Brand?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md font-medium">
                Stop settling for average. Partner with an agency that prioritizes your growth as much as you do.
              </p>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full"
          >
            <div className="absolute inset-0 bg-red-600/5 blur-3xl -z-10 rounded-[3rem]" />
            <div className="glass-card p-6 md:p-12 rounded-[2.5rem] border-red-600/20 relative overflow-hidden shadow-2xl bg-card">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
                <Send className="w-32 h-32 md:w-48 md:h-48 -rotate-12 text-red-600" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="brandName" className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 text-red-600">Brand Name</Label>
                    <Input 
                      id="brandName"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      placeholder="Your Global Brand"
                      className="h-14 rounded-2xl bg-background border-border/50 focus:border-red-600/50 transition-all px-6 text-base font-bold w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 text-red-600">Work Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hello@brand.com"
                      className="h-14 rounded-2xl bg-background border-border/50 focus:border-red-600/50 transition-all px-6 text-base font-bold w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 text-red-600">Phone Number</Label>
                    <Input 
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="h-14 rounded-2xl bg-background border-border/50 focus:border-red-600/50 transition-all px-6 text-base font-bold w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-[10px] font-black uppercase tracking-[0.2em] ml-1 text-red-600">Location</Label>
                    <Input 
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="h-14 rounded-2xl bg-background border-border/50 focus:border-red-600/50 transition-all px-6 text-base font-bold w-full"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-8 rounded-[1.5rem] text-lg font-black shadow-2xl shadow-red-600/20 group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white border-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? "Initiating Session..." : "Secure Your Strategy Session"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
                
                <p className="text-center text-[10px] text-muted-foreground font-black uppercase tracking-widest px-4">
                  By clicking, you agree to our high-performance standards.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Contact Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { icon: Phone, label: "Direct Line", value: "+91 70367 77677" },
            { icon: Mail, label: "Email Strategy", value: "info@avanflix.com" },
            { icon: MapPin, label: "HQ Location", value: "Hyderabad, TS 500104" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-6 group cursor-pointer w-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-red-600/20 shrink-0">
                <item.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-1">{item.label}</p>
                <p className="text-lg md:text-xl font-black tracking-tight truncate">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
