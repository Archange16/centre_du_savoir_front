"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import HeaderFour from "@/components/layout/headers/header/header-four";
import FooterFour from "@/components/layout/footers/footer-four";
import FooterThree from "@/components/layout/footers/footer-three";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle="CENTRE PROFESSIONNEL DU SAVOIR" />
            <HeaderTwo />
          {/*   <BreadCrumb description="Nous proposons également un accompagnement personnalisé et l'étude de projets pour ceux qui souhaitent collaborer ou concrétiser une idée professionnelle." title="CENTRE PROFESSIONNEL DU SAVOIR" innerTitle="Votre partenaire technique dans le BTP" /> */}
            <PortfolioDetailsMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;