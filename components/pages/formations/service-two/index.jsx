"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterThree from "@/components/layout/footers/footer-three";
import bannerData  from "@/components/data/bannerImages";


const ServicePageTwo = () => {

    const currentBanner = bannerData?.find(item => item.page === 'formation');
    return (
        <>
            <SEO pageTitle="Nos Formations" />
            <HeaderTwo />
            <BreadCrumb title="Nos Formations" innerTitle="Nos Formations" backgroundImage={currentBanner.src}/>
            <ServicesMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;