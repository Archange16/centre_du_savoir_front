"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TeamSingleMain from "./team-single";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import SwitchTab from "../../common/dark-light";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const TeamSingle = ({teamDetails}) => {
    return (
        <>
            <SEO pageTitle={teamDetails?.name} />
            <SwitchTab />
            <HeaderTwo />
            <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
            <TeamSingleMain teamDetails={teamDetails}/>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default TeamSingle;