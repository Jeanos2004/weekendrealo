"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink, Instagram, Linkedin, Twitter } from "lucide-react"

const talents = [
  {
    id: 1,
    name: "Sarah Dubois",
    age: 22,
    title: "Fondatrice de StudyBoost",
    location: "Paris, France",
    category: "Entrepreneuriat",
    description: "Créatrice d'une application d'aide aux devoirs qui compte déjà 50K utilisateurs.",
    achievements: ["50K utilisateurs", "Levée de fonds 500K€", "Prix Innovation 2024"],
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    social: {
      instagram: "@sarahdubois",
      linkedin: "sarah-dubois",
      twitter: "@sarah_dubois",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    age: 24,
    title: "Champion de boxe & Étudiant en médecine",
    location: "Lyon, France",
    category: "Sport",
    description: "Concilie sport de haut niveau et études de médecine avec brio.",
    achievements: ["Champion régional", "Major de promo", "Mentor sportif"],
    image: "/young-boxer-training-in-gym-with-medical-books.jpg",
    social: {
      instagram: "@marcus_boxing",
      linkedin: "marcus-johnson",
    },
  },
  {
    id: 3,
    name: "Léa Martin",
    age: 20,
    title: "Pionnière de l'agriculture urbaine",
    location: "Marseille, France",
    category: "Innovation",
    description: "Révolutionne l'agriculture urbaine avec ses jardins verticaux innovants.",
    achievements: ["10 jardins installés", "Partenariat mairie", "Prix Écologie 2024"],
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    social: {
      instagram: "@lea_urban_farm",
      linkedin: "lea-martin",
      twitter: "@lea_green",
    },
  },
  {
    id: 4,
    name: "Thomas Petit",
    age: 26,
    title: "Entrepreneur social",
    location: "Bordeaux, France",
    category: "Impact Social",
    description: "Aide les personnes en difficulté à travers son association.",
    achievements: ["500 personnes aidées", "3 centres ouverts", "Reconnaissance nationale"],
    image: "/young-man-helping-homeless-community-center.jpg",
    social: {
      linkedin: "thomas-petit-social",
    },
  },
  {
    id: 5,
    name: "Maya Chen",
    age: 23,
    title: "Artiste digitale & Militante",
    location: "Toulouse, France",
    category: "Art & Culture",
    description: "Utilise l'art numérique pour sensibiliser aux enjeux environnementaux.",
    achievements: ["100K followers", "5 expositions", "Collaboration ONG"],
    image: "/young-digital-artist-creating-environmental-art.jpg",
    social: {
      instagram: "@maya_digital_art",
      twitter: "@maya_eco_art",
    },
  },
  {
    id: 6,
    name: "Kevin Moreau",
    age: 19,
    title: "Développeur full-stack autodidacte",
    location: "Nantes, France",
    category: "Tech",
    description: "Maîtrise le développement web en 18 mois d'apprentissage intensif.",
    achievements: ["5 projets lancés", "Freelance à succès", "Mentor coding"],
    image: "/young-developer-coding-multiple-screens.jpg",
    social: {
      linkedin: "kevin-moreau-dev",
      twitter: "@kevin_codes",
    },
  },
]

export function TalentsGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Talent */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Talent à l'honneur</h2>
          {talents
            .filter((t) => t.featured)
            .map((talent) => (
              <Card key={talent.id} className="overflow-hidden border-0 shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-square lg:aspect-auto overflow-hidden">
                    <img
                      src={talent.image || "/placeholder.svg"}
                      alt={talent.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-primary-foreground">{talent.category}</Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{talent.name}</h3>
                        <p className="text-xl text-primary font-semibold mb-2">{talent.title}</p>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{talent.location}</span>
                          <span className="mx-2">•</span>
                          <span>{talent.age} ans</span>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">{talent.description}</p>

                      <div>
                        <h4 className="font-semibold mb-3">Réalisations clés</h4>
                        <div className="flex flex-wrap gap-2">
                          {talent.achievements.map((achievement, index) => (
                            <Badge key={index} variant="secondary">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Button>
                          Voir son histoire
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>

                        <div className="flex space-x-2">
                          {talent.social.instagram && (
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <Instagram className="w-4 h-4" />
                            </Button>
                          )}
                          {talent.social.linkedin && (
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <Linkedin className="w-4 h-4" />
                            </Button>
                          )}
                          {talent.social.twitter && (
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <Twitter className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* All Talents Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Tous nos talents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talents.map((talent) => (
              <Card
                key={talent.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={talent.image || "/placeholder.svg"}
                    alt={talent.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/50 text-white border-0">{talent.category}</Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{talent.name}</h3>
                    <p className="text-sm opacity-90">{talent.title}</p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-1">
                      {talent.social.instagram && (
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Instagram className="w-4 h-4" />
                        </Button>
                      )}
                      {talent.social.linkedin && (
                        <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{talent.location}</span>
                    <span className="mx-2">•</span>
                    <span>{talent.age} ans</span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">{talent.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {talent.achievements.slice(0, 2).map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Découvrir son parcours
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Vous aussi, partagez votre histoire</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté de jeunes talents et inspirez des milliers de personnes avec votre parcours
            </p>
            <Button size="lg" className="px-8">
              Candidater comme talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
