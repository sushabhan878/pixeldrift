"use client";

interface Work {
  id: number;
  title: string;
  client: string;
  testimonial: string;
  rating: number;
  image: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "E-commerce Product Campaign",
    client: "TechFlow Store",
    testimonial:
      "The CGI ads we received exceeded our expectations. The quality was professional and the turnaround time was incredibly fast.",
    rating: 5,
    image: "🎬",
  },
  {
    id: 2,
    title: "Luxury Brand Launch",
    client: "Elegance Collective",
    testimonial:
      "PixelDrift understood our vision perfectly. The animations brought our premium products to life in ways we never imagined.",
    rating: 5,
    image: "✨",
  },
  {
    id: 3,
    title: "Mobile App Promotion",
    client: "FitPro Technologies",
    testimonial:
      "The viral reels generated massive engagement. Our app downloads increased by 300% within weeks of launching these ads.",
    rating: 4,
    image: "📱",
  },
  {
    id: 4,
    title: "Startup Explainer Video",
    client: "CloudSync Inc",
    testimonial:
      "Complex software features were simplified beautifully. Our conversion rate jumped significantly thanks to this explainer video.",
    rating: 5,
    image: "🚀",
  },
  {
    id: 5,
    title: "Fashion Brand Reels",
    client: "StyleVibe Co",
    testimonial:
      "The creative team nailed our brand aesthetic. These reels became our highest-performing content across all platforms.",
    rating: 5,
    image: "👗",
  },
  {
    id: 6,
    title: "Product Demo Animation",
    client: "SmartHome Solutions",
    testimonial:
      "Professional quality at reasonable prices. The team was responsive and made revisions quickly. Highly recommend!",
    rating: 4,
    image: "🏠",
  },
];

export default function PreviousWorks() {
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
        {works.map((work) => (
          <div key={work.id} className="group relative">
            {/* Card Content */}
            <div className="relative rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col overflow-hidden">
              {/* Video Placeholder */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center overflow-hidden group-hover:from-purple-900/50 group-hover:to-blue-900/50 transition-all duration-300">
                <div className="text-6xl">{work.image}</div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full border-2 border-white/0 group-hover:border-white/80 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <span className="text-2xl text-white/0 group-hover:text-white transition-all duration-300">
                      ▶
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title and Client */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {work.title}
                </h3>
                <p className="text-sm text-purple-400 font-semibold mb-4">
                  {work.client}
                </p>

                {/* Testimonial */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
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
              </div>
            </div>
          </div>
        ))}
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
