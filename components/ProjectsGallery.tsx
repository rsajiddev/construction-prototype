"use client";
import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { MapPin, X, ArrowUpRight } from "lucide-react";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const categories = ["All", "Commercial", "Residential", "Interiors"];

  const filtered = activeFilter === "All" ? siteConfig.projects : siteConfig.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-concrete-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-amber mb-2 block">Proven Track Record</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-charcoal-900 tracking-tight">Featured Programmes & Schemes</h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} className={"text-xs font-heading font-bold uppercase tracking-wider px-5 py-2.5 " + (activeFilter === cat ? "bg-charcoal-900 text-white" : "bg-white text-charcoal-700 border border-concrete-300")}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)} className="bg-white group cursor-pointer border border-concrete-300 overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-72 overflow-hidden bg-charcoal-950">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-charcoal-900/90 text-amber text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1">{project.category}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-xs text-charcoal-600 mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal-900 group-hover:text-amber mb-2">{project.title}</h3>
                <p className="text-xs text-charcoal-700 line-clamp-2">{project.description}</p>
                <div className="mt-4 pt-3 border-t border-concrete-200 text-[11px] font-bold text-amber uppercase">{project.scope}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md">
          <div className="bg-white max-w-2xl w-full border-4 border-charcoal-900 shadow-2xl relative p-6">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-charcoal-900 text-white"><X className="w-5 h-5" /></button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4" />
            <h3 className="font-heading font-black text-2xl text-charcoal-900 mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-charcoal-700 mb-4">{selectedProject.description}</p>
            <p className="font-bold text-xs text-amber uppercase">{selectedProject.scope}</p>
          </div>
        </div>
      )}
    </section>
  );
}