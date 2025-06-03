"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import FormationSingleMain from "./formation";

const FormationsSingle = ({serviceDetails}) => {
    //const words = serviceDetails.title.split(' ');
    /* const firstAndSecondWord = words.slice(0, 2).join(' '); */
    return (
        <>
            {/* <SEO pageTitle={serviceDetails?.title} />  */}           
            <HeaderTwo />
            <BreadCrumb /* title={firstAndSecondWord} innerTitle={serviceDetails?.title} */ />
            {/* <ServicesSingleMain firstAndSecondWord={firstAndSecondWord}/> */}
            <FormationSingleMain /* firstAndSecondWord={firstAndSecondWord} *//>
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default FormationsSingle;