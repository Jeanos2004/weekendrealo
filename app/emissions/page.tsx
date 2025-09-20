import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData } from "@/lib/data";

// Données spécifiques pour les émissions
const emissionsData = [
  {
    id: "1",
    title: "Émission : Le Débat des Talents",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "1h30",
    category: "Émission",
    time: "En direct",
  },
  {
    id: "2",
    title: "Émission : Focus Innovation",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "45min",
    category: "Émission",
    time: "Demain 20h",
  },
  {
    id: "3",
    title: "Émission : Art & Créativité",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "1h",
    category: "Émission",
    time: "Vendredi 18h",
  },
  {
    id: "4",
    title: "Émission : Écologie & Avenir",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "1h15",
    category: "Émission",
    time: "Dimanche 16h",
  },
];

export default function EmissionsPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Émissions</h1>
            <p className="text-lg text-muted-foreground">
              Nos émissions spéciales et débats avec les jeunes talents. Des
              discussions enrichissantes et inspirantes.
            </p>
          </div>

          <BrutSlider title="Nos émissions" items={emissionsData} />
          <BrutSlider title="Talents invités" items={talentsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
