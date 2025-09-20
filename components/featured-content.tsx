"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Clock, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const featuredContent = [
  {
    id: 1,
    title: "Sarah, 22 ans : De l'échec scolaire à la création de sa startup tech",
    description:
      "Comment Sarah a transformé ses difficultés en force pour créer une application qui aide les étudiants.",
    category: "Entrepreneuriat",
    duration: "8 min",
    views: "125K",
    thumbnail: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Marcus : Champion de boxe et étudiant en médecine",
    description: "L'histoire inspirante d'un jeune qui concilie sport de haut niveau et études exigeantes.",
    category: "Sport & Études",
    duration: "6 min",
    views: "89K",
    thumbnail: "/young-boxer-training-in-gym-with-medical-books.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Léa et son projet d'agriculture urbaine",
    description: "À 20 ans, elle révolutionne l'agriculture en ville avec ses jardins verticaux innovants.",
    category: "Innovation",
    duration: "7 min",
    views: "156K",
    thumbnail: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    featured: false,
  },
]

export function FeaturedContent() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contenus à la une</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les histoires inspirantes de jeunes qui transforment leurs rêves en réalité
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Featured Content */}
          <div className="lg:row-span-2">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={featuredContent[0].thumbnail || "/placeholder.svg"}
                  alt={featuredContent[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {featuredContent[0].category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredContent[0].duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{featuredContent[0].views}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredContent[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{featuredContent[0].description}</p>
              </div>
            </Card>
          </div>

          {/* Secondary Content */}
          <div className="space-y-6">
            {featuredContent.slice(1).map((content) => (
              <Card
                key={content.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex">
                  <div className="relative w-48 aspect-video overflow-hidden">
                    <img
                      src={content.thumbnail || "/placeholder.svg"}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="sm" className="rounded-full w-10 h-10">
                        <Play className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="mb-2">
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                        {content.category}
                      </span>
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {content.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{content.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{content.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{content.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contenus">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Voir tous les contenus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
