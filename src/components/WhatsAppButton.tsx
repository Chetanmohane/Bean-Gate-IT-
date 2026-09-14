import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

interface WhatsAppConfig {
  whatsappNumber?: string;
  whatsappMessage?: string;
  whatsappEnabled?: boolean;
  whatsappLabel?: string;
  whatsappPosition?: string;
  whatsappType?: string; // "number" | "group"
  whatsappGroupLink?: string;
}

const DEFAULT_WA: WhatsAppConfig = {
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello BeanGate IT Solutions, I am interested in the MERN Stack Course!",
  whatsappEnabled: true,
  whatsappLabel: "Need Help? Chat with us",
  whatsappPosition: "bottom-right",
  whatsappType: "number",
  whatsappGroupLink: "",
};

const WhatsAppButton: React.FC = () => {
  const [config, setConfig] = useState<WhatsAppConfig>(DEFAULT_WA);
  const [showTooltip, setShowTooltip] = useState(true);

  const fetchConfig = () => {
    try {
      const s = localStorage.getItem("bg_plan_config");
      if (s) {
        const parsed = JSON.parse(s);
        setConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {}

    fetch("/api/planconfig")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setConfig((prev) => ({ ...prev, ...data }));
          try {
            const current = localStorage.getItem("bg_plan_config");
            const existing = current ? JSON.parse(current) : {};
            localStorage.setItem("bg_plan_config", JSON.stringify({ ...existing, ...data }));
          } catch (e) {}
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchConfig();

    const handleStorage = (e: StorageEvent) => {
      if (e.key === "bg_plan_config") {
        fetchConfig();
      }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("bg_config_updated", fetchConfig);
    window.addEventListener("focus", fetchConfig);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("bg_config_updated", fetchConfig);
      window.removeEventListener("focus", fetchConfig);
    };
  }, []);

  if (config.whatsappEnabled === false) {
    return null;
  }

  const type = config.whatsappType || "number";
  const number = config.whatsappNumber || DEFAULT_WA.whatsappNumber || "919876543210";
  const cleanNumber = number.replace(/[^0-9]/g, "");
  const message = config.whatsappMessage || DEFAULT_WA.whatsappMessage || "";
  const label = config.whatsappLabel || DEFAULT_WA.whatsappLabel || (type === "group" ? "Join WhatsApp Group" : "Need Help? Chat with us");
  const position = config.whatsappPosition || "bottom-right";
  const groupLink = (config.whatsappGroupLink || "").trim();

  let whatsappUrl = "";
  if (type === "group" && groupLink) {
    whatsappUrl = groupLink.startsWith("http://") || groupLink.startsWith("https://")
      ? groupLink
      : `https://chat.whatsapp.com/${groupLink.replace(/^https?:\/\/chat\.whatsapp\.com\//, "")}`;
  } else {
    whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }

  const positionClass =
    position === "bottom-left"
      ? "bottom-10 left-6 sm:left-8 sm:bottom-12 flex-row"
      : "bottom-10 right-6 sm:right-8 sm:bottom-12 flex-row-reverse";

  return (
    <div
      className={`fixed ${positionClass} items-center gap-3 z-[9990] group transition-all duration-300 pointer-events-auto`}
    >


      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Action"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white shadow-[0_10px_25px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 no-underline cursor-pointer group"
      >
        {/* Animated outer glow / pulse ring */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/40 animate-ping opacity-75"></span>
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400/20 group-hover:opacity-100 transition-opacity"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-3xl sm:text-4xl text-white relative z-10 filter drop-shadow-md group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
