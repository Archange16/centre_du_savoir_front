"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";
import CategoriesMain from "./categories";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import WorkArea from "../homes/home/work";
import HeaderFour from "@/components/layout/headers/header/header-four";

const CategoriesPage = () => {
    return (
        <>
            <SEO pageTitle="Nos catégories de programmes de formation" />
            <HeaderFour />
            <BreadCrumb title="Nos catégories de formations" innerTitle="Nos catégories de formations" />
            <CategoriesMain />
            <WorkArea /> 
            {/* <Testimonial />  */}
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default CategoriesPage;