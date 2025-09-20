"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, Plus, Settings, LogOut, User, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardHeaderProps {
  onMobileMenuToggle: () => void
}

export function DashboardHeader({ onMobileMenuToggle }: DashboardHeaderProps) {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onMobileMenuToggle} className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Gérez votre contenu WeekendRealo</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Rechercher..." className="pl-10 w-48 lg:w-64" />
          </div>

          {/* Mobile search button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Search className="w-4 h-4" />
          </Button>

          {/* New Content Button */}
          <Button size="sm" className="hidden sm:flex">
            <Plus className="w-4 h-4 mr-2" />
            <span className="hidden lg:inline">Nouveau contenu</span>
            <span className="lg:hidden">Nouveau</span>
          </Button>

          {/* Mobile new content button */}
          <Button size="sm" className="sm:hidden">
            <Plus className="w-4 h-4" />
          </Button>

          <ThemeToggle />

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/admin-avatar.jpg" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin WeekendRealo</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@weekendrealo.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Se déconnecter</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
