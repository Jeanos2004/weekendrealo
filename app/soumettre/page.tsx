"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, CheckCircle } from "lucide-react"

export default function SoumettePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="min-h-[80vh] flex items-center justify-center px-4">
            <Card className="max-w-md text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Candidature envoyée !</h2>
                <p className="text-muted-foreground mb-6">
                  Merci pour votre candidature. Notre équipe va l'examiner et vous recontactera sous 48h.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="bg-transparent">
                  Soumettre une autre candidature
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">SOUMETTRE UN PROJET</h1>
            <p className="text-xl text-background/80 leading-relaxed">
              Partagez votre histoire inspirante avec notre communauté. Nous mettons en lumière les jeunes talents qui
              transforment leurs rêves en réalité.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Candidature Talent</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour nous présenter votre parcours et votre projet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Âge *</Label>
                      <Input id="age" type="number" min="16" max="35" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ville *</Label>
                      <Input id="location" placeholder="Paris, France" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Catégorie *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entrepreneuriat">Entrepreneuriat</SelectItem>
                        <SelectItem value="tech">Tech</SelectItem>
                        <SelectItem value="sport">Sport</SelectItem>
                        <SelectItem value="art">Art & Culture</SelectItem>
                        <SelectItem value="social">Impact Social</SelectItem>
                        <SelectItem value="innovation">Innovation</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Titre de votre projet/parcours *</Label>
                    <Input id="title" placeholder="Ex: De l'échec scolaire à la création de ma startup" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Décrivez votre parcours *</Label>
                    <Textarea
                      id="description"
                      placeholder="Racontez-nous votre histoire, vos défis, vos réussites..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements">Vos principales réalisations *</Label>
                    <Textarea
                      id="achievements"
                      placeholder="Listez vos accomplishments, prix, reconnaissances..."
                      className="min-h-[80px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Pourquoi voulez-vous rejoindre WeekendRealo ? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Expliquez votre motivation et ce que vous espérez apporter à la communauté"
                      className="min-h-[80px]"
                      required
                    />
                  </div>

                  {/* Social Media */}
                  <div className="space-y-4">
                    <Label>Réseaux sociaux (optionnel)</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input id="instagram" placeholder="@votre_compte" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input id="linkedin" placeholder="votre-profil" />
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Photos/Vidéos (optionnel)</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Glissez vos fichiers ici ou cliquez pour sélectionner
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Formats acceptés: JPG, PNG, MP4 (max 10MB)</p>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm leading-relaxed">
                      J'accepte que mes données soient utilisées par WeekendRealo pour examiner ma candidature et
                      potentiellement créer du contenu autour de mon parcours. *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                      Je souhaite recevoir la newsletter WeekendRealo avec les derniers contenus et actualités.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer ma candidature
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
