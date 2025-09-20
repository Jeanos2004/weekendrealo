"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BrutFeatured() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <Image
                src="/young-ambitious-entrepreneur-working-on-laptop-in-.jpg"
                alt="Documentaire WeekendRealo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90"
                >
                  <Play className="w-8 h-8 text-primary-foreground fill-current" />
                </Button>
              </div>

              {/* WeekendRealo logo */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                  WeekendRealo
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <span>Le long format</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Comment les jeunes entrepreneurs transforment l'économie
                française
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Découvrez l'histoire de ces jeunes ambitieux qui révolutionnent
                les secteurs traditionnels. De l'agriculture urbaine aux
                technologies vertes, ils créent un nouveau modèle économique
                plus durable et inclusif.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/contenus">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Play className="w-5 h-5 mr-2" />
                  Voir le documentaire
                </Button>
              </Link>
              <Link href="/soumettre">
                <Button variant="outline" size="lg" className="bg-transparent">
                  Partager votre histoire
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
