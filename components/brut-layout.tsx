"use client";

import { BrutSidebarFixed } from "@/components/brut-sidebar-fixed";
import { BrutFooter } from "@/components/brut-footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

interface BrutLayoutProps {
  children: React.ReactNode;
}

export function BrutLayout({ children }: BrutLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <BrutSidebarFixed />

      {/* Main content with left margin for sidebar */}
      <div className="ml-64">
        <main>{children}</main>
      </div>

      {/* Footer avec z-index élevé pour passer au-dessus de la sidebar */}
      <div className="relative z-50">
        <BrutFooter />
      </div>

      <ScrollToTop />
    </div>
  );
}
