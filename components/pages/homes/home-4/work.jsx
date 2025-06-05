import Link from "next/link";

const WorkProcess = () => {
    return (
        <div className="work-process__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="work-process__two-title">
                            <span className="subtitle-one">Notre Processus</span>
                            <h2>Nos Systèmes d'Intégration</h2>
                        </div>
                    </div>
                </div>
                <div className="work-process__two-cards">
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>01.</span>
                                <h4>Consulting IT</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-laptop-1"></i>
                            </div>
                        </div>
                        <p>Nous offrons des conseils en stratégie numérique pour optimiser vos processus et solutions technologiques sur mesure.</p>
                        <Link href="/services#consulting" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>02.</span>
                                <h4>Conception de Sites Web</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-iphone-1"></i>
                            </div>
                        </div>
                        <p>Nous créons des sites web modernes, réactifs et optimisés pour une expérience utilisateur unique, adaptée à vos besoins.</p>
                        <Link href="/services#web-design" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>03.</span>
                                <h4>Support IT et Maintenance</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-mobile-data"></i>
                            </div>
                        </div>
                        <p>Nous fournissons un support IT complet et des services de maintenance pour assurer la performance et la sécurité de vos systèmes.</p>
                        <Link href="/services#it-support" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                         <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                     <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>04.</span>
                                <h4>Support IT et Maintenance</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-mobile-data"></i>
                            </div>
                        </div>
                        <p>Nous fournissons un support IT complet et des services de maintenance pour assurer la performance et la sécurité de vos systèmes.</p>
                        <Link href="/services#it-support" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
