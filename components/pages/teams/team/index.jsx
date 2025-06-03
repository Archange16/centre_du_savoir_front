"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const TeamPage = () => {
    return (
        <>
            <SEO pageTitle='Our Team' />
            <HeaderTwo />
            <BreadCrumb title='Our Team' innerTitle='Our Team'/>
            <TeamMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default TeamPage;