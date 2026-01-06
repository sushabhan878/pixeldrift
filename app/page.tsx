import Link from "next/link";
import DarkGridBackground from "./components/DarkGridBackground";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import PreviousWorks from "./components/PreviousWorks";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <DarkGridBackground />

      {/* Hero Section */}
      <section className="relative w-[90%] mx-auto min-h-screen pt-24 flex items-center justify-start overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />

        {/* Main Content - Left Side */}
        <main className="relative z-10 w-1/2 px-8 space-y-6">
          {/* Logo/Badge */}
          <div
            className="inline-block animate-float-up"
            style={{ animationDelay: "0s" }}
          >
            <div className="px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 backdrop-blur-sm">
              <span className="text-xs font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                Premium CGI Advertising Solutions
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-float-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-glow-pulse">
              Elevate Your Brand with
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
                Premium CGI Ads
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-float-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              High-quality, budget-friendly CGI advertising that transforms your
              brand visibility. Professional digital solutions without the
              premium price tag.
            </p>
          </div>

          {/* Stats/Features */}
          <div
            className="animate-float-up grid grid-cols-3 gap-3 max-w-lg py-6"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-bold text-purple-300">
                50%
              </div>
              <div className="text-xs text-gray-400">Cost Savings</div>
            </div>
            <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-bold text-blue-300">
                24hrs
              </div>
              <div className="text-xs text-gray-400">Fast Delivery</div>
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <div className="text-xl md:text-2xl font-bold text-cyan-300">
                100%
              </div>
              <div className="text-xs text-gray-400">Quality Assured</div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="animate-float-up flex gap-4 flex-wrap pt-2"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="#contact"
              className="px-10 py-4 rounded-lg font-semibold text-white text-base bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 animate-button-glow"
            >
              Contact Us
            </Link>
            <Link
              href="#works"
              className="px-10 py-4 rounded-lg font-semibold text-white text-base border border-purple-500/50 hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </main>

        {/* Right Side - Reserved for Image */}
        <div className="relative z-10 w-1/2 h-full flex items-center justify-center px-8">
          {/* Placeholder for your image */}
          <div className="w-full max-w-md aspect-square rounded-2xl border-2 border-dashed border-purple-500/30 flex items-center justify-center bg-purple-500/5 backdrop-blur-sm">
            <span className="text-gray-400 text-center">
              Your CGI Image Here
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Us / Process Section */}
      <section
        id="about"
        className="relative w-[90%] mx-auto py-24 overflow-hidden"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 whitespace-nowrap">
            How We Make Ads{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
              Viral & Engaging
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our proven 8-step process transforms your brand vision into
            captivating CGI advertisements that drive engagement and
            conversions.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="py-12">
          <Timeline />
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Previous Works Section */}
      <PreviousWorks />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
