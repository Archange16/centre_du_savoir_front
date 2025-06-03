import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial-2.webp";
import quoteIcon from "../../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const TestimonialTwo = () => {
    const slideControl = {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    };

    return (
        <>
            <div className="testimonial__two section-padding">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-7 col-lg-6 col-md-7">
                            <div className="testimonial__two-title">
                                <span className="subtitle-one">Avis & Témoignages</span>
                                <h2>Expériences Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial__two-left" style={{ backgroundImage: `url(${testimonialBg.src})` }}></div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial__two-right">
                                <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Alexandre M.</h4>
                                                    <span>Directeur Technique</span>
                                                </div>
                                            </div>
                                            <p>“Le service de conseil en stratégie IT nous a permis de rationaliser nos processus internes et d'améliorer la gestion de nos données. Une solution sur mesure qui a réellement fait la différence.”</p>
                                            <div className="single-slider-user-rating mt-30">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star not-rated"></i>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Sarah K.</h4>
                                                    <span>Chef de Projet Digital</span>
                                                </div>
                                            </div>
                                            <p>“La création de notre site web par l'équipe a été un véritable succès. Le design est moderne, la navigation est fluide, et nous avons observé une augmentation significative du trafic.”</p>
                                            <div className="single-slider-user-rating mt-30">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star not-rated"></i>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Jean P.</h4>
                                                    <span>Responsable Support IT</span>
                                                </div>
                                            </div>
                                            <p>“Le support IT que nous avons reçu a été au-delà de nos attentes. Grâce à leur réactivité, nos systèmes sont toujours performants et sécurisés.”</p>
                                            <div className="single-slider-user-rating mt-30">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="testimonial__two-right-bottom">
                                    <div className="slider-arrow">
                                        <i className="swiper-button-prev fas fa-arrow-left"></i>
                                        <i className="swiper-button-next fas fa-arrow-right"></i>
                                    </div>
                                    <div className="slider-quote">
                                        <img src={quoteIcon.src} alt="image" />
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

export default TestimonialTwo;
