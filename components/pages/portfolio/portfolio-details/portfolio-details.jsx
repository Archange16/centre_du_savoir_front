import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';
import Faq from '../../faq';
import FaqOne from '../../faq/faq-one';
import FaqPage from '@/app/faq/page';

const PortfolioDetailsMain = ({singleData}) => {
    return (
        <div className="project__details section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="project__details-thumb">
                           
                            
                            <div className="project-info">
                                <div className="project-info-top">
                                    <h4>Centre Professionnel du Savoir</h4>
                                </div>
                                <ul>
                                    {/* <li>Nom :<span>Centre Professionnel du Savoir</span></li> */}
                                    <li>Localisation :<span>Marrakech, Maroc 🇲🇦</span></li>
                                    <li>Public :<span>Entreprises, bureaux d’études, maîtres d’ouvrage</span></li>
                                    <li>Contact :
                                        <span>
                                            +212 780-223487
                                        </span>
                                    </li>
                                    <li>Objectif :
                                        <span>
                                            Viabilisation, solidité et conformité technique des ouvrages
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 mb-40 justify-content-center">
                    <h2>CENTRE PROFESSIONNEL DU SAVOIR</h2>
                    <p>Votre partenaire technique dans le BTP</p>

                    <div className="col-xl-3 col-lg-5">
                        <div className="project-feature">
                            <h4>Études & Conception de Voiries, Assainissement et Routes</h4>
                           
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-5">
                        <div className="project-feature">
                            <h4>Études Hydrologiques & Hydrauliques</h4>
                            
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5">
                        <div className="project-feature">
                            <h4>Calculs des Structures d’Ouvrages d’Art : Ponts, Dalots, Buses, Châteaux d’eau</h4>
                            
                        </div>
                    </div>
                     <div className="col-xl-2 col-lg-5">
                        <div className="project-feature">
                            <h4>Calculs de Structures Bâtiment & Métallique</h4>
                            
                        </div>
                    </div>
                     <div className="col-xl-2 col-lg-5">
                        <div className="project-feature">
                            <h4>Conception des Plans d’Exécution</h4>
                        
                        </div>
                    </div>
                </div>
                    
                    <div className="col-xl-8">
                        <div className="project__details-content">
                            <div className="project__details-content-mid">
                                <h3>Votre partenaire technique dans le BTP</h3>
                                <p>
                                    Le Centre Professionnel du Savoir vous accompagne de l’esquisse aux plans d’exécution.
                                    Nous proposons un accompagnement complet, sur mesure, dans toutes les phases de vos projets techniques.
                                </p>
                                <p>
                                    Notre expertise couvre les études hydrologiques & hydrauliques, les calculs de structures d’ouvrages d’art et les plans d’exécution,
                                    en garantissant une conformité totale avec les normes en vigueur.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                     <div className="project__details-content">
                        <div className="project__details-content-bottom">
                            <p>
                                Que vous soyez une entreprise, un bureau d’études, un maître d’ouvrage ou un porteur de projet, nous sommes à vos côtés
                                pour assurer la réussite de vos ouvrages techniques. Disponible pour toute collaboration à travers le Maroc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;