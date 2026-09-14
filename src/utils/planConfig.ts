import { useState, useEffect } from "react";

export interface PlanConfig {
  courseName?: string;
  courseTagline?: string;
  oneTimePrice?: number;
  oneTimeOriginalPrice?: number;
  heroOfferPrice?: number;
  installment1Price?: number;
  installment2Price?: number;
  discountPercent?: number;
  oneTimeDiscountPercent?: number;
  installment1DiscountPercent?: number;
  installment2DiscountPercent?: number;
  oneTimeFeatures?: string[];
  installmentFeatures?: string[];
  courses?: string[];
  colleges?: string[];
  cities?: string[];
  totalSeats?: number;
  manualSeatsOffset?: number;
  batchStartDate?: string;
  offerTimerHours?: number;
  offerTimerMode?: string;
  offerTargetDate?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  whatsappEnabled?: boolean;
  whatsappLabel?: string;
  whatsappPosition?: string;
  whatsappType?: string;
  whatsappGroupLink?: string;
  contactPhone?: string;
  contactEmail?: string;
}

export const DEFAULT_PLAN_CONFIG: PlanConfig = {
  courseName: "MERN Stack",
  courseTagline: "Full Stack Web Development",
  oneTimePrice: 6000,
  oneTimeOriginalPrice: 15001,
  heroOfferPrice: 6000,
  installment1Price: 3200,
  installment2Price: 3200,
  discountPercent: 10,
  oneTimeDiscountPercent: 10,
  installment1DiscountPercent: 10,
  installment2DiscountPercent: 10,
  oneTimeFeatures: [
    "Full MERN Stack Course Access",
    "Practical Hands-on Training",
    "100% Placement Assistance",
    "Course Completion Certificate",
    "Save 10% Extra using Referral Codes",
  ],
  installmentFeatures: [
    "Full MERN Stack Course Access",
    "Practical Hands-on Training",
    "100% Placement Assistance",
    "Course Completion Certificate",
  ],
  courses: ["Frontend Developer", "Backend Developer", "MERN Stack"],
  colleges: ["PDPS College", "BUIT", "Other"],
  cities: ["Bhopal", "Indore", "Jabalpur", "Other"],
  totalSeats: 50,
  manualSeatsOffset: 32,
  batchStartDate: "21 September 2026",
  offerTimerHours: 4,
  offerTimerMode: "daily",
  offerTargetDate: "",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello BeanGate IT Solutions, I am interested in the MERN Stack Course!",
  whatsappEnabled: true,
  whatsappLabel: "Need Help? Chat with us",
  whatsappPosition: "bottom-right",
  whatsappType: "number",
  whatsappGroupLink: "",
  contactPhone: "+91 74711 12020, +91 97527 40090",
  contactEmail: "info@beangates.com, beangate.official@gmail.com",
};

export const getStoredPlanConfig = (): PlanConfig => {
  try {
    const s = localStorage.getItem("bg_plan_config");
    return s ? { ...DEFAULT_PLAN_CONFIG, ...JSON.parse(s) } : DEFAULT_PLAN_CONFIG;
  } catch {
    return DEFAULT_PLAN_CONFIG;
  }
};

export const usePlanConfig = (): PlanConfig => {
  const [cfg, setCfg] = useState<PlanConfig>(getStoredPlanConfig());

  useEffect(() => {
    const loadConfig = () => {
      try {
        const stored = localStorage.getItem("bg_plan_config");
        if (stored) {
          const parsed = JSON.parse(stored);
          setCfg({ ...DEFAULT_PLAN_CONFIG, ...parsed });
        }
      } catch (e) {}
    };

    const fetchConfig = () => {
      loadConfig();
      fetch("/api/planconfig")
        .then(res => {
          if (!res.ok) throw new Error();
          return res.json();
        })
        .then(data => {
          if (data && typeof data === "object") {
            setCfg(prev => ({ ...prev, ...data }));
            try {
              const current = localStorage.getItem("bg_plan_config");
              const existing = current ? JSON.parse(current) : {};
              localStorage.setItem("bg_plan_config", JSON.stringify({ ...existing, ...data }));
            } catch (e) {}
          }
        })
        .catch(() => {
          loadConfig();
        });
    };

    fetchConfig();

    const handleStorage = () => fetchConfig();
    window.addEventListener("storage", handleStorage);
    window.addEventListener("bg_config_updated", handleStorage);
    window.addEventListener("focus", handleStorage);

    const interval = setInterval(fetchConfig, 5000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("bg_config_updated", handleStorage);
      window.removeEventListener("focus", handleStorage);
    };
  }, []);

  return cfg;
};
