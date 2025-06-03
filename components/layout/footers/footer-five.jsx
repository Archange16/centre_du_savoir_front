import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-1.png";
import subscribe from "../../../public/assets/img/subscribe/subscribe-three-shape.png";
import ctaBg from "../../../public/assets/img/subscribe/subscribe-three-bg.png";
import servicesData from "@/components/data/services-data";

const FooterFive = () => {
    return (
        <>
		<div className="subscribe__one three">
			<img src={subscribe.src} className="subscribe__three-shape" alt="image" />
			<div className="container">
				<div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg.src})`}}>
					<div className="col-xl-7 col-lg-8">
						<div className="subscribe__one-title">
							<h3>Join Our Newsletter</h3>
							<p>Don't miss out on the essential IT news and updates - join our newsletter community today!</p>
						</div>
						<form action="#" className="subscribe__one-form">
							<input type="email" placeholder="Enter Your Email" />
							<button className="btn-two" type="submit">subscribe now</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="footer__five">
			<div className="container pb-80">
				<div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
						<div className="footer__five-widget">
							<div className="footer__five-widget-about">
								<Link href="/"><img src={logo.src} alt="image" /></Link>
								<p>Financial planners help people to gain knowledge about</p>
								<div className="footer__five-widget-about-social">
									<Social />
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4 className="ml-60">Resources​</h4>
							<div className="footer__five-widget-solution ml-60">
								<ul>
									<li><Link href="/services"><i className="far fa-chevron-double-right"></i>Service</Link></li>
									<li><Link href="/faq"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
									<li><Link href="/testimonial"><i className="far fa-chevron-double-right"></i>Testimonial</Link></li>
									<li><Link href="/about"><i className="far fa-chevron-double-right"></i>About Us</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4>Service</h4>
							<div className="footer__five-widget-solution">
								<ul>
									{servicesData.slice(0, 4).map((data, id) => {
										const words = data.title.split(' ');
										const firstAndSecondWord = words.slice(0, 2).join(' ');
										return (
											<li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{firstAndSecondWord}</Link></li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
						<div className="footer__five-widget border-one">
							<h4>Contact</h4>
							<div className="footer__five-widget-location">
								<p>Call now for expert assistance with our software solutions</p>
								<div className="footer__five-widget-location-item">
									<div className="footer__five-widget-location-item-icon">
										<i className="flaticon-telephone-call"></i>
									</div>
									<div className="footer__five-widget-location-item-info email">
										<span>Make a call</span>
										<Link href="tel:+09(307)555-0133">+09 (307) 555-0133</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__one two">
				<div className="container">
					<div className="row justify-content-between copyright__one-container-area">
						<div className="col-xl-5 col-lg-6"> 
							<div className="copyright__one-left">
								<p>© ThemeOri  2024 | All Rights Reserved</p>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-right">
								<Link href="/about">Privacy Policy</Link>
								<Link href="/contact">Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default FooterFive;