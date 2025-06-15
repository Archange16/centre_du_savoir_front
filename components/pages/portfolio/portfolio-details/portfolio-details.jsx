import Link from 'next/link';
import image2 from '../../../../public/assets/img/service/service-details.png';
import { useParams } from 'next/navigation';
import servicesData from '@/components/data/services-data';
import BlogSidebar from '../../blogs/blog-sidebar/blog-sidebar';



const FormationSingleMain = ({selectedFormation}) => {

    const params = useParams();
    const { id } = params;

    // Chercher le service correspondant dans la data
    const service = selectedFormation/* .find((item) => item.id === id) */;
    // Vérifier si le service existe
   
      //const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-7">
                        <div className="blog__details-thumb">
                                {/* <img className="img__full" src={service.image.src} alt="blog-details-image" /> */}
                            </div>
                            <div className="blog__details-content">
                               
                            <h2>🔧 Nos services :</h2>
                            <p>{service?.description_courte}</p>
                            <p>{service?.description_longue}</p>
                            
                            <div className="blog__details-portfolio">
                                <h6>Études & Conception de Voiries, Assainissement et Routes</h6>
                                <h6>Études Hydrologiques & Hydraulique</h6>
                                <h6>Calculs des Structures d’Ouvrages d’Art : Ponts, Dalots, Buses, Châteaux d’eau</h6>
                                <h6>Calculs de Structures Bâtiment & Métallique</h6>
                                <h6>Conception des Plans d’Exécution</h6>
                                <h6>Calculs de Structures Bâtiment & Métallique</h6>
                                <h6>Calculs de Structures Bâtiment & Métallique</h6>
                                 <h2>Conception des Plans d’Exécution :</h2>
                                 <h6>🎯 De l’esquisse aux plans d’exécution : un accompagnement complet, sur mesure.</h6>
                                 <h6>💼 Pour les professionnels du BTP :</h6>
                                 <h6>Entreprises, bureaux d’études, maîtres d’ouvrage, porteurs de projets
</h6>
                                <ul className="blog__details-portfolio-middle">
                                    {service?.profils_concernes?.map((item, index) => (
                                    <li key={index}>
                                        
                                        <h5><i className="fas fa-check-circle"></i>✅ Objectif :</h5>
                                        <p>{item.competences}</p>
                                        {/* Pas besoin de Link si ce sont juste des prérequis en texte */}
                                    </li>
                                    ))}
                            
                                </ul>
                            </div>

                        </div>

                        <div className="blog__details-comment-form">
                            <div className="all__sidebar-item">
                            <h6>✅ Objectif :</h6>
                            <div className="all__sidebar-item-search">
                               <ul className="blog__details-portfolio-middle">
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        Vous accompagner dans la viabilisation, la solidité et la conformité technique de vos ouvrages.
                                        📍 Disponible pour collaboration sur tout projet technique.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-xl-5'>
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default FormationSingleMain;