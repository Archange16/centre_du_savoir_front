import image1 from "../../../../public/assets/img/about/about-two.webp";
import image2 from "../../../../public/assets/img/partainaire.png";
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
                                     <img src={image2.src} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-content">
                                <h2>Notre partenaire</h2>
                                <p>
                                    Nous sommes fiers de collaborer avec un partenaire de référence dans le domaine du génie civil :
                                </p>
                                <h2>Institut Ingénierie Poly Métiers (IIPM)</h2>
                                <p>
                                    Grâce à son expertise pointue en ingénierie et à son approche pluridisciplinaire, IIPM nous accompagne sur des projets combinant innovation digitale et excellence technique. Cette synergie nous permet de proposer des solutions digitales adaptées aux besoins spécifiques du secteur du BTP et de l’ingénierie.
                                </p>
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
