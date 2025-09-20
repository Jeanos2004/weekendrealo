import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Check, X, Clock } from "lucide-react"

const talentRequests = [
  {
    id: 1,
    name: "Emma Rodriguez",
    age: 21,
    category: "Tech",
    description: "Développeuse IA passionnée par l'éthique technologique",
    status: "pending",
    submittedAt: "Il y a 2 jours",
    avatar: "/talent-request-1.jpg",
  },
  {
    id: 2,
    name: "Lucas Chen",
    age: 24,
    category: "Sport",
    description: "Athlète paralympique et coach motivationnel",
    status: "pending",
    submittedAt: "Il y a 3 jours",
    avatar: "/talent-request-2.jpg",
  },
  {
    id: 3,
    name: "Sophia Benali",
    age: 19,
    category: "Art & Culture",
    description: "Artiste urbaine engagée pour les droits humains",
    status: "pending",
    submittedAt: "Il y a 5 jours",
    avatar: "/talent-request-3.jpg",
  },
]

export function TalentRequests() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Demandes de talents</CardTitle>
        <CardDescription>Nouvelles candidatures à examiner</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {talentRequests.map((request) => (
            <div key={request.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-start space-x-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={request.avatar || "/placeholder.svg"} alt={request.name} />
                  <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{request.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {request.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {request.age} ans • {request.submittedAt}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{request.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>En attente</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="h-7 px-2 bg-transparent">
                    <X className="w-3 h-3 mr-1" />
                    Refuser
                  </Button>
                  <Button size="sm" className="h-7 px-2">
                    <Check className="w-3 h-3 mr-1" />
                    Accepter
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" size="sm" className="bg-transparent">
            Voir toutes les demandes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
