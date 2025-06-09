"use client";
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import HeaderFour from "@/components/layout/headers/header/header-four";

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
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="/assets/img/icon/service-1.png" alt="icon-email" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>contact@centreprofessionneldusavoir.com</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="/assets/img/icon/service-2.png" alt="icon-phone" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Téléphone</h4>
                                        <span>+212 780-223487</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="/assets/img/icon/service-3.png" alt="icon-schedule" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Disponibilité</h4>
                                        <span>Lundi - Vendredi : 9h00 - 17h00</span>
                                        <span>Samedi : 10h00 - 14h00</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="/assets/img/icon/service-4.png" alt="icon-location" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Adresse</h4>
                                        <span>HAY ESAADA immeuble 136 Porte 1 ÉTAGE 3</span>
                                    </div>    
                                </div>
                            </div>
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
