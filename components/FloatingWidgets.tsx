"use client";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { MessageSquare, ArrowUp } from "lucide-react";

export default function FloatingWidgets() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-11 h-11 bg-charcoal-900 border border-charcoal-700 text-white flex items-center justify-center shadow-2xl">
          <ArrowUp className="w-5 h-5 text-amber" />
        </button>
      )}
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}