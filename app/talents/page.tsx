import { Navigation } from "@/components/navigation"
import { TalentsGrid } from "@/components/talents-grid"
import { Footer } from "@/components/footer"

export default function TalentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                NOS <span className="text-primary">TALENTS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rencontrez les jeunes ambitieux qui transforment leurs rêves en réalité. Découvrez leurs parcours, leurs
                projets et laissez-vous inspirer par leur détermination.
              </p>
            </div>
          </div>
        </section>

        <TalentsGrid />
      </main>
      <Footer />
    </div>
  )
}
