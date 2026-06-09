"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slateGray text-crispWhite z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Nestor<span className="text-safetyOrange">Fix</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-crispWhite hover:text-safetyOrange transition-colors px-3 py-2 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14034614332"
              className="text-crispWhite hover:text-safetyOrange transition-colors font-medium"
            >
              (403) 461-4332
            </a>
            <a
              href="#contact"
              className="bg-safetyOrange hover:bg-orange-600 text-crispWhite px-5 py-2 rounded-md font-semibold transition-colors"
            >
              Submit Request
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-crispWhite hover:text-safetyOrange focus:outline-none focus-visible:ring-2 focus-visible:ring-safetyOrange focus-visible:outline-none rounded-sm"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-slateGray border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-crispWhite hover:text-safetyOrange hover:bg-gray-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col space-y-3 px-3">
              <a
                href="tel:+14034614332"
                className="text-crispWhite font-medium py-2"
              >
                Call: (403) 461-4332
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-safetyOrange text-center text-crispWhite px-5 py-3 rounded-md font-semibold"
              >
                Submit Request
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
