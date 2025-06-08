import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const ServicesFour = () => {
    return (
        <>
            <div className="services__four section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <span className="subtitle-one">Nos Formations</span>
                            <h2>Nos Formations</h2>
                            <p>Nous proposons des formations en génie civil pour les professionnels souhaitant renforcer leurs compétences. Inscrivez-vous en ligne !</p>
                        </div>
                    </div>
            
                    <div className="row gy-4">
                    {servicesData.slice(0, 6)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__four-single-blog">
                                <div className="blog__four-single-blog-img">
                                    <span className="blog__four-single-blog-date">{data.domaine}</span>
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__four-single-blog-content">
                                    <div className="blog__four-single-blog-content-top">
                                        <span><i className="far fa-clock"></i>{data.duree_heures} h</span>
                                        <span><i className="far fa-euro-sign"></i>{data.prix} €</span>
                                        <span><i className="far fa-laptop"></i>Cours en ligne</span>
                                    </div>
                                    <h4 className="blog__four-single-blog-content-title" href={`/services/${data.slug}`}>{data.titre}</h4>
                                    <Link className="btn-one" href={`/services/${data.slug}`}>En savoir plus<i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>   
        </>
    );
};

export default ServicesFour;