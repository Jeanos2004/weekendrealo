"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Clock,
  Users,
  Eye,
  Heart,
} from "lucide-react";

const metrics = [
  {
    title: "Objectif mensuel",
    description: "Contenus publiés",
    current: 12,
    target: 20,
    progress: 60,
    trend: "up",
    icon: Target,
    color: "text-green-600",
  },
  {
    title: "Engagement moyen",
    description: "Par contenu",
    current: 8.4,
    target: 10,
    progress: 84,
    trend: "up",
    icon: Heart,
    color: "text-red-600",
  },
  {
    title: "Temps de réponse",
    description: "Messages (heures)",
    current: 2.3,
    target: 4,
    progress: 58,
    trend: "down",
    icon: Clock,
    color: "text-blue-600",
  },
  {
    title: "Nouveaux talents",
    description: "Ce mois",
    current: 15,
    target: 25,
    progress: 60,
    trend: "up",
    icon: Users,
    color: "text-purple-600",
  },
];

const topPerformers = [
  {
    title:
      "Sarah, 22 ans : De l'échec scolaire à la création de sa startup tech",
    views: "125K",
    engagement: "2.1K",
    performance: 95,
  },
  {
    title: "Marcus : Champion de boxe et étudiant en médecine",
    views: "89K",
    engagement: "1.8K",
    performance: 87,
  },
  {
    title: "Léa et son projet d'agriculture urbaine",
    views: "67K",
    engagement: "1.5K",
    performance: 82,
  },
];

export function PerformanceMetrics() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Métriques de performance</CardTitle>
        <CardDescription>
          Suivez vos objectifs et performances clés
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <div
                key={metric.title}
                className="p-4 border border-border rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                    <span className="text-sm font-medium">{metric.title}</span>
                  </div>
                  <TrendIcon
                    className={`w-4 h-4 ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {metric.current}/{metric.target}
                    </span>
                    <span>{metric.progress}%</span>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Top Performers */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>Top contenus</span>
          </h4>
          {topPerformers.map((performer, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border border-border rounded-lg"
            >
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium line-clamp-1 mb-1">
                  {performer.title}
                </h5>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{performer.views}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{performer.engagement}</span>
                  </span>
                </div>
              </div>
              <Badge
                variant={performer.performance >= 90 ? "default" : "secondary"}
              >
                {performer.performance}%
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
