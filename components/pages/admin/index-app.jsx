"use client";
import React from 'react';
import HeaderAdmin from './Header';
import HomeAdmin from './Home';
import LeadManager from './LeadManager';
import Categories from './Categories';
//import Cours from './Cours';
import Apprenants from './Apprenants';
import Reports from './Reports';
import Setting from './Setting';
import SidebarApp from './Sidebar-app';
import FormationsAppPage from './index-formation-app';

const HeaderAppIndex = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);
    const [activeComponent, setActiveComponent] = React.useState('index-formation');
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
    };

   /*  const renderActiveComponent = () => {
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
    }; */

    return (
        <div className="grid-container">
            <HeaderAdmin OpenSidebar={OpenSidebar} /> 
            <SidebarApp
                openSidebarToggle={openSidebarToggle} 
                OpenSidebar={OpenSidebar}
                onComponentChange={handleComponentChange}
                activeComponent={activeComponent}
            />
            <main className="main-container">
                {/* <FormationsPage /> */}
                <FormationsAppPage />
            </main>
        </div>
    );
};

export default HeaderAppIndex;