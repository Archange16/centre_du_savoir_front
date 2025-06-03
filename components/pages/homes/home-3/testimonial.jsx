import React from 'react';
import testimonial from "../../../../public/assets/img/testimonial/testimonial-two.png";
import image from "../../../../public/assets/img/testimonial/testimonial-quote-two.png";

const TestimonialThree = () => {
    return (
        <div className="testimonial__three section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                        <div className="testimonial__three-title">
                            <span className="subtitle-one">Client Testimonial</span>
                            <h2>Enhance productivity with IT <span className="highlighted-two">expertise</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div className="testimonial__three-left" style={{backgroundImage: `url(${testimonial.src})`}}></div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial__three-right">
                            <div className="testimonial__three-slider">
                                <div className="swiper-wrapper">
                                    <div className="single-slider">
                                        <div className="single-slider-top">
                                            <img src={image.src} alt="image" />
                                            <div className="single-slider-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star not-rated"></i>
                                            </div>
                                        </div>
                                        <p>Their product exceeded his my ro expectationsa  The the quality and attention to  moutstandin an  and it has become an essential active</p>
                                        <div className="single-slider-user">
                                            <div className="single-slider-user-img">
                                                <img src="assets/img/testimonial/user-pic.png" alt="image" />
                                            </div>
                                            <div className="single-slider-user-name">
                                                <h4>Nasir Al Shakib </h4>
                                                <span>Content Creator</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialThree;