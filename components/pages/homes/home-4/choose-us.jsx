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
                            <span className="subtitle-one">Why CHOSE US</span>
                            <h2>IT Infrastructure most active <span className="highlighted-two">Solutions</span></h2>
                            <p>IT Technology is a broad category encompassing all aspec info technology and the application of technology IT Technology</p>
                            <div className="why-choose-us__two-content-service">
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Data Management Experts</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Mobile App Developments</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>IT Infrastructure Solutions</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Data Analytics Consulting</span>
                                </div>
                            </div>
                            <Link href="/services" className="btn-one">Learn More
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