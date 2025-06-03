"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import FaqPage from "./faq-page";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <HeaderTwo />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <FaqPage />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default Faq;