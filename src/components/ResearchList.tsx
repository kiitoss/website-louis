import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Publication {
  title: string
  authors: string
  venue: string
  abstract: string
  tags: string[]
  link?: string
}

const publicationsByLang: Record<string, Publication[]> = {
  en: [
    {
      title:
        "Asymptotics of the overlap distribution of branching Brownian motion at high temperature",
      authors: "Louis Chataignier, Michel Pain",
      venue: "arXiv:2407.21014",
      abstract:
        "At high temperature, the overlap of two particles chosen independently according to the Gibbs measure of the branching Brownian motion converges to zero as time goes to infinity. We investigate the precise decay rate of the probability to obtain an overlap greater than a, for some a > 0, in the whole subcritical phase of inverse temperatures β ∈ [0, βc). Moreover, we study this probability both conditionally on the branching Brownian motion and non-conditionally. Two sub-phases of inverse temperatures appear, but surprisingly the threshold is not the same in both cases.",
      tags: ["Branching Brownian Motion", "Overlap Distribution", "Probability Theory"],
      link: "https://arxiv.org/pdf/2407.21014",
    },
    {
      title: "Additive martingales of the branching Brownian motion",
      authors: "Louis Chataignier",
      venue: "Master's thesis, April–August 2023. arXiv:2407.20227",
      abstract:
        "In this thesis, we study asymptotic properties of the standard branching Brownian motion, with a specific emphasis on the additive martingales at high temperature. We establish various convergence results that enhance our understanding of the model, including the determination of particles contributing to the additive martingales, the description of the fluctuations of these martingales around their limits, and an approximation of the overlap distribution. Remarkably, we identify a specific regime in which stable distributions emerge.",
      tags: ["Branching Brownian Motion", "Martingales", "Probability Theory"],
      link: "https://arxiv.org/abs/2407.20227",
    },
  ],
  fr: [
    {
      title:
        "Asymptotics of the overlap distribution of branching Brownian motion at high temperature",
      authors: "Louis Chataignier, Michel Pain",
      venue: "arXiv:2407.21014",
      abstract:
        "À haute température, l'overlap de deux particules choisies indépendamment selon la mesure de Gibbs du mouvement brownien branchant converge vers zéro quand le temps tend vers l'infini. Nous étudions la vitesse de décroissance précise de la probabilité d'obtenir un overlap supérieur à a, pour tout a > 0, dans toute la phase sous-critique des températures inverses β ∈ [0, βc). De plus, nous étudions cette probabilité conditionnellement au mouvement brownien branchant ainsi que non-conditionnellement. Deux sous-phases de températures inverses apparaissent, mais de façon surprenante, le seuil diffère dans les deux cas.",
      tags: ["Mouvement Brownien Branchant", "Distribution des Overlaps", "Théorie des Probabilités"],
      link: "https://arxiv.org/pdf/2407.21014",
    },
    {
      title: "Additive martingales of the branching Brownian motion",
      authors: "Louis Chataignier",
      venue: "Mémoire de master, avril–août 2023. arXiv:2407.20227",
      abstract:
        "Dans ce mémoire, nous étudions les propriétés asymptotiques du mouvement brownien branchant standard, en mettant l'accent sur les martingales additives à haute température. Nous établissons divers résultats de convergence : la détermination des particules contribuant aux martingales additives, la description de leurs fluctuations autour de leurs limites, et une approximation de la distribution des overlaps. De façon remarquable, nous identifions un régime spécifique dans lequel des distributions stables émergent.",
      tags: ["Mouvement Brownien Branchant", "Martingales", "Théorie des Probabilités"],
      link: "https://arxiv.org/abs/2407.20227",
    },
  ],
}

interface ResearchListProps {
  lang?: string
}

export function ResearchList({ lang = "fr" }: ResearchListProps) {
  const publications = publicationsByLang[lang] ?? publicationsByLang.fr

  return (
    <div className="flex flex-col">
      {publications.map((pub, index) => (
        <div key={index}>
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg px-4 py-6 -mx-4 transition-colors hover:bg-muted/60"
          >
            <article className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold leading-snug text-foreground text-pretty transition-colors group-hover:text-primary">
                    {pub.title}
                  </h2>
                  {pub.link && (
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
                <p className="text-sm font-medium text-primary">{pub.venue}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-md">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          </a>

          {index < publications.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
}
