"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ThreeColumns from "./three-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 03 Columns' />
            <HeaderTwo />
            <BreadCrumb title="03 Columns" innerTitle="Portfolio Grid" />
            <ThreeColumns />        
            <FooterTwo />          
            <ScrollToTop />
        </>
    );
};

export default PortfolioThreeColumns;