import Link from "next/link";
import bannerBg from "../../../../public/assets/img/banner/banner-four-bg.png";
import banner1 from "../../../../public/assets/img/banner/banner-four.png";

const BannerFour = () => {
    return (
        <>
            <div className="banner__four pt-5 pb-5" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__four-content">
                                <span className="subtitle-two">centre professionnel du savoir</span>
                                <h2>Transformez votre avenir avec des formations professionnelles certifiantes !</h2>
                                <p>Apprenez à votre rythme, en ligne ou en hybride, avec des formations adaptées à vos besoins.</p>
                                <div className="banner__four-content-bottom">
                                    <Link href="/services" className="btn-two">Découvrez nos formations<i className="fas fa-arrow-right"></i></Link>
                                    <Link href="/accompagnement" className="btn-one text-white">Suivi de projet<i className="fas fa-arrow-right"></i></Link>
                                   {/*  <div className="banner__four-content-call">
                                        <i className="flaticon-telephone-call"></i>
                                        <div className="banner__four-content-call-right">
                                            <Link href="/services" className="btn-two">Découvrez nos formations<i className="fas fa-arrow-right"></i></Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__four-image">
                                <div className="banner__four-image-wrapper">
                               {/*  <img src={banner1.src} alt="image" /> */}
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