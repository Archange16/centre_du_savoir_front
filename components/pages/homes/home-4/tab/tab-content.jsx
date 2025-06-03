import Link from 'next/link';

const TabContent = () => {
    return (
        <>
            <div className="skill__two-tab-details-content">
                <h2>Comprehensive Digital Assistance</h2>
                <p>Streamline operations and enhance customer experience with our Digital assistance to efficient tech business management.</p>
                <div className="skill__two-tab-details-content-service">
                    <div className="skill__two-tab-details-content-service-left">
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Enhanced Security Features</span>
                        </div>
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Advanced Analytics Tools</span>
                        </div>
                    </div>
                    <div className="skill__two-tab-details-content-service-right">
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Intuitive User Interface</span>
                        </div>
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Real-Time Insights Delivery</span>
                        </div>
                    </div>
                </div>
                <Link href="/request-quote" className="btn-one">Request A Quote
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>            
        </>
    );
};

export default TabContent;