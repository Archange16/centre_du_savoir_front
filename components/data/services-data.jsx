import services1 from "../../public/assets/img/service/formation-modelisation-3d-geologie-miniere.jpg";
import services2 from "../../public/assets/img/service/Formation en Assainissement.jpg";
import services3 from "../../public/assets/img/service/Formation en Cartographie Géologique et Topographique Avancée.jpg";
import services4 from "../../public/assets/img/service/Formation en Conception et Réalisation des Infrastructures Routières avancé.jpg";
import services5 from "../../public/assets/img/service/La formation en Techniques Avancées pour l'Exploitation des Travaux Miniers.jpg";
import services6 from "../../public/assets/img/service/Pilotage et Planification BTP.jpg";
import services7 from "../../public/assets/img/service/Formation avancée en V.R.D.jpg";
import services8 from "../../public/assets/img/service/Formation en Gestion Intégrée des Projets Miniers.png";
import services9 from "../../public/assets/img/service/Formation Calcul des Structures et Solidité des Bâtiments.jpg";
import services10 from "../../public/assets/img/service/Formation en béton armé et structures avancées.jpg";

const brochure1 = "/assets/img/brochure/BROCHURE CALCUL DES STRUCTURES ET SOLIDITÉ DES BÂTIMENTS.pdf";
const brochure2 = "/assets/img/brochure/BROCHURE CARTOGRAPHIE GÉOLOGIQUE ET TOPOGRAPHIQUE AVANCÉE.pdf";
const brochure3 = "/assets/img/brochure/BROCHURE CONCEPTION ET RÉALISATION DES INFRASTRUCTURES ROTIÈRES.pdf";
const brochure4 = "/assets/img/brochure/BROCHURE EXPLOITATION MINIÈRE À CIEL OUVERT.pdf";
const brochure5 = "/assets/img/brochure/BROCHURE OUVRAGE D'ART.pdf";
const brochure6 = "/assets/img/brochure/MAÎTRISE DE L'ORDONNNCEMENT, PILOTAGE ET COORDINATION DES TRAVAUX (OPC).pdf";
const brochure7 = "/assets/img/brochure/ASSAINISSEMENT MAÎTRISE DES EAUX USÉES ET PLUVIALES.pdf";
const brochure8 = "/assets/img/brochure/V.R.D VOIRIE URBAINE.pdf";
const brochure9 = "/assets/img/brochure/BROCHURE GESTION INTEGRÉE DES PROJETS MINIERS.pdf";
const brochure10 = "/assets/img/brochure/BROCHURE_CPS_MODELISATION 3D_2025 (1).pdf";



