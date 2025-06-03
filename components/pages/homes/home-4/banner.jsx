import Link from "next/link";
import bannerBg from "../../../../public/assets/img/banner/banner-four-bg.png";
import banner1 from "../../../../public/assets/img/banner/banner-four.png";

const BannerFour = () => {
    return (
        <>
            <div className="banner__four" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__four-content">
                                <span className="subtitle-two">Innovating The Future</span>
                                <h2>Transforming Ideas into Reality</h2>
                                <p>Showcases the company's ability to bring innovative concepts to life. Indicates a broader focus beyond just technical.</p>
                                <div className="banner__four-content-bottom">
                                    <Link href="/contact" className="btn-two">Apply Today<i className="fas fa-arrow-right"></i></Link>
                                    <div className="banner__four-content-call">
                                        <i className="flaticon-telephone-call"></i>
                                        <div className="banner__four-content-call-right">
                                            <span>Make a call</span>
                                            <Link href="tel:(307)%20555-0133">(307) 555-0133</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__four-image">
                                <div className="banner__four-image-wrapper">
                                <img src={banner1.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerFour;