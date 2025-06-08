import servicesData from '@/components/data/categoriesPrincipale';
import imageDefault from '../../../../public/assets/img/service/service-details.png';
import Image from 'next/image';
import Link from 'next/link';

const ServicesFour = () => {
    // Regrouper les services par catégorie
    const groupedServices = servicesData?.reduce((acc, service) => {
        const { categorie } = service;
        if (!acc[categorie]) {
            acc[categorie] = [];
        }
        acc[categorie].push(service);
        return acc;
    }, {}) || {};

    return (
        <div className="services__four section-padding">
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <span className="subtitle-one">Nos Formations</span>
                        <h2>Nos Formations Professionnelles en Ligne</h2>
                    </div>
                </div>

                <div className="row gy-4">
                    {Object.keys(groupedServices).length > 0 ? (
                        Object.entries(groupedServices).map(([category, services], index) => (
                            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services__two-single-service">
                                    <div className="services__two-single-service-image">
                                        <Image
                                            src={services[0]?.image?.src || imageDefault}
                                            alt={category}
                                            width={400}
                                            height={250}
                                            className="img__full"
                                        />
                                    </div>
                                    <div className="services__two-single-service-content ">
                                        <h4>{category.replace(/_/g, ' ').toUpperCase()}</h4>
                                        <Link href={`/categories/${category}`} className="btn-three">
                                            Liste des formations <i className="fas fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                    <h4 className="blog__four-single-blog-content-title" href={`/services/${data.slug}`}>{data.titre}</h4>
                                    <Link className="btn-one" href={`/services/${data.slug}`}>En savoir plus<i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-xl-12 text-center">
                            <p>Aucune catégorie disponible pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicesFour;
