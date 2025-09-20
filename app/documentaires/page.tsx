import { BrutLayout } from "@/components/brut-layout";
import { BrutSlider } from "@/components/brut-slider";
import { talentsData, projetsData } from "@/lib/data";

// Données spécifiques pour les documentaires
const documentairesData = [
  {
    id: "1",
    title: "Documentaire : La Révolution Urbaine",
    image: "/young-woman-in-urban-garden-with-vertical-farming.jpg",
    duration: "52min",
    category: "Documentaire",
    time: "Nouveau",
  },
  {
    id: "2",
    title: "Documentaire : Code & Inclusion",
    image: "/young-developer-coding-multiple-screens.jpg",
    duration: "45min",
    category: "Documentaire",
    time: "Il y a 1 semaine",
  },
  {
    id: "3",
    title: "Documentaire : Art & Technologie",
    image: "/young-digital-artist-creating-environmental-art.jpg",
    duration: "38min",
    category: "Documentaire",
    time: "Il y a 2 semaines",
  },
  {
    id: "4",
    title: "Documentaire : L'Entrepreneuriat Vert",
    image: "/young-woman-entrepreneur-presenting-tech-startup.jpg",
    duration: "48min",
    category: "Documentaire",
    time: "Il y a 1 mois",
  },
];

export default function DocumentairesPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Documentaires</h1>
            <p className="text-lg text-muted-foreground">
              Nos documentaires qui plongent au cœur des projets et des parcours
              de nos jeunes talents.
            </p>
          </div>

          <BrutSlider title="Nos documentaires" items={documentairesData} />
          <BrutSlider title="Talents documentés" items={talentsData} />
          <BrutSlider title="Projets suivis" items={projetsData} />
        </div>
      </div>
    </BrutLayout>
  );
}
