"use client";

import React, { useState } from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.webp";
import image2 from "../../../../public/assets/img/contact/contact-2.webp";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { placeholder, value } = e.target;

        if (placeholder.includes("Prénom")) {
            setFormData(prev => ({ ...prev, firstName: value }));
        } else if (placeholder.includes("Téléphone")) {
            setFormData(prev => ({ ...prev, phone: value }));
        } else if (placeholder.includes("E-mail")) {
            setFormData(prev => ({ ...prev, email: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact-accueil', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSuccessMessage('Votre message a été envoyé avec succès !');
                setFormData({ firstName: '', phone: '', email: '' });
            } else {
                setErrorMessage(data.message || "Erreur lors de l'envoi du message.");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("Erreur de connexion.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="contact__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-end gy-4 justify-content-between">
                        <div className="col-xl-6">
                            <div className="contact__one-title">
                                <span className="subtitle-one">Contactez-nous maintenant</span>
                                <h2>Nous façonnons votre avenir numérique</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="contact__one-form">
                                <div className="contact__one-form-top">
                                    <input 
                                        type="text" 
                                        placeholder="Votre Prénom..." 
                                        value={formData.firstName} 
                                        onChange={handleChange}
                                        required
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Votre Téléphone..." 
                                        value={formData.phone} 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="Votre E-mail..." 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    className="w-100" 
                                    required
                                />
                                <button type="submit" className="btn-two w-100" disabled={isSubmitting}>
                                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer maintenant'}
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                {successMessage && <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>}
                                {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
                            </form>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact__one-right">
                                <div className="row gy-4 align-items-end">
                                    <div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
                                        <img src={image1.src} alt="Solutions numériques" />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="contact__one-counter-img">
                                            <img src={image2.src} alt="Expertise et expérience" />
                                        </div>
                                        <div className="contact__one-counter">
                                            <div className="counter-only">
                                                <h3 className="counter"><Count number={10} /></h3>
                                                <h3>+</h3>
                                            </div>
                                            <span>années d'expérience dans les solutions numériques</span>
                                        </div>
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

export default ContactForm;
