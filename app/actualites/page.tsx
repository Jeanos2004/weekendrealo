import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData, cultureData, natureData } from "@/lib/data";

export default function ActualitesPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Actualités</h1>
            <p className="text-lg text-muted-foreground">
              Toute l'actualité des jeunes talents et de leurs projets. Restez
              informés des dernières innovations et réussites.
            </p>
          </div>

          <BrutSlider title="Dernières actualités" items={talentsData} />
          <BrutSlider title="Projets en cours" items={projetsData} />
          <BrutSlider title="Culture" items={cultureData} />
          <BrutSlider title="Environnement" items={natureData} />
        </div>
      </div>
    </BrutLayout>
  );
}
