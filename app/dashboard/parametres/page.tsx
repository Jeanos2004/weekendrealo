"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Settings, Shield, Palette, Bell, Save, Upload } from "lucide-react"

export default function ParametresDashboard() {
  const [profile, setProfile] = useState({
    name: "Admin WeekendRealo",
    email: "admin@weekendrealo.com",
    bio: "Passionné par les jeunes talents et l'innovation",
    location: "Paris, France",
    website: "https://weekendrealo.com",
  })

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    darkMode: false,
    language: "fr",
    timezone: "Europe/Paris",
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
        <p className="text-muted-foreground">Gérez vos préférences et configuration</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Général
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Sécurité
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Apparence
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du profil</CardTitle>
              <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                  <AvatarFallback>AW</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" className="mb-2 bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Changer la photo
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, PNG ou GIF. Taille maximale: 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="website">Site web</Label>
                  <Input
                    id="website"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Biographie</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                />
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder les modifications
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres généraux</CardTitle>
              <CardDescription>Configuration de base de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="language">Langue</Label>
                  <Select
                    value={settings.language}
                    onValueChange={(value) => setSettings({ ...settings, language: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timezone">Fuseau horaire</Label>
                  <Select
                    value={settings.timezone}
                    onValueChange={(value) => setSettings({ ...settings, timezone: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Paris">Europe/Paris</SelectItem>
                      <SelectItem value="Europe/London">Europe/London</SelectItem>
                      <SelectItem value="America/New_York">America/New_York</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rapport hebdomadaire</Label>
                    <p className="text-sm text-muted-foreground">Recevez un résumé chaque semaine</p>
                  </div>
                  <Switch
                    checked={settings.weeklyReport}
                    onCheckedChange={(checked) => setSettings({ ...settings, weeklyReport: checked })}
                  />
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité du compte</CardTitle>
              <CardDescription>Gérez la sécurité de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-4">Changer le mot de passe</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Mot de passe actuel</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">Nouveau mot de passe</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button variant="outline">Changer le mot de passe</Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Authentification à deux facteurs</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Sécurisez votre compte avec 2FA</p>
                    <Badge variant="outline" className="mt-2">
                      Non configuré
                    </Badge>
                  </div>
                  <Button variant="outline">Configurer</Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Sessions actives</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Session actuelle</p>
                      <p className="text-sm text-muted-foreground">Paris, France • Chrome</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Actuelle</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Apparence</CardTitle>
              <CardDescription>Personnalisez l'apparence de votre dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Thème</Label>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <div className="w-full h-20 bg-white border rounded mb-2"></div>
                    <p className="text-sm text-center">Clair</p>
                  </div>
                  <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <div className="w-full h-20 bg-gray-900 border rounded mb-2"></div>
                    <p className="text-sm text-center">Sombre</p>
                  </div>
                  <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                    <div className="w-full h-20 bg-gradient-to-br from-white to-gray-900 border rounded mb-2"></div>
                    <p className="text-sm text-center">Auto</p>
                  </div>
                </div>
              </div>

              <div>
                <Label>Couleur d'accent</Label>
                <div className="flex gap-2 mt-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full cursor-pointer border-2 border-red-500"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notifications</CardTitle>
              <CardDescription>Choisissez comment vous souhaitez être notifié</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications par email</Label>
                    <p className="text-sm text-muted-foreground">Recevez des notifications par email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Notifications push</Label>
                    <p className="text-sm text-muted-foreground">Notifications dans le navigateur</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                  />
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
