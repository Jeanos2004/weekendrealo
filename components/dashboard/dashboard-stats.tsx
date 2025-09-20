import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Video, Heart, Eye, MessageSquare } from "lucide-react"

const stats = [
  {
    title: "Vues totales",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Contenus publiés",
    value: "156",
    change: "+8 cette semaine",
    trend: "up",
    icon: Video,
    color: "text-green-600",
  },
  {
    title: "Talents actifs",
    value: "89",
    change: "+15 ce mois",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Engagement",
    value: "94.2K",
    change: "+18.2%",
    trend: "up",
    icon: Heart,
    color: "text-red-600",
  },
  {
    title: "Commentaires",
    value: "12.8K",
    change: "+24.1%",
    trend: "up",
    icon: MessageSquare,
    color: "text-orange-600",
  },
  {
    title: "Taux de croissance",
    value: "+32%",
    change: "vs mois dernier",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600">↗</span> {stat.change}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
