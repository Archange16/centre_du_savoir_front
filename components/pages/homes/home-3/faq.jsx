import React, { useState } from 'react';
import Count from '../../common/count';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We specialize in a broad range of IT services, including software development, cloud services, cyber security, IT consulting, and tech support. Visit our Services page for detailed information."
        },
        {
            question: "How can I request a quote for my project?",
            answer: "Fill out the contact form on this page, providing as many details as possible about your project. A representative will be in touch within one business day to discuss your needs and provide a tailored quote."
        },
        {
            question: "What is your process for client inquiries?",
            answer: "We prioritize getting back to you quickly. After an inquiry is submitted, it'll be routed to the appropriate team, who will review your information and respond with the next steps or a request for further details."
        },
    ];
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
        <div className="faq__two section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="faq__two-title">
                            <span className="subtitle-one">Ask Question</span>
                            <h2>Unraveling IT <span className="highlighted-two">Complexities</span> FAQs</h2>
                            <p>Business consulting services can benefit your company  providing man or objective insights, identifying areas for improv  streamlining processes, developing strategies for grow</p>
                        </div>
                        <div className="award">
                            <div className="award-wrapper">
                                <div className="award-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="award-count">
                                    <h3 className="counter"><Count number={20}/></h3>
                                    <h3>+</h3>
                                </div>
                                <span>Winning award</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="faq-collapse">
                            {faqs.map((faq, index) => (
                                <div className="faq-collapse-item" key={index}>
                                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                            <h6>{faq.question}</h6>
                                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>	
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Faq;