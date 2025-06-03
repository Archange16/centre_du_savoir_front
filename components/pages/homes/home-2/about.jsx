import image1 from "../../../../public/assets/img/about/about-two.webp";
import image2 from "../../../../public/assets/img/about/about-two-2.webp";
import Link from "next/link";

const AboutTwo = () => {
    return (
        <>
            <div className="about__two section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-left">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-7 col-md-6 col-6">
                                        <div className="about__two-left-image-left-side">
                                            <img src={image1.src} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-5 col-6">
                                        <div className="about__two-left-right-image">
                                            <img src={image2.src} alt="image" />
                                        </div>
                                        <div className="about__two-left-progressbar">
                                            <div className="about__two-left-progressbar-wrapper">
                                                <div className="about__two-left-progressbar-value">
                                                    <span>100%</span>
                                                </div>
                                                <h4 className="about__two-right-progressbar-title">Solutions digitales</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-content">
                                <span className="subtitle-one">À propos</span>
                                <h2>Des solutions digitales adaptées à vos besoins</h2>
                                <p>
                                    Notre mission est d'accompagner les PME, startups, indépendants et particuliers à travers des services professionnels qui renforcent leur présence en ligne et leur identité visuelle.
                                </p>
                                <div className="about__two-content-service">
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Création de sites web vitrines et e-commerce</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Applications mobiles Android & iOS</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Design graphique & UX/UI</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Marketing digital et réseaux sociaux</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-two">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTwo;
