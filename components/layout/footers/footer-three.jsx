import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";

const FooterThree = () => {
    return (
        <>
        <div className="footer__three">
            <div className="container pt-80 pb-80">
                <div className="footer__three-top">
                    <h3>Rejoignez notre communauté sociale !</h3>
                    <div className="footer__three-top-social">
                        <Social />
                    </div>
                </div>
                <div className="row gy-4 justify-content-between">
                    <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                        <div className="footer__three-widget">
                            <div className="footer__three-widget-about">
                                <Link href="/"><img src={logo.src} alt="image" /></Link>
                                <p>Bienvenue au Centre Professionnel du Savoir – une plateforme dédiée à la formation professionnelle en génie civil. Nous vous proposons des formations 100 % en ligne, interactives et adaptées aux exigences du marché du travail</p>
                               {/*  <form action="#">
                                    <input type="text" name="email" placeholder="Your e-mail" required="" />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                 </form> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Nos formations</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									{servicesData.slice(0, 4).map((data, id) => {
										const words = data.titre.split(' ');
										const firstAndSecondWord = words.slice(2, 10).join(' ');
										return (
											<li key={id}><Link href={`/services/${data.slug}`}>{/* <i className="far fa-chevron-double-right"></i> */}{firstAndSecondWord}</Link></li>
										);
									})}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4 className="ml-60">Resources​</h4>
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="/services">{/* <i className="far fa-chevron-double-right"></i> */}Nos formations</Link></li>
									<li><Link href="/accompagnement">{/* <i className="far fa-chevron-double-right"></i> */}Suivi de projet</Link></li>
									{/* <li><Link href="testimonial"><i className="far fa-chevron-double-right"></i>Testimonial</Link></li> */}
									<li><Link href="about">{/* <i className="far fa-chevron-double-right"></i> */}A propos de nous</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <h4>Contact</h4>
                            <div className="footer__three-widget-location">
                                <div className="footer__three-widget-location-item">
                                    <div className="footer__three-widget-location-item-icon">
                                        <i className="flaticon-mail"></i>
                                    </div>
                                    <div className="footer__three-widget-location-item-info email">
                                        <span>Email</span>
                                        <a href="mailto:contact@centreprofessionneldusavoir.com">contact@centreprofessionneldusavoir.com</a>
                                    </div>
                                </div>
                                <div className="footer__three-widget-location-item">
                                    <div className="footer__three-widget-location-item-icon">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <div className="footer__three-widget-location-item-info">
                                        <span>Address</span>
                                        <Link href="https://google.com/maps">HAY ESAADA immeuble 136 Porte 1 ÉTAGE 3</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>© 2024 |<Link href="https://www.centreprofessionneldusavoir.com/">centreprofessionneldusavoir.com</Link> </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                           {/*  <div className="copyright__one-right">
                                <Link href="/about">A propos de nous</Link>
                                <Link href="/contact">Contactez-nous</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FooterThree;