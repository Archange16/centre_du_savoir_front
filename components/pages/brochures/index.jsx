"use client"
import SEO from '@/components/data/seo';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FooterTwo from '@/components/layout/footers/footer-two';
import HeaderTwo from '@/components/layout/headers/header/header-two';
import HeaderFour from '@/components/layout/headers/header/header-four';
import FooterThree from '@/components/layout/footers/footer-three';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Téléchargement de la plaquette" />
            <HeaderFour />
            <BreadCrumb title="Téléchargement de la plaquette" innerTitle="Téléchargement de la plaquette" />
            <RequestQuoteMain />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;