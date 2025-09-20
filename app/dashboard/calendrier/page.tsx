"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Interview avec Marcus",
    type: "Interview",
    date: "2024-01-20",
    time: "14:00",
    location: "Lyon",
    status: "Confirmé",
  },
  {
    id: 2,
    title: "Tournage portrait Léa",
    type: "Tournage",
    date: "2024-01-22",
    time: "10:00",
    location: "Marseille",
    status: "En attente",
  },
  {
    id: 3,
    title: "Publication - Portrait Amina",
    type: "Publication",
    date: "2024-01-25",
    time: "09:00",
    location: "En ligne",
    status: "Planifié",
  },
]

export default function CalendrierDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmé":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "En attente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Planifié":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Tournage":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "Publication":
        return "bg-primary/10 text-primary"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendrier éditorial</h1>
          <p className="text-muted-foreground">Planifiez et organisez vos contenus WeekendRealo</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nouvel événement
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendrier */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Janvier 2024
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className="p-2 text-center text-sm hover:bg-muted rounded-md cursor-pointer min-h-[40px] flex items-center justify-center"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Événements à venir */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Événements à venir</CardTitle>
              <CardDescription>Vos prochains rendez-vous</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium text-foreground">{event.title}</h4>
                    <Badge className={getStatusColor(event.status)} variant="secondary">
                      {event.status}
                    </Badge>
                  </div>
                  <Badge className={getTypeColor(event.type)} variant="outline">
                    {event.type}
                  </Badge>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString("fr-FR")}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistiques du mois */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-sm text-muted-foreground">Événements ce mois</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">5</div>
            <p className="text-sm text-muted-foreground">Publications prévues</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-sm text-muted-foreground">Interviews planifiées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-sm text-muted-foreground">Tournages à venir</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
