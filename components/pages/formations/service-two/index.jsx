"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Nos Formations" />
            <HeaderTwo />
            <BreadCrumb title="Nos Formations" innerTitle="Nos Formations" />
            <ServicesMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;