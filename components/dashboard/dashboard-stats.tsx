"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  Video,
  Heart,
  Eye,
  MessageSquare,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Vues totales",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    period: "vs mois dernier",
  },
  {
    title: "Contenus publiés",
    value: "156",
    change: "+8 cette semaine",
    trend: "up",
    icon: Video,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    period: "ce mois",
  },
  {
    title: "Talents actifs",
    value: "89",
    change: "+15 ce mois",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    period: "enregistrés",
  },
  {
    title: "Engagement",
    value: "94.2K",
    change: "+18.2%",
    trend: "up",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800",
    period: "interactions",
  },
  {
    title: "Commentaires",
    value: "12.8K",
    change: "+24.1%",
    trend: "up",
    icon: MessageSquare,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    period: "ce mois",
  },
  {
    title: "Temps moyen",
    value: "3.2min",
    change: "-0.5min",
    trend: "up",
    icon: Clock,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    period: "par vidéo",
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.title}
            className={`border-0 shadow-md hover:shadow-lg transition-all duration-200 ${stat.bgColor} ${stat.borderColor} border`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <TrendingUp
                    className={`w-3 h-3 ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {stat.period}
                </Badge>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
