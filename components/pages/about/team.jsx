import teamData from '@/components/data/team-data';
import Link from 'next/link';

const Team = () => {
    return (
        <>
            <div className="team__two section-padding pt-0">
                <div className="container">
                    <div className="row justify-content-between align-items-end mb-60">
                        <div className="col-xl-6 col-lg-7 col-md-9 team__two-title">
                            <span className="subtitle-one">Our Team member</span>
                            <h2>Skilled Specialists</h2>
                        </div>
                        <div className="col-xl-3 col-lg-4 text-lg-end mt-lg-0 mt-3">
                            <Link href="/team" className="btn-one">See All Member<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {teamData?.slice(0, 3).map((data, id) => (
                            <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
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
                        ))};
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Team;