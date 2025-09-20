"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, X, Save, Eye, Send } from "lucide-react"

export default function NouveauContenu() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Créer un nouveau contenu</h1>
        <p className="text-muted-foreground">Partagez l'histoire d'un jeune talent ambitieux</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulaire principal */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations générales</CardTitle>
              <CardDescription>Les détails de base de votre contenu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Titre du contenu</Label>
                <Input
                  id="title"
                  placeholder="Ex: Portrait d'Amina - Développeuse IA"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="type">Type de contenu</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="reportage">Reportage</SelectItem>
                    <SelectItem value="success-story">Success Story</SelectItem>
                    <SelectItem value="behind-scenes">Behind the Scenes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description courte</Label>
                <Textarea
                  id="description"
                  placeholder="Une description accrocheuse de votre contenu..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contenu</CardTitle>
              <CardDescription>Le corps principal de votre article</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Racontez l'histoire de ce jeune talent..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="min-h-[300px]"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Ajoutez des mots-clés pour améliorer la découvrabilité</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ajouter un tag..."
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTag()}
                />
                <Button onClick={addTag} variant="outline">
                  Ajouter
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X className="w-3 h-3 cursor-pointer hover:text-destructive" onClick={() => removeTag(tag)} />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-transparent" variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder brouillon
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                Prévisualiser
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Publier
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Média</CardTitle>
              <CardDescription>Ajoutez des images ou vidéos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Glissez vos fichiers ici ou cliquez pour parcourir</p>
                <Button variant="outline" size="sm">
                  Choisir des fichiers
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Planification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="publish-date">Date de publication</Label>
                <Input id="publish-date" type="datetime-local" />
              </div>
              <div>
                <Label htmlFor="author">Auteur</Label>
                <Input id="author" placeholder="Nom de l'auteur" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
