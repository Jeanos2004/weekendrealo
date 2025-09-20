import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageSquare, Share2, UserPlus, Video } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "like",
    user: "Marie Dubois",
    action: "a aimé votre contenu",
    content: "Sarah, 22 ans : De l'échec scolaire...",
    time: "Il y a 5 min",
    avatar: "/user-avatar-1.jpg",
    icon: Heart,
    iconColor: "text-red-500",
  },
  {
    id: 2,
    type: "comment",
    user: "Thomas Martin",
    action: "a commenté",
    content: "Marcus : Champion de boxe...",
    time: "Il y a 12 min",
    avatar: "/user-avatar-2.jpg",
    icon: MessageSquare,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    type: "share",
    user: "Léa Petit",
    action: "a partagé",
    content: "Léa et son projet d'agriculture...",
    time: "Il y a 1h",
    avatar: "/user-avatar-3.jpg",
    icon: Share2,
    iconColor: "text-green-500",
  },
  {
    id: 4,
    type: "follow",
    user: "Kevin Moreau",
    action: "suit maintenant WeekendRealo",
    content: "",
    time: "Il y a 2h",
    avatar: "/user-avatar-4.jpg",
    icon: UserPlus,
    iconColor: "text-purple-500",
  },
  {
    id: 5,
    type: "content",
    user: "Système",
    action: "Nouveau contenu publié",
    content: "Thomas : De SDF à entrepreneur...",
    time: "Il y a 3h",
    avatar: "/system-avatar.jpg",
    icon: Video,
    iconColor: "text-orange-500",
  },
]

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
        <CardDescription>Les dernières interactions sur votre plateforme</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                    <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center border border-border">
                    <Icon className={`w-2.5 h-2.5 ${activity.iconColor}`} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                    {activity.content && (
                      <>
                        {" "}
                        <span className="font-medium">"{activity.content}"</span>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
