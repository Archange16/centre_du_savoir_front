import image1 from "../../../../public/assets/img/about/about-three.png";
import image2 from "../../../../public/assets/img/about/about-three-2.png";
import image3 from "../../../../public/assets/img/about/about-three-3.png";
import Count from "../../common/count";

const AboutThree = () => {
    return (
        <div className="about__three section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
                        <div className="about__three-content">
                            <span className="subtitle-one">Nos Valeurs et Engagements</span>
                            <h2>Nos Valeurs et <span className="highlighted-two">Engagements</span></h2>
                            <p>Notre centre de formation est guidé par l'excellence, l'innovation, et un engagement constant à offrir des formations de qualité. Voici ce qui nous anime :</p>
                            <div className="about__three-content-service">
                                <div className="about__three-content-service-single">
                                    <i className="fas fa-trophy"></i>
                                    <div className="content">
                                        <h4>Excellence</h4>
                                        <p>Formation de haut niveau, adaptée aux réalités du terrain.</p>
                                    </div>
                                </div>
                                <div className="about__three-content-service-single">
                                    <i className="fas fa-lightbulb"></i>
                                    <div className="content">
                                        <h4>Innovation</h4>
                                        <p>Méthodes d'enseignement modernes et interactives.</p>
                                    </div>
                                </div>
                                 <div className="about__three-content-service-single">
                                    <i className="fas fa-globe"></i>
                                    <div className="content">
                                        <h4>Accessibilité</h4>
                                        <p>Formations en ligne flexibles, accessibles partout.</p>
                                    </div>
                                </div>
                                 <div className="about__three-content-service-single">
                                    <i className="fas fa-briefcase"></i>
                                    <div className="content">
                                        <h4>Professionnalisme</h4>
                                        <p>Formateurs qualifiés, avec une expérience concrète.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="about__three-right">
                            <div className="row align-items-center">
                               {/*  <div className="about__three-right-counter">
                                    <h4 className="counter"><Count number={25}/></h4>
                                    <span>Years Of experience</span>								
                                </div> */}
                                <div className="col-xl-6 col-lg-7 col-md-6 col-sm-6">
                                    <div className="about__three-right-image-left-side">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
                                    <div className="about__three-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                    <div className="about__three-right-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;