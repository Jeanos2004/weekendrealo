import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

export default function SportPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Sport</h1>
            <p className="text-lg text-muted-foreground">
              Les jeunes talents du sport et de l'innovation sportive. Des
              athlètes et entrepreneurs qui révolutionnent le sport.
            </p>
          </div>

          <BrutSlider title="Talents sportifs" items={talentsData} />
          <BrutSlider title="Projets sportifs" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
