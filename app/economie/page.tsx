import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

export default function EconomiePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Économie</h1>
            <p className="text-lg text-muted-foreground">
              Les jeunes talents qui transforment l'économie. Des entrepreneurs
              et innovateurs qui créent de la valeur.
            </p>
          </div>

          <BrutSlider title="Talents économiques" items={talentsData} />
          <BrutSlider title="Projets économiques" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
