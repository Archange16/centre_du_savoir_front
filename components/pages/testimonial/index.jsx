"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import TestimonialMain from "./testimonial";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
            <HeaderTwo />
            <BreadCrumb title='Testimonials' innerTitle='Testimonials' />
            <TestimonialMain />
            <FooterOne />
            <ScrollToTop
             />         
        </>
    );
};

export default Testimonial;