"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import FormationSingleMain from "./formation";
import HeaderFour from "@/components/layout/headers/header/header-four";

const FormationsSingle = ({selectedFormation}) => {
    const words = selectedFormation?.title.split(' ');
    const firstAndSecondWord = words?.slice(0, 2).join(' ');
    console.log("firstAndSecondWord", selectedFormation);
    return (
        <>
            <SEO pageTitle={firstAndSecondWord?.title} />             
            <HeaderFour />
            <BreadCrumb  title={firstAndSecondWord} innerTitle={firstAndSecondWord?.title}  />
            <FormationSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default FormationsSingle;