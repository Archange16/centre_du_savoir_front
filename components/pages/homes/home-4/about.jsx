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
                                <div className="experience-bar animate-y-axis-slider">
                                    <div className="experience-bar-right">
                                        <div className="experience-bar-counter">
                                            <h4 className="counter">25</h4>
                                            <span>+</span>
                                        </div>
                                        <span>Years Of Experience</span>
                                    </div>
                                </div>
                                <div className="about__four-image-wrapper">
                                    <img className="image-1" src={about1.src} alt="image" />
                                    <img className="image-2" src={about2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about__four-content">
                                <span className="subtitle-one">About us</span>
                                <h2>We Are Pioneers in Digital Solutions</h2>
                                <p>In an era where technology shapes futures, we stand at the forefront. Our mission is to innovate and transform businesses through digital solutions. With a dedicated team and cutting-edge technology.</p>
                                <div className="about__four-content-service">
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Shaping the Digital Future</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Empowering Through Technology</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Our Commitment to Excellence</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-one">Discover More<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFour;