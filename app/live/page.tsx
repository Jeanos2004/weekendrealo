import { BrutLayout } from "@/components/brut-layout";
import { BrutTikTokFeed } from "@/components/brut-tiktok-feed";
import { tiktokVideosData } from "@/lib/data";

export default function LivePage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Live</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez nos contenus en direct et nos dernières vidéos. Du
              contenu frais et authentique pour vous inspirer.
            </p>
          </div>

          <BrutTikTokFeed videos={tiktokVideosData} />
        </div>
      </div>
    </BrutLayout>
  );
}
