"use client";

import { useState } from "react";
import Link from "next/link";
import VirticalCard from "../components/virticalCard";

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
    title: "Haven & Hue — Living Collection",
    client: "Haven & Hue",
    product: "Curated Home Decor Collection",
    testimonial:
      "The lookbook reels inspired customers to re-style rooms; conversions rose across the site.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767256666/ssstwitter.com_1767256567372_xk3qpq.mp4",
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
    title: "Holiday Corporate Gift — Christmas Box",
    client: "GiftCo",
    product: "Christmas Gift Box",
    testimonial:
      "A warm, festive campaign that positioned the gift box as the perfect corporate gesture.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691581/4aa6cd668cabc2ad519e36e490996d8b_lerrp2.mp4",
  },
  {
    id: 8,
    title: "V7 Lemon Mind Soda Campaign",
    client: "V7 Lemon Mind",
    product: "Lemon Mind Soda",
    testimonial:
      "A fizzy, fun spot that elevated awareness and drove trial in key markets.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691612/4400623509eac0bfe9d18aeb9d5b7f5c_hwp8sn.mp4",
  },
  {
    id: 9,
    title: "Genyum Fragrance Launch",
    client: "Genyum",
    product: "Signature Eau de Parfum",
    testimonial:
      "A cinematic launch that positioned Genyum as a modern, premium scent.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691608/6b10df848c971b21e9c6a8d351714b19_720w_lyzbsh.mp4",
  },
  {
    id: 10,
    title: "Red Bull — Energy Edit",
    client: "Red Bull",
    product: "Energy Drink Campaign",
    testimonial:
      "High-energy cuts and athlete features that boosted engagement across socials.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691604/dc85230497b62a245264808eea87c12f_720w_g8xmio.mp4",
  },
  {
    id: 11,
    title: "Heir Hair Dryer Intro",
    client: "Heir",
    product: "Pro Hair Dryer",
    testimonial:
      "A product demo that showcased performance and styling versatility.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691596/9bf307b36eacdf66b5a67843c4b3bbd2_uzvbdr.mp4",
  },
  {
    id: 12,
    title: "Pulse Smartwatch Campaign",
    client: "Pulse",
    product: "Pulse Smartwatch",
    testimonial:
      "Lifestyle storytelling that made the tech feel personal and stylish.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691593/4e4ecd40fdb724f6083e26b95d29a0a8_vxavmx.mp4",
  },
  {
    id: 13,
    title: "Coco — New Fragrance",
    client: "Coco",
    product: "Coco Perfume",
    testimonial:
      "A soft, elegant film that captured the brand's timeless appeal.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691581/6a04712e54740710246067e4416203a3_eklglx.mp4",
  },
  {
    id: 14,
    title: "Aurora Headphones Launch",
    client: "Aurora",
    product: "Wireless Headphones",
    testimonial:
      "Sound-focused visuals and lifestyle edits that resonated with audiophiles.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691576/6c29484eb8f2c5480182de4ed0b78723_wartli.mp4",
  },
  {
    id: 15,
    title: "Dove Roll-On — Everyday Fresh",
    client: "Dove",
    product: "Roll-On Deodorant",
    testimonial:
      "A warm, human-centred spot that strengthened trust and consideration.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691576/25827fd10f9998d596c3b71cc2de90d3_azxlby.mp4",
  },
  {
    id: 16,
    title: "BluePeak Marketing — Brand Film",
    client: "BluePeak Marketing",
    product: "Agency Showreel",
    testimonial:
      "A showcase reel that communicated expertise and drove new client leads.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691563/e8bdac9519029c8dcef42e0c34d77565_y8yjkh.mp4",
  },
  {
    id: 17,
    title: "HomeCenter — Property Launch",
    client: "HomeCenter Real Estate",
    product: "Residential Development",
    testimonial:
      "A cinematic property tour that increased inquiries and bookings.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691546/6420d1609c272ea6ac879f979985b405_720w_dln1y7.mp4",
  },
  {
    id: 18,
    title: "BlendBeauty — Product Feature",
    client: "BlendBeauty",
    product: "Makeup Blender",
    testimonial:
      "A quick how-to film that drove conversions and product reviews.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691540/854fe16f8682a615111c2185ad941922_mhib1z.mp4",
  },
  {
    id: 19,
    title: "Genesis Fragrance Campaign",
    client: "Genesis",
    product: "Eau de Parfum",
    testimonial:
      "A luxe animated spot that positioned Genesis as a modern classic.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691537/1ecc302633124b5a8cd83d253e54ef8d_720w_uvhoty.mp4",
  },
  {
    id: 20,
    title: "Merros Burger — Taste Spot",
    client: "Merros Burger",
    product: "Signature Burger",
    testimonial:
      "Mouth-watering product photography and quick recipe cuts that boosted footfall.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691525/c557d1d9ae67f9b407f3e078ca4f84de_pd6mif.mp4",
  },
  {
    id: 21,
    title: "Tech 4SSD — Energy Launch",
    client: "Tech 4SSD",
    product: "Energy Drink",
    testimonial:
      "A high-octane launch film blending tech aesthetics with energy-fuelled lifestyle scenes.",
    rating: 4,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691600/7986dea11cb6a4675e37f6e7f253e6b9_720w_p0uzy9.mp4",
  },
  {
    id: 22,
    title: "Artisan Pizza Brand Campaign",
    client: "Artisan Pizza",
    product: "Signature Wood-Fired Margherita",
    testimonial:
      "The visuals captured our oven-first craft — sales spiked and customers kept coming back.",
    rating: 5,
    videoUrl:
      "https://res.cloudinary.com/djpy1yni7/video/upload/v1767691722/_shot__202601012104_jrl2u_lty3xo.mp4",
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
        </div>
      );
    }
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

      {/* Vertical Cards Row (12 items) */}
      <div className="relative z-10 mt-12">
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => {
            const work = works[(6 + i) % works.length];
            return (
              <div key={`vc-${i}`} className="flex justify-center">
                <VirticalCard work={work} />
              </div>
            );
          })}
        </div>
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
