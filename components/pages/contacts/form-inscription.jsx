import React, { useState } from 'react';

const FormInscription = (service) => {
  const [formData, setFormData] = useState({
    titre: service.service?.titre.titre || 'Préinscription en ligne',
    prix: service.service?.titre.prix,
    civilite: '',
    nom: '',
    autreTel: '',
    email: '',
    ville: '',
    pays: '',
    diplome: '',
    poste: '',
    etablissement: '',
    motivations: [],
    autresMotivations: '',
    message: '',
    consentement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'motivations') {
      const newMotivations = checked
        ? [...formData.motivations, value]
        : formData.motivations.filter((mot) => mot !== value);
      setFormData({ ...formData, motivations: newMotivations });
    } else if (type === 'checkbox' && name === 'consentement') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/preinscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Préinscription envoyée avec succès !');
      } else {
        alert(data.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Civilité */}
        <div className="col-md-12 mb-30">
          <label>Civilité :</label><br />
          <label><input type="radio" name="civilite" value="Mlle" onChange={handleChange} /> Mlle</label>{' '}
          <label><input type="radio" name="civilite" value="Mme" onChange={handleChange} /> Mme</label>{' '}
          <label><input type="radio" name="civilite" value="Mr" onChange={handleChange} /> Mr</label>
        </div>

        {/* Nom et prénom */}
        <div className="col-md-6 mb-30">
          <input type="text" name="nom" placeholder="Votre nom et prénom *" required value={formData.nom} onChange={handleChange} />
        </div>

        {/* Numéros de téléphone */}
  
        <div className="col-md-6 mb-30">
          <input type="tel" name="autreTel" placeholder="Autre n° de téléphone" value={formData.autreTel} onChange={handleChange} />
        </div>

        {/* Email */}
        <div className="col-md-6 mb-30">
          <input type="email" name="email" placeholder="Adresse Email *" required value={formData.email} onChange={handleChange} />
        </div>

        {/* Ville et Pays */}
        <div className="col-md-6 mb-30">
          <input type="text" name="ville" placeholder="Ville *" required value={formData.ville} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-30">
          <input type="text" name="pays" placeholder="Pays *" required value={formData.pays} onChange={handleChange} />
        </div>

        {/* Diplôme et Poste */}
        <div className="col-md-6 mb-30">
          <input type="text" name="diplome" placeholder="Dernier diplôme obtenu *" required value={formData.diplome} onChange={handleChange} />
        </div>
        <div className="col-md-6 mb-30">
          <input type="text" name="poste" placeholder="Fonction ou Poste actuel *" required value={formData.poste} onChange={handleChange} />
        </div>

        {/* Établissement */}
        <div className="col-md-6 mb-30">
          <input type="text" name="etablissement" placeholder="Établissement" value={formData.etablissement} onChange={handleChange} />
        </div>

        {/* Motivations */}
        <div className="col-md-12 mb-20">
          <label>Motivation(s) pour suivre cette formation :</label><br />
          <label><input type="checkbox" name="motivations" value="Améliorer mes compétences professionnelles" onChange={handleChange} /> Améliorer mes compétences professionnelles</label><br />
          <label><input type="checkbox" name="motivations" value="Accroître mes opportunités professionnelles" onChange={handleChange} /> Accroître mes opportunités professionnelles</label><br />
          <label><input type="checkbox" name="motivations" value="Me tenir à jour avec les avancées du domaine" onChange={handleChange} /> Me tenir à jour avec les avancées du domaine</label><br />
          <label><input type="checkbox" name="motivations" value="Autres" onChange={handleChange} /> Autres motivations...</label><br />
        </div>

        {/* Autres motivations */}
        {formData.motivations.includes("Autres") && (
          <div className="col-md-12 mb-30">
            <input type="text" name="autresMotivations" placeholder="Précisez vos autres motivations" value={formData.autresMotivations} onChange={handleChange} />
          </div>
        )}

        {/* Message */}
        <div className="col-md-12 mb-30">
          <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange}></textarea>
        </div>

        {/* Consentement */}
        <div className="col-md-12 mb-30">
          <label>
            <input type="checkbox" name="consentement" checked={formData.consentement} onChange={handleChange} />
            {' '}Oui, je souhaite recevoir des offres exclusives, des promotions et des informations sur les débuts de session.
          </label>
        </div>

        {/* Bouton */}
        <div className="col-md-12">
          <button type="submit" className="btn-one">Envoyer ma préinscription</button>
        </div>
      </div>
    </form>
  );
};

export default FormInscription;
