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
    "id": 1,
    "documentId": "calcstruct1",
    "image": services9,
    "brochure": brochure1,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation Calcul des Structures et Solidité des Bâtiments",
    "slug": "formation-calcul-structures-solidite-batiments",
    "description_courte": "Acquérir les compétences pour analyser et concevoir des structures de bâtiment robustes et sécurisées.",
    "description_longue": "Cette formation permet d'acquérir les compétences nécessaires pour analyser et concevoir des structures de bâtiment robustes et sécurisées. Elle offre une compréhension approfondie des principes de résistance des matériaux, des méthodes de calcul et des normes en vigueur, essentielles pour garantir la stabilité et la sécurité des constructions.",
    "niveau": "Intermédiaire",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Professionnels du BTP, ingénieurs structure",
    "domaine": "Génie Civil",
    "profils_concernes": [
      {
        "profil": "Ingénieurs structure",
        "competences": "Conception et calcul de structures"
      },
      {
        "profil": "Techniciens supérieurs",
        "competences": "Analyse de structures"
      }
    ],
    "logiciels": ["AutoCAD", "Revit", "ETABS", "SAP2000", "Robot Structural Analysis"],
    "objectifs": [
      "Maîtriser les principes de résistance des matériaux",
      "Appliquer les méthodes de calcul structural",
      "Concevoir des structures conformes aux normes"
    ],
    "prerequis": [
      "Bases en mécanique des structures",
      "Connaissances en construction"
    ]
  },
  {
    "id": 2,
    "documentId": "opc2",
    "image": services6,
    "brochure": brochure7,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en OPC : Pilotage et Planification BTP",
    "slug": "formation-opc-pilotage-planification-btp",
    "description_courte": "Maîtriser la gestion de projet dans le BTP : délais, ressources, coûts.",
    "description_longue": "Cette formation permet de maîtriser les techniques de gestion de projet dans le secteur du bâtiment et des travaux publics. Elle offre les compétences nécessaires pour coordonner efficacement les différentes étapes d’un projet, gérer les délais, les ressources et les coûts.",
    "niveau": "Intermédiaire",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 800,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Chefs de projets, conducteurs de travaux",
    "domaine": "Gestion de projet BTP",
    "profils_concernes": [
      {
        "profil": "Chefs de chantier",
        "competences": "Coordination de travaux"
      },
      {
        "profil": "Planificateurs BTP",
        "competences": "Planification et suivi de projet"
      }
    ],
    "logiciels": ["Primavera P6", "Microsoft Project", "Asta Powerproject", "Procore", "Mibosa", "Dalux"],
    "objectifs": [
      "Planifier et suivre un chantier",
      "Maîtriser les outils de gestion de projet",
      "Optimiser les délais et les ressources"
    ],
    "prerequis": [
      "Connaissance des étapes d’un projet de construction"
    ]
  },
  /* {
    "id": 3,
    "documentId": "metre3",
    "image": services1,
    "brochure": brochure10,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation pour Connaître et Maîtriser le Métré dans le BTP",
    "slug": "formation-maitrise-metre-btp",
    "description_courte": "Apprenez à estimer avec précision les quantités de matériaux.",
    "description_longue": "Cette formation vous apprend à réaliser des métrés précis et à évaluer les quantités de matériaux nécessaires pour vos projets de construction.",
    "niveau": "Débutant",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Économistes de la construction, techniciens BTP",
    "domaine": "Économie de la construction",
    "profils_concernes": [
      {
        "profil": "Métreurs",
        "competences": "Calcul de quantités, chiffrage"
      }
    ],
    "logiciels": ["Plaxis", "GeoStudio", "Talren"],
    "objectifs": [
      "Réaliser des métrés précis",
      "Optimiser la gestion des coûts",
      "Garantir l’exactitude des estimations"
    ],
    "prerequis": [
      "Connaissances de base en construction"
    ]
  }, */
  {
    "id": 4,
    "documentId": "mines4",
    "image": services5,
    "brochure": brochure4,
    "disponible": "disponible sur notre plateforme",
    "titre": "Techniques Avancées pour l'Exploitation des Travaux Miniers",
    "slug": "techniques-avancees-exploitation-miniere",
    "description_courte": "Optimisez les processus d’extraction minière modernes.",
    "description_longue": "Cette formation offre des compétences de pointe pour optimiser les processus d’extraction et de gestion des mines. Elle permet de maîtriser les dernières technologies et méthodes pour améliorer la sécurité, la rentabilité et la durabilité.",
    "niveau": "Avancé",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Ingénieurs miniers, responsables de sites",
    "domaine": "Mines et carrières",
    "profils_concernes": [
      {
        "profil": "Responsables d’exploitation",
        "competences": "Gestion technique et environnementale des mines"
      }
    ],
    "logiciels": ["ArcGIS", "MapInfo", "QGIS"],
    "objectifs": [
      "Améliorer les procédés miniers",
      "Utiliser des outils géospatiaux",
      "Gérer les aspects environnementaux"
    ],
    "prerequis": [
      "Connaissances de base en exploitation minière"
    ]
  },
  /* {
    "id": 5,
    "documentId": "hydrobton5",
    "image": services10,
    "brochure": brochure10,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en béton armé et structures avancées : modélisation Hydraulique en génie civil",
    "slug": "formation-beton-arme-hydraulique-genie-civil",
    "description_courte": "Maîtriser la conception des structures en béton armé intégrant la modélisation hydraulique.",
    "description_longue": "Cette formation avancée propose une approche technique et pratique pour maîtriser la conception des structures en béton armé tout en intégrant la modélisation hydraulique dans les projets d’infrastructure.",
    "niveau": "Avancé",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Ingénieurs en infrastructures, hydrauliques et structures",
    "domaine": "Génie Civil Hydraulique",
    "profils_concernes": [
      {
        "profil": "Ingénieurs civils",
        "competences": "Calcul de structures et modélisation hydraulique"
      }
    ],
    "logiciels": ["EPANET", "HEC-RAS", "Water CAD", "TEKLA Structural Designer", "Robot Structural Analysis", "ETABS"],
    "objectifs": [
      "Concevoir des ouvrages en béton armé",
      "Intégrer l’analyse hydraulique aux projets",
      "Utiliser des logiciels de simulation hydraulique"
    ],
    "prerequis": [
      "Notions de base en béton armé",
      "Connaissance en hydraulique urbaine"
    ]
  }, */
  {
    "id": 6,
    "documentId": "infraroutes6",
    "image": services4,
    "brochure": brochure3,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en Conception et Réalisation des Infrastructures Routières avancé (route)",
    "slug": "formation-infrastructures-routieres-avancee",
    "description_courte": "Acquérir une expertise approfondie dans la conception et réalisation de routes modernes.",
    "description_longue": "Cette formation permet aux apprenants d’acquérir les compétences techniques nécessaires pour concevoir, planifier et réaliser des infrastructures routières de qualité, en optimisant les coûts, la sécurité et la durabilité.",
    "niveau": "Avancé",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Ingénieurs routiers, urbanistes",
    "domaine": "Infrastructure routière",
    "profils_concernes": [
      {
        "profil": "Techniciens voirie",
        "competences": "Conception géométrique et drainage"
      }
    ],
    "logiciels": ["PISTE", "AutoPISTE", "AutoCAD", "COVADIS", "IE-OUVRAGES", "Global Mapper", "Flowmaster", "Google EARTH", "Excel"],
    "objectifs": [
      "Maîtriser les étapes de conception routière",
      "Utiliser les outils spécialisés",
      "Garantir la sécurité et la durabilité des routes"
    ],
    "prerequis": [
      "Bases en géotechnique et topographie"
    ]
  },
  /* {
    "id": 7,
    "documentId": "qhse7",
    "image": services8,
    "brochure": brochure10,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en Qualité, hygiène, sécurité et environnement (QHSE)",
    "slug": "formation-qhse-btp",
    "description_courte": "Adoptez une démarche complète QHSE dans vos projets de construction.",
    "description_longue": "Cette formation en QHSE pour le génie civil offre une approche pratique et complète des normes de qualité, sécurité, hygiène et environnement.",
    "niveau": "Intermédiaire",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Responsables qualité, ingénieurs sécurité chantier",
    "domaine": "Gestion QHSE",
    "profils_concernes": [
      {
        "profil": "Chargés QHSE",
        "competences": "Normes ISO, réglementation HSE"
      }
    ],
    "logiciels": [],
    "objectifs": [
      "Maîtriser les référentiels QHSE",
      "Garantir la sécurité et la conformité réglementaire",
      "Promouvoir les bonnes pratiques environnementales"
    ],
    "prerequis": [
      "Aucune connaissance préalable obligatoire"
    ]
  }, */
  {
    "id": 8,
    "documentId": "vrd8",
    "image": services7,
    "brochure": brochure9,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation avancée en V.R.D (Voirie Urbaine)",
    "slug": "formation-avancee-vrd",
    "description_courte": "Maîtriser la conception et gestion des infrastructures urbaines modernes.",
    "description_longue": "Cette formation permet d’acquérir des compétences pointues dans la conception, la réalisation et la gestion des infrastructures urbaines : voirie, assainissement, réseaux d’eau potable et aménagements publics.",
    "niveau": "Avancé",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Techniciens et ingénieurs VRD",
    "domaine": "Aménagement urbain",
    "profils_concernes": [
      {
        "profil": "Projeteurs VRD",
        "competences": "Conception réseaux et voirie"
      }
    ],
    "logiciels": ["AutoPISTE", "AutoCAD", "COVADIS", "EXCEL"],
    "objectifs": [
      "Réaliser des études de réseaux urbains",
      "Concevoir des voiries et espaces publics",
      "Appliquer les normes d’aménagement urbain"
    ],
    "prerequis": [
      "Connaissances en urbanisme ou VRD"
    ]
  },
  {
    "id": 9,
    "documentId": "cartotopo9",
    "image": services3,
    "brochure": brochure2,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en Cartographie Géologique et Topographique Avancée",
    "slug": "formation-cartographie-geologique-topographique",
    "description_courte": "Exploitez des données géospatiales complexes pour vos projets d'infrastructure.",
    "description_longue": "Cette formation permet d’acquérir des compétences avancées en cartographie géologique et topographique, indispensables pour la conception de projets d’infrastructures et d’aménagement du territoire.",
    "niveau": "Intermédiaire",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Géomaticiens, ingénieurs topographes",
    "domaine": "Cartographie et topographie",
    "profils_concernes": [
      {
        "profil": "Experts SIG",
        "competences": "Analyse géospatiale et modélisation du terrain"
      }
    ],
    "logiciels": ["ArcGIS", "QGIS", "MapInfo"],
    "objectifs": [
      "Maîtriser la cartographie géologique",
      "Utiliser les SIG pour l’analyse topographique",
      "Évaluer les risques liés au sol"
    ],
    "prerequis": [
      "Notions de SIG et topographie"
    ]
  },
  {
    "id": 10,
    "documentId": "assainissement10",
    "image": services2,
    "brochure": brochure8,
    "disponible": "disponible sur notre plateforme",
    "titre": "Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)",
    "slug": "formation-assainissement-eaux-usees-pluviales",
    "description_courte": "Concevoir et gérer des réseaux d’assainissement durables et efficaces.",
    "description_longue": "Cette formation vous permet d’acquérir les compétences essentielles pour concevoir, gérer et entretenir des réseaux d’assainissement efficaces, tout en garantissant la protection de l’environnement et la santé publique.",
    "niveau": "Intermédiaire",
    "duree_heures": 32,
    "prix": 490,
    "prix_promotionnel": 490,
    "langue": "Français",
    "est_actif": true,
    "public_cible": "Techniciens assainissement, ingénieurs réseaux",
    "domaine": "Assainissement et environnement",
    "profils_concernes": [
      {
        "profil": "Chargés d’étude assainissement",
        "competences": "Dimensionnement et gestion des réseaux"
      }
    ],
    "logiciels": ["AutoPISTE", "AutoCAD", "COVADIS", "EXCEL"],
    "objectifs": [
      "Concevoir des réseaux d’eaux usées et pluviales",
      "Gérer durablement les flux hydrauliques",
      "Respecter les normes environnementales"
    ],
    "prerequis": [
      "Bases en hydraulique ou assainissement"
    ]
  }
];

export default servicesData;
