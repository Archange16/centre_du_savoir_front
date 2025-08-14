"use client"
import SEO from "../../../components/data/seo";
import FooterThree from "../../../components/layout/footers/footer-three";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderFour from "../../../components/layout/headers/header/header-four";
import MultiStepForm from './services-single';
import HeaderTwo from "../../layout/headers/header/header-two";

const MultiStepFormIndex = () => {
    return (
        <>
            <SEO pageTitle="" />            
            <HeaderTwo />
            <MultiStepForm/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default MultiStepFormIndex;