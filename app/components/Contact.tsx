"use client";

import { useState, type FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "CGI Product Ad",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        projectType: "CGI Product Ad",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="relative w-[90%] mx-auto py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
            Us
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Tell us about your project and we will get back within one business
          day.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <form
          className="space-y-4 bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Project Type</label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={(e) => handleChange("projectType", e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              title="Project Type"
              required
            >
              <option className="bg-black" value="CGI Product Ad">
                CGI Product Ad
              </option>
              <option className="bg-black" value="Viral CGI Reels">
                Viral CGI Reels
              </option>
              <option className="bg-black" value="Explainer / Launch Video">
                Explainer / Launch Video
              </option>
              <option className="bg-black" value="AI UGC Ad">
                AI UGC Ad
              </option>
              <option className="bg-black" value="CGI Billboards Ad">
                CGI Billboards Ad
              </option>
              <option className="bg-black" value="CGI Lego Ad">
                CGI Lego Ad
              </option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full rounded-lg bg-black/40 border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-500 focus:outline-none"
              placeholder="Tell us about your timeline, goals, and budget."
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-400">
              Message sent. We will reply within one business day.
            </p>
          )}
          {status === "error" && error && (
            <p className="text-sm text-red-400">{error}</p>
          )}
        </form>

        {/* Contact Info */}
        <div className="bg-gray-900/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's talk</h3>
            <p className="text-gray-300 text-sm">
              We respond fast. Share a link to your product or references for
              faster scoping.
            </p>
          </div>
          <div className="space-y-3 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-purple-400 text-lg">✉️</span>
              <span>hello@pixeldrift.studio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-purple-400 text-lg">📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-purple-400 text-lg">⏱️</span>
              <span>Reply within 1 business day</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-sm text-gray-300">
                Slots available this week
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="text-sm text-gray-300">
                Expedited delivery on request
              </span>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 text-gray-200 text-sm">
            “PixelDrift delivered beyond expectations. The CGI quality and
            communication were excellent.”
          </div>
        </div>
      </div>
    </section>
  );
}
