"use client";
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";

//import Map from '@/components/maps/LeafletMap';

//import Map from '@/components/maps/LeafletMap/MapWrapper';


const ContactUs = () => {
   
    return (
        <>
            <SEO pageTitle="Contactez-nous" />        
            <HeaderFour />
            <BreadCrumb title="Contactez nous" innerTitle="Contactez-nous" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Nous contacter</span>
                                    <h2>Nous contacter</h2>
                                    <p>ous avez une question ou besoin d'infos ? Contactez-nous via nos coordonnées ci-dessous, nous vous répondrons dès que possible.</p>
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
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;
