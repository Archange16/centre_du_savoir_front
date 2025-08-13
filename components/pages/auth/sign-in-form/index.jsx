"use client"
//import SEO from '@/components/data/seo';
//import BreadCrumb from '../../common/breadcrumb';
//import RequestQuoteMain from './request-quote';
import ScrollToTop from '../../common/scroll/scroll-to-top';
//import FooterTwo from '@/components/layout/footers/footer-two';
//import HeaderTwo from '@/components/layout/headers/header/header-two';
//import HeaderFour from '@/components/layout/headers/header/header-four';
//import FooterThree from '@/components/layout/footers/footer-three';
import SignInForm from './signin';

const SignInFormIndex = () => {
    return (
         <div className="all__sidebar dark_image ml-25 xl-ml-0">
            <div className="all__sidebar-item">
                <h6>Formulaire de Suivi de Projet</h6>
                <div className="all__sidebar-item-post">
                     <SignInForm />
                </div>
            </div>
        </div>
    );
};

export default SignInFormIndex;