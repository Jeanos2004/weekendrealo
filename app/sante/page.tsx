import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

export default function SantePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Santé</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les jeunes talents qui innovent dans le domaine de la
              santé. Des solutions qui améliorent notre bien-être.
            </p>
          </div>

          <BrutSlider title="Talents santé" items={talentsData} />
          <BrutSlider title="Projets santé" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
