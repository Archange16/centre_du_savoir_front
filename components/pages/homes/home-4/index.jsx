"use client";
import SEO from "@/components/data/seo";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerFour from "./banner";
import AboutFour from "./about";
import ServicesFour from "./services";
import Video from "./video";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import ChooseUsThree from "./choose-us";
import WorkProcess from "./work";
import FooterThree from "@/components/layout/footers/footer-three";
import AboutThree from "./aboutp";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const HomeFour = () => {
    return (
        <div>
            <SEO pageTitle='Centre professionnel du savoir' />
            <HeaderTwo />
            <BannerFour />
            <AboutFour />
            <ServicesFour />
            <AboutThree />
            <Video />
            <WorkProcess />
            <ChooseUsThree />
            <FooterThree />
            <ScrollToTop />
        </div>
    );
};

export default HomeFour;