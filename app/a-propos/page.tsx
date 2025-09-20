import { BrutLayout } from "@/components/brut-layout";

export default function AProposPage() {
  return (
    <BrutLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">À propos</h1>
            <p className="text-lg text-muted-foreground mb-8">
              WeekendRealo, c'est la plateforme qui met en lumière les jeunes
              talents et leurs projets inspirants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
              <p className="text-muted-foreground mb-6">
                Chaque week-end, nous produisons des contenus pour mettre en
                lumière les jeunes ambitieux, leurs projets, leurs combats et
                leurs réussites. Nous croyons que chaque jeune a une histoire
                unique à raconter et un potentiel extraordinaire à révéler.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Notre vision</h2>
              <p className="text-muted-foreground">
                Créer une communauté où les jeunes talents peuvent s'inspirer
                mutuellement, partager leurs expériences et construire ensemble
                l'avenir. Nous voulons être le catalyseur de leurs succès.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold">Authenticité</h3>
                    <p className="text-sm text-muted-foreground">
                      Nous racontons des histoires vraies, sans filtre ni
                      artifice.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold">Inspiration</h3>
                    <p className="text-sm text-muted-foreground">
                      Chaque histoire a le pouvoir d'inspirer et de motiver.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold">Communauté</h3>
                    <p className="text-sm text-muted-foreground">
                      Nous créons des liens entre les jeunes talents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-sm text-muted-foreground">
                      Nous célébrons la créativité et l'innovation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrutLayout>
  );
}
