import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import WhyChoose from "../components/WhyChoose";
import Trainer from "../components/Trainer";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Cartificate from "../components/Cartificate";
import Pricing from "../components/Pricing";

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

    // Custom helper to scroll cleanly to hashed sections
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

  const sectionProps = {
    initial: { opacity: 0, y: 45 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen overflow-x-hidden">
      <Navbar />

      <motion.section id="home" {...sectionProps}>
        <Hero />
      </motion.section>

      <motion.section id="course" {...sectionProps}>
        <Stats />
      </motion.section>

      <motion.section id="projects" className="scroll-mt-24" {...sectionProps}>
        <Projects />
      </motion.section>

      <motion.section id="trainer" {...sectionProps}>
        <Trainer />
      </motion.section>
      
      <motion.section id="cartificate" {...sectionProps}>
        <Cartificate/>
      </motion.section>
      
      <motion.section id="pricing" {...sectionProps}>
        <Pricing 
          selectedPlanId={selectedPlanId} 
          setSelectedPlanId={setSelectedPlanId} 
          appliedDiscount={appliedDiscount} 
          setAppliedDiscount={setAppliedDiscount} 
        />
      </motion.section>
      
      <motion.section id="reviews" {...sectionProps}>
        <Offer 
          selectedPlanId={selectedPlanId} 
          setSelectedPlanId={setSelectedPlanId} 
          appliedDiscount={appliedDiscount} 
          setAppliedDiscount={setAppliedDiscount} 
        />
      </motion.section>

      <motion.section id="faq" {...sectionProps}>
        <FAQ />
      </motion.section>

      <motion.section id="contact" {...sectionProps}>
        <Footer />
      </motion.section>
    </div>
  );
};

export default LandingPage;