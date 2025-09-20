"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, Eye, TrendingUp } from "lucide-react"

const recentContent = [
  {
    id: 1,
    title: "Sarah, 22 ans : De l'échec scolaire à la création de sa startup tech",
    status: "published",
    views: "125K",
    engagement: "2.1K",
    publishedAt: "Il y a 2 jours",
    thumbnail: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
  },
  {
    id: 2,
    title: "Marcus : Champion de boxe et étudiant en médecine",
    status: "published",
    views: "89K",
    engagement: "1.8K",
    publishedAt: "Il y a 4 jours",
    thumbnail: "/young-boxer-training-in-gym-with-medical-books.jpg",
  },
  {
    id: 3,
    title: "Léa et son projet d'agriculture urbaine",
    status: "draft",
    views: "0",
    engagement: "0",
    publishedAt: "Brouillon",
    thumbnail: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
  },
  {
    id: 4,
    title: "Thomas : De SDF à entrepreneur social",
    status: "scheduled",
    views: "0",
    engagement: "0",
    publishedAt: "Programmé pour demain",
    thumbnail: "/young-man-helping-homeless-community-center.jpg",
  },
]

const statusConfig = {
  published: { label: "Publié", variant: "default" as const },
  draft: { label: "Brouillon", variant: "secondary" as const },
  scheduled: { label: "Programmé", variant: "outline" as const },
}

export function ContentManager() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Gestion des contenus</CardTitle>
        <CardDescription>Gérez vos contenus récents et leurs performances</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentContent.map((content) => (
            <div key={content.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={content.thumbnail || "/placeholder.svg"}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2 mb-2">{content.title}</h4>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <Badge variant={statusConfig[content.status as keyof typeof statusConfig].variant}>
                    {statusConfig[content.status as keyof typeof statusConfig].label}
                  </Badge>
                  <span>{content.publishedAt}</span>
                  {content.status === "published" && (
                    <>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{content.engagement}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Modifier
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    Voir
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Supprimer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" className="bg-transparent">
            Voir tous les contenus
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
