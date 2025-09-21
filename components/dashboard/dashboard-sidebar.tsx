"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  Users,
  Settings,
  Home,
  PlusCircle,
  Calendar,
  MessageSquare,
  TrendingUp,
  User,
  Bell,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Vue d'ensemble", href: "/dashboard", icon: BarChart3 },
  { name: "Contenus", href: "/dashboard/contenus", icon: FileText },
  { name: "Talents", href: "/dashboard/talents", icon: Users },
  { name: "Nouveau contenu", href: "/dashboard/nouveau", icon: PlusCircle },
  { name: "Calendrier", href: "/dashboard/calendrier", icon: Calendar },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { name: "Utilisateurs", href: "/dashboard/utilisateurs", icon: User },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Paramètres", href: "/dashboard/parametres", icon: Settings },
];

interface DashboardSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export function DashboardSidebar({
  isCollapsed,
  onToggle,
  isMobileOpen,
  onMobileClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <div
        className={cn(
          "flex h-full flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out z-50",
          // Desktop behavior
          "hidden lg:flex",
          isCollapsed ? "w-16" : "w-64",
          // Mobile behavior
          "lg:relative fixed inset-y-0 left-0",
          isMobileOpen ? "flex w-64" : "hidden lg:flex"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          {!isCollapsed ?? (
            <Link
              href="/"
              className="flex items-center space-x-2 transition-opacity duration-200"
            >
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold text-sm">
                  WR
                </span>
              </div>
              <span className="font-bold text-lg text-sidebar-foreground">
                WeekendRealo
              </span>
            </Link>
          )}

          {/* {isCollapsed && (
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center mx-auto">
              <span className="text-sidebar-primary-foreground font-bold text-sm">
                WR
              </span>
            </div>
          )} */}

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMobileClose}
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="hidden lg:flex text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-transparent">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => onMobileClose()}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                  isCollapsed && "justify-center px-2"
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span
                  className={cn(
                    "transition-opacity duration-200",
                    isCollapsed && "opacity-0 w-0 overflow-hidden"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-2 border-t border-sidebar-border">
          <Link
            href="/"
            onClick={() => onMobileClose()}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all duration-200",
              isCollapsed && "justify-center px-2"
            )}
            title={isCollapsed ? "Retour au site" : undefined}
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span
              className={cn(
                "transition-opacity duration-200",
                isCollapsed && "opacity-0 w-0 overflow-hidden"
              )}
            >
              Retour au site
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
