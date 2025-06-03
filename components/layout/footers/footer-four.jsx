import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import servicesData from "@/components/data/services-data";

const FooterFour = () => {
    return (
        <>
		<div className="footer__four">
			<div className="container">
				<div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__four-widget">
							<h4>Quick Link</h4>
							<div className="footer__four-widget-solution">
								<ul>
									<li><Link href="https://www.facebook.com"><i className="fab fa-facebook"></i>Facebook</Link></li>
									<li><Link href="https://www.twitter.com"><i className="fab fa-twitter"></i>Twitter</Link></li>
									<li><Link href="https://www.linkedin.com"><i className="fab fa-linkedin"></i>Linkedin</Link></li>
									<li><Link href="https://www.pinterest.com"><i className="fab fa-pinterest"></i>Pinterest</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__four-widget">
							<h4>Services</h4>
							<div className="footer__four-widget-solution">
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
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__four-widget">
							<h4>Quick Links</h4>
							<div className="footer__four-widget-solution">
								<ul>
									<li><Link href="/services"><i className="far fa-chevron-double-right"></i>Service</Link></li>
									<li><Link href="/faq"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
									<li><Link href="/testimonial"><i className="far fa-chevron-double-right"></i>Testimonial</Link></li>
									<li><Link href="/about"><i className="far fa-chevron-double-right"></i>About Us</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
						<div className="footer__four-widget">
							<div className="footer__four-widget-about">
								<Link href="/"><img src={logo.src} alt="image" /></Link>
								<p>Financial planners help people to gain knowledge about</p>
								<form action="#">
									<input type="text" name="email" placeholder="Your e-mail" required="" />
									<button type="submit"><i className="fas fa-paper-plane"></i></button>
								 </form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__one">
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

export default FooterFour;