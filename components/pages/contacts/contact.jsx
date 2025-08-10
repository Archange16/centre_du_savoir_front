"use client";
import SEO from "../../../components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
//import FooterTwo from "@/components/layout/footers/footer-two";
//import HeaderFour from "@/components/layout/headers/header/header-four";
import HeaderTwo from "../../../components/layout/headers/header/header-two";
//import FooterFour from "@/components/layout/footers/footer-four";
import FooterThree from "../../../components/layout/footers/footer-three";
import bannerData  from "../../../components/data/bannerImages";


//import Map from '@/components/maps/LeafletMap';

//import Map from '@/components/maps/LeafletMap/MapWrapper';


const ContactUs = () => {
   const currentBanner = bannerData?.find(item => item.page === 'contact');
    return (
        <>
            <SEO pageTitle="Contactez-nous" />        
            <HeaderTwo />
            <BreadCrumb title="Contactez nous" innerTitle="Contactez-nous" backgroundImage={currentBanner.src}/>
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">contact</span>
                                    <h2>Nous contacter</h2>
                                    <p>Vous avez une question ou besoin d'infos ? Contactez-nous via nos coordonnées ci-dessous, nous vous répondrons dès que possible.</p>
                                </div>
                                <div className="contact__two-form">
                                   { <FormArea />}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            {/* <Map center={[48.8566, 2.3522]} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterThree/>
            <ScrollToTop />
        </>
    );
};

export default ContactUs;
