"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle='Team Two' />
            <HeaderTwo />
            <BreadCrumb title='Team Two' innerTitle='Team Two'/>
            <TeamMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default TeamPageTwo;