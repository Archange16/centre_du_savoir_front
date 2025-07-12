"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import FooterThree from "@/components/layout/footers/footer-three";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle='Notre équipes' />
            <HeaderTwo />
            <BreadCrumb title='Notre équipes' innerTitle='Notre équipes'/>
            <TeamMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;