import Link from 'next/link';
import image2 from '../../../../public/assets/img/service/service-details.png';
import { fetchFormationById } from '@/services/apiFormation';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlogSidebar from '../../blogs/blog-sidebar/blog-sidebar';

const FormationSingleMain = ({singleData}) => {

    const [servicesData, setServicesData] = useState(null);
    const [loading, setLoading] = useState(true); // also for setLoading to work

    
    const params = useParams();
    const { id } = params;
    useEffect(() => {
        const loadServices = async () => {
          try {
            console.log('ID:', id);
            const services = await fetchFormationById(id);
            setServicesData(services);
          } catch (error) {
            console.error('Erreur de chargement:', error);
          } finally {
            setLoading(false);
          }
        };
    
        loadServices();
      }, []);
      //const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-7">
                        <div className="blog__details-thumb">
                            <span className="date">Domaine : { servicesData?.data.domaine}</span>
                                <img className="img__full" src={image2.src} alt="blog-details-image" />
                            </div>
                            <div className="blog__details-content">
                                <div className="blog__details-content-top">
                                <span>
                                    <i className="fas fa-money-bill-wave"></i> {/* Prix */}
                                    {servicesData?.data.prix} Dhs
                                </span>
                                <span>
                                    <i className="fas fa-clock"></i> {/* Durée */}
                                    {servicesData?.data.duree_heures} Heures
                                </span>
                                <span>
                                    <i className="fas fa-signal"></i> {/* Niveau */}
                                    {servicesData?.data.niveau} Niveau
                                </span>
                            </div>
                            <h2>{servicesData?.data.titre}</h2>
                            <p>{servicesData?.data.description_courte}</p>
                            <p>{servicesData?.data.description_longue}</p>
                            <div className="all__sidebar-item-search mb-3">
                                <button className="btn-one">Téléchager notre plaqute<i className="fal fa-download"></i></button> 
                            </div>
                            
                            <div className="blog__details-portfolio">
                                <h6>PROFILS CONCERNÉS & COMPÉTENCES ACQUISES:</h6>
                                <ul className="blog__details-portfolio-middle">
                                    {servicesData?.data?.profils_concernes?.map((item, index) => (
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
                                    {servicesData?.data?.prerequis?.map((item, index) => (
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
                                {servicesData?.data?.objectifs?.map((item, index) => (
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