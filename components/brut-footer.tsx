"use client";

import Link from "next/link";
import {
  Play,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react";

export function BrutFooter() {
  const editions = [
    { name: "France", href: "/" },
    { name: "International", href: "/international" },
    { name: "Europe", href: "/europe" },
  ];

  const categories = [
    { name: "Contenus", href: "/contenus" },
    { name: "Talents", href: "/talents" },
    { name: "Projets", href: "/projets" },
    { name: "À propos", href: "/a-propos" },
  ];

  const corporate = [
    { name: "Partenaires", href: "/partenaires" },
    { name: "Équipe", href: "/equipe" },
    { name: "Nous rejoindre", href: "/carrieres" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="font-bold text-xl">WeekendRealo</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Production de contenus pour mettre en lumière les jeunes
              ambitieux, leurs projets, leurs combats et leurs réussites.
            </p>
          </div>

          {/* Éditions */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Éditions</h3>
            <ul className="space-y-2">
              {editions.map((edition) => (
                <li key={edition.name}>
                  <Link
                    href={edition.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {edition.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Catégories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Corporate</h3>
            <ul className="space-y-2">
              {corporate.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>Édition française</span>
            </div>
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">WeekendRealo © 2024</div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/legal"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Conditions générales
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Gestion des cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
