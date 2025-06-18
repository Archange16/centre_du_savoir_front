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
                <li className="menu-item-has-children"><Link href="/services">Formations<i className="fas fa-angle-right"></i></Link>
                     <ul className='sub-menu'>
                        <li><Link href="/services/formation-calcul-structures-solidite-batiments">Formation Calcul des Structures et Solidité des Bâtiments</Link></li>
                        <li><Link href="/services/formation-opc-pilotage-planification-btp">Formation en OPC : Pilotage et Planification BTP</Link></li>
                        <li><Link href="/services/formation-metre-btp">Formation pour Connaître et Maîtriser le Métré dans le BTP</Link></li>
                        <li><Link href="/services/formation-techniques-minieres">Formation en Techniques Avancées pour l'Exploitation des Travaux Miniers</Link></li>
                        <li><Link href="/services/formation-beton-armee-hydraulique">Formation en béton armé et structures avancées : modélisation Hydraulique en génie civil</Link></li>
                        <li><Link href="/services/formation-infrastructures-routieres-avance">Formation en Conception et Réalisation des Infrastructures Routières avancé</Link></li>
                        <li><Link href="/services/formation-qhse-genie-civil">Formation en Qualité, Hygiène, Sécurité et Environnement (QHSE) pour le Génie Civil</Link></li>
                        <li><Link href="/services/formation-vrd-voirie-urbaine">formation-vrd-voirie-urbaine</Link></li>
                        <li><Link href="/services/formation-cartographie-geologique-topographique">Formation en Cartographie Géologique et Topographique Avancée</Link></li>
                        <li><Link href="/services/formation-assainissement-eaux">Formation en Assainissement (Maîtrise des Réseaux Eaux Usées et Pluviales)</Link></li>
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