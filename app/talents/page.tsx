import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData } from "@/lib/data";

export default function TalentsPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Talents</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez les jeunes talents qui transforment notre monde. Des
              entrepreneurs, artistes, développeurs et innovateurs qui créent
              l'avenir.
            </p>
          </div>

          <BrutSlider title="Tous les talents" items={talentsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
