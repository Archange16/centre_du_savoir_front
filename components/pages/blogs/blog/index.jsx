"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog Grid' />
            <HeaderTwo />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" />
            <BlogGridMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;