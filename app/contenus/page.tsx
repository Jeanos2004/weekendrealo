import { Navigation } from "@/components/navigation"
import { ContentGrid } from "@/components/content-grid"
import { ContentFilters } from "@/components/content-filters"
import { Footer } from "@/components/footer"

export default function ContenusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">CONTENUS</h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Découvrez les histoires inspirantes de jeunes qui transforment leurs rêves en réalité. Chaque week-end,
                de nouveaux contenus pour vous motiver et vous inspirer.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <ContentFilters />

        {/* Content Grid */}
        <ContentGrid />
      </main>
      <Footer />
    </div>
  )
}
