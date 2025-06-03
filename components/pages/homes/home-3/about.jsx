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
                            <span className="subtitle-one">About us</span>
                            <h2>Uniting Ideas Power of <span className="highlighted-two">Collaboration</span></h2>
                            <p>Harness the collective brilliance of teamwork with our model for collaboration, fostering innovation and thought integration</p>
                            <div className="about__three-content-service">
                                <div className="about__three-content-service-single">
                                    <i className="flaticon-good-feedback"></i>
                                    <div className="content">
                                        <h4>CyberSecure IT</h4>
                                        <p>IT Technology is an category encompassing aspects  category encompassing aspects</p>
                                    </div>
                                </div>
                                <div className="about__three-content-service-single">
                                    <i className="flaticon-incoming-message"></i>
                                    <div className="content">
                                        <h4>Power up your IT</h4>
                                        <p>IT Technology is an category encompassing aspects  category encompassing aspects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="about__three-right">
                            <div className="row align-items-center">
                                <div className="about__three-right-counter">
                                    <h4 className="counter"><Count number={25}/></h4>
                                    <span>Years Of experience</span>								
                                </div>
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