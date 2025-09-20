import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { natureData } from "@/lib/data";

export default function EnvironnementPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Environnement</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les jeunes qui agissent pour la planète. Des initiatives
              écologiques et durables portées par la nouvelle génération.
            </p>
          </div>

          <BrutSlider title="Nature & Environnement" items={natureData} />
        </div>
      </div>
    </BrutLayout>
  );
}
