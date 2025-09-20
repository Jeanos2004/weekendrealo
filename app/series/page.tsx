import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

// Données spécifiques pour les séries
const seriesData = [
  {
    id: "1",
    title: "Série : Les Entrepreneurs de demain",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "8 épisodes",
    category: "Série",
    time: "Nouvelle série",
  },
  {
    id: "2",
    title: "Série : Artistes du futur",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "6 épisodes",
    category: "Série",
    time: "En cours",
  },
  {
    id: "3",
    title: "Série : Tech for Good",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "10 épisodes",
    category: "Série",
    time: "Terminée",
  },
  {
    id: "4",
    title: "Série : Écologie & Innovation",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "5 épisodes",
    category: "Série",
    time: "Bientôt",
  },
];

export default function SeriesPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Séries</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez nos séries documentaires qui suivent les parcours de
              jeunes talents sur plusieurs épisodes.
            </p>
          </div>

          <BrutSlider title="Nos séries" items={seriesData} />
          <BrutSlider title="Talents en série" items={talentsData} />
          <BrutSlider title="Projets suivis" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
