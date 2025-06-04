import Link from 'next/link';
import servicesData from '@/components/data/formationsPrincipales';
import image2 from '../../../../public/assets/img/service/service-details.png';

const ServicesMain = () => {
    // Regroupement des services par catégorie
    const groupedServices = servicesData?.reduce((acc, service) => {
        const { categorie = 'Autres' } = service; // valeur par défaut
        if (!acc[categorie]) {
            acc[categorie] = [];
        }
        acc[categorie].push(service);
        return acc;
    }, {}) || {};

    return (
        <div className="services__two section-padding">
            <div className="container">
                <div className="row gy-4">
                    {Object.keys(groupedServices).length > 0 ? (
                        Object.entries(groupedServices).map(([category, services]) => (
                            <div key={category} className="col-xl-12">
                                <h3 className="category-title mb-3">
                                    {category.replace(/_/g, ' ').toUpperCase()}
                                </h3>
                                <div className="row gy-4">
                                    {services.map((data) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={data.id}>
                                            <div className="services__two-single-service">
                                                {data.icon && (
                                                    <div className="services__two-single-service-icon">
                                                        {data.icon}
                                                    </div>
                                                )}
                                                <div className="services__two-single-service-image">
                                                    <img className="img__full" src={image2?.src} alt={data.title} />
                                                </div>
                                                <div className="services__two-single-service-content formation-solution">
                                                    <h4>{data.title}</h4>
                                                    <Link href={`/formation/${data.id}`}>
                                                        <a className="btn-three mb-20">Voir plus</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-xl-12">
                            <p>Aucune formation disponible pour le moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicesMain;
