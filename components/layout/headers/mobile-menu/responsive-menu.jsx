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
                    {/* <ul className='sub-menu' style={activeSubMenu("home")}>
                        <li><Link href="/">Home 01</Link></li>
                        <li><Link href="/home-two">Home 02</Link></li>
                        <li><Link href="/home-three">Home 03</Link></li>
                        <li><Link href="/home-four">Home 04</Link></li>
                        <li><Link href="/home-five">Home 05</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a> */}
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='/about'>A propos</Link>
                </li>
                <li className='menu-item-has-children'><Link href='/services'>Nos Formations</Link>
                    {/* <ul className='sub-menu' style={activeSubMenu("services")}>
                        <li><Link href="/services">Services 01</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a> */}
                </li>
                {/* <li className='menu-item-has-children'><Link href='/blog'> Blog</Link>
                    <ul className='sub-menu' style={activeSubMenu("project")}>
                        <li><Link href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
                </li> */}
                <li className='menu-item-has-children'><Link href='/accompagnement'>Accompagnement</Link>
                    {/* <ul className='sub-menu' style={activeSubMenu("blog")}>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul>
                    <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a> */}
                </li>
                <li><Link href="/contact">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;