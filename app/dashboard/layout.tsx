"use client"

import type React from "react"
import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)
  const closeMobileMenu = () => setIsMobileOpen(false)

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <DashboardSidebar
        isCollapsed={isCollapsed}
        onToggle={toggleSidebar}
        isMobileOpen={isMobileOpen}
        onMobileClose={closeMobileMenu}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader onMobileMenuToggle={toggleMobileMenu} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
