import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import icon from '../../../../public/assets/img/icon/blog-details-quote.png';
import image from '../../../../public/assets/img/blog/blog-details.png';
import avatar1 from '../../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../../public/assets/img/avatar/avatar-3.jpg';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-8">
                        <div className="blog__details-thumb">
                            <span className="date">{singleData.date} September 2024</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                            </div>
                        <div className="blog__details-content">
                            <div className="blog__details-content-top">
                                <span>
                                    <i className="far fa-user"></i>
                                    by Admin
                                </span>
                                <span>
                                    <i className="far fa-folder-open"></i>
                                    Category
                                </span>
                                <span>
                                    <i className="far fa-comments"></i>
                                    Comments (05)
                                </span>
                            </div>
                            <h2>Transforming businesses through technology</h2>
                            <p>IT Technology is a broad category encompassing all aspects of information the a technology and the application of technology in various industries IT Technology is a broad category encompas aspects of information IT Technology is a broad category encompassing all aspects</p>
                            <p>IT Technology is a broad category encompassing all aspects of information the a technology and the application of technology in various industries IT  is a broad category </p>
                            <div className="blog__details-quote">
                                <div className="blog__details-quote-top">
                                    <div className="blog__details-quote-avatar">
                                        <div className="blog__details-quote-avatar-wrapper">
                                            <img src={avatar1.src} alt="image" />
                                        </div>
                                        <h4>Mark wood</h4>
                                    </div>
                                    <div className="blog__details-quote-icon">
                                        <img src={icon.src} alt="image" />
                                    </div>
                                </div>
                                <div className="blog__details-quote-content">
                                    <p>Real estate is a lucrative industry that involves the buying selling and renting properties It the encompasses residential commercial and industrial properties. Real estate agents play a  and crucial role in facilitating at transactions and helping commercial, and industrial</p>
                                </div>
                            </div>
                            <h2>Showcase your talent with our portfolio</h2>
                            <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra  Aliquam justo a posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper </p>
                            <p>IT Technology is a broad category encompassing all aspects of information the a technology and the application of technology in various industries IT Technology is a broad category encompas aspects of information IT Technology is a broad category encompassing all aspects</p>
                            <div className="blog__details-portfolio">
                                <div className="blog__details-portfolio-left"> 
                                    <img src={image.src} alt="image" />
                                </div>
                                <ul className="blog__details-portfolio-middle">
                                    <li> 
                                        <i className="fas fa-check-circle"></i>
                                        Data Analytics Consulting
                                    </li>
                                    <li> 
                                        <i className="fas fa-check-circle"></i>
                                        Mobile App Development Services
                                    </li>
                                    <li> 
                                        <i className="fas fa-check-circle"></i>
                                        IT Project Management Services
                                    </li>
                                </ul>
                                <div className="blog__details-portfolio-right">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                            <p>IT Technology is a broad category encompassing all aspects of information the a technology and the application of technology in various industries IT Technology is a broad category encompas aspects of information IT Technology is a broad category encompassing</p>
                        </div>
                        <div className="blog__details-pagination">
                            <div className="blog__details-pagination-btn blog__details-pagination-prev">
                                <Link href="/blog/software-development-agility-a-primer" className="pagination-btn">
                                    <i className="fas fa-arrow-left"></i>
                                </Link>
                                <div className="blog__details-pagination-text">
                                    <span>Previous post</span>
                                    <span>Insure your peace of mind</span>
                                </div>
                            </div>
                            <div className="blog__details-pagination-btn blog__details-pagination-next">
                                <div className="blog__details-pagination-text">
                                    <span>Next post</span>
                                    <span>Coverage you can count on</span>
                                </div>
                                <Link href="/blog/cloud-computing-solutions-for-business" className="pagination-btn">
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="blog__details-comments">
                            <h3>3 Comment</h3>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar2.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Stanio lainto</h5>
                                        <span>February 16, 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar3.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Court Henry</h5>
                                        <span>February 16, 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="blog__details-comment-form">
                            <h3>Leave a comment</h3>
                            <p>By using form u agree with the message sorage, you can contact us directly now By using form agree with the message sorage, you can contact us directly now</p>
                            <input type="text" placeholder="Name" />
                            <textarea placeholder="Message here..."></textarea>
                            <input type="submit" value="Sent Message" />
                        </form>
                    </div>
                    <div className="col-xl-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default BlogSingleMain;