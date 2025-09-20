import { BrutLayout } from "@/components/brut-layout";
import { BrutTikTokFeed } from "@/components/brut-tiktok-feed";
import { BrutSlider } from "@/components/brut-slider";
import {
  talentsData,
  projetsData,
  cultureData,
  natureData,
  tiktokVideosData,
} from "@/lib/data";

export default function ContenusPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Contenus</h1>
            <p className="text-lg text-muted-foreground">
              Tous nos contenus pour découvrir les jeunes talents et leurs
              projets. Vidéos, articles, documentaires et bien plus.
            </p>
          </div>

          <BrutTikTokFeed videos={tiktokVideosData} />
          <BrutSlider title="Talents" items={talentsData} />
          <BrutSlider title="Projets" items={projetsData} />
          <BrutSlider title="Culture" items={cultureData} />
          <BrutSlider title="Nature" items={natureData} />
        </div>
      </div>
    </BrutLayout>
  );
}
