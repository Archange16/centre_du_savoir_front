import Link from 'next/link';
import servicesData from '@/components/data/categoriesPrincipale';
import { useEffect } from 'react';

const CategoriesMain = () => {
    // Vérification et regroupement des services par catégorie
    const groupedServices = servicesData ? servicesData.reduce((acc, service) => {
        const { categorie } = service;
        if (!acc[categorie]) {
            acc[categorie] = [];
        }
        acc[categorie].push(service);
        return acc;
    }, {}) : {};  // Si servicesData est null ou undefined, utiliser un objet vide

    return (
        <>
            <div className="services__two section-padding">
                <div className="container">
                   {/*  <div className="col-xl-3 col-lg-4 mb-3">
                            <div className="portfolio__one-content-right text-lg-end">
                                <Link href="/services" className="btn-one">
                                    Toutes Nos Formations <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div> */}
                    <div className="row gy-4">
                        {/* Itérer sur les catégories */}
                        {Object.keys(groupedServices).length > 0 ? (
                            Object.keys(groupedServices).map((category, index) => {
                                const data = groupedServices[category]; // Obtenir les services pour la catégorie
                                return (
                                    <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="services__two-single-service">
                                            <div className="services__two-single-service-icon">
                                                {/* Vous pouvez ajouter une icône ou un contenu ici */}
                                            </div>
                                            <div className="services__two-single-service-image">
                                                {/* Afficher une image ou icône pour la catégorie */}
                                                <img className="img__full" src={data[0].image?.src} alt={category} />
                                            </div>
                                            <div className="services__two-single-service-content formation-solution">
                                                <h4>{category.replace(/_/g, ' ').toUpperCase()}</h4>  {/* Titre de la catégorie */}
                                                <Link href={`/categories/${category}`} className="btn-three mb-20 ml-20">
                                                    Voir les formations
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-xl-12">
                                <p>Aucune catégorie disponible pour le moment.</p>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default CategoriesMain;