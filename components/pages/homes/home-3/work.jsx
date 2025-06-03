import React from 'react';
import workBg from "../../../../public/assets/img/shape/workprocess-four-shape.png";
import Link from 'next/link';

const Work = () => {
    return (
        <>
            <div className="work-process__four" style={{backgroundImage: `url(${workBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-xl-6 col-lg-7">
                            <div className="work-process__four-title">
                                <span className="subtitle-one">Work Process</span>
                                <h2>Behind the Screens of Our Workflow</h2>
                                <p>Delve into the core of our operations and discover the meticulous processes that power our successful</p>
                            </div>
                            <Link href="/contact" className="btn-one">get started
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <div className="call-us-box">
                                <div className="call-us-box-icon">
                                    <i className="flaticon-telephone-call"></i>
                                </div>
                                <div className="call-us-box-right">
                                    <span>CALL US ANYTIME</span>
                                    <Link href="tel:+02189340447">+021 89 340 447</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row gy-5">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-instagram"></i>
                                        <h3 className="work-process__four-single-item-number">01</h3>
                                        <h4>Idea Generation</h4>
                                        <p>Conceptualizing innovative solutions to meet IT project</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-imac-computer"></i>
                                        <h3 className="work-process__four-single-item-number">02</h3>
                                        <h4>Design Blueprint</h4>
                                        <p>Creating detailed project designs and frameworks</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-email"></i>
                                        <h3 className="work-process__four-single-item-number">03</h3>
                                        <h4>Development Phase</h4>
                                        <p>Executing the planned designs through coding, programming</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="flaticon-computer-mouse"></i>
                                        <h3 className="work-process__four-single-item-number">04</h3>
                                        <h4>Quality Assurance</h4>
                                        <p>Conducting rigorous testing to ensure the project quality</p>
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

export default Work;