"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Discovery Call",
    description:
      "In-depth consultation with your brand to understand goals, target audience, and vision.",
    icon: "📞",
  },
  {
    number: "2",
    title: "Ideation Phase",
    description:
      "Creative brainstorming and concept development with multiple innovative ideas.",
    icon: "💡",
  },
  {
    number: "3",
    title: "Conceptualization",
    description:
      "Refine selected concepts with storyboarding and visual direction planning.",
    icon: "✏️",
  },
  {
    number: "4",
    title: "Design Draft",
    description:
      "Create detailed design mockups and layouts for client review and approval.",
    icon: "🎨",
  },
  {
    number: "5",
    title: "CGI Modeling",
    description:
      "Build 3D models and assets with precision and attention to detail.",
    icon: "🎬",
  },
  {
    number: "6",
    title: "Rendering & Editing",
    description:
      "High-quality rendering and post-production editing for maximum impact.",
    icon: "✨",
  },
  {
    number: "7",
    title: "Final Testing",
    description:
      "Comprehensive quality assurance and final adjustments based on feedback.",
    icon: "✅",
  },
  {
    number: "8",
    title: "KPI Testing",
    description:
      "Track performance metrics and optimize for maximum engagement and conversions.",
    icon: "📊",
  },
];

export default function Timeline() {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(
              entry.target.getAttribute("data-step") || "0"
            );
            setVisibleSteps((prev) => Math.max(prev, stepIndex + 1));
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = containerRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => {
      stepElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-20">
      {/* Steps Container */}
      <div className="space-y-32">
        {steps.map((step, index) => (
          <div
            key={index}
            data-step={index}
            className="relative"
            style={{
              opacity: index < visibleSteps ? 1 : 0.5,
              transition: "opacity 0.6s ease-out",
            }}
          >
            {/* Vertical Timeline Line Between Steps */}
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-32 h-32 w-1 -translate-x-1/2 bg-linear-to-b from-purple-500/60 to-transparent" />
            )}

            {/* Three Column Grid Layout */}
            <div className="flex items-start justify-center max-w-7xl mx-auto px-8 gap-8">
              {/* LEFT COLUMN (35%) - Card with Stars */}
              <div className="w-[35%] flex justify-end">
                <div
                  style={{
                    transform:
                      index < visibleSteps
                        ? "translateX(0)"
                        : "translateX(30px)",
                    opacity: index < visibleSteps ? 1 : 0.3,
                    transition: "all 0.7s ease-out",
                  }}
                  className="w-full max-w-xl mr-12"
                >
                  <div
                    className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                      index < visibleSteps
                        ? "border-purple-500/40 bg-linear-to-br from-purple-900/40 to-blue-900/30 shadow-xl shadow-purple-500/30"
                        : "border-gray-700/30 bg-gray-900/20"
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-2 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            index < visibleSteps
                              ? "text-yellow-400"
                              : "text-gray-700"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-5 font-medium ${
                        index < visibleSteps ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Bottom Section */}
                    <div
                      className={`flex items-center gap-3 pt-5 border-t ${
                        index < visibleSteps
                          ? "border-purple-500/30 text-purple-300"
                          : "border-gray-700/30 text-gray-600"
                      }`}
                    >
                      <span className="text-2xl">{step.icon}</span>
                      <span className="font-bold text-sm">{step.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER COLUMN (10%) - Circle Node */}
              <div className="w-[10%] flex items-start justify-center pt-4">
                <div
                  style={{
                    transform:
                      index < visibleSteps ? "scale(1)" : "scale(0.75)",
                    opacity: index < visibleSteps ? 1 : 0.5,
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl relative shrink-0 transition-all duration-500 ${
                      index < visibleSteps
                        ? "bg-linear-to-br from-purple-600 via-blue-600 to-cyan-600 shadow-2xl shadow-purple-500/60 border-2 border-purple-400/50"
                        : "bg-gray-800/50 border-2 border-gray-700"
                    }`}
                  >
                    {step.icon}
                    {index < visibleSteps && (
                      <div className="absolute inset-0 rounded-full animate-pulse bg-linear-to-br from-purple-600 via-blue-600 to-cyan-600 opacity-20" />
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (35%) - Content Details */}
              <div className="w-[35%] flex justify-start">
                <div
                  style={{
                    transform:
                      index < visibleSteps
                        ? "translateX(0)"
                        : "translateX(-30px)",
                    opacity: index < visibleSteps ? 1 : 0.3,
                    transition: "all 0.7s ease-out",
                  }}
                  className="ml-12 w-full max-w-xl"
                >
                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                      index < visibleSteps ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Duration */}
                  <div
                    className={`flex items-center gap-3 mb-6 pb-6 border-b transition-all duration-500 ${
                      index < visibleSteps
                        ? "border-purple-500/30 text-purple-300"
                        : "border-gray-700/30 text-gray-600"
                    }`}
                  >
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm font-semibold">Duration</p>
                      <p className="text-xs opacity-75">
                        Step {step.number} of 8
                      </p>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-semibold mb-3 italic transition-all duration-500 ${
                        index < visibleSteps ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Key Activities
                    </h4>
                    <ul
                      className={`space-y-3 ${
                        index < visibleSteps ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <li className="flex items-start gap-3 group">
                        <span className="text-purple-400 shrink-0 mt-1 group-hover:text-cyan-400 transition-colors">
                          •
                        </span>
                        <span className="text-sm leading-relaxed">
                          {step.description}
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="text-blue-400 shrink-0 mt-1 group-hover:text-cyan-400 transition-colors">
                          •
                        </span>
                        <span className="text-sm leading-relaxed">
                          Delivering excellence and pushing creative boundaries
                        </span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="text-cyan-400 shrink-0 mt-1 group-hover:text-cyan-400 transition-colors">
                          •
                        </span>
                        <span className="text-sm leading-relaxed">
                          Collaborating effectively with team members
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-500 ${
                      index < visibleSteps
                        ? "bg-linear-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                        : "bg-gray-800/30 text-gray-500 border border-gray-700/30"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" />
                    In Progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
