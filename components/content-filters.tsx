"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, TrendingUp, Clock, Users } from "lucide-react"

const categories = [
  { id: "all", label: "Tous", count: 150 },
  { id: "entrepreneuriat", label: "Entrepreneuriat", count: 45 },
  { id: "sport", label: "Sport", count: 32 },
  { id: "tech", label: "Tech", count: 28 },
  { id: "art", label: "Art & Culture", count: 25 },
  { id: "social", label: "Impact Social", count: 20 },
]

const sortOptions = [
  { id: "recent", label: "Plus récents", icon: Clock },
  { id: "popular", label: "Plus populaires", icon: TrendingUp },
  { id: "views", label: "Plus vus", icon: Users },
]

export function ContentFilters() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("recent")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-8 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un contenu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="text-sm"
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Trier par:</span>
            <div className="flex space-x-1">
              {sortOptions.map((option) => {
                const Icon = option.icon
                return (
                  <Button
                    key={option.id}
                    variant={activeSort === option.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveSort(option.id)}
                    className="text-xs"
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {option.label}
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {categories.find((c) => c.id === activeCategory)?.count || 0} contenus
          </div>
        </div>
      </div>
    </section>
  )
}
