"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, TrendingDown, Eye, Heart, Share2, MessageCircle, Download } from "lucide-react"

const viewsData = [
  { name: "Jan", vues: 4000, engagements: 2400 },
  { name: "Fév", vues: 3000, engagements: 1398 },
  { name: "Mar", vues: 2000, engagements: 9800 },
  { name: "Avr", vues: 2780, engagements: 3908 },
  { name: "Mai", vues: 1890, engagements: 4800 },
  { name: "Juin", vues: 2390, engagements: 3800 },
]

const contentTypeData = [
  { name: "Portraits", value: 45, color: "#FF0000" },
  { name: "Interviews", value: 30, color: "#000000" },
  { name: "Reportages", value: 15, color: "#666666" },
  { name: "Success Stories", value: 10, color: "#999999" },
]

const topContent = [
  {
    title: "Portrait d'Amina - Développeuse IA",
    views: 12500,
    likes: 890,
    shares: 234,
    comments: 67,
    trend: "up",
  },
  {
    title: "Le combat de Marcus pour l'éducation",
    views: 8900,
    likes: 654,
    shares: 189,
    comments: 45,
    trend: "up",
  },
  {
    title: "Innovation verte avec Léa",
    views: 7200,
    likes: 432,
    shares: 156,
    comments: 38,
    trend: "down",
  },
]

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Analysez les performances de vos contenus</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Select defaultValue="30days">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Période" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 derniers jours</SelectItem>
              <SelectItem value="30days">30 derniers jours</SelectItem>
              <SelectItem value="90days">90 derniers jours</SelectItem>
              <SelectItem value="1year">1 an</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            <span className="sm:hidden">Exporter les données</span>
            <span className="hidden sm:inline">Exporter</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Vues totales</p>
                <div className="text-2xl font-bold text-foreground">127,543</div>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </div>
              </div>
              <Eye className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Engagements</p>
                <div className="text-2xl font-bold text-foreground">8,942</div>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8.2%
                </div>
              </div>
              <Heart className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Partages</p>
                <div className="text-2xl font-bold text-foreground">2,156</div>
                <div className="flex items-center text-sm text-red-600">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -3.1%
                </div>
              </div>
              <Share2 className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Commentaires</p>
                <div className="text-2xl font-bold text-foreground">1,234</div>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +15.3%
                </div>
              </div>
              <MessageCircle className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Graphique des vues */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Évolution des vues et engagements</CardTitle>
            <CardDescription>Performances sur les 6 derniers mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <BarChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vues" fill="#FF0000" />
                <Bar dataKey="engagements" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Répartition par type de contenu */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Répartition par type de contenu</CardTitle>
            <CardDescription>Distribution des contenus publiés</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <PieChart>
                <Pie
                  data={contentTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top contenus */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Contenus les plus performants</CardTitle>
          <CardDescription>Vos meilleurs contenus ce mois-ci</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topContent.map((content, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">{content.title}</h4>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      {content.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 md:w-4 md:h-4" />
                      {content.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                      {content.shares}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
                      {content.comments}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2">
                  {content.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                  )}
                  <Badge variant="outline">#{index + 1}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
