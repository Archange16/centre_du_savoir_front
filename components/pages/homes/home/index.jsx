"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import BannerOne from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Features from "./features";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import WorkArea from "./work";
import Blog from "./blog";
import Testimonial from "./testimonial";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Technology' />
            <HeaderTwo />
            <BannerOne />
            <About />
            <ChooseUs />
            <Features />
            <Portfolio />
            <Pricing />
            <WorkArea />
            <Testimonial />
            <Blog />
            <FooterTwo />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;