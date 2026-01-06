"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const nearTop = currentY < 80;

      if (nearTop) {
        setIsVisible(true);
      } else {
        setIsVisible(!scrollingDown);
      }

      lastScrollY.current = currentY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const nearTop = e.clientY < 70;
      if (nearTop) {
        setIsVisible(true);
      } else if (window.scrollY > 80) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Previous Works", href: "#works" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out bg-black/40 backdrop-blur-lg border-b border-white/10 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">PixelDrift</div>

          {/* Navigation Links */}
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-white font-medium hover:text-gray-200 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
