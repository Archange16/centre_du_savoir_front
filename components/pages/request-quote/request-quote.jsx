"use client"

import React, { useState } from 'react';

const RequestQuoteMain = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        services: [],
        message: ''
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            if (checked) {
                setFormData(prev => ({
                    ...prev,
                    services: [...prev.services, id]
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    services: prev.services.filter(service => service !== id)
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [id]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (res.ok) {
                alert('Demande envoyée avec succès !');
                // Reset le formulaire
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    website: '',
                    services: [],
                    message: ''
                });
            } else {
                alert(data.message || "Erreur lors de l'envoi.");
            }
        } catch (error) {
            console.error(error);
            alert("Erreur réseau.");
        }
    };

    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label htmlFor="firstName">Prénom *</label>
                            <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jean" required />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="lastName">Nom *</label>
                            <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Dupont" required />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">Adresse e-mail *</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="exemple@email.com" required />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="phone">Téléphone *</label>
                            <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder="+242 06 123 4567" required />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">Entreprise / Organisation</label>
                            <input type="text" id="company" value={formData.company} onChange={handleChange} placeholder="Nom de l'entreprise (facultatif)" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="website">Site web (si existant)</label>
                            <input type="text" id="website" value={formData.website} onChange={handleChange} placeholder="http://votresite.com" />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>Quels services vous intéressent ? *</span>
                        {["web-dev", "app-dev", "design", "digital-marketing", "ai"].map(service => (
                            <div className="request-quote__area-service-input-single" key={service}>
                                <input type="checkbox" id={service} checked={formData.services.includes(service)} onChange={handleChange} />
                                <label htmlFor={service}>
                                    {service === "web-dev" && "Création de site web"}
                                    {service === "app-dev" && "Développement d’application mobile"}
                                    {service === "design" && "Design graphique"}
                                    {service === "digital-marketing" && "Marketing digital"}
                                    {service === "ai" && "Intégration de solutions IA"}
                                </label>
                            </div>
                        ))}
                    </div>
                    <label htmlFor="message" className="mb-2">Message *</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Décrivez brièvement votre besoin ou votre projet..." required></textarea>
                    <input type="submit" value="Envoyer la demande" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
