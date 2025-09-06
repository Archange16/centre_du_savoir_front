"use client";
import React, { useState } from "react"; // 👈 AJOUTE CECI
import HeaderAdmin from './Header';
import SidebarAdmin from './Sidebar';
import HomeAdmin from './Home';
import LeadManager from './LeadManager';
import Categories from './Categories';
import Apprenants from './apprenants/Apprenants';
import Reports from './Reports';
import Setting from './Setting';
import FormationsPage from './index-formation';
import FormationDetailPage from './Setting'; // 👈 Import du composant détail

const HeaderIndex = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);
    const [activeComponent, setActiveComponent] = React.useState('dashboard');
    const [selectedFormationId, setSelectedFormationId] = React.useState(null); // 💡 stocker l'ID

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleComponentChange = (componentName, id = null) => {
        setActiveComponent(componentName);
        setSelectedFormationId(id);
    };

    const renderActiveComponent = () => {
        switch(activeComponent) {
            case 'dashboard':
                return <HomeAdmin />;
            case 'categories':
                return <Categories />;
            case 'cours':
                return <FormationsPage onComponentChange={handleComponentChange} />;
            case 'formationDetailPage':
                return <FormationDetailPage id={selectedFormationId} onBack={() => handleComponentChange('cours')} />;
            case 'leads':
                return <LeadManager />;
            case 'apprenants':
                return <Apprenants />;
            case 'reports':
                return <Reports />;
            case 'setting':
                return <Setting />;
            default:
                return <HomeAdmin />;
        }
    };

    return (
        <div className="grid-container">
            <HeaderAdmin OpenSidebar={OpenSidebar} /> 
            <SidebarAdmin 
                openSidebarToggle={openSidebarToggle} 
                OpenSidebar={OpenSidebar}
                onComponentChange={handleComponentChange}
                activeComponent={activeComponent}
            />
            <main className="main-container">
                {renderActiveComponent()}
            </main>
        </div>
    );
};

export default HeaderIndex;
