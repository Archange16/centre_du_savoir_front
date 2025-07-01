import services1 from "../../public/assets/img/service/Formation pour Connaître et Maîtriser le Métré dans le BTP.jpg";
import services2 from "../../public/assets/img/service/Formation en Assainissement.jpg";
import services3 from "../../public/assets/img/service/Formation en Cartographie Géologique et Topographique Avancée.jpg";
import services4 from "../../public/assets/img/service/Formation en Conception et Réalisation des Infrastructures Routières avancé.jpg";
import services5 from "../../public/assets/img/service/La formation en Techniques Avancées pour l'Exploitation des Travaux Miniers.jpg";
import services6 from "../../public/assets/img/service/Pilotage et Planification BTP.jpg";
import services7 from "../../public/assets/img/service/Formation avancée en V.R.D.jpg";
import services8 from "../../public/assets/img/service/Formation en Qualité, hygiène, sécurité et environnement.jpg";
import services9 from "../../public/assets/img/service/Formation Calcul des Structures et Solidité des Bâtiments.jpg";
import services10 from "../../public/assets/img/service/Formation en béton armé et structures avancées.jpg";

const brochure1 = "/assets/img/brochure/BROCHURE CALCUL DES STRUCTURES ET SOLIDITÉ DES BÂTIMENTS.pdf";
const brochure2 = "/assets/img/brochure/BROCHURE CARTOGRAPHIE GÉOLOGIQUE ET TOPOGRAPHIQUE AVANCÉE.pdf";
const brochure3 = "/assets/img/BROCHURE CONCEPTION ET RÉALISATION DES INFRASTRUCTURES ROTIÈRES.pdf";
const brochure4 = "/assets/img/brochure/BROCHURE EXPLOITATION MINIÈRE À CIEL OUVERT.pdf";
const brochure5 = "/assets/img/brochure/BROCHURE OUVRAGE D'ART.pdf";
const brochure6 = "/assets/img/brochure/CONCEPTION ET REALISATION DES  DES INFRASTRUCTURES ROUTIÈRES AVANCÉ.pdf";
const brochure7 = "/assets/img/MAÎTRISE DE L'ORDONNNCEMENT, PILOTAGE ET COORDINATION DES TRAVAUX (OPC).pdf";
const brochure8 = "/assets/img/ASSAINISSEMENT MAÎTRISE DES EAUX USÉES ET PLUVIALES.pdf";
const brochure9 = "/assets/img/V.R.D VOIRIE URBAINE.pdf";



