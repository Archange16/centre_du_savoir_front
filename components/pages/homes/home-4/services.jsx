import blogData from '@/components/data/services-data';
import Link from 'next/link';

const BlogFour = () => {
    return (        
        <div className="blog__four section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9">
                        <div className="blog__four-title">
                            <span className="subtitle-one">Nos Formations</span>
                            <h2>Nos Formations</h2>
                            <p>Nous proposons des formations en génie civil pour les professionnels souhaitant renforcer leurs compétences. Inscrivez-vous en ligne !</p>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    {blogData.slice(0, 6)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__four-single-blog">
                                <div className="blog__four-single-blog-img">
                                    <span className="blog__four-single-blog-date">{data.domaine}</span>
                                    <Link href={`/services/${data.slug}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__four-single-blog-content">
                                    <div className="blog__four-single-blog-content-top">
                                        <span><i className="fas fa-clock"></i>{data.duree_heures} h</span> {/* Horloge pour durée */}
                                        <span>{data.prix} <i className="fas fa-euro-sign"></i></span> {/* Euro pour prix */}
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
    );
};

export default BlogFour;