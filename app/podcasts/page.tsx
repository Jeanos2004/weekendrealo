import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData } from "@/lib/data";

// Données spécifiques pour les podcasts
const podcastsData = [
  {
    id: "1",
    title: "Podcast : Marie, l'agriculture urbaine",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "45:30",
    category: "Podcast",
    time: "Il y a 2h",
  },
  {
    id: "2",
    title: "Podcast : Lucas, l'innovation tech",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "38:15",
    category: "Podcast",
    time: "Il y a 5h",
  },
  {
    id: "3",
    title: "Podcast : Sarah, l'art numérique",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "42:20",
    category: "Podcast",
    time: "Il y a 8h",
  },
  {
    id: "4",
    title: "Podcast : Ahmed, l'entrepreneuriat",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "50:10",
    category: "Podcast",
    time: "Il y a 12h",
  },
];

export default function PodcastsPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Podcasts</h1>
            <p className="text-lg text-muted-foreground">
              Écoutez les histoires inspirantes de nos jeunes talents. Des
              conversations authentiques et motivantes.
            </p>
          </div>

          <BrutSlider title="Derniers podcasts" items={podcastsData} />
          <BrutSlider title="Talents interviewés" items={talentsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
