"use client";
import React from 'react';
import HeaderAdmin from './Header';
import SidebarAdmin from './Sidebar';
import HomeAdmin from './Home';
import LeadManager from './LeadManager';
import Categories from './Categories';
//import Cours from './Cours';
import Apprenants from './Apprenants';
import Reports from './Reports';
import Setting from './Setting';
import FormationsPage from './index-formation';

const HeaderIndex = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);
    const [activeComponent, setActiveComponent] = React.useState('dashboard');
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderActiveComponent = () => {
        switch(activeComponent) {
            case 'dashboard':
                return <HomeAdmin />;
            case 'categories':
                return <Categories />;
            case 'cours':
                return <FormationsPage />;
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