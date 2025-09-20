import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

export default function TechnologiePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Technologie</h1>
            <p className="text-lg text-muted-foreground">
              Explorez l'univers tech des jeunes talents. Des innovations qui
              changent notre quotidien.
            </p>
          </div>

          <BrutSlider title="Talents tech" items={talentsData} />
          <BrutSlider title="Projets technologiques" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
