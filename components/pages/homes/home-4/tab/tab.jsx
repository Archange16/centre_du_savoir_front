import React from 'react';
import TabContent from './tab-content';
import tablesData from '@/components/data/tab-contents';

const Tab = () => {
    return (
        <>
            <div className="skill__two section-padding">
                <div className="container">
                    <ul className="row nav mb-5 gy-4 justify-content-center">
                        <li className="nav-item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="skill__two-tab nav-link active" id="topic-1-tab" data-bs-toggle="pill" data-bs-target="#topic-1" role="button" aria-controls="topic-1">
                                <span>Formations reconnues</span>
                        </div>
                        </li>
                        <li className="nav-item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="skill__two-tab nav-link" id="topic-2-tab" data-bs-toggle="pill" data-bs-target="#topic-2" role="button" aria-controls="topic-2">
                                <span>Flexibilité</span>
                            </div>
                        </li>
                        <li className="nav-item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="skill__two-tab nav-link" id="topic-3-tab" data-bs-toggle="pill" data-bs-target="#topic-3" role="button" aria-controls="topic-3">
                                <span>Accompagnement personnalisé</span>
                            </div>
                        </li>
                        <li className="nav-item col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="skill__two-tab nav-link" id="topic-4-tab" data-bs-toggle="pill" data-bs-target="#topic-4" role="button" aria-controls="topic-4">
                                <span>Accès à une communauté</span>
                            </div>
                        </li>
                    </ul>
                    <div className="skill__two-tab-details tab-content">
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade show active" role="tabpanel" id="topic-1" aria-labelledby="topic-1-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent />
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade" role="tabpanel" id="topic-2" aria-labelledby="topic-2-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent />
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade" role="tabpanel" id="topic-3" aria-labelledby="topic-3-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent />
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center flex-wrap-reverse gy-4 tab-pane fade" role="tabpanel" id="topic-4" aria-labelledby="topic-4-tab">
                            <div className="col-xl-6 col-lg-7 col-md-9">
                                <TabContent />
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="skill__two-tab-details-image">
                                    <div className="skill__two-tab-details-image-wrapper">
                                        <img src="assets/img/skill/skill-two.png" alt="" className="image-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Tab;