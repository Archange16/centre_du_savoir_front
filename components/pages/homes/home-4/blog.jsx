import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const BlogFour = () => {
    return (        
        <div className="blog__four section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9">
                        <div className="blog__four-title">
                            <span className="subtitle-one">Blog And news</span>
                            <h2>Cloud productivity IT expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__four-single-blog">
                                <div className="blog__four-single-blog-img">
                                    <span className="blog__four-single-blog-date">{data.date} Mar</span>
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                </div>
                                <div className="blog__four-single-blog-content">
                                    <div className="blog__four-single-blog-content-top">
                                        <span><i className="far fa-user"></i>by Admin</span>
                                        <span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
                                    </div>
                                    <Link className="blog__four-single-blog-content-title" href={`/blog/${data.id}`}>{data.title}</Link>
                                    <Link className="btn-one" href={`/blog/${data.id}`}>Read More<i className="fas fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogFour;