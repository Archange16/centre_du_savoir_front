import services1 from "../../public/assets/img/service/service-graphique.webp";
import services2 from "../../public/assets/img/portfolio/portfolio-3.jpg";
import services3 from "../../public/assets/img/service/service-graphique (1).webp";
import services4 from "../../public/assets/img/service/service-graphique (4).webp";
import services5 from "../../public/assets/img/service/service-details.png";
import services6 from "../../public/assets/img/service/service-api.webp";

const servicesData = [
    {
      "id": 1,
      "documentId": "calcstruct1",
      "image": services2,
      "titre": "Formation Calcul des Structures et Solidité des Bâtiments",
      "slug": "formation-calcul-structures-solidite-batiments",
      "description_courte": "Acquérir les compétences pour analyser et concevoir des structures de bâtiment robustes et sécurisées.",
      "description_longue": "Cette formation permet d'acquérir les compétences nécessaires pour analyser et concevoir des structures de bâtiment robustes et sécurisées. Elle offre une compréhension approfondie des principes de résistance des matériaux, des méthodes de calcul et des normes en vigueur, essentielles pour garantir la stabilité et la sécurité des constructions.",
      "niveau": "Intermédiaire",
      "duree_heures": 40,
      "prix": 950,
      "prix_promotionnel": 850,
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
    "documentId": "opcbtp2",
    "image": services2,
    "titre": "Formation en OPC : Pilotage et Planification BTP",
    "slug": "formation-opc-pilotage-planification-btp",
    "description_courte": "Maîtriser les techniques de gestion de projet dans le secteur du bâtiment et des travaux publics.",
    "description_longue": "Cette formation permet de maîtriser les techniques de gestion de projet dans le secteur du bâtiment et des travaux publics. Elle offre les compétences nécessaires pour coordonner efficacement les différentes étapes d’un projet, gérer les délais, les ressources et les coûts. Essentielle pour garantir la réussite de vos chantiers, cette formation vous aide à optimiser la planification et le pilotage pour des projets livrés dans les temps et en conformité avec les exigences.",
    "niveau": "Intermédiaire",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 35,
    "prix": 900,
    "prix_promotionnel": 800,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Chefs de projet, OPC, responsables de chantier",
    "domaine": "Gestion de projet BTP",
    "profils_concernes": [
      {
        "profil": "Chefs de projet BTP",
        "competences": "Planification et coordination des chantiers"
      },
      {
        "profil": "Ordonnanceurs (OPC)",
        "competences": "Optimisation des délais et des coûts"
      },
      {
        "profil": "Responsables travaux",
        "competences": "Gestion des ressources et planning"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Coordonner efficacement les étapes d’un projet BTP",
      "Maîtriser les outils de planification avancée",
      "Optimiser la gestion des délais, coûts et ressources",
      "Garantir la conformité des projets aux exigences"
    ],
    "prerequis": [
      "Expérience en gestion de projet ou chantier BTP",
      "Connaissance des processus de construction"
    ],
    "logiciels": [
      "Primavera P6",
      "Microsoft Project",
      "Asta Powerproject",
      "Procore",
      "Mibosa",
      "Dalux"
    ]
  },
  {
    "id": 3,
    "documentId": "metre-btp3",
    "image": services2,
    "titre": "Formation pour Connaître et Maîtriser le Métré dans le BTP",
    "slug": "formation-metre-btp",
    "description_courte": "Maîtriser les techniques de métré pour des estimations précises et une optimisation des coûts en construction.",
    "description_longue": "Cette formation vous apprend à réaliser des métrés précis et à évaluer les quantités de matériaux nécessaires pour vos projets de construction. Grâce à cette formation, vous développez les compétences pour optimiser les coûts, garantir la précision des estimations et assurer une gestion efficace des ressources sur vos chantiers. Indispensable pour les professionnels ou apprenants souhaitant maîtriser l'art du métré et améliorer la rentabilité de leurs projets.",
    "niveau": "Intermédiaire",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 30,
    "prix": 850,
    "prix_promotionnel": 750,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Métreurs, économistes de la construction, chefs de chantier",
    "domaine": "Génie Civil - Métrologie",
    "profils_concernes": [
      {
        "profil": "Métreurs",
        "competences": "Réalisation de métrés précis et détaillés"
      },
      {
        "profil": "Économistes de la construction",
        "competences": "Estimation des coûts et quantitatifs"
      },
      {
        "profil": "Chefs de chantier",
        "competences": "Optimisation des ressources matérielles"
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Réaliser des métrés précis selon les normes du BTP",
      "Maîtriser les techniques d'estimation quantitative",
      "Optimiser les coûts et la gestion des matériaux",
      "Appliquer les méthodes de contrôle des quantitatifs"
    ],
    "prerequis": [
      "Bases en lecture de plans techniques",
      "Connaissances élémentaires en construction"
    ],
    "logiciels": [
      "Plaxis",
      "GeoStudio",
      "Talren"
    ]
  },
  {
    "id": 4,
    "documentId": "mines-tech4",
    "image": services2,
    "titre": "Formation en Techniques Avancées pour l'Exploitation des Travaux Miniers",
    "slug": "formation-techniques-minieres",
    "description_courte": "Acquérir des compétences de pointe pour optimiser l'extraction minière avec des méthodes modernes et durables.",
    "description_longue": "Cette formation offre des compétences de pointe pour optimiser les processus d'extraction et de gestion des mines. Elle permet de maîtriser les dernières technologies et méthodes pour améliorer la sécurité, la rentabilité et la durabilité des projets miniers. Essentielle pour les professionnels et apprenants du secteur, cette formation vous prépare à relever les défis techniques et environnementaux dans l'exploitation minière moderne.",
    "niveau": "Avancé",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 50,
    "prix": 1200,
    "prix_promotionnel": 1100,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Ingénieurs miniers, géologues, responsables d'exploitation",
    "domaine": "Industrie Minière",
    "profils_concernes": [
      {
        "profil": "Ingénieurs miniers",
        "competences": "Optimisation des processus d'extraction"
      },
      {
        "profil": "Géologues",
        "competences": "Analyse des gisements et planification"
      },
      {
        "profil": "Responsables QHSE",
        "competences": "Gestion des risques miniers"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Maîtriser les technologies modernes d'exploitation minière",
      "Optimiser la rentabilité et la durabilité des projets",
      "Appliquer les normes de sécurité minière",
      "Utiliser les outils SIG pour la gestion des ressources"
    ],
    "prerequis": [
      "Expérience dans le secteur minier",
      "Connaissances en géologie ou génie civil"
    ],
    "logiciels": [
      "ArcGIS",
      "MapInfo",
      "QGIS"
    ]
  },
  {
    "id": 5,
    "documentId": "beton-hydraulique5",
    "image": services2,
    "titre": "Formation en béton armé et structures avancées : modélisation Hydraulique en génie civil",
    "slug": "formation-beton-armee-hydraulique",
    "description_courte": "Maîtriser la conception des structures en béton armé avec intégration de modélisation hydraulique pour les infrastructures complexes.",
    "description_longue": "Cette formation avancée propose une approche technique et pratique pour maîtriser la conception des structures en béton armé tout en intégrant la modélisation hydraulique dans les projets d'infrastructure. Renforcer vos compétences en calcul et dimensionnement des structures en béton armé selon les normes actuelles. Explorer les outils logiciels les plus récents pour modéliser les interactions structurelles et hydrauliques. Intégrer des solutions durables et innovantes dans vos projets d'infrastructures hydrauliques (ponts, barrages, réseaux d'évacuation, etc.). Gérer des projets complexes en tenant compte des contraintes hydrauliques et structurelles.",
    "niveau": "Avancé",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 60,
    "prix": 1500,
    "prix_promotionnel": 1350,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Ingénieurs en génie civil, concepteurs de structures hydrauliques",
    "domaine": "Génie Civil - Structures Hydrauliques",
    "profils_concernes": [
      {
        "profil": "Ingénieurs structures",
        "competences": "Dimensionnement de structures BA en milieu hydraulique"
      },
      {
        "profil": "Concepteurs d'infrastructures",
        "competences": "Intégration des contraintes hydrauliques"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Maîtriser le dimensionnement des structures en BA selon les normes",
      "Modéliser les interactions structure-hydraulique",
      "Concevoir des infrastructures hydrauliques durables",
      "Gérer les interfaces complexes entre contraintes structurelles et hydrauliques"
    ],
    "prerequis": [
      "Expérience en calcul de structures",
      "Bases en mécanique des fluides"
    ],
    "logiciels": [
      "EPANET",
      "HEC-RAS",
      "Water CAD",
      "TEKLA Structural Designer",
      "Robot Structural Analysis",
      "ETABS"
    ],
    "programme": [
      "Principes avancés du béton armé",
      "Modélisation hydraulique des infrastructures",
      "Analyse des interactions fluide-structure",
      "Études de cas : barrages, ponts, réseaux"
    ]
  },
  {
    "id": 6,
    "documentId": "routes-avance6",
    "image": services2,
    "titre": "Formation en Conception et Réalisation des Infrastructures Routières avancé",
    "slug": "formation-infrastructures-routieres-avance",
    "description_courte": "Acquérir une expertise approfondie pour concevoir des routes modernes, sûres et durables.",
    "description_longue": "Cette formation offre une expertise approfondie dans la création de routes modernes et sécurisées. Elle permet aux apprenants d'acquérir les compétences techniques nécessaires pour concevoir, planifier et réaliser des infrastructures routières de qualité, en optimisant les coûts, la sécurité et la durabilité. Une formation essentielle pour répondre aux défis de l'évolution des transports et garantir des infrastructures fiables et performantes.",
    "niveau": "Avancé",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 45,
    "prix": 1100,
    "prix_promotionnel": 990,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Ingénieurs routiers, chefs de projet VRD, bureaux d'études",
    "domaine": "Infrastructures de Transport",
    "profils_concernes": [
      {
        "profil": "Ingénieurs voirie",
        "competences": "Conception technique des infrastructures"
      },
      {
        "profil": "Chefs de projet VRD",
        "competences": "Gestion complète des projets routiers"
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Maîtriser les techniques de conception routière avancée",
      "Optimiser la sécurité et la durabilité des infrastructures",
      "Utiliser les outils professionnels de modélisation",
      "Intégrer les normes environnementales dans les projets"
    ],
    "prerequis": [
      "Bases en génie civil",
      "Connaissance des réglementations routières"
    ],
    "logiciels": [
      "PISTE",
      "AutoPISTE",
      "AutoCAD",
      "COVADIS",
      "IE-OUVRAGES",
      "Global Mapper",
      "Flowmaster",
      "Google Earth",
      "Excel"
    ],
    "programme": [
      "Conception géométrique des routes",
      "Dimensionnement des chaussées",
      "Gestion des eaux pluviales",
      "Sécurité routière et signalisation"
    ]
  },
  {
    "id": 7,
    "documentId": "qhse-gc7",
    "titre": "Formation en Qualité, Hygiène, Sécurité et Environnement (QHSE) pour le Génie Civil",
    "slug": "formation-qhse-genie-civil",
    "description_courte": "Acquérir les compétences pour garantir la sécurité et la conformité réglementaire sur les chantiers de construction.",
    "description_longue": "Cette formation en QHSE pour le génie civil offre une approche pratique et complète des normes de qualité, sécurité, hygiène et environnement. Elle permet aux professionnels du secteur d'acquérir les compétences nécessaires pour garantir la sécurité sur les chantiers, assurer la conformité réglementaire et promouvoir des pratiques durables et responsables dans la gestion des projets de construction.",
    "niveau": "Intermédiaire",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 30,
    "prix": 800,
    "prix_promotionnel": 720,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Responsables QHSE, chefs de chantier, coordinateurs SPS",
    "domaine": "Management QHSE",
    "profils_concernes": [
      {
        "profil": "Responsables QHSE",
        "competences": "Mise en œuvre des politiques QHSE"
      },
      {
        "profil": "Chefs de chantier",
        "competences": "Application des règles sur site"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Maîtriser les référentiels QHSE du BTP",
      "Mettre en place un système de management intégré",
      "Conduire des audits et analyses de risques",
      "Promouvoir une culture sécurité sur les chantiers"
    ],
    "prerequis": [
      "Expérience en milieu industriel ou BTP",
      "Sensibilité aux enjeux HSE"
    ],
    "programme": [
      "Économie d'entreprise et enjeux QHSE",
      "Normes QHSE de référence",
      "Gestion de production et démarche qualité",
      "Outils du management QHSE",
      "Responsabilité Sociétale des Entreprises"
    ]
  },
  {
    "id": 8,
    "documentId": "vrd-urbaine8",
    "titre": "Formation avancée en V.R.D (Voirie Urbaine)",
    "slug": "formation-vrd-voirie-urbaine",
    "description_courte": "Acquérir des compétences pointues en conception et gestion des infrastructures urbaines (voirie, assainissement, eau potable).",
    "description_longue": "Cette formation permet d'acquérir des compétences pointues dans la conception, la réalisation et la gestion des infrastructures urbaines. Elle offre une maîtrise des techniques liées à la voirie, aux réseaux d'assainissement, d'eau potable et aux aménagements publics. Une formation clé pour répondre aux enjeux d'urbanisation durable et de gestion efficace des infrastructures publiques, en garantissant des projets de qualité, sûrs et respectueux des normes environnementales.",
    "niveau": "Avancé",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 40,
    "prix": 950,
    "prix_promotionnel": 855,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Ingénieurs VRD, urbanistes, techniciens en aménagement urbain",
    "domaine": "Génie Civil - Voirie et Réseaux Divers",
    "profils_concernes": [
      {
        "profil": "Ingénieurs VRD",
        "competences": "Conception intégrée des réseaux urbains"
      },
      {
        "profil": "Chefs de projet urbanisme",
        "competences": "Coordination des infrastructures publiques"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Maîtriser les techniques de conception des voiries urbaines",
      "Intégrer les réseaux divers (eau, assainissement) dans les projets",
      "Appliquer les normes environnementales en milieu urbain",
      "Optimiser la gestion des infrastructures publiques"
    ],
    "prerequis": [
      "Bases en génie civil ou urbanisme",
      "Connaissance des réglementations urbaines"
    ],
    "logiciels": [
      "AutoPISTE",
      "AutoCAD",
      "COVADIS",
      "Excel"
    ],
    "programme": [
      "Conception des voiries et espaces publics",
      "Réseaux d'assainissement et hydraulique urbaine",
      "Gestion des eaux pluviales",
      "Accessibilité et mobilité urbaine"
    ]
  },
  {
    "id": 9,
    "documentId": "carto-geo9",
    "titre": "Formation en Cartographie Géologique et Topographique Avancée",
    "slug": "formation-cartographie-geologique-topographique",
    "description_courte": "Développer des compétences avancées en analyse géospatiale pour la gestion des risques et l'aménagement du territoire.",
    "description_longue": "Cette formation permet d'acquérir des compétences avancées en cartographie géologique et topographique, indispensables pour la conception de projets d'infrastructures et d'aménagement du territoire. Les participants apprendront à exploiter des données géospatiales complexes pour une prise de décision précise et sécurisée dans la gestion des risques géologiques et environnementaux.",
    "niveau": "Avancé",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 35,
    "prix": 1100,
    "prix_promotionnel": 990,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Géologues, topographes, ingénieurs en géotechnique",
    "domaine": "Géosciences - Topographie",
    "profils_concernes": [
      {
        "profil": "Géologues",
        "competences": "Analyse et modélisation des données géologiques"
      },
      {
        "profil": "Ingénieurs en géotechnique",
        "competences": "Évaluation des risques géologiques"
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Maîtriser les outils avancés de cartographie numérique",
      "Interpréter les données géologiques et topographiques",
      "Évaluer les risques géotechniques",
      "Produire des cartes thématiques pour l'aménagement"
    ],
    "prerequis": [
      "Bases en géologie ou topographie",
      "Connaissance des systèmes d'information géographique"
    ],
    "logiciels": [
      "ArcGIS",
      "QGIS",
      "MapInfo"
    ],
    "programme": [
      "Techniques avancées de levés topographiques",
      "Modélisation 3D des formations géologiques",
      "Analyse des risques naturels",
      "Applications aux projets d'infrastructures"
    ]
  },
  {
    "id": 10,
    "documentId": "assainissement10",
    "titre": "Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)",
    "slug": "formation-assainissement-eaux",
    "description_courte": "Acquérir les compétences pour concevoir et gérer des réseaux d'assainissement efficaces et durables.",
    "description_longue": "Cette formation vous permet d'acquérir les compétences essentielles pour concevoir, gérer et entretenir des réseaux d'assainissement efficaces. Elle aborde les meilleures pratiques pour assurer la collecte, le transport et le traitement des eaux usées et pluviales, tout en garantissant la protection de l'environnement et la santé publique. Cette formation vous prépare à relever les défis liés à la gestion durable des eaux.",
    "niveau": "Intermédiaire",
    "createdAt": "2025-06-01T12:08:39.077Z",
    "updatedAt": "2025-06-03T16:50:17.479Z",
    "publishedAt": "2025-06-03T16:50:17.499Z",
    "duree_heures": 30,
    "prix": 900,
    "prix_promotionnel": 810,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Techniciens assainissement, ingénieurs hydrauliques, urbanistes",
    "domaine": "Hydraulique Urbaine",
    "profils_concernes": [
      {
        "profil": "Techniciens en assainissement",
        "competences": "Dimensionnement des réseaux hydrauliques"
      },
      {
        "profil": "Urbanistes",
        "competences": "Intégration des réseaux dans les projets urbains"
      }
    ],
    "acces_plateforme": true,
    "double_certification": true,
    "objectifs": [
      "Concevoir des réseaux d'eaux usées et pluviales",
      "Maîtriser les techniques de traitement des eaux",
      "Appliquer la réglementation en assainissement",
      "Optimiser la gestion durable des eaux urbaines"
    ],
    "prerequis": [
      "Bases en hydraulique",
      "Connaissance des enjeux environnementaux"
    ],
    "logiciels": [
      "AutoPISTE",
      "AutoCAD",
      "COVADIS",
      "Excel"
    ],
    "programme": [
      "Hydrologie urbaine et hydraulique des réseaux",
      "Technologies de traitement des eaux",
      "Gestion des eaux pluviales",
      "Maintenance préventive des ouvrages"
    ]
  },
  
];

export default servicesData;
