"use client";
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contactez-nous" />        
            <HeaderTwo />
            <BreadCrumb title="Contactez nous" innerTitle="Contactez-nous" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contact</span>
                                    <h2>Des questions ? Un projet ?</h2>
                                    <p>Notre équipe est à votre écoute pour vous accompagner dans la conception et la mise en œuvre de vos solutions digitales sur mesure. N'hésitez pas à nous écrire !</p>
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
                                        <span>contact@digital-expert.cg</span>
                                        <span>support@digital-expert.cg</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="/assets/img/icon/service-2.png" alt="icon-phone" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Téléphone</h4>
                                        <span>+242 06 123 4567</span>
                                        <span>+242 05 987 6543</span>
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
                                        <span>Centre-ville, Brazzaville, République du Congo</span>
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
