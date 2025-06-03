import React, { useState } from 'react';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import Pagination from '../blog/pagination';
import blogData from '../../../data/blog-data';
import Link from 'next/link';


const BlogStandardMain = () => {
    const blogItemShow = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    const currentBlogItems = blogData.slice(startIndex, endIndex);
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="blog__sidebar dark_image section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="blog__sidebar-left">
                            {currentBlogItems?.map((data, id) => (
                                <div className="blog__sidebar-single-blog" key={id}>
                                    <div className="blog__sidebar-single-blog-img">
                                        <div className="blog__sidebar-single-blog-date">
                                            <span className="date">{data.date}</span>
                                            <span className="month">Mar</span>
                                        </div>
                                        <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                    </div>
                                    <div className="blog__sidebar-single-blog-content">
                                        <div className="blog__sidebar-single-blog-content-top">
                                            <span><i className="far fa-user"></i>by Admin</span>
                                            <span><i className="far fa-comment-dots"></i>Comments ({data.comment})</span>
                                        </div>
                                        <Link href={`/blog/${data.id}`} className="blog-heading">{data.title}</Link>
                                        <p>Web designing in a powerful way of just n professions, however, in a passion for a our Company. We hatendency to believe the idea that smart looking Technology is a broad category encompassing all aspects of information</p>
                                        <Link className="btn-one" href={`/blog/${data.id}`}>Read More<i className="fas fa-chevron-right"></i></Link> 
                                    </div>
                                </div>
                            ))}
                        </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        setCurrentPage={setCurrentPage}
                    />
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardMain;