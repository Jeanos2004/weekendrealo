import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { cultureData } from "@/lib/data";

export default function CulturePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Culture</h1>
            <p className="text-lg text-muted-foreground">
              Explorez l'univers culturel des jeunes talents. Art, musique,
              cinéma, mode et bien plus encore.
            </p>
          </div>

          <BrutSlider title="Culture" items={cultureData} />
        </div>
      </div>
    </BrutLayout>
  );
}
