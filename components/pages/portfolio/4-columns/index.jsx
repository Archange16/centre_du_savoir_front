"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import FourColumns from "./four-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 04 Columns' />
            <SwitchTab />
            <HeaderTwo />
            <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />        
            <FooterTwo />     
            <ScrollToTop />     
        </>
    );
};

export default PortfolioFourColumns;