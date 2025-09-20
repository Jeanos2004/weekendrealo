"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function BrutHero() {
  return (
    <section className="relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Story */}
          <div className="space-y-4">
            {/* Live Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                En direct
              </span>
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/young-ambitious-entrepreneur-working-on-laptop-in-.jpg"
                alt="Jeune entrepreneur ambitieux"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Les jeunes entrepreneurs transforment l'économie française
                </h1>
                <p className="text-white/90 mt-2 text-sm">
                  Découvrez comment la nouvelle génération révolutionne les
                  secteurs traditionnels
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Link href="/contenus">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Play className="w-4 h-4 mr-2" />
                  Voir le contenu
                </Button>
              </Link>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Il y a 2h</span>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Les articles de la rédaction
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80"
              >
                Tout voir
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  title:
                    "Ultra Premium Direct : le bien-être animal pour mission",
                  image: "/young-boxer-training-in-gym-with-medical-books.jpg",
                  time: "Il y a 3h",
                },
                {
                  title: "Les jeunes qui révolutionnent l'agriculture urbaine",
                  image:
                    "/young-woman-in-urban-garden-with-vertical-farming.jpg",
                  time: "Il y a 5h",
                },
                {
                  title: "Comment l'IA transforme l'art contemporain",
                  image: "/young-digital-artist-creating-environmental-art.jpg",
                  time: "Il y a 7h",
                },
                {
                  title:
                    "Startup tech : la nouvelle génération prend le pouvoir",
                  image:
                    "/young-woman-entrepreneur-presenting-tech-startup.jpg",
                  time: "Il y a 9h",
                },
              ].map((article, index) => (
                <Link key={index} href="/contenus" className="group block">
                  <div className="flex space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="relative w-20 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {article.time}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
