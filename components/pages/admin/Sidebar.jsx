//"use client";
import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
import logo from "../../../public/assets/img/logo-2.png";
import Link from "next/link";


const SidebarAdmin = ({openSidebarToggle, OpenSidebar, onComponentChange, activeComponent}) => {
    return (
        <aside  id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    {/* <BsCart3 />  */}<Link href="/"><img src={logo.src} alt="image" /></Link>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className={`sidebar-list-item ${activeComponent === 'dashboard' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('dashboard'); }}>
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </a>
                </li>
               {/*  <li className={`sidebar-list-item ${activeComponent === 'categories' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('categories'); }}>
                        <BsFillArchiveFill className='icon'/> Categories
                    </a>
                </li> */}
                <li className={`sidebar-list-item ${activeComponent === 'cours' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('cours'); }}>
                        <BsFillGrid3X3GapFill className='icon'/> Formations
                    </a>
                </li>
                <li className={`sidebar-list-item ${activeComponent === 'leads' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('leads'); }}>
                        <BsPeopleFill className='icon'/> Leads
                    </a>
                </li>
                <li className={`sidebar-list-item ${activeComponent === 'apprenants' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('apprenants'); }}>
                        <BsListCheck className='icon'/> Apprenants
                    </a>
                </li>
                {/* <li className={`sidebar-list-item ${activeComponent === 'reports' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('reports'); }}>
                        <BsMenuButtonWideFill className='icon'/> Reports
                    </a>
                </li> */}
                <li className={`sidebar-list-item ${activeComponent === 'setting' ? 'active' : ''}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); onComponentChange('setting'); }}>
                        <BsFillGearFill className='icon'/> Settings
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default SidebarAdmin;