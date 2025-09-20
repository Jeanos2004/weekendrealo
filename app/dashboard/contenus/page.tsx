"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Edit, Trash2, Eye, Calendar, User } from "lucide-react"

const contenus = [
  {
    id: 1,
    title: "Portrait d'Amina - Développeuse IA",
    type: "Portrait",
    status: "Publié",
    views: 2450,
    date: "2024-01-15",
    author: "Équipe WeekendRealo",
    thumbnail: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
  },
  {
    id: 2,
    title: "Le combat de Marcus pour l'éducation",
    type: "Reportage",
    status: "Brouillon",
    views: 0,
    date: "2024-01-14",
    author: "Sarah Martin",
    thumbnail: "/young-man-helping-homeless-community-center.jpg",
  },
  {
    id: 3,
    title: "Innovation verte avec Léa",
    type: "Interview",
    status: "En révision",
    views: 1200,
    date: "2024-01-13",
    author: "Thomas Dubois",
    thumbnail: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
  },
]

export default function ContenusDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publié":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Brouillon":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "En révision":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gestion des Contenus</h1>
          <p className="text-muted-foreground">Gérez tous vos contenus WeekendRealo</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Nouveau contenu
        </Button>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un contenu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Liste des contenus */}
      <div className="grid gap-4 md:gap-6">
        {contenus.map((contenu) => (
          <Card key={contenu.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <img
                  src={contenu.thumbnail || "/placeholder.svg"}
                  alt={contenu.title}
                  className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 object-cover rounded-lg"
                />
                <div className="flex-1 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{contenu.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="truncate max-w-[120px] md:max-w-none">{contenu.author}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {new Date(contenu.date).toLocaleDateString("fr-FR")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3 md:w-4 md:h-4" />
                          {contenu.views} vues
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {contenu.type}
                        </Badge>
                        <Badge className={`${getStatusColor(contenu.status)} text-xs`}>{contenu.status}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2 self-end lg:self-start">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive h-8 w-8 p-0">
                        <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
