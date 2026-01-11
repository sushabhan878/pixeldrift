"use client";

import { useState } from "react";
import Link from "next/link";

interface Work {
  id: number;
  title: string;
  client: string;
  product?: string;
  testimonial: string;
  rating: number;
  videoUrl?: string;
}
const works: Work[] = [
  {
    id: 1,
    title: "Artisan Pizza Brand Campaign",
    client: "Artisan Pizza",
    product: "Signature Wood-Fired Margherita",
    testimonial:
      "The visuals captured our oven-first craft — sales spiked and customers kept coming back.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691722/_shot__202601012104_jrl2u_lty3xo.mp4",
  },
  {
    id: 2,
    title: "CocoaDream Bliss Launch",
    client: "CocoaDream Bliss",
    product: "Single-Origin Dark Chocolate Bar",
    testimonial:
      "The product film communicated the bean-to-bar story beautifully — our tasting events sold out.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691706/CocoaDream-Ad-761120de_qejhsy.mp4",
  },
  {
    id: 3,
    title: "Rising Diamond Launch Film",
    client: "Rising Diamond",
    product: "Rising Cut Solitaire Ring",
    testimonial:
      "The campaign spotlighted our craftsmanship; bookings for private viewings doubled.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691550/bf6a6475a11651b407a612026380a396_lmbl3p.mp4",
  },
  {
    id: 4,
    title: "adidas — Reviel Collection",
    client: "adidas",
    product: "Reviel Performance Sneaker",
    testimonial:
      "The motion and lifestyle cuts showcased performance and style — great reception across socials.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767258809/ssstwitter.com_1767258766002_mrzlud.mp4",
  },
  {
    id: 5,
    title: "BrewMaster Machine Launch",
    client: "BrewMaster",
    product: "Barista One-Touch Espresso Machine",
    testimonial:
      "A polished product demo that made complex features feel effortless — pre-orders exceeded targets.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767257675/ssstwitter.com_1767257587494_mtibib.mp4",
  },
  {
    id: 6,
    title: "Tesla Showroom Experience",
    client: "Tesla",
    product: "Model Showcase & Test Drive",
    testimonial:
      "The showroom walkthrough videos brought the cars to life and drove test drive bookings.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767257974/ssstwitter.com_1767257946650_wr9use.mp4",
  },
  {
    id: 7,
    title: "Haven & Hue — Living Collection",
    client: "Haven & Hue",
    product: "Curated Home Decor Collection",
    testimonial:
      "The lookbook reels inspired customers to re-style rooms; conversions rose across the site.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767256666/ssstwitter.com_1767256567372_xk3qpq.mp4",
  },
];

export default function PreviousWorks() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  function getEmbedUrl(url?: string) {
    if (!url) return "";
    try {
      // YouTube watch -> embed
      if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
      if (url.includes("youtu.be/"))
        return url.replace("youtu.be/", "www.youtube.com/embed/");
      return url;
    } catch (e) {
      return url;
    }
  }

  function VideoArea({ work }: { work: Work }) {
    const isPlaying = playingId === work.id;
    const embed = getEmbedUrl(work.videoUrl);
    const ytId = (work.videoUrl || "").match(
      /(?:v=|\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/
    )?.[1];

    const isMp4 = (url?: string) => !!url && /\.mp4(\?.*)?$/i.test(url);

    // Playing state: render full player with controls
    if (isPlaying && embed) {
      if (ytId) {
        const src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&controls=1`;
        return (
          <div className="w-full aspect-video bg-black/80">
            <iframe
              src={src}
              title={work.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          </div>
        );
      }

      // direct video
      return (
        <div className="w-full aspect-video bg-black/80">
          <video
            src={work.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    // Preview state: show muted looping preview where possible
    if (isMp4(work.videoUrl)) {
      return (
        <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
          <video
            src={work.videoUrl}
            muted
            loop
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={() => setPlayingId(work.id)}
            className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/0 hover:border-white/80 bg-white/5"
            aria-label={`Play video for ${work.title}`}
          >
            <span className="text-2xl text-white">▶</span>
          </button>
        </div>
      );
    }

    // For YouTube links try an autoplay muted embed preview (may be blocked in some browsers)
    if (ytId) {
      const preview = `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${ytId}`;
      return (
        <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
          <iframe
            src={preview}
            title={`preview-${work.title}`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={() => setPlayingId(work.id)}
            className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/0 hover:border-white/80 bg-white/5"
            aria-label={`Play video for ${work.title}`}
          >
            <span className="text-2xl text-white">▶</span>
          </button>
        </div>
      );
    }

    // Fallback: show neutral placeholder
    return (
      <div className="relative w-full aspect-video bg-linear-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center overflow-hidden group-hover:from-purple-900/50 group-hover:to-blue-900/50 transition-all duration-300">
        <button
          onClick={() => setPlayingId(work.id)}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/0 hover:border-white/80 bg-white/5"
          aria-label={`Play video for ${work.title}`}
        >
          <span className="text-2xl text-white">▶</span>
        </button>
      </div>
    );
  }

  return (
    <section
      id="works"
      className="relative w-[90%] mx-auto py-24 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full filter blur-3xl" />

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
            Previous Works
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Check out the amazing projects we've created for our happy clients.
          See their feedback and ratings below.
        </p>
      </div>

      {/* Works Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.slice(0, 6).map((work) => (
          <div key={work.id} className="group relative">
            {/* Card Content */}
            <div className="relative rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col overflow-hidden">
              {/* Video Placeholder */}
              {/* Video area: when playing show embedded iframe, otherwise show clickable placeholder */}
              <VideoArea work={work} />

              {/* Content Section */}
              <div className="p-6 flex flex-col grow">
                {/* Title and Client */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {work.title}
                </h3>
                <p className="text-sm text-purple-400 font-semibold mb-1">
                  {work.client}
                </p>
                {work.product && (
                  <p className="text-sm text-gray-400 mb-4">{work.product}</p>
                )}

                {/* Testimonial */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6 grow">
                  "{work.testimonial}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < work.rating ? "text-yellow-400" : "text-gray-600"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-auto">
                    {work.rating}/5
                  </span>
                </div>
                {/* Watch Case Study CTA removed per request */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="relative z-10 text-center mt-8">
        <Link
          href="/previous-works"
          className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          View more
        </Link>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 text-center mt-20">
        <p className="text-gray-300 mb-6">
          Ready to see your brand come to life? Let's create something amazing
          together!
        </p>
      </div>
    </section>
  );
}
