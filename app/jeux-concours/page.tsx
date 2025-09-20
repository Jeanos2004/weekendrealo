import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData } from "@/lib/data";

// Données spécifiques pour les jeux concours
const jeuxConcoursData = [
  {
    id: "1",
    title: "Concours : Jeune Entrepreneur de l'Année",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "En cours",
    category: "Concours",
    time: "Jusqu'au 31 décembre",
  },
  {
    id: "2",
    title: "Concours : Innovation Tech",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "En cours",
    category: "Concours",
    time: "Jusqu'au 15 janvier",
  },
  {
    id: "3",
    title: "Concours : Art & Créativité",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "Terminé",
    category: "Concours",
    time: "Résultats disponibles",
  },
  {
    id: "4",
    title: "Concours : Projet Écologique",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "Bientôt",
    category: "Concours",
    time: "Lancement en février",
  },
];

export default function JeuxConcoursPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Jeux concours</h1>
            <p className="text-lg text-muted-foreground">
              Participez à nos concours et défis pour mettre en avant votre
              projet ou votre talent.
            </p>
          </div>

          <BrutSlider title="Concours en cours" items={jeuxConcoursData} />
          <BrutSlider title="Lauréats précédents" items={talentsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
