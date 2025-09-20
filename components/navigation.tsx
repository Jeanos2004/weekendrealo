"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Play, BarChart3 } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/contenus", label: "Contenus" },
    { href: "/talents", label: "Talents" },
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-primary-foreground fill-current" />
            </div>
            <span className="font-bold text-xl">WeekendRealo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-foreground hover:text-primary transition-colors ${
                  pathname === link.href ? "text-primary" : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/soumettre">
              <Button size="sm" className="hover:scale-105 transition-transform">
                Soumettre un projet
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-foreground hover:text-primary transition-all duration-200 transform hover:translate-x-2 ${
                    pathname === link.href ? "text-primary font-medium" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/soumettre">
                  <Button size="sm" className="w-full">
                    Soumettre un projet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
