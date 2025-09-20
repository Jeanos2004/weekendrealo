import Link from "next/link"
import { Play, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="font-bold text-xl">WeekendRealo</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Production de contenus chaque week-end pour mettre en lumière les jeunes ambitieux, leurs projets, leurs
              combats et leurs réussites.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contenus" className="text-background/80 hover:text-primary transition-colors">
                  Contenus
                </Link>
              </li>
              <li>
                <Link href="/talents" className="text-background/80 hover:text-primary transition-colors">
                  Talents
                </Link>
              </li>
              <li>
                <Link href="/projets" className="text-background/80 hover:text-primary transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-background/80 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-background/80 hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-background/80 hover:text-primary transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 WeekendRealo. Tous droits réservés.</p>
          <p className="text-background/60 text-sm mt-4 md:mt-0">Inspire. Motiver. Réussir.</p>
        </div>
      </div>
    </footer>
  )
}
