"use client"

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import selectedFormation from '../../../components/data/services-data';


const RequestQuoteMain = () => {
    const params = useParams();
        const { id } = params;
        // Chercher le service correspondant dans la data
        const service = selectedFormation?.find((item) => item.slug === params.id);
      
        // Vérifier si le service existe
        if (!service) {
            return <div>Formulaire indisponible</div>;
        }

         function downloadFile() {
            const link = document.createElement('a');
            link.href = service.brochure; // Chemin relatif dans le dossier public
            link.download = 'monfichier.pdf'; // Nom du fichier lors du téléchargement
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }

           const [formData, setFormData] = useState({
            titre: service?.titre || 'Téléchargement de la plaquette',
            prix: service?.prix || '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            pays: '',
            experience: '',
            niveauEtudes: '',
            services: [],
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
      const res = await fetch('/api/brochure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Message envoyé avec succès !');
        downloadFile();
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
                            <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder="+212 78 02 23 487" required />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="pays">Pays</label>
                            <input type="text" id="pays" value={formData.company} onChange={handleChange} placeholder="pays" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="niveauEtudes">Niveau d'études</label><br />
                            <select
                                id="niveauEtudes"
                                name="niveauEtudes"
                                value={formData.niveauEtudes}
                                onChange={handleChange}
                            >
                                <option value="">-- Sélectionnez votre niveau --</option>
                                <option value="bac">Bac</option>
                                <option value="bac+1">Bac+1</option>
                                <option value="bac+2">Bac+2</option>
                                <option value="bac+3">Bac+3</option>
                                <option value="bac+4">Bac+4</option>
                                <option value="bac+5">Bac+5</option>
                                <option value="autre">Autre</option>
                            </select>
                            </div>
                            <div className="request-quote__area-input-field">
                            <label htmlFor="experience">Années d’expérience de travail</label>
                            <input
                                type="number"
                                id="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                placeholder="0"
                                min="0"
                            />
                            </div>
                    </div>
                    <input type="submit" value="Télécharger" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
