import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">A propos</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/services">Formations</Link>
                    <ul className='sub-menu'>
                        <li><Link href="/services/formation-ouvrages-art-ponts">Formation dans le domaine des ouvrages d’art (ponts)</Link></li>
                        <li><Link href="/services/techniques-avancees-exploitation-miniere">Formation en exploitation minière à ciel ouvert : fondamentaux de l’extraction moderne</Link></li>
                        <li><Link href="/services/formation-infrastructures-routieres-avancee">Formation en Conception et Réalisation des Infrastructures Routières Avancées (route)</Link></li>
                        <li><Link href="/services/formation-cartographie-geologique-topographique">Formation en Cartographie Géologique et Topographique Avancée</Link></li>
                        <li><Link href="/services/formation-calcul-structures-solidite-batiments">Formation en Calcul des Structures et Solidité des Bâtiments</Link></li>
                        <li><Link href="/services/formation-opc-pilotage-planification-btp">Formation en OPC : Pilotage et Planification BTP</Link></li>
                        <li><Link href="/services/formation-avancee-vrd">Formation avancée en V.R.D (Voirie Urbaine)</Link></li>
                        <li><Link href="/services/formation-assainissement-eaux-usees-pluviales">Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)</Link></li>
                        <li><Link href="/services/formation-gestion-projets-miniers">Formation en Gestion Intégrée des Projets Miniers</Link></li>


                        {/* <li><Link href="/services/formation-cartographie-geologique-topographique">Formation en Cartographie Géologique et Topographique Avancée</Link></li>
                        <li><Link href="/services/formation-assainissement-eaux-usees-pluviales">Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)</Link></li>
                        <li><Link href="/services/formation-ouvrages-art-ponts">Formation dans le domaine des ouvrages d’art (ponts)</Link></li> */}
                    </ul>
                    </li>

               {/*  <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li> */}
                <li className="menu-item-has-children"><Link href="/accompagnement">Suivi de projet</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;