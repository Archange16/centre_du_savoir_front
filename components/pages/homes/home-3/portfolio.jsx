import portfolioData from "@/components/data/portfolio-data";
import Link from "next/link";

const PortfolioThree = () => {
    return (
        <div className="portfolio__two section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="portfolio__two-title">
                            <span className="subtitle-one">Latest Portfolio</span>
                            <h2>Business Growth to Digital <span className="highlighted-two">Portfolios</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {portfolioData?.slice(0, 4)?.map((data, id) => (
                        <div className="col-lg-6" key={id}>
                            <div className="portfolio__two-single-item">
                                <div className="portfolio__two-single-item-img-wrapper">
                                    <img src={data.image.src} alt="image" />
                                </div>
                                <div className="portfolio__two-single-item-content">
                                    <div className="portfolio__two-single-item-content-left">
                                        <h3>{data.title}</h3>
                                        <p>{data.subtitle}</p>
                                    </div>
                                    <div className="portfolio__two-single-item-content-right">
                                        <Link href={`/portfolio/${data.id}`}><i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioThree;