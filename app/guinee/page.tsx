import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

export default function GuineePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Guinée</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les jeunes talents de Guinée. Des projets et innovations
              qui transforment le pays.
            </p>
          </div>

          <BrutSlider title="Talents guinéens" items={talentsData} />
          <BrutSlider title="Projets en Guinée" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
