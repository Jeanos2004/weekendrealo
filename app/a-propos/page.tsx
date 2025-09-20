import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Authenticité",
    description: "Nous croyons en la force des histoires vraies et des parcours authentiques.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Chaque contenu vise à inspirer et motiver notre communauté à passer à l'action.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Nous créons un espace bienveillant où chacun peut partager et grandir.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Nous explorons de nouvelles façons de raconter et partager les succès.",
  },
]

const team = [
  {
    name: "Alex Dubois",
    role: "Fondateur & CEO",
    description: "Passionné par les histoires inspirantes et l'entrepreneuriat social.",
    image: "/team-alex.jpg",
  },
  {
    name: "Marie Chen",
    role: "Directrice Contenu",
    description: "Experte en storytelling et production de contenus engageants.",
    image: "/team-marie.jpg",
  },
  {
    name: "Thomas Martin",
    role: "Responsable Communauté",
    description: "Spécialiste en développement communautaire et engagement digital.",
    image: "/team-thomas.jpg",
  },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">À PROPOS</h1>
              <p className="text-xl text-background/80 leading-relaxed">
                WeekendRealo est né d'une conviction : chaque jeune a une histoire inspirante à raconter. Notre mission
                est de donner une voix à ceux qui transforment leurs rêves en réalité.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque week-end, nous produisons des contenus authentiques qui mettent en lumière les jeunes ambitieux,
                leurs projets, leurs combats et leurs réussites. Notre objectif : inspirer, motiver et donner de la
                visibilité à ceux qui se battent pour réussir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2.4M+</div>
                <div className="text-muted-foreground">Vues totales</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">156</div>
                <div className="text-muted-foreground">Contenus produits</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">89</div>
                <div className="text-muted-foreground">Talents mis en avant</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Communauté engagée</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
              <p className="text-lg text-muted-foreground">
                Une équipe passionnée dédiée à mettre en lumière les talents de demain
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez l'aventure</h2>
            <p className="text-lg text-background/80 mb-8">
              Vous avez une histoire inspirante ? Un projet innovant ? Nous voulons vous entendre !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Devenir un talent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent border-background text-background hover:bg-background hover:text-foreground"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
