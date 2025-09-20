import { BrutLayout } from "@/components/brut-layout";
import { BrutTikTokFeed } from "@/components/brut-tiktok-feed";
import { BrutSlider } from "@/components/brut-slider";
import { tiktokVideosData, talentsData, projetsData } from "@/lib/data";

export default function VideosPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Vidéos</h1>
            <p className="text-lg text-muted-foreground">
              Toutes nos vidéos pour découvrir les jeunes talents. Des formats
              courts et longs pour tous les goûts.
            </p>
          </div>

          <BrutTikTokFeed videos={tiktokVideosData} />
          <BrutSlider title="Talents en vidéo" items={talentsData} />
          <BrutSlider title="Projets en vidéo" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
