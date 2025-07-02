import teamData from '@/components/data/team-data';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <div className="team__two section-padding">
                <div className="container">
                    <div className="row justify-content-between align-items-end mb-60">
                        <div className="col-xl-12 col-lg-7 col-md-9 team__two-title">
                            <span className="subtitle-one">Notre équipe</span>
                            <h2>Notre équipe</h2>
                            <p>Atteignez vos objectifs au Centre Professionnel du Savoir, formations 100 % en ligne</p>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {teamData?.slice(0, 4).map((data, id) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={id}>
                                <div className="team__two-team-item">
                                    <img src={data.image.src} alt="image" />
                                    <div className="team__two-team-item-content">
                                        <div className="member-name">
                                            <h3>{data.name}</h3>
                                            <span>{data.position}</span>
                                        </div>
                                        <div className="fas fa-share-alt share-link-wrapper">
                                            <div className="share-links">
                                                {data.social_link.map((social, id) => (
                                                    <Link className="inner-link" key={id} href={social.link} target={social.target}>{social.icon}</Link>
                                                ))}
                                            </div>
                                        </div>
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

export default Team;