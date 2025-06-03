"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle='Pricing Plan' />
            <HeaderTwo />
            <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
            <PricingPlansMain />
            <FooterTwo />    
            <ScrollToTop />
        </>
    );
};

export default PricingPages;