const servicesData = [
  {
    id: 1,
    documentId: "ouvragesart11",
    image: services10,
    brochure: brochure5,
    disponible: "disponible sur notre plateforme",
    titre: "Formation dans le domaine des ouvrages d’art (ponts)",
    slug: "formation-ouvrages-art-ponts",
    description_courte: "Maîtriser la conception, la réalisation et l’entretien des ouvrages d’art tels que les ponts.",
    description_longue: "Cette formation approfondie couvre les aspects techniques de la conception, de la réalisation et de la maintenance des ouvrages d’art, notamment les ponts. Elle permet d’acquérir une expertise sur les types de structures, les matériaux utilisés, les méthodes de dimensionnement et les normes de sécurité.",
    niveau: "Avancé",
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
    logiciels: ["Robot Structural Analysis", "AutoCAD", "Revit", "SAP2000"],
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
    id: 2,
    documentId: "mines4",
    image: services5,
    brochure: brochure4,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en exploitation minière à ciel ouvert : fondamentaux de l’extraction moderne",
    slug: "techniques-avancees-exploitation-miniere",
    description_courte: "Optimisez les processus d’extraction minière modernes.",
    description_longue: "Cette formation offre des compétences de pointe pour optimiser les processus d’extraction et de gestion des mines. Elle permet de maîtriser les dernières technologies et méthodes pour améliorer la sécurité, la rentabilité et la durabilité.",
    niveau: "Avancé",
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
    id: 3,
    documentId: "infraroutes6",
    image: services4,
    brochure: brochure3,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Conception et Réalisation des Infrastructures Routières Avancées (route)",
    slug: "formation-infrastructures-routieres-avancee",
    description_courte: "Acquérir une expertise approfondie dans la conception et réalisation de routes modernes.",
    description_longue: "Cette formation permet aux apprenants d’acquérir les compétences techniques nécessaires pour concevoir, planifier et réaliser des infrastructures routières de qualité, en optimisant les coûts, la sécurité et la durabilité.",
    niveau: "Avancé",
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
    id: 4,
    documentId: "cartotopo9",
    image: services3,
    brochure: brochure2,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Cartographie Géologique et Topographique Avancée",
    slug: "formation-cartographie-geologique-topographique",
    description_courte: "Exploitez des données géospatiales complexes pour vos projets d'infrastructure.",
    description_longue: "Cette formation permet d’acquérir des compétences avancées en cartographie géologique et topographique, indispensables pour la conception de projets d’infrastructures et d’aménagement du territoire.",
    niveau: "Intermédiaire",
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
    id: 5,
    documentId: "calcstruct1",
    image: services9,
    brochure: brochure1,
    disponible: "disponible sur notre plateforme",
    titre: "Formation Calcul des Structures et Solidité des Bâtiments",
    slug: "formation-calcul-structures-solidite-batiments",
    description_courte: "Acquérir les compétences pour analyser et concevoir des structures de bâtiment robustes et sécurisées.",
    description_longue: "Cette formation permet d'acquérir les compétences nécessaires pour analyser et concevoir des structures de bâtiment robustes et sécurisées. Elle offre une compréhension approfondie des principes de résistance des matériaux, des méthodes de calcul et des normes en vigueur, essentielles pour garantir la stabilité et la sécurité des constructions.",
    niveau: "Intermédiaire",
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
    id: 6,
    documentId: "opc2",
    image: services6,
    brochure: brochure7,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en OPC : Pilotage et Planification BTP",
    slug: "formation-opc-pilotage-planification-btp",
    description_courte: "Maîtriser la gestion de projet dans le BTP : délais, ressources, coûts.",
    description_longue: "Cette formation permet de maîtriser les techniques de gestion de projet dans le secteur du bâtiment et des travaux publics. Elle offre les compétences nécessaires pour coordonner efficacement les différentes étapes d’un projet, gérer les délais, les ressources et les coûts.",
    niveau: "Intermédiaire",
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
    id: 7,
    documentId: "vrd8",
    image: services7,
    brochure: brochure9,
    disponible: "disponible sur notre plateforme",
    titre: "Formation avancée en V.R.D (Voirie Urbaine)",
    slug: "formation-avancee-vrd",
    description_courte: "Maîtriser la conception et gestion des infrastructures urbaines modernes.",
    description_longue: "Cette formation permet d’acquérir des compétences pointues dans la conception, la réalisation et la gestion des infrastructures urbaines : voirie, assainissement, réseaux d’eau potable et aménagements publics.",
    niveau: "Avancé",
    duree_heures: 32,
    prix: 490,
    prix_promotionnel: 490,
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
    id: 8,
    documentId: "assainissement10",
    image: services2,
    brochure: brochure8,
    disponible: "disponible sur notre plateforme",
    titre: "Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)",
    slug: "formation-assainissement-eaux-usees-pluviales",
    description_courte: "Concevoir et gérer des réseaux d’assainissement durables et efficaces.",
    description_longue: "Cette formation vous permet d’acquérir les compétences essentielles pour concevoir, gérer et entretenir des réseaux d’assainissement efficaces, tout en garantissant la protection de l’environnement et la santé publique.",
    niveau: "Intermédiaire",
    duree_heures: 32,
    prix: 490,
    prix_promotionnel: 490,
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
  }
];

export default servicesData;
