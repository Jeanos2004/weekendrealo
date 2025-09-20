"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, TrendingUp, Users, Heart, Share2, Bookmark } from "lucide-react"
import { useState } from "react"

const contentData = [
  {
    id: 1,
    title: "Sarah, 22 ans : De l'échec scolaire à la création de sa startup tech",
    description:
      "Comment Sarah a transformé ses difficultés en force pour créer une application qui aide les étudiants.",
    category: "Entrepreneuriat",
    duration: "8 min",
    views: "125K",
    likes: "2.1K",
    publishedAt: "Il y a 2 jours",
    thumbnail: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Marcus : Champion de boxe et étudiant en médecine",
    description: "L'histoire inspirante d'un jeune qui concilie sport de haut niveau et études exigeantes.",
    category: "Sport",
    duration: "6 min",
    views: "89K",
    likes: "1.8K",
    publishedAt: "Il y a 4 jours",
    thumbnail: "/young-boxer-training-in-gym-with-medical-books.jpg",
  },
  {
    id: 3,
    title: "Léa et son projet d'agriculture urbaine",
    description: "À 20 ans, elle révolutionne l'agriculture en ville avec ses jardins verticaux innovants.",
    category: "Innovation",
    duration: "7 min",
    views: "156K",
    likes: "3.2K",
    publishedAt: "Il y a 1 semaine",
    thumbnail: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
  },
  {
    id: 4,
    title: "Thomas : De SDF à entrepreneur social",
    description: "Le parcours bouleversant d'un jeune qui aide maintenant d'autres personnes en difficulté.",
    category: "Impact Social",
    duration: "12 min",
    views: "234K",
    likes: "5.1K",
    publishedAt: "Il y a 1 semaine",
    thumbnail: "/young-man-helping-homeless-community-center.jpg",
  },
  {
    id: 5,
    title: "Maya : Artiste digitale et militante écolo",
    description: "Comment l'art numérique peut sensibiliser aux enjeux environnementaux.",
    category: "Art & Culture",
    duration: "9 min",
    views: "67K",
    likes: "1.4K",
    publishedAt: "Il y a 2 semaines",
    thumbnail: "/young-digital-artist-creating-environmental-art.jpg",
  },
  {
    id: 6,
    title: "Kevin : Développeur autodidacte à 19 ans",
    description: "De zéro à développeur full-stack en 18 mois, son parcours d'apprentissage.",
    category: "Tech",
    duration: "10 min",
    views: "198K",
    likes: "4.2K",
    publishedAt: "Il y a 2 semaines",
    thumbnail: "/young-developer-coding-multiple-screens.jpg",
  },
]

export function ContentGrid() {
  const [likedContent, setLikedContent] = useState<number[]>([])
  const [bookmarkedContent, setBookmarkedContent] = useState<number[]>([])

  const toggleLike = (contentId: number) => {
    setLikedContent((prev) => (prev.includes(contentId) ? prev.filter((id) => id !== contentId) : [...prev, contentId]))
  }

  const toggleBookmark = (contentId: number) => {
    setBookmarkedContent((prev) =>
      prev.includes(contentId) ? prev.filter((id) => id !== contentId) : [...prev, contentId],
    )
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">À la une</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {contentData.slice(0, 3).map((content) => (
              <Card
                key={content.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {content.category}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current" />
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{content.views}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full w-8 h-8 p-0"
                      onClick={() => toggleBookmark(content.id)}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedContent.includes(content.id) ? "fill-current" : ""}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full w-8 h-8 p-0">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{content.publishedAt}</span>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{content.views}</span>
                      </div>
                      <button
                        onClick={() => toggleLike(content.id)}
                        className={`flex items-center space-x-1 hover:text-primary transition-colors ${
                          likedContent.includes(content.id) ? "text-primary" : ""
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedContent.includes(content.id) ? "fill-current" : ""}`} />
                        <span>{content.likes}</span>
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {content.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{content.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Content */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Tous les contenus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentData.map((content) => (
              <Card
                key={content.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute top-3 left-3">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      {content.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-5 h-5 fill-current" />
                    </Button>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white text-xs">{content.duration}</div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">{content.publishedAt}</span>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <span>{content.views}</span>
                      <button
                        onClick={() => toggleLike(content.id)}
                        className={`flex items-center space-x-1 hover:text-primary transition-colors ${
                          likedContent.includes(content.id) ? "text-primary" : ""
                        }`}
                      >
                        <Heart className={`w-3 h-3 ${likedContent.includes(content.id) ? "fill-current" : ""}`} />
                        <span>{content.likes}</span>
                      </button>
                    </div>
                  </div>

                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {content.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{content.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Charger plus de contenus
          </Button>
        </div>
      </div>
    </section>
  )
}