const servicesData = [
  {
    id: 1,
    documentId: "mines4",
    image: services5,
    brochure: brochure4,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en exploitation minière à ciel ouvert : fondamentaux de l’extraction moderne",
    slug: "techniques-avancees-exploitation-miniere",
    description_courte: "Optimisez les processus d’extraction minière modernes.",
    description_longue: "Cette formation offre des compétences de pointe pour optimiser les processus d’extraction et de gestion des mines. Elle permet de maîtriser les dernières technologies et méthodes pour améliorer la sécurité, la rentabilité et la durabilité.",
    niveau: "Niveau avancé",
    duree_heures: 32,
    prix: 490,
    prix_promotionnel: 490,
    langue: "Français",
    est_actif: true,
    public_cible: "Ingénieurs miniers, responsables de sites",
    domaine: "Mines et carrières",
    profils_concernes: [
      {
        profil: "Responsables d’exploitation",
        competences: "Gestion technique et environnementale des mines"
      }
    ],
    logiciels: ["ArcGIS", "MapInfo", "QGIS"],
    objectifs: [
      "Améliorer les procédés miniers",
      "Utiliser des outils géospatiaux",
      "Gérer les aspects environnementaux"
    ],
    prerequis: ["Connaissances de base en exploitation minière"]
  },
  {
    id: 2,
    documentId: "infraroutes6",
    image: services4,
    brochure: brochure3,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Conception et Réalisation des Infrastructures Routières Avancées (route)",
    slug: "formation-infrastructures-routieres-avancee",
    description_courte: "Acquérir une expertise approfondie dans la conception et réalisation de routes modernes.",
    description_longue: "Cette formation permet aux apprenants d’acquérir les compétences techniques nécessaires pour concevoir, planifier et réaliser des infrastructures routières de qualité, en optimisant les coûts, la sécurité et la durabilité.",
    niveau: "Niveau avancé",
    duree_heures: 40,
    prix: 490,
    prix_promotionnel: 490,
    langue: "Français",
    est_actif: true,
    public_cible: "Ingénieurs routiers, urbanistes",
    domaine: "Infrastructure routière",
    profils_concernes: [
      {
        profil: "Techniciens voirie",
        competences: "Conception géométrique et drainage"
      }
    ],
    logiciels: ["PISTE", "AutoPISTE", "AutoCAD", "COVADIS", "IE-OUVRAGES", "Global Mapper", "Flowmaster", "Google EARTH", "Excel"],
    objectifs: [
      "Maîtriser les étapes de conception routière",
      "Utiliser les outils spécialisés",
      "Garantir la sécurité et la durabilité des routes"
    ],
    prerequis: ["Bases en géotechnique et topographie"]
  },
   {
    id: 3,
    documentId: "vrd8",
    image: services7,
    brochure: brochure8,
    disponible: "disponible sur notre plateforme",
    titre: "Formation avancée en V.R.D (Voirie Urbaine)",
    slug: "formation-avancee-vrd",
    description_courte: "Maîtriser la conception et gestion des infrastructures urbaines modernes.",
    description_longue: "Cette formation permet d’acquérir des compétences pointues dans la conception, la réalisation et la gestion des infrastructures urbaines : voirie, assainissement, réseaux d’eau potable et aménagements publics.",
    niveau: "Niveau avancé",
    duree_heures: 32,
    prix: 350,
    prix_promotionnel: 350,
    langue: "Français",
    est_actif: true,
    public_cible: "Techniciens et ingénieurs VRD",
    domaine: "Aménagement urbain",
    profils_concernes: [
      {
        profil: "Projeteurs VRD",
        competences: "Conception réseaux et voirie"
      }
    ],
    logiciels: ["AutoPISTE", "AutoCAD", "COVADIS", "EXCEL"],
    objectifs: [
      "Réaliser des études de réseaux urbains",
      "Concevoir des voiries et espaces publics",
      "Appliquer les normes d’aménagement urbain"
    ],
    prerequis: [
      "Connaissances en urbanisme ou VRD"
    ]
  },
  {
    id: 4,
    documentId: "ouvragesart11",
    image: services10,
    brochure: brochure5,
    disponible: "disponible sur notre plateforme",
    titre: "Formation dans le domaine des ouvrages d’art (ponts)",
    slug: "formation-ouvrages-art-ponts",
    description_courte: "Maîtriser la conception, la réalisation et l’entretien des ouvrages d’art tels que les ponts.",
    description_longue: "Cette formation approfondie couvre les aspects techniques de la conception, de la réalisation et de la maintenance des ouvrages d’art, notamment les ponts. Elle permet d’acquérir une expertise sur les types de structures, les matériaux utilisés, les méthodes de dimensionnement et les normes de sécurité.",
    niveau: "Niveau avancé",
    duree_heures: 40,
    prix: 490,
    prix_promotionnel: 490,
    langue: "Français",
    est_actif: true,
    public_cible: "Ingénieurs civils, conducteurs de travaux, chefs de projets",
    domaine: "Ouvrages d’art",
    profils_concernes: [
      {
        profil: "Ingénieurs en structure",
        competences: "Conception et calcul de ponts"
      },
      {
        profil: "Techniciens en génie civil",
        competences: "Inspection et entretien des ouvrages"
      }
    ],
    logiciels: ["AUTOCAD", "AUTOPISTE", "COVADIS", "GLOBAL MAPPER",
"FLOWMASTER", "ROBOT STRUCTURAL ANALYSIS", "GOOGLE EARTH", "EXCEL"],
    objectifs: [
      "Connaître les types de ponts et leurs spécificités",
      "Maîtriser les principes de conception des ouvrages d’art",
      "Comprendre les techniques de contrôle et de maintenance"
    ],
    prerequis: [
      "Bases en calcul de structure",
      "Connaissances en génie civil"
    ]
  },
  {
    id: 5,
    documentId: "cartotopo9",
    image: services3,
    brochure: brochure2,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Cartographie Géologique et Topographique Avancée",
    slug: "formation-cartographie-geologique-topographique",
    description_courte: "Exploitez des données géospatiales complexes pour vos projets d'infrastructure.",
    description_longue: "Cette formation permet d’acquérir des compétences avancées en cartographie géologique et topographique, indispensables pour la conception de projets d’infrastructures et d’aménagement du territoire.",
    niveau: "Niveau intermédiaire",
    duree_heures: 32,
    prix: 450,
    prix_promotionnel: 450,
    langue: "Français",
    est_actif: true,
    public_cible: "Géomaticiens, ingénieurs topographes",
    domaine: "Cartographie et topographie",
    profils_concernes: [
      {
        profil: "Experts SIG",
        competences: "Analyse géospatiale et modélisation du terrain"
      }
    ],
    logiciels: ["ArcGIS", "QGIS", "MapInfo"],
    objectifs: [
      "Maîtriser la cartographie géologique",
      "Utiliser les SIG pour l’analyse topographique",
      "Évaluer les risques liés au sol"
    ],
    prerequis: ["Notions de SIG et topographie"]
  },
  {
    id: 6,
    documentId: "calcstruct1",
    image: services9,
    brochure: brochure1,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Calcul des Structures et Solidité des Bâtiments",
    slug: "formation-calcul-structures-solidite-batiments",
    description_courte: "Acquérir les compétences pour analyser et concevoir des structures de bâtiment robustes et sécurisées.",
    description_longue: "Cette formation permet d'acquérir les compétences nécessaires pour analyser et concevoir des structures de bâtiment robustes et sécurisées. Elle offre une compréhension approfondie des principes de résistance des matériaux, des méthodes de calcul et des normes en vigueur, essentielles pour garantir la stabilité et la sécurité des constructions.",
    niveau: "Niveau intermédiaire",
    duree_heures: 32,
    prix: 490,
    prix_promotionnel: 490,
    langue: "Français",
    est_actif: true,
    public_cible: "Professionnels du BTP, ingénieurs structure",
    domaine: "Génie Civil",
    profils_concernes: [
      {
        profil: "Ingénieurs structure",
        competences: "Conception et calcul de structures"
      },
      {
        profil: "Techniciens supérieurs",
        competences: "Analyse de structures"
      }
    ],
    logiciels: ["AutoCAD", "Revit", "ETABS", "SAP2000", "Robot Structural Analysis"],
    objectifs: [
      "Maîtriser les principes de résistance des matériaux",
      "Appliquer les méthodes de calcul structural",
      "Concevoir des structures conformes aux normes"
    ],
    prerequis: [
      "Bases en mécanique des structures",
      "Connaissances en construction"
    ]
  },
  {
    id: 7,
    documentId: "opc2",
    image: services6,
    brochure: brochure6,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en OPC : Pilotage et Planification BTP",
    slug: "formation-opc-pilotage-planification-btp",
    description_courte: "Maîtriser la gestion de projet dans le BTP : délais, ressources, coûts.",
    description_longue: "Cette formation permet de maîtriser les techniques de gestion de projet dans le secteur du bâtiment et des travaux publics. Elle offre les compétences nécessaires pour coordonner efficacement les différentes étapes d’un projet, gérer les délais, les ressources et les coûts.",
    niveau: "Niveau intermédiaire",
    duree_heures: 32,
    prix: 350,
    prix_promotionnel: 350,
    langue: "Français",
    est_actif: true,
    public_cible: "Chefs de projets, conducteurs de travaux",
    domaine: "Gestion de projet BTP",
    profils_concernes: [
      {
        profil: "Chefs de chantier",
        competences: "Coordination de travaux"
      },
      {
        profil: "Planificateurs BTP",
        competences: "Planification et suivi de projet"
      }
    ],
    logiciels: ["Primavera P6", "Microsoft Project", "Asta Powerproject", "Procore", "Mibosa", "Dalux"],
    objectifs: [
      "Planifier et suivre un chantier",
      "Maîtriser les outils de gestion de projet",
      "Optimiser les délais et les ressources"
    ],
    prerequis: [
      "Connaissance des étapes d’un projet de construction"
    ]
  },
  {
    id: 8,
    documentId: "assainissement10",
    image: services2,
    brochure: brochure7,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)",
    slug: "formation-assainissement-eaux-usees-pluviales",
    description_courte: "Concevoir et gérer des réseaux d’assainissement durables et efficaces.",
    description_longue: "Cette formation vous permet d’acquérir les compétences essentielles pour concevoir, gérer et entretenir des réseaux d’assainissement efficaces, tout en garantissant la protection de l’environnement et la santé publique.",
    niveau: "Niveau intermédiaire",
    duree_heures: 32,
    prix: 350,
    prix_promotionnel: 350,
    langue: "Français",
    est_actif: true,
    public_cible: "Techniciens assainissement, ingénieurs réseaux",
    domaine: "Assainissement et environnement",
    profils_concernes: [
      {
        profil: "Chargés d’étude assainissement",
        competences: "Dimensionnement et gestion des réseaux"
      }
    ],
    logiciels: ["AutoPISTE", "AutoCAD", "COVADIS", "EXCEL"],
    objectifs: [
      "Concevoir des réseaux d’eaux usées et pluviales",
      "Gérer durablement les flux hydrauliques",
      "Respecter les normes environnementales"
    ],
    prerequis: [
      "Bases en hydraulique ou assainissement"
    ]
  },
  {
  id: 9,
  documentId: "projetsMiniers01",
  image: services8,
  brochure: brochure9,
  disponible: "disponible sur notre plateforme",
  titre: "Formation en Gestion Intégrée des Projets Miniers",
  slug: "formation-gestion-projets-miniers",
  description_courte: "Maîtriser la gestion intégrée des projets miniers, de la planification à l’impact environnemental.",
  description_longue: "Cette formation vise à doter les participants des compétences nécessaires pour gérer efficacement les projets miniers de manière intégrée, en tenant compte des aspects techniques, économiques, environnementaux et sociaux.",
  niveau: "Niveau intermédiaire",
  duree_heures: 32,
  prix: 490,
  prix_promotionnel: 490,
  langue: "Français",
  est_actif: true,
  public_cible: "Ingénieurs miniers, gestionnaires de projets miniers, responsables de la planification et du développement minier, professionnels de l'industrie minière",
  domaine: "Mines et gestion de projets",
  profils_concernes: [
    {
      profil: "Ingénieurs miniers",
      competences: "Gestion intégrée des projets miniers"
    },
    {
      profil: "Gestionnaires de projets",
      competences: "Planification, suivi et évaluation des projets miniers"
    }
  ],
  logiciels: ["MS Project", "Asana", "Trello"],
  objectifs: [
    "Gérer des projets miniers de manière intégrée",
    "Analyser les risques et opportunités",
    "Développer des plans stratégiques",
    "Gérer les ressources humaines et les équipes",
    "Contrôler les coûts et les budgets",
    "Assurer la qualité et la sécurité",
    "Gérer les impacts environnementaux et sociaux"
  ],
  prerequis: [
    "Connaissances de base en exploitation minière ou en gestion de projet"
  ]
},
{
  id: 10,
  documentId: "modgeo3d20h",
  image: services1, // Remplace par le chemin ou identifiant de l'image appropriée
  brochure: brochure10, // Ajoute ici le lien de la brochure si disponible
  disponible: "n'est pas disponible",
  titre: "Formation en Modélisation 3D en Géologie Minière",
  slug: "formation-modelisation-3d-geologie-miniere",
  description_courte: "Devenez un expert en modélisation géologique et géomécanique appliquée à l’industrie minière.",
  description_longue: "Cette formation intensive et progressive vous plonge au cœur des techniques de modélisation 2D et 3D appliquées à la géologie minière, à la géomécanique et à l’estimation des ressources. À travers des cas pratiques et l’utilisation des logiciels professionnels les plus reconnus du secteur (Rocscience, Dips, Surfer, Datamine, Surpac, etc.), vous apprendrez à analyser la stabilité des massifs rocheux, à concevoir des modèles géologiques précis et à réaliser des estimations de ressources conformes aux standards internationaux.",
  niveau: "Niveau intermédiaire",
  duree_heures: 20,
  prix: 550,
  prix_promotionnel: 550,
  langue: "Français",
  est_actif: true,
  public_cible: "Étudiants, ingénieurs et professionnels en géologie, géotechnique et exploitation minière",
  domaine: "Géologie – Mines – Géotechnique",
  profils_concernes: [
    {
      profil: "Étudiants et diplômés en géologie, géotechnique ou ingénierie minière",
      competences: "Bases en géologie minière et modélisation"
    },
    {
      profil: "Géologues et ingénieurs en exploration",
      competences: "Analyse de données géologiques, estimation des ressources"
    },
    {
      profil: "Techniciens en topographie et géomatique",
      competences: "Intégration de données terrain dans les modèles"
    },
    {
      profil: "Consultants et professionnels en reconversion",
      competences: "Acquisition de compétences en modélisation 3D pour le secteur minier"
    }
  ],
  logiciels: ["Rocscience", "Dips", "Surfer", "Datamine", "Surpac"],
  objectifs: [
    "Modéliser en 2D & 3D des structures géologiques et géomécaniques",
    "Analyser la stabilité des excavations souterraines et à ciel ouvert",
    "Effectuer un traitement géostatistique des données minières",
    "Créer des modèles géologiques 3D précis",
    "Estimer les ressources minières selon les standards internationaux",
    "Concevoir des plans d’exploitation minière réalistes"
  ],
  prerequis: ["Notions de base en géologie et exploitation minière", "Connaissance des SIG ou logiciels techniques recommandée"]
}


  /* {
  id: 9,
  documentId: "metrebtp3",
  image: services1,
  brochure: "", // Ajoute ici le lien de la brochure si disponible
  disponible: "n'est pas disponible",
  titre: "Formation pour Connaître et Maîtriser le Métré dans le BTP",
  slug: "formation-metre-btp",
  description_courte: "Apprenez à quantifier les travaux et à établir un métré précis dans les projets BTP.",
  description_longue: "Cette formation permet de comprendre les bases et techniques avancées du métré dans le BTP. Elle est essentielle pour l'estimation des quantités, l'établissement des devis et la gestion financière des projets.",
  niveau: "Débutant à intermédiaire",
  duree_heures: 32,
  prix: 350,
  prix_promotionnel: 350,
  langue: "Français",
  est_actif: true,
  public_cible: "Techniciens BTP, métreurs, économistes de la construction",
  domaine: "Économie de la construction",
  profils_concernes: [
    {
      profil: "Métriseurs",
      competences: "Réalisation de quantitatifs et devis"
    }
  ],
  logiciels: ["Excel", "AutoCAD", "Covadis"],
  objectifs: [
    "Comprendre les principes de base du métré",
    "Établir un devis quantitatif",
    "Optimiser les estimations de coût"
  ],
  prerequis: ["Notions de construction ou chantier"]
},
{
  id: 10,
  documentId: "betonhydrau7",
  image: services10,
  brochure: "", // Ajoute ici le lien de la brochure si disponible
  disponible: "n'est pas disponible",
  titre: "Formation en béton armé et structures avancées : modélisation Hydraulique en génie civil",
  slug: "formation-beton-armee-hydraulique",
  description_courte: "Maîtrisez les calculs complexes de structures et les interactions hydraulique-béton armé.",
  description_longue: "Cette formation approfondit les techniques de modélisation des structures en béton armé, avec un focus sur les effets de l'eau (poussée, infiltration, stabilité). Elle est idéale pour les projets hydrauliques et ouvrages soumis à des efforts complexes.",
  niveau: "Avancé",
  duree_heures: 32,
  prix: 350,
  prix_promotionnel: 350,
  langue: "Français",
  est_actif: true,
  public_cible: "Ingénieurs en génie civil, hydrauliciens",
  domaine: "Génie Civil – Structures",
  profils_concernes: [
    {
      profil: "Ingénieurs structure",
      competences: "Analyse des efforts et dimensionnement béton"
    }
  ],
  logiciels: ["Robot Structural Analysis", "SAP2000", "Revit", "Autodesk CFD"],
  objectifs: [
    "Analyser les structures en béton armé soumises à des contraintes hydrauliques",
    "Maîtriser les logiciels de simulation",
    "Appliquer les normes aux ouvrages hydrauliques"
  ],
  prerequis: ["Connaissances en béton armé et hydraulique"]
},
{
  id: 11,
  documentId: "qhse5",
  image: services8,
  brochure: "", // Ajoute ici le lien de la brochure si disponible
  disponible: "n'est pas disponible",
  titre: "Formation en Qualité, Hygiène, Sécurité et Environnement (QHSE) pour le Génie Civil",
  slug: "formation-qhse-genie-civil",
  description_courte: "Implémentez une démarche QHSE performante sur vos chantiers BTP.",
  description_longue: "Cette formation vous permet de maîtriser les référentiels qualité, sécurité, santé et environnement adaptés aux travaux de génie civil. Elle aide à réduire les risques, à se conformer aux normes et à améliorer la performance globale des projets.",
  niveau: "Intermédiaire",
  duree_heures: 32,
  prix: 350,
  prix_promotionnel: 350,
  langue: "Français",
  est_actif: true,
  public_cible: "Coordinateurs QHSE, ingénieurs BTP",
  domaine: "QHSE",
  profils_concernes: [
    {
      profil: "Responsables qualité chantier",
      competences: "Mise en œuvre de normes ISO, sécurité"
    }
  ],
  logiciels: ["Excel", "MS Project", "Audit tools"],
  objectifs: [
    "Appliquer les bonnes pratiques QHSE",
    "Mettre en œuvre une politique sécurité sur chantier",
    "Suivre et auditer les performances environnementales"
  ],
  prerequis: ["Notions en gestion de chantier ou qualité"]
} */
];

export default servicesData;
