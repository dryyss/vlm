# Skills Claude Code utiles pour ce projet

Les skills ci-dessous sont **déjà disponibles** dans cette session : rien à installer.
On les lance en tapant `/<nom>` dans Claude Code.

## Développement du site

| Skill | Usage dans ce projet |
| --- | --- |
| `run` | Lancer `next dev`, ouvrir le site et vérifier qu'un changement marche vraiment. |
| `code-review` | Relire le diff avant un commit ou une PR (bugs, régressions d'animation). |
| `simplify` | Nettoyer le code des composants `film/` (doublons, hooks à factoriser). |
| `security-review` | Vérifier les changements avant la mise en ligne (formulaire de contact, en-têtes). |
| `init` | Générer un `CLAUDE.md` qui décrit le projet aux prochaines sessions. |

## Design et visuels

| Skill | Usage dans ce projet |
| --- | --- |
| `anthropic-skills:algorithmic-art` | Prototyper des fonds génératifs (grain, faisceaux de lumière, particules de scène). |
| `anthropic-skills:theme-factory` | Explorer des variantes de palette et de typo autour des tokens actuels. |
| `artifact-design` | Faire des maquettes ou des moodboards partageables en page web. |
| `dataviz` | Si on ajoute une frise de parcours ou des statistiques (concerts, artistes, années). |

## Rédaction et suivi

| Skill | Usage dans ce projet |
| --- | --- |
| `anthropic-skills:doc-coauthoring` | Écrire le brief, les textes des formules ou la page « À propos ». |
| `anthropic-skills:deep-research` | Analyser des sites de référence (Awwwards, sites de vidéastes live). |
| `fewer-permission-prompts` | Autoriser les commandes courantes (`npm`, `git`, `npx eslint`) pour moins d'interruptions. |

## Ajouter d'autres skills

D'autres skills (plugins) s'installent depuis une marketplace avec la commande `/plugin` dans Claude Code.
On choisit soi-même ce qu'on installe : un plugin exécute du code sur la machine, donc il vaut mieux
prendre uniquement des sources de confiance.

Pistes à chercher pour ce projet : un plugin **Playwright / navigateur** (captures d'écran et tests
des animations), **Lighthouse** (performance mobile) et **Figma** (si les maquettes viennent de Figma).
