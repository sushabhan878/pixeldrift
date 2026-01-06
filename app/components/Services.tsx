"use client";

import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "CGI Product Ad",
    description:
      "High-quality 3D product visualization with dynamic camera movements and professional lighting.",
    price: "$299",
    features: ["4K Quality", "Custom Branding", "Music Included"],
    icon: "🎁",
  },
  {
    id: 2,
    title: "CGI Billboards Ad",
    description:
      "Large-format billboard advertisements with stunning visual impact and eye-catching effects.",
    price: "$399",
    features: ["HD/4K", "Multi-format", "Fast Turnaround"],
    icon: "📺",
  },
  {
    id: 3,
    title: "Viral CGI Reels",
    description:
      "Optimized short-form content designed for Instagram Reels, TikTok, and YouTube Shorts.",
    price: "$249",
    features: ["Multiple Formats", "Platform Optimized", "Trending Music"],
    icon: "🎬",
  },
  {
    id: 4,
    title: "AI UGC Ad",
    description:
      "AI-generated user content style ads that feel authentic and relatable to your target audience.",
    price: "$349",
    features: ["AI Generated", "Custom Voice", "Fully Customizable"],
    icon: "🤖",
  },
  {
    id: 5,
    title: "CGI Product Explanation",
    description:
      "Detailed visual breakdown of product features and benefits with engaging animations.",
    price: "$299",
    features: ["Feature Showcase", "Animation Ready", "Multiple Angles"],
    icon: "🔍",
  },
  {
    id: 6,
    title: "CGI Lego Ads",
    description:
      "Creative Lego-style CGI content perfect for building and construction-related products.",
    price: "$349",
    features: ["Custom Models", "Stop-motion Style", "High Quality"],
    icon: "🧱",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-[90%] mx-auto py-2 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full filter blur-3xl" />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
            Services
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive CGI advertising solutions tailored to your brand needs.
          All prices are per 10-second advertisement.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group relative">
            {/* Card Background with Border */}
            <div className="absolute inset-0 rounded-2xl border border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Card Content */}
            <div className="relative p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 grow">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">✓</span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-purple-500/50 to-transparent mb-6" />

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-400 text-sm">Per 10 Sec Ad</span>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                    {service.price}
                  </div>
                </div>
                <button className="px-6 py-3 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                  Choose
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-20">
        <p className="text-gray-300 mb-6">
          Need a custom package? We can create tailored solutions for your
          specific needs.
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Get Custom Quote
        </Link>
      </div>
    </section>
  );
}
