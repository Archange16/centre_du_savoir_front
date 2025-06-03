import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const ServicesFour = () => {
    return (
        <>
            <div className="services__four section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center mb-50">
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <span className="subtitle-one">What We Do</span>
                            <h2>IT Digital Services</h2>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData?.slice(0, 4).map((data, id) => {
							const words = data.title.split(' ');
							const firstAndSecondWord = words.slice(0, 2).join(' ');
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                                    <div className="services__four-single-service">
                                        <div className="services__four-single-service-icon">
                                        {data.icon} 
                                        </div>
                                        <div className="services__four-single-service-content">
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

export default ServicesFour;