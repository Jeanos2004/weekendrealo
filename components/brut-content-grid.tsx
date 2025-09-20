"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ContentItem {
  id: string;
  title: string;
  image: string;
  duration?: string;
  category: string;
  time: string;
}

interface BrutContentGridProps {
  title: string;
  items: ContentItem[];
  showViewAll?: boolean;
}

export function BrutContentGrid({
  title,
  items,
  showViewAll = true,
}: BrutContentGridProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          {showViewAll && (
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80"
            >
              Tout voir
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item.id} href="/contenus" className="group block">
              <div className="space-y-3">
                {/* Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground fill-current" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  {item.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Données d'exemple pour les différentes catégories
export const talentsData: ContentItem[] = [
  {
    id: "1",
    title: "Marie, 24 ans, révolutionne l'agriculture urbaine",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "3:45",
    category: "Talents",
    time: "Il y a 2h",
  },
  {
    id: "2",
    title: "Lucas, développeur, crée une app pour les malentendants",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "4:12",
    category: "Talents",
    time: "Il y a 5h",
  },
  {
    id: "3",
    title: "Sarah, artiste digitale, utilise l'IA pour l'art environnemental",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "5:30",
    category: "Talents",
    time: "Il y a 8h",
  },
  {
    id: "4",
    title: "Ahmed, entrepreneur, lance une startup tech durable",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "6:15",
    category: "Talents",
    time: "Il y a 12h",
  },
];

export const projetsData: ContentItem[] = [
  {
    id: "1",
    title: "Fermes verticales : l'avenir de l'agriculture",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "8:20",
    category: "Projets",
    time: "Il y a 1h",
  },
  {
    id: "2",
    title: "Application mobile pour l'accessibilité",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "7:45",
    category: "Projets",
    time: "Il y a 4h",
  },
  {
    id: "3",
    title: "Art numérique et protection de l'environnement",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "9:10",
    category: "Projets",
    time: "Il y a 6h",
  },
  {
    id: "4",
    title: "Plateforme de financement participatif écologique",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "10:30",
    category: "Projets",
    time: "Il y a 10h",
  },
];
