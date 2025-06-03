import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const ServicesThree = () => {
    return (
        <>
            <div className="services__three section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="services__three-title text-center">
                                <span className="subtitle-one">Latest service</span>
                                <h2>Optimized IT Services for Your <span className="highlighted-two">Business</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center flex-wrap services__three-items">
                        {servicesData?.slice(0, 3).map((data, id) => {
							const words = data.title.split(' ');
							const firstAndSecondWord = words.slice(0, 2).join(' ');
                            return (
                                <div className="col-lg-4 col-md-6 item" key={id}>
                                    <div className="services__three-single-service">
                                        <div className="services__three-single-service-icon">
                                        {data.icon} 
                                        </div>
                                        <div className="services__three-single-service-content">
                                            <h4>{firstAndSecondWord}</h4>
                                            <p>{data.des}</p>
                                            <Link href={`/services/${data.id}`} className="btn-three">Read More<i className="fas fa-chevron-right"></i></Link>
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

export default ServicesThree;