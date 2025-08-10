import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '../../../components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href='/'>
                        <img className='logo_one' src={logo2.src} alt="logo" />
                    </Link>
                </div>
                <p>Bienvenue au Centre Professionnel du Savoir – une plateforme dédiée à la formation professionnelle en génie civil. Nous vous proposons des formations 100 % en ligne, interactives et adaptées aux exigences du marché du travail</p>

                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="mb-30">Contactez-nous</h4>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Appelez-nous</span>
                            <h6><Link href="tel:+242061234567">(+212) 780 22 34 87</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Email</span>
                            <h6><Link href="mailto:contact@centreprofessionneldusavoir.com">contact@centreprofessionneldusavoir.com</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Adresse</span>
                            <h6><Link href="https://google.com/maps" target="_blank">HAY esaada immeuble 136 Porte 1 ÉTAGE 3</Link></h6>
                        </div>
                    </div>
                </div>

                <div className="header__area-menubar-right-sidebar-popup-social social__icon">
                    <Social />
                </div>
            </div>

            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
