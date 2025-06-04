"use client"
import SEO from "@/components/data/seo";
import FooterThree from "@/components/layout/footers/footer-three";
import CategorieSingleMain from "./services-single";
import BreadCrumb from "../../common/breadcrumb";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderFour from "@/components/layout/headers/header/header-four";

const CategorieSingle = ({singleData}) => {
    const words = singleData?.categorie.split(' ');
    const firstAndSecondWord = words?.slice(0, 2).join(' ');
    return (
        <>
            <SEO pageTitle={firstAndSecondWord} />            
            <HeaderFour />
            <BreadCrumb title={firstAndSecondWord} innerTitle={firstAndSecondWord} />
            <CategorieSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default CategorieSingle;