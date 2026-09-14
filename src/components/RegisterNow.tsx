import React, { useState } from "react";
import { FaInfinity, FaLaptopCode, FaAward, FaLifeRing, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaMapMarkerAlt, FaTag, FaCheckCircle } from "react-icons/fa";
import { usePlanConfig } from "../utils/planConfig";

const RegisterNow = () => {
  const cfg = usePlanConfig();
  const priceFormatted = (cfg.oneTimePrice ?? 6000).toLocaleString("en-IN");
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    whatsAppNumber: "",
    emailAddress: "",
    city: "",
    qualification: "",
    agree: true,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Terms & Conditions to proceed.");
      return;
    }
    setLoading(true);
    setMessage("");

    // Simulate submission / backend call
    setTimeout(() => {
      setLoading(false);
      setMessage("Registration details submitted successfully! Redirecting to payment...");
      // Scroll or handle payment action
    }, 1200);
  };

  return (
    <section id="register" className="py-16 sm:py-20 bg-gray-50 text-gray-900 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Pricing & Included Benefits */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
                Start Your Journey Today
              </h3>

              <div className="my-6">
                <span className="text-4xl sm:text-5xl font-black text-orange-500 tracking-tight block">
                  ₹{priceFormatted}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mt-1">
                  One-Time Course Fee
                </span>

                <span className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-700 text-[11px] font-extrabold rounded-full border border-gray-200">
                  No Hidden Charges
                </span>
              </div>
            </div>

            {/* 4 Benefit Badges */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              {[
                { icon: <FaInfinity className="text-blue-500" />, label: "Lifetime Access to Resources" },
                { icon: <FaLaptopCode className="text-orange-500" />, label: "Practical Live Projects" },
                { icon: <FaAward className="text-emerald-500" />, label: "Certificate of Completion" },
                { icon: <FaLifeRing className="text-purple-500" />, label: "Support & Guidance" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER COLUMN: Registration Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Register Now
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mb-6">
              Enter your details to continue with your enrollment.
            </p>

            {message && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-bold rounded-xl">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsAppNumber"
                    required
                    value={formData.whatsAppNumber}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Qualification <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition"
                  >
                    <option value="">Select your qualification</option>
                    <option value="B.Tech / BE">B.Tech / BE</option>
                    <option value="BCA / MCA">BCA / MCA</option>
                    <option value="B.Sc / M.Sc">B.Sc / M.Sc</option>
                    <option value="Other Degree">Other Degree</option>
                  </select>
                </div>
              </div>

              {/* T&C Checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 h-4 w-4"
                />
                <label htmlFor="agree" className="text-[11px] font-medium text-gray-600">
                  I agree to the <span className="underline cursor-pointer">Terms & Conditions</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 transition transform hover:-translate-y-0.5 cursor-pointer border-none mt-2"
              >
                {loading ? "PROCESSING..." : "CONTINUE TO PAYMENT ➔"}
              </button>

            </form>
          </div>

          {/* RIGHT COLUMN: Dark Guarantee Card */}
          <div className="lg:col-span-3 bg-[#081022] text-white rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-xl flex flex-col justify-around text-left">
            {[
              {
                icon: <FaShieldAlt className="text-orange-400 text-2xl" />,
                title: "Secure Payment",
                desc: "100% Safe & Secure",
              },
              {
                icon: <FaBolt className="text-amber-400 text-2xl" />,
                title: "Instant Access",
                desc: "After Enrollment",
              },
              {
                icon: <FaHeadset className="text-sky-400 text-2xl" />,
                title: "24/7 Support",
                desc: "For Students",
              },
              {
                icon: <FaUsers className="text-emerald-400 text-2xl" />,
                title: "Join Thousands of Happy Learners",
                desc: "Industry Community",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5 py-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-100 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default RegisterNow;
