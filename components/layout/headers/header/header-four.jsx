"use client";
import Link from 'next/link';
import MainMenu from '../header-menu';
import { useEffect, useState } from 'react';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import Search from '../search';
import SideBar from '../offcanvas';

const HeaderFour = ({variant}) => {
     const [sidebarOpen, setSidebarOpen] = useState(false);
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);
    return (
        <>
        <div className="top__bar four">
            <div className="custom__container">
                <div className="row">
                    <div className="col-xl-4 col-md-7">
                        <div className="top__bar-left">
                            <span><i className="fas fa-map"></i>HAY ESAADA immeuble 136 Porte 1 ÉTAGE 3</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-5">
                        <div className="top__bar-right">
                            <Link href="mailto:contact@centreprofessionneldusavoir.com"><i className="fas fa-envelope"></i>contact@centreprofessionneldusavoir.com</Link>
                        </div>
                    </div>
                     <div className="col-xl-4 col-md-5">
                        <div className="top__bar-right">
                            <Link href="tel:+212780223487"><i className="fas fa-phone"></i>+212 780-223487</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky four ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
        <div className="custom__container">
            <div className="header__area-menubar">
                <div className="header__area-menubar-left">
                    <div className="header__area-menubar-left-logo">
                        <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                    </div>
                </div>
				<div className="header__area-menubar-center">
                    <div className="header__area-menubar-center-menu">
                        <MainMenu />
                    </div>
				</div>
                <div className="header__area-menubar-right">
                    <div className="header__area-menubar-right-box">

                        <div className="header__area-menubar-right-box-sidebar">
                                    <div className="header__area-menubar-right-box-sidebar-popup-icon" onClick={() => setSidebarOpen(true)}>
                                        <span className="bar-1"></span>
                                        <span className="bar-2"></span>
                                        <span className="bar-3"></span>
                                    </div>
                                </div>

						<div className="header__area-menubar-right-box-btn">
							<Link className="btn-two p-3" href="/request-quote">connexion</Link>
						</div>
                       {/*  <div className="header__area-menubar-right-box-search">
							<div className="search">	
								<span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                    <i className="flaticon-loupe"></i>
                                </span>
							</div>
						</div> */}
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
         <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        <Search isOpen={search} setIsOpen={setSearch} />
        </>
    );
};

export default HeaderFour;