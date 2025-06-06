import Link from "next/link";
import image1 from "../../../../public/assets/img/why-choose-us/why-chose-us-two.png";

const ChooseUsThree = () => {
    return (
        <>
        <div className="why-choose-us__two section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="why-choose-us__two-content">
                            <span className="subtitle-one">Rejoignez professionnels du génie civil</span>
                            <h2>DÉMARREZ VOTRE RÉUSSITE <span className="highlighted-two">DANS LE GÉNIE CIVIL</span></h2>
                            <p>Notre ambition est de devenir la référence en matière de formation en génie civil en ligne, en proposant des parcours flexibles, orientés vers la pratique et conçus pour répondre aux exigences concrètes du terrain. Nous voulons permettre à chaque apprenant, où qu’il se trouve, d’acquérir les compétences clés pour exceller et contribuer à des projets techniques d’envergure à l’échelle mondiale.</p>
                            <div className="why-choose-us__two-content-service">
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Flexibilité totale</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Approche terrain</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Expertise reconnue</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Accès international</span>
                                </div>
                            </div>
                            <Link href="/categories/Geniecivil" className="btn-one">Voir les formations
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-us__two-image">
                            <div className="why-choose-us__two-image-wrapper">
                                <img src={image1.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChooseUsThree;