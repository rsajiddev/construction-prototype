"use client";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, ArrowUpRight, HardHat } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (isScrolled ? "bg-charcoal-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-charcoal-700/60" : "bg-transparent py-5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-amber flex items-center justify-center rounded-none shadow-md">
              <HardHat className="w-6 h-6 text-charcoal-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl tracking-wider text-white uppercase leading-none">
                {siteConfig.shortName.split(" ")[0]}<span className="text-amber">.{siteConfig.shortName.split(" ")[1] || "BUILT"}</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-concrete-300 mt-1">Developments & Contractors</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-7">
            {siteConfig.navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-xs uppercase font-heading font-semibold tracking-wider text-concrete-200 hover:text-amber transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-5">
            <a href={"tel:" + siteConfig.phoneRaw} className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-concrete-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber" />
              <span>{siteConfig.phone}</span>
            </a>
            <a href="#contact" className="inline-flex items-center space-x-2 bg-amber hover:bg-amber-hover text-charcoal-950 font-heading font-bold text-xs uppercase tracking-wider px-5 py-3 transition-all hover:-translate-y-0.5">
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-concrete-200">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-950 border-b border-charcoal-800 px-6 pt-6 pb-8 space-y-4">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase font-heading font-semibold tracking-widest text-concrete-200 hover:text-amber py-2 border-b border-charcoal-800/60">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}