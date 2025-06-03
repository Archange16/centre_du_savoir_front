"use client";
import SEO from "@/components/data/seo";
import HeaderFour from "@/components/layout/headers/header/header-four";
import FooterFour from "@/components/layout/footers/footer-four";
import BannerFour from "./banner";
import AboutFour from "./about";
import ServicesFour from "./services";
import ChooseFour from "./choose";
import Tab from "./tab/tab";
import Video from "./video";
import BlogFour from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeFour = () => {
    return (
        <div>
            <SEO pageTitle='Digital Business' />
            <HeaderFour />
            <BannerFour />
            <AboutFour />
            <ServicesFour />
            <ChooseFour />
            <Tab />
            <Video />
            <BlogFour />
            <FooterFour />
            <ScrollToTop />
        </div>
    );
};

export default HomeFour;