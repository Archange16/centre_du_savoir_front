import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";

const Testimonial = () => {
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
        <div className="testimonial__one section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-left" style={{ backgroundImage: `url(${testimonialBg.src})` }}>
                            <div className="testimonial__one-left-title">
                                <span className="subtitle-one">Témoignages d'apprenants</span>
                                <h2>Centre Professionnel du <span className="highlighted">Savoir</span></h2>
                                <Link href="/contact" className="btn-one">Nous contacter
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__one-right">
                            <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                                <SwiperSlide>
                                    <div className="single-slider">
                                        <div className="single-slider-user">
                                            <div className="single-slider-user-name">
                                                <h4>Ousmane Diallo</h4>
                                                <span>Technicien en génie civil</span>
                                            </div>
                                            <div className="single-slider-user-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <p>Grâce à la formation en génie civil du Centre Professionnel du Savoir, j’ai pu intégrer un cabinet d’ingénierie. Les formateurs sont compétents et le programme est très complet.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-slider">
                                        <div className="single-slider-user">
                                            <div className="single-slider-user-name">
                                                <h4>Fatoumata Koné</h4>
                                                <span>Étudiante en reconversion</span>
                                            </div>
                                            <div className="single-slider-user-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <p>La formation a transformé ma carrière. En quelques mois, j’ai acquis des compétences pratiques en dessin technique, béton armé et topographie. Je recommande vivement ce centre.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-slider">
                                        <div className="single-slider-user">
                                            <div className="single-slider-user-name">
                                                <h4>Mahamadou Traoré</h4>
                                                <span>Conducteur de travaux</span>
                                            </div>
                                            <div className="single-slider-user-rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <p>Le Centre Professionnel du Savoir m’a permis de valider mes acquis et d’évoluer dans mon entreprise. Le contenu est axé sur la pratique, ce qui est un vrai atout sur le terrain.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="testimonial__one-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
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

export default Testimonial;
