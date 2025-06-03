import Link from "next/link";

const Pricing = () => {
    return (
        <>
        <div className="pricing-plan__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="pricing-plan__one-title">
                            <span className="subtitle-one">Nos Offres</span>
                            <h2 className="mb-40">Des Tarifs Simples & Adaptés</h2>
                            <ul className="nav nav-pills mb-65 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="monthly-pricing-tab" data-bs-toggle="pill" data-bs-target="#monthly-pricing" type="button" role="tab" aria-controls="monthly-pricing" aria-selected="true">Mensuel</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="yearly-pricing-tab" data-bs-toggle="pill" data-bs-target="#yearly-pricing" type="button" role="tab" aria-controls="yearly-pricing" aria-selected="false">Annuel</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pricing-plans tab-content">
                    {/* Plans mensuels */}
                    <div className="row justify-content-center gy-4 tab-pane fade show active" id="monthly-pricing" role="tabpanel" aria-labelledby="monthly-pricing-tab">
                        {/* Pack Essentiel */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Essentiel</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">49 000 FCFA<span>/mois</span></h2>
                                    <p>Idéal pour les indépendants ou petites structures</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Site vitrine 1-3 pages</span>
                                        <span><i className="fas fa-angle-double-right"></i> Hébergement & maintenance</span>
                                        <span><i className="fas fa-angle-double-right"></i> Support email</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Démarrer<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Pro */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Pro</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">89 000 FCFA<span>/mois</span></h2>
                                    <p>Parfait pour PME et startups en croissance</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Site web complet (jusqu’à 6 pages)</span>
                                        <span><i className="fas fa-angle-double-right"></i> Design personnalisé</span>
                                        <span><i className="fas fa-angle-double-right"></i> Référencement SEO</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-two">Démarrer<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Pack Sur-mesure */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Sur-mesure</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">Sur devis</h2>
                                    <p>Pour les projets complexes ou intégrations spécifiques</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Application mobile / web</span>
                                        <span><i className="fas fa-angle-double-right"></i> Solutions IA et automatisation</span>
                                        <span><i className="fas fa-angle-double-right"></i> Accompagnement digital</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Demander un devis<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Plans annuels */}
                    <div className="row justify-content-center gy-4 tab-pane fade" id="yearly-pricing" role="tabpanel" aria-labelledby="yearly-pricing-tab">
                        {/* Essentiel annuel */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Essentiel</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">499 000 FCFA<span>/an</span></h2>
                                    <p>Pack économique pour les prestations simples</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Site vitrine + maintenance</span>
                                        <span><i className="fas fa-angle-double-right"></i> Sauvegardes & mises à jour</span>
                                        <span><i className="fas fa-angle-double-right"></i> Support standard</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Démarrer<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Pro annuel */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Pro</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">950 000 FCFA<span>/an</span></h2>
                                    <p>Offre complète avec accompagnement</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Création + SEO + Design avancé</span>
                                        <span><i className="fas fa-angle-double-right"></i> Maintenance proactive</span>
                                        <span><i className="fas fa-angle-double-right"></i> Support prioritaire</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-two">Démarrer<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Sur-mesure annuel */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Sur-mesure</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">Sur devis</h2>
                                    <p>Développement & intégration spécifiques à l’entreprise</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i> Applications métiers personnalisées</span>
                                        <span><i className="fas fa-angle-double-right"></i> Intelligence Artificielle intégrée</span>
                                        <span><i className="fas fa-angle-double-right"></i> Accompagnement 360°</span>
                                    </div>
                                    <Link href="/request-quote" className="btn-one">Demander un devis<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pricing;
