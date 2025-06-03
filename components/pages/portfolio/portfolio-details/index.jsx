"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderTwo />
            <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData} />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;