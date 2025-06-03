import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-two.png";
import banner2 from "../../../../public/assets/img/banner/banner-two-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-two-3.png";
import shape1 from "../../../../public/assets/img/shape/banner-two-shape-2.png";
import shape2 from "../../../../public/assets/img/shape/banner-two-shape-3.png";
import shape3 from "../../../../public/assets/img/shape/banner-two-shape-4.png";
import shapeContent from "../../../../public/assets/img/shape/content.png";

const BannerTwo = () => {
	return (
		<>
			<div className="banner__two">
				<Swiper
					effect="fade"
					speed={2000}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						reverseDirection: false,
					}}
					modules={[Autoplay, EffectFade]}
				>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{ backgroundImage: `url(${banner1.src})` }}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape"><img src={shape1.src} alt="image" /></div>
								<div className="banner-two-shape-3 shape"><img src={shape2.src} alt="image" /></div>
								<div className="banner-two-shape-4 shape"><img src={shape3.src} alt="image" /></div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>Des solutions digitales sur-mesure</h2>
											<p>Nous aidons les entreprises et les particuliers à créer leur présence en ligne et à renforcer leur identité visuelle grâce à des services digitaux innovants.</p>
											<Link href="/contact" className="btn-two">Nous contacter<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="banner__two-single-slider" style={{ backgroundImage: `url(${banner2.src})` }}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape"><img src={shape1.src} alt="image" /></div>
								<div className="banner-two-shape-3 shape"><img src={shape2.src} alt="image" /></div>
								<div className="banner-two-shape-4 shape"><img src={shape3.src} alt="image" /></div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>Des services complets et professionnels</h2>
											<p>Sites web, apps mobiles, design graphique, marketing digital et intégration IA : nous couvrons tous les besoins digitaux de nos clients.</p>
											<Link href="/contact" className="btn-two">Demander un devis<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="banner__two-single-slider" style={{ backgroundImage: `url(${banner3.src})` }}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape"><img src={shape1.src} alt="image" /></div>
								<div className="banner-two-shape-3 shape"><img src={shape2.src} alt="image" /></div>
								<div className="banner-two-shape-4 shape"><img src={shape3.src} alt="image" /></div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-12">
										<div className="banner__two-content">
											<h2>PME, startups, indépendants, particuliers</h2>
											<p>Notre mission est d'accompagner tous les profils dans leur transformation digitale, avec des offres sur-mesure et des résultats concrets.</p>
											<Link href="/contact" className="btn-two">Commencez maintenant<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default BannerTwo;
