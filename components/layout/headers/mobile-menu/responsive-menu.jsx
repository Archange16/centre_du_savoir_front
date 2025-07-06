"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='/'>Accueil</Link>
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='/about'>A propos</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Nos Formations</Link>
                     <ul className="sub-menu" style={activeSubMenu("services")}>
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
                    <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
                </li>
                <li className='menu-item-has-children'><Link href='/accompagnement'>Suivi de projet</Link>
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;