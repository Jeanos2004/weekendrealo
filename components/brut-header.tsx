"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play, Search, User, Menu, X, ChevronDown } from "lucide-react";

export function BrutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/live", label: "Live" },
    { href: "/videos", label: "Vidéos" },
    { href: "/actualites", label: "Actualités" },
    { href: "/podcasts", label: "Podcasts" },
    { href: "/series", label: "Séries" },
    { href: "/emissions", label: "Émissions" },
    { href: "/a-propos", label: "À propos" },
  ];

  const corporateLinks = [
    "Annonceurs",
    "Équipe éditoriale",
    "Flux RSS",
    "Nous rejoindre",
    "Égalité professionnelle",
    "Mon abonnement BrutX",
    "Aide",
  ];

  return (
    <>
      {/* Top black bar */}
      <div className="bg-black text-white py-1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white text-sm font-medium">
                WeekendRealo
              </Link>
              <span className="text-xs text-gray-300">Éditions</span>
              <span className="text-xs text-gray-300">France</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-xs text-gray-300">Corporate</span>
              <div className="relative">
                <button
                  onClick={() => setIsCorporateOpen(!isCorporateOpen)}
                  className="flex items-center space-x-1 text-xs text-gray-300 hover:text-white transition-colors"
                >
                  <span>Menu</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isCorporateOpen && (
                  <div className="absolute right-0 top-6 bg-black border border-gray-700 rounded-md py-2 min-w-48 z-50">
                    {corporateLinks.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        className="block px-4 py-1 text-xs text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="font-bold text-xl text-black">WeekendRealo</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-black hover:text-primary transition-colors font-medium ${
                    pathname === link.href ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-black hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-black hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-black hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-black hover:text-primary transition-colors font-medium ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
