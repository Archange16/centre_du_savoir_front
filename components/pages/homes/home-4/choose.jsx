import image1 from "../../../../public/assets/img/why-choose-us/why-choose-2.png";
import image2 from "../../../../public/assets/img/why-choose-us/why-choose.png";
import Count from "../../common/count";

const ChooseFour = () => {
    return (
        <>
        <div className="why-choose-us__three section-padding">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-12 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-left">
                            <div className="why-choose-us__three-title">
                                <span className="subtitle-one">Nos Valeurs et Engagements</span>
                                <h2>Nos Valeurs et Engagements</h2>
                                <p>Notre centre de formation est guidé par l'excellence, l'innovation, et un engagement constant à offrir des formations de qualité. Voici ce qui nous anime :</p>
                            </div>
                            <div className="why-choose-us__three-bottom">
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-web-research"></i>
                                        <h4 >Excellence</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <p>Formation de haut niveau, adaptée aux réalités du terrain.</p>
                                        {/* <h4 className="counter"><Count number={143}/></h4> */}
                                        {/* <h4>k</h4> */}
                                    </div>
                                </div>
                                <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-data-scientist"></i>
                                        <h4>Innovation</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <p>Méthodes d'enseignement modernes et interactives.</p>
                                        {/* <h4 className="counter"><Count number={230}/></h4>
                                        <h4>+</h4> */}
                                    </div>
                                </div>
                                 <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-data-scientist"></i>
                                        <h4>Accessibilité</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <p>Formations en ligne flexibles, accessibles partout.</p>
                                        {/* <h4 className="counter"><Count number={230}/></h4>
                                        <h4>+</h4> */}
                                    </div>
                                </div>
                                 <div className="why-choose-us__three-bottom-card">
                                    <div className="why-choose-us__three-bottom-card-content">
                                        <i className="flaticon-data-scientist"></i>
                                        <h4>Professionnalisme</h4>
                                    </div>
                                    <div className="why-choose-us__three-bottom-card-counter">
                                        <p>Formateurs qualifiés, avec une expérience concrète.</p>
                                        {/* <h4 className="counter"><Count number={230}/></h4>
                                        <h4>+</h4> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/*  <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                        <div className="why-choose-us__three-image">
                            <img src={image1.src} alt="image" className="why-choose-us__three-floating-image animate-y-axis-slider" />
                            <img src={image2.src} alt="image" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>         
        </>
    );
};

export default ChooseFour;