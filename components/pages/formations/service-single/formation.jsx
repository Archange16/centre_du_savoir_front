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
    if (!service) {
        return <div>Aucune formation trouvé.</div>;
    }
      //const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-7">
                        <div className="blog__details-thumb">
                            <span className="date">Domaine : { service?.domaine}</span>
                                <img className="img__full" src={service.image.src} alt="blog-details-image" />
                            </div>
                            <div className="blog__details-content">
                                <div className="blog__details-content-top">
                                <span>
                                    <i className="fas fa-money-bill-wave"></i> {/* Prix */}
                                    {service?.prix} Dhs
                                </span>
                                <span>
                                    <i className="fas fa-clock"></i> {/* Durée */}
                                    {service?.duree_heures} Heures
                                </span>
                                <span>
                                    <i className="fas fa-signal"></i> {/* Niveau */}
                                    {service?.niveau} Niveau
                                </span>
                            </div>
                            <h2>{service?.titre}</h2>
                            <p>{service?.description_courte}</p>
                            <p>{service?.description_longue}</p>
                            <div className="all__sidebar-item-search mb-3">
                                <button className="btn-one">Téléchager notre plaqute<i className="fal fa-download"></i></button> 
                            </div>
                            
                            <div className="blog__details-portfolio">
                                <h6>PROFILS CONCERNÉS & COMPÉTENCES ACQUISES:</h6>
                                <ul className="blog__details-portfolio-middle">
                                    {service?.profils_concernes?.map((item, index) => (
                                    <li key={index}>
                                        
                                        <h5><i className="fas fa-check-circle"></i>{item.profil}</h5>
                                        <p>{item.competences}</p>
                                        {/* Pas besoin de Link si ce sont juste des prérequis en texte */}
                                    </li>
                                    ))}
                            
                                </ul>
                            </div>

                        </div>

                        <div className="blog__details-comment-form">
                            <div className="all__sidebar-item">
                            <h6>OBJECTIFS DE LA FORMATION:</h6>
                            <div className="all__sidebar-item-search">
                               <ul className="blog__details-portfolio-middle">
                                    {service?.prerequis?.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check-circle"></i>
                                        {/* Pas besoin de Link si ce sont juste des prérequis en texte */}
                                        {item}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="all__sidebar-item">
                            <h6>OBJECTIFS DE LA FORMATION:</h6>
                            <div className="all__sidebar-item-tag ">
                                <ul className="blog__details-portfolio-middle">
                                {service?.objectifs?.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check-circle"></i>
                                        {/* Pas besoin de Link si ce sont juste des prérequis en texte */}
                                        {item}
                                    </li>
                                    ))}
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