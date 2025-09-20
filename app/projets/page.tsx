import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Calendar, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "StudyBoost - Application d'aide aux devoirs",
    description: "Une plateforme collaborative qui connecte les étudiants pour s'entraider dans leurs études.",
    founder: "Sarah Dubois",
    category: "EdTech",
    status: "En cours",
    participants: "50K+",
    location: "Paris, France",
    startDate: "2024",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    tags: ["Application", "Éducation", "Collaboration"],
  },
  {
    id: 2,
    title: "BoxMed - Formation médicale par le sport",
    description: "Programme innovant qui utilise la boxe pour enseigner l'anatomie et la physiologie.",
    founder: "Marcus Johnson",
    category: "Sport & Santé",
    status: "Pilote",
    participants: "200+",
    location: "Lyon, France",
    startDate: "2024",
    image: "/young-boxer-training-in-gym-with-medical-books.jpg",
    tags: ["Formation", "Sport", "Médecine"],
  },
  {
    id: 3,
    title: "VertiFarm - Jardins urbains verticaux",
    description: "Révolutionner l'agriculture urbaine avec des systèmes de culture verticale intelligents.",
    founder: "Léa Martin",
    category: "GreenTech",
    status: "Expansion",
    participants: "1K+",
    location: "Marseille, France",
    startDate: "2023",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    tags: ["Agriculture", "Durabilité", "Innovation"],
  },
  {
    id: 4,
    title: "SolidaireHub - Réseau d'entraide sociale",
    description: "Plateforme qui connecte les personnes en difficulté avec des bénévoles et des ressources.",
    founder: "Thomas Petit",
    category: "Impact Social",
    status: "National",
    participants: "5K+",
    location: "Bordeaux, France",
    startDate: "2023",
    image: "/young-man-helping-homeless-community-center.jpg",
    tags: ["Social", "Entraide", "Communauté"],
  },
]

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">PROJETS</h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Découvrez les projets innovants portés par nos talents. Des initiatives qui changent le monde, une idée
                à la fois.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant={project.status === "National" ? "default" : "outline"}>{project.status}</Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{project.participants} participants</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Lancé en {project.startDate}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Par {project.founder}</span>
                      <Button size="sm">
                        En savoir plus
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous avez un projet innovant ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoignez notre communauté et donnez vie à vos idées avec le soutien de WeekendRealo
            </p>
            <Button size="lg" className="px-8">
              Soumettre mon projet
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
