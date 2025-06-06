import Link from "next/link";
import about1 from "../../../../public/assets/img/about/about-four-1.png";
import about2 from "../../../../public/assets/img/about/about-four-2.png";

const AboutFour = () => {
    return (
        <>
            <div className="about__four section-padding">
                <div className="container">
                    <div className="row align-items-center flex-wrap-reverse gy-4">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__four-image">
                               {/*  <div className="experience-bar animate-y-axis-slider">
                                    <div className="experience-bar-right">
                                        <div className="experience-bar-counter">
                                            <h4 className="counter">25</h4>
                                            <span>+</span>
                                        </div>
                                        <span>Years Of Experience</span>
                                    </div>
                                </div> */}
                                <div className="about__four-image-wrapper">
                                    <img className="image-1" src={about1.src} alt="image" />
                                    <img className="image-2" src={about2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about__four-content">
                                <span className="subtitle-one">A propos de nous</span>
                                <h2>Bienvenue au Centre Professionnel du Savoir</h2>
                                <p>Le Centre Professionnel du Savoir est votre partenaire de confiance pour une formation professionnelle de qualité, spécialement orientée vers les métiers du génie civil.
                                    Nous vous offrons des formations 100 % en ligne, interactives, accessibles à tout moment et conçues pour répondre aux exigences actuelles du marché de l’emploi.
                                    Grâce à notre approche pédagogique innovante, vous progressez à votre rythme tout en acquérant des compétences concrètes et certifiantes pour faire évoluer votre carrière.</p>
                                <div className="about__four-content-service">
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Certifications reconnues au niveau national et international.🎓</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Plateforme intuitive et accessible 24/7, où que vous soyez.🌐</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Formateurs experts issus du terrain avec une solide expérience professionnelle.👷‍♂️</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span> Programmes adaptés à l’évolution du marché et aux besoins des employeurs.🚀</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-one">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFour;