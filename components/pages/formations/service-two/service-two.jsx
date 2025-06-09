import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    return (
        <>
	    <div className="services__four section-padding">
                <div className="container">
                    <div className="row gy-4">
                    {servicesData.slice(0, 12)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__four-single-blog">
                                <div className="blog__four-single-blog-img">
                                    <span className="blog__four-single-blog-date">{data.domaine}</span>
                                    <Link href={`/services/${data.slug}`}><img src={data.image?.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__four-single-blog-content">
                                    <div className="blog__four-single-blog-content-top">
                                        <span><i className="fas fa-clock"></i>{data.duree_heures} h</span> {/* Horloge pour durée */}
                                        <span><i className="fas fa-euro-sign"></i>{data.prix} €</span> {/* Euro pour prix */}
                                        <span><i className="fas fa-laptop"></i> Cours en ligne</span> {/* Laptop pour cours en ligne */}
                                    </div>
                                    <h4 className="blog__four-single-blog-content-title" href={`/blog/${data.id}`}>{data.titre}</h4>
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

export default ServicesMain;