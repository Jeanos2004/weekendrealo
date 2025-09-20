"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Play, ChevronRight, Globe } from "lucide-react";

export function BrutSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    { href: "/contenus", label: "Contenus", icon: Play },
    { href: "/talents", label: "Talents", icon: Play },
    { href: "/projets", label: "Projets", icon: Play },
    { href: "/a-propos", label: "À propos", icon: Play },
  ];

  const otherLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/soumettre", label: "Soumettre" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="font-bold text-xl text-sidebar-foreground">
                WeekendRealo
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = pathname === category.href;

                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    className={`
                      flex items-center justify-between w-full px-4 py-3 rounded-lg text-sidebar-foreground
                      hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                      transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : ""
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>

            {/* Other links */}
            <div className="mt-8 pt-6 border-t border-sidebar-border">
              <div className="space-y-2">
                {otherLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-sidebar-border">
            <div className="flex items-center space-x-2 text-sm text-sidebar-foreground">
              <Globe className="w-4 h-4" />
              <span>Édition française</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-sidebar border border-sidebar-border rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>
    </>
  );
}
