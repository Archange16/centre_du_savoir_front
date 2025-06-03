import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const BlogThree = () => {
    return (
        <>
            <div className="blog__three section-padding">
                <div className="container">
                    <div className="row gy-4 justify-content-between align-items-end mb-60">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="blog__three-title">
                                <span className="subtitle-one">Blog And news</span>
                                <h2>Latest Trends in Tech <span className="highlighted-two">Explored</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 text-lg-end mt-lg-0 mt-40">
                            <div className="blog__three-title-btn">
                                <Link href="/blog" className="btn-one">View All<i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {blogData.slice(0, 2)?.map((data, id) => (
                            <div className="col-lg-6" key={id}>
                                <div className="blog__three-single-blog">
                                    <Link href={`/blog/${data.id}`} className="blog__three-single-blog-img">
                                        <img src={data.image.src} alt="blog" />
                                        <div className="blog__three-single-blog-img-date">
                                            <h5>{data.date}</h5>
                                            <span>dec</span>
                                        </div>
                                    </Link>
                                    <div className="blog__three-single-blog-content">
                                        <div className="blog__three-single-blog-content-top">
                                            <span><i className="far fa-user"></i>by Admin</span>
                                            <span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
                                        </div>
                                        <Link className="blog__three-single-blog-content-title" href={`/blog/${data.id}`}>{data.title}</Link>
                                        <Link className="btn-three" href={`/blog/${data.id}`}>Read More<i className="fas fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>    
        </>
    );
};

export default BlogThree;