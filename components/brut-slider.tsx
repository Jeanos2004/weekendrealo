"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

interface BrutSliderProps {
  title: string;
  items: ContentItem[];
  showViewAll?: boolean;
}

export function BrutSlider({
  title,
  items,
  showViewAll = true,
}: BrutSliderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex items-center space-x-4">
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

            {/* Navigation arrows */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll("left")}
                className="w-8 h-8 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll("right")}
                className="w-8 h-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Slider container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#e5e7eb transparent",
            }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                href="/contenus"
                className="group block flex-shrink-0 w-80"
              >
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

                    {/* WeekendRealo logo overlay */}
                    <div className="absolute top-2 right-2">
                      <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                        WeekendRealo
                      </div>
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

          {/* Scroll indicator */}
          <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "25%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
