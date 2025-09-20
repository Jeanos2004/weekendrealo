import { BrutHero } from "@/components/brut-hero";
import { BrutFeatured } from "@/components/brut-featured";
import { BrutSlider } from "@/components/brut-slider";
import { BrutTikTokFeed } from "@/components/brut-tiktok-feed";
import {
  talentsData,
  projetsData,
  cultureData,
  natureData,
  tiktokVideosData,
} from "@/lib/data";

// Données supplémentaires pour les dernières vidéos
const latestVideosData = [
  ...talentsData,
  {
    id: "5",
    title: "Comment l'IA révolutionne l'éducation",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "4:30",
    category: "Vidéo",
    time: "Il y a 1h",
  },
  {
    id: "6",
    title: "Les jeunes qui sauvent la planète",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "6:15",
    category: "Vidéo",
    time: "Il y a 3h",
  },
];

export default function HomePage() {
  return (
    <>
      <BrutHero />
      <BrutFeatured />
      <BrutTikTokFeed videos={tiktokVideosData} />
      <BrutSlider title="Talents" items={talentsData} />
      <BrutSlider title="Projets" items={projetsData} />
      <BrutSlider title="Culture" items={cultureData} />
      <BrutSlider title="Nature" items={natureData} />
    </>
  );
}
