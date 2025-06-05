import Link from 'next/link';

const TabContent = () => {
    return (
        <>
            <div className="skill__two-tab-details-content">
                <h2>🎓 Formations certifiantes reconnues</h2>
                <p>Des programmes conçus selon les standards internationaux, validés par des organismes officiels, pour garantir la qualité et la reconnaissance de vos compétences à l’échelle mondiale.</p>
                <div className="skill__two-tab-details-content-service">
                    <div className="skill__two-tab-details-content-service-left">
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Certifications conformes aux normes ISO et internationales</span>
                        </div>
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Reconnaissance par les employeurs et institutions</span>
                        </div>
                    </div>
                    <div className="skill__two-tab-details-content-service-right">
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Contenus actualisés selon les évolutions du secteur</span>
                        </div>
                        <div className="service">
                            <i className="far fa-check-circle"></i>
                            <span>Valeur ajoutée sur le CV et dans votre parcours professionnel</span>
                        </div>
                    </div>
                </div>
                <Link href="/categories" className="btn-one">Voir les Formations
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>            
        </>
    );
};

export default TabContent;