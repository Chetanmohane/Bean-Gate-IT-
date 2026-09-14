import React, { useState, useEffect } from "react";
import Lenis from "lenis";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DegreeVsSkill from "../components/DegreeVsSkill";
import ITCompanySection from "../components/ITCompanySection";
import TechStackSection from "../components/TechStackSection";
import CurriculumSection from "../components/CurriculumSection";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Trainer from "../components/Trainer";
import Cartificate from "../components/Cartificate";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";
import MasterclassModal from "../components/MasterclassModal";
import WhatsAppButton from "../components/WhatsAppButton";

const LandingPage = () => {
  const [selectedPlanId, setSelectedPlanId] = useState("one-time");
  const [appliedDiscount, setAppliedDiscount] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          lenis.scrollTo(element as HTMLElement, { offset: -80 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Auto Masterclass Popup Modal */}
      <MasterclassModal />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Is Just a Degree Enough? Section */}
      <DegreeVsSkill />

      {/* We Are an IT Company Section */}
      <ITCompanySection />

      {/* Master MERN Stack & Also You Will Learn */}
      <TechStackSection />

      {/* What You Will Learn (Curriculum) */}
      <CurriculumSection />

      {/* Learn By Building Real-World Projects */}
      <Projects />

      {/* Trainer Section */}
      <section id="trainer">
        <Trainer />
      </section>

      {/* Certificate Section */}
      <section id="cartificate">
        <Cartificate />
      </section>

      {/* Pricing Plans & Referral Code Section */}
      <section id="pricing">
        <Pricing
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
          appliedDiscount={appliedDiscount}
          setAppliedDiscount={setAppliedDiscount}
        />
      </section>

      {/* Registration & Special Offer Form (connected to Admin / Referral Code / Payment) */}
      <section id="reviews">
        <Offer
          selectedPlanId={selectedPlanId}
          setSelectedPlanId={setSelectedPlanId}
          appliedDiscount={appliedDiscount}
          setAppliedDiscount={setAppliedDiscount}
        />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Banner */}
      <FooterBanner />

      {/* Main Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;