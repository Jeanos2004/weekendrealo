"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, MoreVertical, Shield, User, Crown } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Sarah Martin",
    email: "sarah.martin@weekendrealo.com",
    role: "Admin",
    status: "Actif",
    lastLogin: "2024-01-20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    email: "thomas.dubois@weekendrealo.com",
    role: "Éditeur",
    status: "Actif",
    lastLogin: "2024-01-19",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Marie Leroy",
    email: "marie.leroy@weekendrealo.com",
    role: "Contributeur",
    status: "Inactif",
    lastLogin: "2024-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function UtilisateursDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return <Crown className="w-4 h-4" />
      case "Éditeur":
        return <Shield className="w-4 h-4" />
      case "Contributeur":
        return <User className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Éditeur":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Contributeur":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Inactif":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      case "Suspendu":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des utilisateurs</h1>
          <p className="text-muted-foreground">Gérez les accès et permissions de votre équipe</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Inviter un utilisateur
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-red-500" />
              <div className="text-2xl font-bold text-foreground">2</div>
            </div>
            <p className="text-sm text-muted-foreground">Administrateurs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <div className="text-2xl font-bold text-foreground">5</div>
            </div>
            <p className="text-sm text-muted-foreground">Éditeurs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-green-500" />
              <div className="text-2xl font-bold text-foreground">12</div>
            </div>
            <p className="text-sm text-muted-foreground">Contributeurs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">19</div>
            <p className="text-sm text-muted-foreground">Total utilisateurs</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtres et recherche */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un utilisateur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par rôle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les rôles</SelectItem>
                <SelectItem value="admin">Administrateur</SelectItem>
                <SelectItem value="editor">Éditeur</SelectItem>
                <SelectItem value="contributor">Contributeur</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Plus de filtres
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Liste des utilisateurs */}
      <Card>
        <CardHeader>
          <CardTitle>Utilisateurs</CardTitle>
          <CardDescription>Gérez les membres de votre équipe</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-foreground">{user.name}</h4>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">
                      Dernière connexion: {new Date(user.lastLogin).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge className={getRoleColor(user.role)} variant="secondary">
                      <div className="flex items-center gap-1">
                        {getRoleIcon(user.role)}
                        {user.role}
                      </div>
                    </Badge>
                    <Badge className={getStatusColor(user.status)} variant="secondary">
                      {user.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Permissions */}
      <Card>
        <CardHeader>
          <CardTitle>Rôles et permissions</CardTitle>
          <CardDescription>Définissez les accès pour chaque rôle</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-red-500" />
                <h4 className="font-medium">Administrateur</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Accès complet au dashboard</li>
                <li>• Gestion des utilisateurs</li>
                <li>• Configuration système</li>
                <li>• Analytics avancées</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-500" />
                <h4 className="font-medium">Éditeur</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Création de contenus</li>
                <li>• Modération</li>
                <li>• Gestion des talents</li>
                <li>• Analytics de base</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-green-500" />
                <h4 className="font-medium">Contributeur</h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Création de brouillons</li>
                <li>• Soumission pour révision</li>
                <li>• Accès limité aux données</li>
                <li>• Profil personnel</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
