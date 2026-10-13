import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsGallery from "@/components/ProjectsGallery";
import MaterialsShowcase from "@/components/MaterialsShowcase";
import InteriorSlider from "@/components/InteriorSlider";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-concrete-100 text-charcoal-900">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <ProjectsGallery />
      <MaterialsShowcase />
      <InteriorSlider />
      <ProcessTimeline />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}