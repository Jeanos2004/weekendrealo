"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, Mail, Phone, MapPin, Star } from "lucide-react"

const talents = [
  {
    id: 1,
    name: "Amina Benali",
    email: "amina.benali@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
    domain: "Intelligence Artificielle",
    status: "Actif",
    rating: 4.8,
    projects: 3,
    avatar: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "marcus.j@email.com",
    phone: "+33 6 98 76 54 32",
    location: "Lyon, France",
    domain: "Éducation",
    status: "En attente",
    rating: 4.6,
    projects: 1,
    avatar: "/young-man-helping-homeless-community-center.jpg",
  },
  {
    id: 3,
    name: "Léa Dubois",
    email: "lea.dubois@email.com",
    phone: "+33 6 45 67 89 01",
    location: "Marseille, France",
    domain: "Agriculture urbaine",
    status: "Actif",
    rating: 4.9,
    projects: 5,
    avatar: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
  },
]

export default function TalentsDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "En attente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Inactif":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Gestion des Talents</h1>
          <p className="text-muted-foreground">Découvrez et gérez les jeunes talents ambitieux</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un talent
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="text-xl md:text-2xl font-bold text-primary">127</div>
            <p className="text-xs md:text-sm text-muted-foreground">Talents actifs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="text-xl md:text-2xl font-bold text-primary">23</div>
            <p className="text-xs md:text-sm text-muted-foreground">En attente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="text-xl md:text-2xl font-bold text-primary">4.7</div>
            <p className="text-xs md:text-sm text-muted-foreground">Note moyenne</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="text-xl md:text-2xl font-bold text-primary">89</div>
            <p className="text-xs md:text-sm text-muted-foreground">Projets réalisés</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un talent..."
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

      <div className="grid gap-4 md:gap-6">
        {talents.map((talent) => (
          <Card key={talent.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Avatar className="w-16 h-16 mx-auto sm:mx-0">
                  <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
                  <AvatarFallback>
                    {talent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{talent.name}</h3>
                      <div className="space-y-1 text-xs md:text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <Mail className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="truncate">{talent.email}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <Phone className="w-3 h-3 md:w-4 md:h-4" />
                          {talent.phone}
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          {talent.location}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {talent.domain}
                        </Badge>
                        <Badge className={`${getStatusColor(talent.status)} text-xs`}>{talent.status}</Badge>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-4 text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                          {talent.rating}
                        </div>
                        <span>{talent.projects} projets</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                        Contacter
                      </Button>
                      <Button size="sm" className="w-full sm:w-auto">
                        Voir profil
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
