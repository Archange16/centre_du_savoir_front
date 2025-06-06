/* import services1 from "../../public/assets/img/service/service-graphique.webp";
import services2 from "../../public/assets/img/service/service-mobile.webp";
import services3 from "../../public/assets/img/service/service-graphique (1).webp";
import services4 from "../../public/assets/img/service/service-graphique (4).webp";
import services5 from "../../public/assets/img/service/service-details.png";
import services6 from "../../public/assets/img/service/service-api.webp"; */
import bureautiqueImage from "../../public/assets/img/service/service-details.png";

const servicesData = [
    {
    "id": "Formation_001",
    "categorie": "Geniecivil",
    "image": bureautiqueImage,
    "title": "Initiation au dessin technique",
    "slug": "Initiation au dessin technique",
    "description_courte": "Une formation pour apprendre les bases de initiation au dessin technique.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Génie civil",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_002",
    "categorie": "Geniecivil",
    "image": bureautiqueImage,
    "title": "Lecture de plans BTP",
    "slug": "Lecture de plans BTP",
    "description_courte": "Une formation pour apprendre les bases de lecture de plans btp.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Génie civil",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_003",
    "categorie": "Geniecivil",
    "image": bureautiqueImage,
    "title": "Bases du béton armé",
    "slug": "Bases du béton armé",
    "description_courte": "Une formation pour apprendre les bases de bases du béton armé.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Génie civil",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_004",
    "categorie": "Infographie",
    "image": bureautiqueImage,
    "title": "Introduction à Illustrator",
    "slug": "Introduction à Illustrator",
    "description_courte": "Une formation pour apprendre les bases de introduction à illustrator.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Infographie",
    "profils_concernes": [
      { "profil": "Professionnels et étudiants", "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine." },
      { "profil": "Entreprises et institutions", "competences": "Renforcer les capacités internes sur des outils essentiels." },
      { "profil": "Formateurs et consultants", "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques." }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [ "Découvrir les concepts de base", "Maîtriser les outils fondamentaux", "Appliquer les acquis dans des projets simples" ],
    "prerequis": [ "Aucun prérequis nécessaire", "Connaissances de base en informatique recommandées" ]
  },
  {
    "id": "Formation_005",
    "categorie": "Infographie",
    "image": bureautiqueImage,
    "title": "Création d'affiches",
    "slug": "Création d'affiches",
    "description_courte": "Une formation pour apprendre les bases de création d'affiches.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)...",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Infographie",
    "profils_concernes": [ 
      { "profil": "Professionnels et étudiants", "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine." },
      { "profil": "Entreprises et institutions", "competences": "Renforcer les capacités internes sur des outils essentiels." },
      { "profil": "Formateurs et consultants", "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques." }
     ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [ "Découvrir les concepts de base", "Maîtriser les outils fondamentaux", "Appliquer les acquis dans des projets simples" ],
    "prerequis": [ "Aucun prérequis nécessaire", "Connaissances de base en informatique recommandées" ]
  },
  {
    "id": "Formation_006",
    "categorie": "Infographie",
    "image": bureautiqueImage,
    "title": "Design vectoriel pour débutants",
    "slug": "Design vectoriel pour débutants",
    "description_courte": "Une formation pour apprendre les bases de design vectoriel pour débutants.",
    "description_longue": "Durée: 40 heures...",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Infographie",
    "profils_concernes": [ 
      { "profil": "Professionnels et étudiants", "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine." },
      { "profil": "Entreprises et institutions", "competences": "Renforcer les capacités internes sur des outils essentiels." },
      { "profil": "Formateurs et consultants", "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques." }
     ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": ["Découvrir les concepts de base", "Maîtriser les outils fondamentaux", "Appliquer les acquis dans des projets simples" ],
    "prerequis": [ "Aucun prérequis nécessaire", "Connaissances de base en informatique recommandées" ]
  },
  {
    "id": "Formation_007",
    "categorie": "Audiovisuel",
    "image": bureautiqueImage,
    "title": "Montage vidéo avec DaVinci Resolve",
    "slug": "Montage vidéo avec DaVinci Resolve",
    "description_courte": "Une formation pour apprendre les bases de montage vidéo avec davinci resolve.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Audiovisuel",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_008",
    "categorie": "Audiovisuel",
    "image": bureautiqueImage,
    "title": "Sonorisation de base",
    "slug": "Sonorisation de base",
    "description_courte": "Une formation pour apprendre les bases de sonorisation de base.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Audiovisuel",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_009",
    "categorie": "Audiovisuel",
    "image": bureautiqueImage,
    "title": "Initiation au storytelling visuel",
    "slug": "Initiation au storytelling visuel",
    "description_courte": "Une formation pour apprendre les bases de initiation au storytelling visuel.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Intermédiaire à Avancé\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 15-19 Novembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "ghghhghg",
    "domaine": "Audiovisuel",
    "profils_concernes": [
      {
        "profil": "Professionnels et étudiants",
        "competences": "Acquérir des compétences fondamentales pour débuter dans le domaine."
      },
      {
        "profil": "Entreprises et institutions",
        "competences": "Renforcer les capacités internes sur des outils essentiels."
      },
      {
        "profil": "Formateurs et consultants",
        "competences": "Mettre à jour leurs connaissances et méthodes pédagogiques."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir les concepts de base",
      "Maîtriser les outils fondamentaux",
      "Appliquer les acquis dans des projets simples"
    ],
    "prerequis": [
      "Aucun prérequis nécessaire",
      "Connaissances de base en informatique recommandées"
    ]
  },
  {
    "id": "Formation_010",
    "categorie": "Communication",
    "image": bureautiqueImage,
    "title": "Techniques de communication orale",
    "slug": "Techniques de communication orale",
    "description_courte": "Améliorez votre aisance à l’oral grâce à des techniques éprouvées de communication en public et en milieu professionnel.",
    "description_longue": "Durée: 40 heures (5 jours intensifs ou 10 soirées)\n\nNiveau: Débutant à Intermédiaire\n\nPrix: 950€ (850€ en tarif early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 10-14 Octobre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Salariés, demandeurs d’emploi, étudiants",
    "domaine": "Communication",
    "profils_concernes": [
      {
        "profil": "Managers et chefs d’équipe",
        "competences": "Mieux s’exprimer et convaincre en réunion ou en public."
      },
      {
        "profil": "Professionnels de la relation client",
        "competences": "Améliorer les échanges avec les usagers ou les clients."
      },
      {
        "profil": "Étudiants ou candidats à l’embauche",
        "competences": "Se préparer à des entretiens ou des présentations orales."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Structurer un discours oral",
      "Gérer le stress et améliorer sa posture",
      "Adapter sa communication à son interlocuteur"
    ],
    "prerequis": [
      "Aucun prérequis requis",
      "Volonté de progresser à l’oral"
    ]
  },
  {
    "id": "Formation_011",
    "categorie": "Communication",
    "image": bureautiqueImage,
    "title": "Rédaction professionnelle efficace",
    "slug": "Rédaction professionnelle efficace",
    "description_courte": "Apprenez à rédiger des emails, notes, comptes rendus ou synthèses avec clarté, concision et efficacité.",
    "description_longue": "Durée: 30 heures (4 jours intensifs ou 8 soirées)\n\nNiveau: Débutant\n\nPrix: 750€ (700€ early bird)\n\nFormat: En ligne via Zoom/Google Meet + plateforme e-learning\n\nProchaine Session: 5-8 Novembre 2024\n\nCertification: Attestation de compétences",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Toute personne amenée à produire des écrits professionnels",
    "domaine": "Communication",
    "profils_concernes": [
      {
        "profil": "Cadres administratifs et chargés de communication",
        "competences": "Structurer et rédiger des messages professionnels clairs."
      },
      {
        "profil": "Agents de collectivité ou personnel RH",
        "competences": "Mieux formuler les comptes rendus ou documents internes."
      },
      {
        "profil": "Autoentrepreneurs et indépendants",
        "competences": "Améliorer leur image grâce à des écrits de qualité."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Structurer un écrit professionnel",
      "Utiliser un style clair et adapté au contexte",
      "Éviter les erreurs de formulation"
    ],
    "prerequis": [
      "Savoir utiliser un traitement de texte",
      "Avoir un bon niveau de français écrit"
    ]
  },
  {
    "id": "Formation_012",
    "categorie": "Communication",
    "image": bureautiqueImage,
    "title": "Storytelling d'entreprise",
    "slug": "Storytelling d'entreprise",
    "description_courte": "Développez une communication inspirante grâce aux techniques narratives du storytelling appliquées à l’univers professionnel.",
    "description_longue": "Durée: 35 heures (5 demi-journées + projet personnel)\n\nNiveau: Débutant à Intermédiaire\n\nPrix: 870€ (820€ early bird)\n\nFormat: Hybride (visioconférences + coaching individuel)\n\nProchaine Session: 1er au 15 Décembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Entreprises, porteurs de projets, communicants",
    "domaine": "Communication",
    "profils_concernes": [
      {
        "profil": "Responsables communication",
        "competences": "Construire des récits engageants pour promouvoir la vision de l’organisation."
      },
      {
        "profil": "Porteurs de projet ou créateurs d’entreprise",
        "competences": "Valoriser leur démarche et convaincre partenaires ou investisseurs."
      },
      {
        "profil": "Chargés de contenu ou community managers",
        "competences": "Mettre en récit les messages clés pour les réseaux sociaux ou sites web."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Comprendre les fondamentaux du storytelling",
      "Créer une narration autour d’un projet ou d’une marque",
      "Adapter le message à différents canaux de communication"
    ],
    "prerequis": [
      "Aisance rédactionnelle de base",
      "Intérêt pour la communication narrative"
    ]
  },
  {
    "id": "Formation_013",
    "categorie": "Informatique bureautique ",
    "image": bureautiqueImage,
    "title": "Word et PowerPoint efficaces",
    "slug": "Word et PowerPoint efficaces",
    "description_courte": "Apprenez à créer des documents Word et des présentations PowerPoint professionnelles, efficaces et percutantes.",
    "description_longue": "Durée: 24 heures (3 jours intensifs ou 6 sessions en soirée)\n\nNiveau: Débutant\n\nPrix: 690€ (640€ en tarif early bird)\n\nFormat: En ligne + exercices pratiques sur plateforme\n\nProchaine Session: 21-23 Octobre 2024\n\nCertification: Attestation de formation délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Employés, assistants, étudiants",
    "domaine": "Informatique bureautique",
    "profils_concernes": [
      {
        "profil": "Assistants administratifs",
        "competences": "Optimiser la mise en page et la structuration de documents."
      },
      {
        "profil": "Étudiants & débutants",
        "competences": "Créer des présentations professionnelles et attractives."
      },
      {
        "profil": "Formateurs & secrétaires",
        "competences": "Améliorer la lisibilité et la clarté des supports de travail."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Maîtriser les fonctionnalités clés de Word et PowerPoint",
      "Créer des documents structurés et bien présentés",
      "Rendre les présentations claires et visuellement impactantes"
    ],
    "prerequis": [
      "Connaissances de base en informatique",
      "Maîtrise élémentaire de l’environnement Windows"
    ]
  },
  {
    "id": "Formation_014",
    "categorie": "Informatique bureautique ",
    "image": bureautiqueImage,
    "title": "Google Workspace pour débutants",
    "slug": "Google Workspace pour débutants",
    "description_courte": "Initiez-vous aux outils Google (Docs, Sheets, Drive, Meet...) pour collaborer efficacement dans le cloud.",
    "description_longue": "Durée: 20 heures (2,5 jours ou 5 demi-journées)\n\nNiveau: Débutant\n\nPrix: 600€ (560€ tarif réduit)\n\nFormat: Classe virtuelle + tutoriels pratiques\n\nProchaine Session: 7-9 Octobre 2024\n\nCertification: Attestation de participation",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Salariés, entrepreneurs, enseignants",
    "domaine": "Informatique bureautique",
    "profils_concernes": [
      {
        "profil": "Collaborateurs d’entreprise",
        "competences": "Travailler à distance et partager des fichiers en toute sécurité."
      },
      {
        "profil": "Formateurs & éducateurs",
        "competences": "Gérer des ressources pédagogiques dans Google Drive."
      },
      {
        "profil": "Entrepreneurs et freelances",
        "competences": "Gérer leur activité à l’aide des outils gratuits Google."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Maîtriser les bases de Google Docs, Sheets et Slides",
      "Organiser efficacement ses fichiers dans Google Drive",
      "Collaborer en temps réel avec une équipe"
    ],
    "prerequis": [
      "Aisance minimale avec un navigateur internet",
      "Compte Google actif"
    ]
  },
  {
    "id": "Formation_015",
    "categorie": "Informatique bureautique ",
    "image": bureautiqueImage,
    "title": "Travail collaboratif avec Microsoft Teams",
    "slug": "Travail collaboratif avec Microsoft Teams",
    "description_courte": "Apprenez à utiliser Microsoft Teams pour optimiser la communication et la gestion de projets en équipe.",
    "description_longue": "Durée: 16 heures (2 jours)\n\nNiveau: Débutant\n\nPrix: 520€ (480€ tarif early bird)\n\nFormat: Visioconférence + travaux dirigés\n\nProchaine Session: 28-29 Septembre 2024\n\nCertification: Attestation de compétences délivrée",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 15,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Professionnels de tout secteur",
    "domaine": "Informatique bureautique",
    "profils_concernes": [
      {
        "profil": "Chefs de projet et équipes RH",
        "competences": "Coordonner les tâches et les échanges dans une équipe projet."
      },
      {
        "profil": "Télétravailleurs",
        "competences": "Maîtriser les outils de réunion, de messagerie et de partage de fichiers."
      },
      {
        "profil": "PME et services publics",
        "competences": "Centraliser la communication interne et les ressources."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Découvrir l’environnement Teams",
      "Créer des équipes, canaux et réunions",
      "Partager, éditer et organiser les documents collaboratifs"
    ],
    "prerequis": [
      "Connaissances élémentaires en bureautique",
      "Accès à un compte Microsoft 365"
    ]
  },
  {
    "id": "Formation_016",
    "categorie": "Langues",
    "image": bureautiqueImage,
    "title": "Anglais professionnel",
    "slug": "anglais-professionnel",
    "description_courte": "Développez vos compétences en anglais pour interagir efficacement dans un contexte professionnel international.",
    "description_longue": "Durée: 30 heures (5 semaines à raison de 2 séances hebdomadaires)\n\nNiveau: A2-B1\n\nPrix: 690€ (640€ tarif early bird)\n\nFormat: En ligne + classes virtuelles en direct\n\nProchaine Session: 2 septembre 2024\n\nCertification: Attestation de compétences CECRL",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 30,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Anglais",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Salariés, demandeurs d’emploi, étudiants",
    "domaine": "Langues",
    "profils_concernes": [
      {
        "profil": "Professionnels en poste",
        "competences": "Conduire des réunions, rédiger des emails et échanger en anglais."
      },
      {
        "profil": "Étudiants",
        "competences": "Se préparer à des stages ou des emplois à l’étranger."
      },
      {
        "profil": "Demandeurs d’emploi",
        "competences": "Valoriser leur profil sur le marché international."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Améliorer l’expression orale et écrite en contexte professionnel",
      "Utiliser un vocabulaire adapté aux métiers",
      "Gagner en fluidité dans les échanges courants"
    ],
    "prerequis": [
      "Niveau A1 minimum requis",
      "Accès à une connexion Internet stable"
    ]
  },
  {
    "id": "Formation_017",
    "categorie": "Langues",
    "image": bureautiqueImage,
    "title": "Français écrit pour non-francophones",
    "slug": "francais-ecrit-non-francophones",
    "description_courte": "Renforcez vos compétences à l’écrit en français si vous êtes non-francophone ou récemment arrivé en France.",
    "description_longue": "Durée: 25 heures (4 semaines à raison de 2 cours/semaine)\n\nNiveau: A2-B1\n\nPrix: 600€ (550€ tarif solidaire)\n\nFormat: Présentiel ou à distance\n\nProchaine Session: 18 novembre 2024\n\nCertification: Attestation de niveau CECRL",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 25,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Français",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Adultes non-francophones, réfugiés, étudiants étrangers",
    "domaine": "Langues",
    "profils_concernes": [
      {
        "profil": "Personnes en insertion",
        "competences": "Maîtriser les écrits du quotidien (formulaires, emails, lettres)."
      },
      {
        "profil": "Étudiants étrangers",
        "competences": "Préparer leurs examens ou écrits universitaires."
      },
      {
        "profil": "Travailleurs immigrés",
        "competences": "Améliorer leur intégration en entreprise ou dans la vie publique."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Renforcer la grammaire et l’orthographe de base",
      "Savoir rédiger un courrier ou remplir un formulaire",
      "Être autonome à l’écrit dans les démarches courantes"
    ],
    "prerequis": [
      "Connaissances de base en lecture",
      "Maîtrise orale du français niveau A1"
    ]
  },
  {
    "id": "Formation_018",
    "categorie": "Langues",
    "image": bureautiqueImage,
    "title": "Techniques de compréhension orale",
    "slug": "techniques-comprehension-orale",
    "description_courte": "Développez votre compréhension de l’oral en langue étrangère grâce à des méthodes ciblées et interactives.",
    "description_longue": "Durée: 20 heures (5 sessions de 4 heures)\n\nNiveau: Débutant à Intermédiaire\n\nPrix: 570€ (520€ tarif réduit)\n\nFormat: E-learning + séances de conversation en ligne\n\nProchaine Session: 12 au 26 octobre 2024\n\nCertification: Attestation de participation",
    "niveau": "Débutant",
    "createdAt": "2025-06-06T00:00:00.000Z",
    "updatedAt": "2025-06-06T00:00:00.000Z",
    "publishedAt": "2025-06-06T00:00:00.000Z",
    "duree_heures": 20,
    "prix": 90,
    "prix_promotionnel": 85,
    "langue": "Multilingue",
    "est_actif": true,
    "date_creation": "2025-06-16T23:00:00.000Z",
    "date_mise_a_jour": "2025-06-16T23:00:00.000Z",
    "public_cible": "Adultes en apprentissage des langues étrangères",
    "domaine": "Langues",
    "profils_concernes": [
      {
        "profil": "Étudiants en langues",
        "competences": "Développer leur compréhension orale grâce à des stratégies actives."
      },
      {
        "profil": "Apprenants autodidactes",
        "competences": "Mieux suivre des podcasts, vidéos ou conversations."
      },
      {
        "profil": "Personnes en mobilité internationale",
        "competences": "Être à l’aise dans des situations de communication concrètes."
      }
    ],
    "acces_plateforme": true,
    "double_certification": false,
    "objectifs": [
      "Reconnaître les sons et accents clés",
      "Comprendre les messages essentiels dans un contexte réel",
      "Utiliser des techniques pour progresser de manière autonome"
    ],
    "prerequis": [
      "Avoir un niveau de base en langue cible",
      "Disposer d’écouteurs et d’un bon accès internet"
    ]
  }
   
];

export default servicesData;
