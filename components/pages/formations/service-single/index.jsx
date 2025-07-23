"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import FormationSingleMain from "./formation";
import HeaderFour from "@/components/layout/headers/header/header-four";
import FooterThree from "@/components/layout/footers/footer-three";
import bannerData  from "@/components/data/bannerImages";

const FormationsSingle = ({selectedFormation}) => {
    const currentBanner = bannerData?.find(item => item.page === 'services');
    console.log("selectedFormation", selectedFormation);
    const words = selectedFormation?.titre.split(' ');
    const firstAndSecondWord = words?.slice(0, 1000).join(' ');
    console.log("firstAndSecondWord", selectedFormation);
    return (
        <>
            <SEO pageTitle={firstAndSecondWord?.title} />             
            <HeaderTwo />
            <BreadCrumb  title={firstAndSecondWord} innerTitle={firstAndSecondWord}  backgroundImage={currentBanner.src}/>
            <FormationSingleMain selectedFormation={selectedFormation}/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default FormationsSingle;