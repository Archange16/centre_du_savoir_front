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

                </li>
               {/*  <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li> */}
                <li className="menu-item-has-children"><Link href="/accompagnement">Accompagnement</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;