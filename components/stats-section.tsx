"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Play, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Jeunes talents mis en avant",
    description: "Des histoires inspirantes chaque week-end",
  },
  {
    icon: Play,
    value: "1M+",
    label: "Vues générées",
    description: "Impact et visibilité pour nos talents",
  },
  {
    icon: Award,
    value: "50+",
    label: "Projets soutenus",
    description: "Accompagnement concret vers la réussite",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Taux de réussite",
    description: "Des jeunes qui concrétisent leurs ambitions",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Notre impact en chiffres</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WeekendRealo transforme l'ambition en réussite concrète
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Prêt à partager ton histoire ?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoins la communauté WeekendRealo et inspire des milliers de jeunes avec ton parcours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Soumettre mon projet
              </button>
              <button className="border border-border px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
