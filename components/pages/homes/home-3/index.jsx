"use client"
import SEO from "@/components/data/seo";
import FooterThree from "@/components/layout/footers/footer-three";
import HeaderThree from "@/components/layout/headers/header/header-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerThree from "./banner";
import ServicesThree from "./services";
import TextSlide from "./text-slide";
import AboutThree from "./about";
import PortfolioThree from "./portfolio";
import Faq from "./faq";
import ChooseUsThree from "./choose-us";
import TestimonialThree from "./testimonial";
import Work from "./work";
import BlogThree from "./blog";

const HomeThree = () => {
    return (
        <>
            <SEO pageTitle="Cloud Computing" />
            <HeaderThree  />
            <BannerThree />
            <ServicesThree />
            <TextSlide />
            <AboutThree />
            <PortfolioThree />
            <Faq />
            <ChooseUsThree />
            <TestimonialThree />
            <Work />
            <BlogThree />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default HomeThree;
