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
                     <ul className='sub-menu' style={activeSubMenu("services")}>
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