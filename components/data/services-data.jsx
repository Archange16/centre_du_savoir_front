import services1 from "../../public/assets/img/service/service-graphique.webp";
import services2 from "../../public/assets/img/service/service-mobile.webp";
import services3 from "../../public/assets/img/service/service-graphique (1).webp";
import services4 from "../../public/assets/img/service/service-graphique (4).webp";
import services5 from "../../public/assets/img/service/service-details.png";
import services6 from "../../public/assets/img/service/service-api.webp";

const servicesData = [
    {
        id: 'site-web',
        icon: <i className="flaticon-website"></i>,
        title: 'Création de sites web',
        description: 'Sites vitrines, e-commerce et portails personnalisés pour mettre en valeur votre activité.',
        image: services1,
        details: {
            title: "Donnez vie à votre présence en ligne",
            description: "Nous créons des sites vitrines, e-commerce et portails personnalisés pour valoriser votre activité et attirer de nouveaux clients.",
            subHeading: "Votre site, votre image",
            subDescription: "Un site web bien conçu est votre meilleur ambassadeur. Nous allions design, performance et ergonomie pour maximiser votre impact.",
            boxes: [
                {
                    title: "Nos atouts pour votre site",
                    description: "Nous vous accompagnons de l’idéation à la mise en ligne pour un site efficace et adapté à vos besoins.",
                    qualities: [
                        "Design Responsive",
                        "Optimisation SEO",
                        "Back-office personnalisé",
                        "Hébergement & Maintenance"
                    ]
                }
            ],
            title1: "Notre engagement",
            description1: "Vous offrir un site rapide, sécurisé et orienté conversion, prêt à évoluer avec votre activité.",
            bottomDescription: "Confiez-nous la création de votre site pour marquer votre présence digitale de manière professionnelle et durable."
        }
    },
    {
        id: 'app-mobile',
        icon: <i className="flaticon-app"></i>,
        title: 'Développement d’applications mobiles',
        description: 'Applications Android/iOS natives ou hybrides avec interfaces intuitives et gestion de contenu.',
        image: services2,
        details: {
            title: "Vos idées au creux de la main",
            description: "Nous développons des applications mobiles performantes et intuitives pour Android et iOS adaptées à votre activité.",
            subHeading: "L’innovation mobile au service de votre projet",
            subDescription: "Chaque projet mobile que nous réalisons est pensé pour offrir une expérience utilisateur fluide, moderne et engageante.",
            boxes: [
                {
                    title: "Nos expertises",
                    description: "Des solutions mobiles natives et hybrides conçues pour vos besoins spécifiques.",
                    qualities: [
                        "Développement natif (Java, Swift)",
                        "Applications hybrides (Flutter, React Native)",
                        "Maintenance et évolutivité",
                        "UI/UX mobile friendly"
                    ]
                }
            ],
            title1: "Notre promesse",
            description1: "Une application stable, rapide et conviviale qui dynamise votre croissance.",
            bottomDescription: "Faites le choix de la mobilité pour connecter votre entreprise à vos utilisateurs partout et à tout moment."
        }
    },
    {
        id: 'design-graphique',
        icon: <i className="flaticon-design"></i>,
        title: 'Design graphique & UX/UI',
        description: 'Création de logos, chartes graphiques, supports de communication et maquettes UI/UX.',
        image: services3,
        details: {
            title: "Donnez du style à votre image",
            description: "Nous créons des identités visuelles et expériences utilisateurs qui marquent les esprits et fidélisent vos clients.",
            subHeading: "Un design pensé pour convertir",
            subDescription: "Notre approche design est centrée sur l’utilisateur tout en respectant l’ADN de votre marque.",
            boxes: [
                {
                    title: "Ce que nous proposons",
                    description: "Un design graphique créatif et fonctionnel adapté à tous vos supports digitaux et imprimés.",
                    qualities: [
                        "Création de logos",
                        "Charte graphique complète",
                        "Maquettes web et mobile",
                        "Supports publicitaires"
                    ]
                }
            ],
            title1: "Notre valeur ajoutée",
            description1: "Associer esthétique et ergonomie pour offrir la meilleure expérience utilisateur.",
            bottomDescription: "Bénéficiez d’un design professionnel qui fait la différence et propulse votre image de marque."
        }
    },
    {
        id: 'marketing-digital',
        icon: <i className="flaticon-marketing"></i>,
        title: 'Marketing digital & réseaux sociaux',
        description: 'Création de contenu, gestion des réseaux, campagnes publicitaires et stratégie digitale.',
        image: services4,
        details: {
            title: "Faites rayonner votre marque",
            description: "Nous boostons votre présence en ligne avec des stratégies marketing adaptées et du contenu impactant.",
            subHeading: "Une stratégie digitale sur mesure",
            subDescription: "Notre équipe combine créativité, analyse et performance pour faire briller votre entreprise sur le web.",
            boxes: [
                {
                    title: "Nos prestations",
                    description: "Nous gérons votre marketing digital de A à Z pour maximiser votre retour sur investissement.",
                    qualities: [
                        "Gestion de réseaux sociaux",
                        "Campagnes publicitaires (Google Ads, Facebook Ads)",
                        "Content marketing",
                        "Stratégie SEO et SEA"
                    ]
                }
            ],
            title1: "Votre succès est notre mission",
            description1: "Construisons ensemble votre visibilité et votre notoriété digitale.",
            bottomDescription: "Augmentez votre chiffre d’affaires en renforçant votre présence et votre engagement en ligne."
        }
    },
    {
        id: 'integration-ia',
        icon: <i className="flaticon-artificial-intelligence"></i>,
        title: 'Intégration d’agents IA',
        description: 'Ajout d’agents IA et APIs intelligentes dans vos projets : santé, sport, resto, transport, etc.',
        image: services5,
        details: {
            title: "Boostez votre projet avec l'Intelligence Artificielle",
            description: "Nous intégrons des agents IA et APIs intelligentes pour automatiser vos process et améliorer vos performances.",
            subHeading: "L’IA au service de votre compétitivité",
            subDescription: "Des solutions d’IA adaptées à vos besoins métier pour un saut technologique décisif.",
            boxes: [
                {
                    title: "Nos solutions IA",
                    description: "Intégrez des fonctionnalités intelligentes à vos services pour plus d'autonomie et de réactivité.",
                    qualities: [
                        "Chatbots & assistants IA",
                        "Systèmes de recommandation",
                        "Analyse prédictive",
                        "Vision par ordinateur"
                    ]
                }
            ],
            title1: "L’innovation accessible",
            description1: "Nous rendons l'IA accessible à toutes les entreprises, quel que soit leur secteur d’activité.",
            bottomDescription: "Donnez à votre projet une dimension d’innovation avec nos solutions IA sur mesure."
        }
    },
    {
        id: 'developpement-api',
        icon: <i className="flaticon-code"></i>,
        title: 'Développement d’APIs',
        description: 'Intégration d’APIs Node.js, C#, ou Spring Boot pour connecter et enrichir vos services.',
        image: services6,
        details: {
            title: "Connectez vos services efficacement",
            description: "Nous concevons et développons des APIs performantes pour enrichir vos systèmes et faciliter vos échanges de données.",
            subHeading: "Des APIs sur mesure",
            subDescription: "Nos APIs robustes et sécurisées facilitent l'interopérabilité entre vos différentes applications et services.",
            boxes: [
                {
                    title: "Notre expertise",
                    description: "Développement d'APIs REST et GraphQL performantes et sécurisées.",
                    qualities: [
                        "Node.js / Express",
                        "C# .NET Core",
                        "Spring Boot Java",
                        "Authentification OAuth2"
                    ]
                }
            ],
            title1: "Notre objectif",
            description1: "Simplifier vos intégrations et booster la connectivité de vos services.",
            bottomDescription: "Ouvrez de nouvelles perspectives pour vos systèmes grâce à des APIs sur mesure adaptées à vos besoins."
        }
    },
];

export default servicesData;
