"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Users,
  Calendar,
  TrendingUp,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "Nouveau contenu",
    description: "Créer un article, vidéo ou documentaire",
    icon: Plus,
    href: "/dashboard/nouveau",
    color: "bg-primary hover:bg-primary/90",
    badge: "Populaire",
  },
  {
    title: "Gérer les talents",
    description: "Ajouter ou modifier des profils",
    icon: Users,
    href: "/dashboard/talents",
    color: "bg-blue-600 hover:bg-blue-700",
    badge: "12 nouveaux",
  },
  {
    title: "Analytics avancées",
    description: "Voir les performances détaillées",
    icon: TrendingUp,
    href: "/dashboard/analytics",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Planifier du contenu",
    description: "Programmer des publications",
    icon: Calendar,
    href: "/dashboard/calendrier",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Messages",
    description: "Gérer les demandes et commentaires",
    icon: MessageSquare,
    href: "/dashboard/messages",
    color: "bg-orange-600 hover:bg-orange-700",
    badge: "5 non lus",
  },
  {
    title: "Paramètres",
    description: "Configurer votre espace",
    icon: Settings,
    href: "/dashboard/parametres",
    color: "bg-gray-600 hover:bg-gray-700",
  },
];

export function QuickActions() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>
          Accédez rapidement aux fonctionnalités les plus utilisées
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <div className="group relative p-4 border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/50">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {action.title}
                        </h4>
                        {action.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {action.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
