import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData, cultureData, natureData } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Articles</h1>
            <p className="text-lg text-muted-foreground">
              Nos articles de fond sur les jeunes talents et leurs projets. Des
              analyses approfondies et des portraits détaillés.
            </p>
          </div>

          <BrutSlider title="Derniers articles" items={talentsData} />
          <BrutSlider title="Portraits" items={projetsData} />
          <BrutSlider title="Culture" items={cultureData} />
          <BrutSlider title="Environnement" items={natureData} />
        </div>
      </div>
    </BrutLayout>
  );
}
