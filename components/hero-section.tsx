"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Chaque week-end, de nouveaux talents</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">WEEKEND</span>
                <span className="block text-primary">REALO</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Production de contenus pour mettre en lumière les{" "}
                <span className="text-primary font-semibold">jeunes ambitieux</span>, leurs projets, leurs combats et
                leurs <span className="text-primary font-semibold">réussites</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contenus">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Découvrir les contenus
                </Button>
              </Link>

              <Link href="/soumettre">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 group bg-transparent">
                  Soumettre mon projet
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Talents mis en avant</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projets soutenus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Vues générées</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden">
                <img
                  src="/young-ambitious-entrepreneur-working-on-laptop-in-.jpg"
                  alt="Jeune entrepreneur ambitieux"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Nouveau contenu</div>
                    <div className="text-xs text-muted-foreground">Il y a 2h</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="text-2xl font-bold text-primary">+25%</div>
                <div className="text-xs text-muted-foreground">Engagement cette semaine</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
