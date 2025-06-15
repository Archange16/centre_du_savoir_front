"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import WorkArea from "../../homes/home/work";
import Testimonial from "../../homes/home/testimonial";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import ServicesMain from "./services";
import HeaderFour from "@/components/layout/headers/header/header-four";
import FooterFour from "@/components/layout/footers/footer-four";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <HeaderTwo />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <WorkArea />
            <Testimonial />
            <FooterFour />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;