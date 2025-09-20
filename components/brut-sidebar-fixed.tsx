"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Play,
  Globe,
  Flag,
  Zap,
  Palette,
  Heart,
  DollarSign,
  Trophy,
  FileText,
  Film,
  Mic,
  Gift,
} from "lucide-react";

export function BrutSidebarFixed() {
  const pathname = usePathname();

  const categories = [
    { name: "Guinée", icon: Flag, href: "/guinee" },
    { name: "International", icon: Globe, href: "/international" },
    { name: "Environnement", icon: Zap, href: "/environnement" },
    { name: "Technologie", icon: Zap, href: "/technologie" },
    { name: "Culture", icon: Palette, href: "/culture" },
    { name: "Santé", icon: Heart, href: "/sante" },
    { name: "Économie", icon: DollarSign, href: "/economie" },
    { name: "Sport", icon: Trophy, href: "/sport" },
  ];

  const contentTypes = [
    { name: "Articles", icon: FileText, href: "/articles" },
    { name: "Documentaires", icon: Film, href: "/documentaires" },
    { name: "Podcast", icon: Mic, href: "/podcast" },
    { name: "Jeux concours", icon: Gift, href: "/jeux-concours" },
  ];

  const navLinks = [
    { name: "Live", href: "/live" },
    { name: "Vidéos", href: "/videos" },
    { name: "Actualités", href: "/actualites" },
    { name: "Podcasts", href: "/podcasts" },
    { name: "Séries", href: "/series" },
    { name: "Émissions", href: "/emissions" },
    { name: "À propos", href: "/a-propos" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-10 overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mb-8 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="font-bold text-xl text-black">WeekendRealo</span>
        </Link>

        {/* Categories */}
        <div className="space-y-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = pathname === category.href;

            return (
              <Link
                key={category.name}
                href={category.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Navigation Links */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Navigation
          </h3>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Content Types */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Contenus
          </h3>
          {contentTypes.map((type) => {
            const Icon = type.icon;
            const isActive = pathname === type.href;

            return (
              <Link
                key={type.name}
                href={type.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{type.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Edition */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Globe className="w-4 h-4" />
            <span>Édition française</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
