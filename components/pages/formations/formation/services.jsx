import { useEffect, useState } from 'react';
import { fetchFormations } from '@/services/apiFormation';
import Link from 'next/link';
import image2 from '../../../../public/assets/img/service/service-details.png';

const ServicesMain =() => {
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    const loadServices = async () => {
      try {
        const services = await fetchFormations();
        setServicesData(services);
      } catch (error) {
        console.error('Erreur de chargement:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) return <p>Chargement...</p>;

    return (
        <>
	    <div className="services__two section-padding">
                <div className="container">
                <div className="row gy-4 justify-content-center">
                        {servicesData?.slice(0, 8).map((data, id) => {
							const words = data.titre.split(' ');
							const firstAndSecondWord = words.slice(0, 5).join(' ');
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                    <div className="services__five-single-service">
                                         <img src={image2.src} alt="image" />
                                            <p className="classLigne"><i className="fas fa-laptop justify-content-between"></i> | 100% en ligne</p>
                                            <div className="blog__two-single-blog-content-top">
                                                <span><i className="far fa-user"></i>{data.duree_heures} Heures</span>
                                                <span><i className="far fa-comment-dots"></i>{data.prix} Dhs</span>
                                            </div>
                                        <div className="services__five-single-service-content">
                                            <h4>{firstAndSecondWord}</h4>
                                            <p>{data.description_courte}</p>
                                            <Link href={`/formation/${data.documentId}`} className="btn-three rounded-circle"><i className="fas fa-plus btn-ajout"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesMain;