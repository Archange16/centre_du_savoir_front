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
                    <ul className="sub-menu">
                        <li><Link href="/services">Génie civil</Link></li>
                        <li><Link href="/services-two">Infographie </Link></li>
                        <li><Link href="/services/data-analytics">Audiovisuel</Link></li>
                        <li><Link href="/services/data-analytics">Communication</Link></li>
                        <li><Link href="/services/data-analytics">Informatique bureautique </Link></li>
                        <li><Link href="/services/data-analytics">Langues</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Demande d'admission</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;