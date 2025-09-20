"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Check, X, Settings, Mail, MessageSquare, Calendar, TrendingUp } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "message",
    title: "Nouveau message de Marcus Johnson",
    description: "Pouvons-nous reprogrammer notre rendez-vous ?",
    time: "Il y a 5 minutes",
    read: false,
    avatar: "/young-man-helping-homeless-community-center.jpg",
  },
  {
    id: 2,
    type: "content",
    title: "Contenu publié avec succès",
    description: "Portrait d'Amina - Développeuse IA est maintenant en ligne",
    time: "Il y a 2 heures",
    read: false,
    avatar: null,
  },
  {
    id: 3,
    type: "analytics",
    title: "Pic de trafic détecté",
    description: "Votre contenu sur l'innovation verte a généré +200% de vues",
    time: "Il y a 4 heures",
    read: true,
    avatar: null,
  },
  {
    id: 4,
    type: "calendar",
    title: "Rappel: Interview avec Léa",
    description: "Rendez-vous prévu demain à 14h00",
    time: "Il y a 1 jour",
    read: true,
    avatar: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
  },
]

const notificationSettings = [
  {
    category: "Messages",
    description: "Notifications pour les nouveaux messages",
    email: true,
    push: true,
    icon: MessageSquare,
  },
  {
    category: "Contenus",
    description: "Mises à jour sur vos contenus",
    email: true,
    push: false,
    icon: Mail,
  },
  {
    category: "Calendrier",
    description: "Rappels d'événements",
    email: true,
    push: true,
    icon: Calendar,
  },
  {
    category: "Analytics",
    description: "Rapports de performance",
    email: false,
    push: false,
    icon: TrendingUp,
  },
]

export default function NotificationsDashboard() {
  const [settings, setSettings] = useState(notificationSettings)

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="w-5 h-5 text-blue-500" />
      case "content":
        return <Mail className="w-5 h-5 text-green-500" />
      case "analytics":
        return <TrendingUp className="w-5 h-5 text-purple-500" />
      case "calendar":
        return <Calendar className="w-5 h-5 text-orange-500" />
      default:
        return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  const markAsRead = (id: number) => {
    // Logique pour marquer comme lu
  }

  const markAllAsRead = () => {
    // Logique pour marquer tout comme lu
  }

  const updateSetting = (index: number, type: "email" | "push", value: boolean) => {
    const newSettings = [...settings]
    newSettings[index][type] = value
    setSettings(newSettings)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">Gérez vos notifications et préférences</p>
        </div>
        <Button onClick={markAllAsRead} variant="outline">
          <Check className="w-4 h-4 mr-2" />
          Tout marquer comme lu
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications récentes */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications récentes
              </CardTitle>
              <CardDescription>Vos dernières notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                    !notification.read ? "bg-muted/50" : "hover:bg-muted/25"
                  }`}
                >
                  <div className="flex-shrink-0">
                    {notification.avatar ? (
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={notification.avatar || "/placeholder.svg"} alt="Avatar" />
                        <AvatarFallback>{getNotificationIcon(notification.type)}</AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!notification.read && <Badge className="bg-primary text-primary-foreground">Nouveau</Badge>}
                        <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)}>
                          {notification.read ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Paramètres de notifications */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Paramètres
              </CardTitle>
              <CardDescription>Configurez vos préférences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {settings.map((setting, index) => (
                <div key={setting.category} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <setting.icon className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium text-foreground">{setting.category}</h4>
                      <p className="text-xs text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`email-${index}`} className="text-sm">
                        Email
                      </Label>
                      <Switch
                        id={`email-${index}`}
                        checked={setting.email}
                        onCheckedChange={(checked) => updateSetting(index, "email", checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`push-${index}`} className="text-sm">
                        Push
                      </Label>
                      <Switch
                        id={`push-${index}`}
                        checked={setting.push}
                        onCheckedChange={(checked) => updateSetting(index, "push", checked)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Statistiques */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Non lues</span>
                <Badge className="bg-primary text-primary-foreground">
                  {notifications.filter((n) => !n.read).length}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Cette semaine</span>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ce mois</span>
                <span className="text-sm font-medium">47</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
