import blogData from '@/components/data/blog-data'; // Remplacer par des données spécifiques à ton projet
import Link from 'next/link';

const BlogTwo = () => {
    return (
        <div className="blog__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9">
                        <div className="blog__two-title">
                            <span className="subtitle-one">Blog & News</span>
                            <h2>Digital Transformation & IT Solutions</h2>
                        </div>
                    </div>
                </div>
                <div className="row dark_image">
                    {blogData.slice(0, 3)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__two-single-blog">
                                <div className="blog__two-single-blog-img">
                                    <div className="blog__two-single-blog-date">
                                        <span className="date">{data.date}</span>
                                        <span className="month">Apr</span>
                                    </div>
                                    <Link href={`/blog/${data.id}`}>
                                        <img src={data.image.src} alt="blog" />
                                    </Link>
                                </div>
                                <div className="blog__two-single-blog-content">
                                    <div className="blog__two-single-blog-content-top">
                                        <span><i className="far fa-user"></i>by Admin</span>
                                        <span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
                                    </div>
                                    <Link href={`/blog/${data.id}`} className="blog__two-single-blog-content-title">{data.title}</Link>
                                    <Link className="btn-three" href={`/blog/${data.id}`}>Read More<i className="fas fa-chevron-right"></i></Link> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTwo;
