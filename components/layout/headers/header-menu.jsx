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
                <li className="menu-item-has-children"><Link href="/services">Formations{/* <i className="fas fa-angle-right"></i> */}</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/categories/Geniecivil">Génie civil</Link></li>
                        <li><Link href="/categories/Infographie">Infographie </Link></li>
                        <li><Link href="/categories/Audiovisuel">Audiovisuel</Link></li>
                        <li><Link href="/categories/Communication">Communication</Link></li>
                        <li><Link href="/categories/Informatique bureautique">Informatique bureautique </Link></li>
                        <li><Link href="/categories/Langues">Langues</Link></li>
                    </ul> */}
                </li>
               {/*  <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li> */}
                <li className="menu-item-has-children"><Link href="/request-quote">Demande d'admission</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;