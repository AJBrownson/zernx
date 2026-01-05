"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <>
      {/* Container Wrapper: 
        - Mobile: Fixed at top, full width
        - Desktop: Centered, floating slightly down (top-6) 
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center md:top-6 px-0 md:px-4">
        <nav
          className="
            w-full md:w-auto md:min-w-300
            flex items-center justify-between
            px-4 py-3 md:px-6 md:py-3
            bg-dark-bg/20 backdrop-blur-md
            border-b md:border border-white/10
            md:rounded-full md:shadow-lg-dark
            transition-all duration-300 font-satoshi
          "
        >
          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-8">
            {/* --- LOGO --- */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <Image
                src="/logo.svg"
                alt="ZernX Logo"
                width={32}
                height={32}
                className="w-8 h-8 md:w-32 md:h-10"
              />
            </Link>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-dark-text-primary hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

            <div className="flex md:hidden items-center gap-8">
            {/* --- LOGO --- */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <Image
                src="/logo.svg"
                alt="ZernX Logo"
                width={32}
                height={32}
                className="w-24 h-10"
              />
            </Link>
            </div>

          {/* --- RIGHT SIDE ACTIONS --- */}
          <div className="flex items-center gap-4">
            {/* CTA Button (Visible on both Mobile and Desktop) */}
            <button
              className="
              px-4 py-2 md:px-6 md:py-2.5 
              rounded-full 
              bg-primary
              text-white text-xs md:text-sm font-semibold 
              hover:opacity-90 transition-opacity cursor-pointer
              shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              Launch ZernX
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {/* This slides down or fades in when hamburger is clicked */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
