import React, { useState } from 'react';

const FormInscription = ({ service }) => {
  const { titre, prix } = service?.titre || {};

  const [formData, setFormData] = useState({
    titre: titre || 'Préinscription en ligne',
    prix: prix || '',
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
      const updated = checked
        ? [...formData.motivations, value]
        : formData.motivations.filter((mot) => mot !== value);
      setFormData({ ...formData, motivations: updated });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/preinscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Préinscription envoyée avec succès !');
      } else {
        alert(result.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
      alert('Erreur réseau.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">

        {/* Civilité */}
        <div className="col-md-12 mb-30">
          <label>Civilité :</label><br />
          {['Mlle', 'Mme', 'Mr'].map((civ) => (
            <label key={civ} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="civilite"
                value={civ}
                checked={formData.civilite === civ}
                onChange={handleChange}
              /> {civ}
            </label>
          ))}
        </div>

        {/* Nom et téléphone */}
        <div className="col-md-6 mb-30">
          <input type="text" name="nom" placeholder="Votre nom et prénom *" required value={formData.nom} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-30">
          <input type="tel" name="autreTel" placeholder="Autre n° de téléphone" value={formData.autreTel} onChange={handleChange} />
        </div>

        {/* Email */}
        <div className="col-md-6 mb-30">
          <input type="email" name="email" placeholder="Adresse Email *" required value={formData.email} onChange={handleChange} />
        </div>

        {/* Ville et pays */}
        <div className="col-md-6 mb-30">
          <input type="text" name="ville" placeholder="Ville *" required value={formData.ville} onChange={handleChange} />
        </div>

        <div className="col-md-6 mb-30">
          <input type="text" name="pays" placeholder="Pays *" required value={formData.pays} onChange={handleChange} />
        </div>

        {/* Diplôme et poste */}
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
          <label>Motivations pour suivre cette formation :</label><br />
          {[
            "Améliorer mes compétences professionnelles",
            "Accroître mes opportunités professionnelles",
            "Me tenir à jour avec les avancées du domaine",
            "Autres"
          ].map((mot) => (
            <div key={mot}>
              <label>
                <input
                  type="checkbox"
                  name="motivations"
                  value={mot}
                  checked={formData.motivations.includes(mot)}
                  onChange={handleChange}
                /> {mot}
              </label>
            </div>
          ))}
        </div>

        {/* Autres motivations */}
        {formData.motivations.includes("Autres") && (
          <div className="col-md-12 mb-30">
            <input
              type="text"
              name="autresMotivations"
              placeholder="Précisez vos autres motivations"
              value={formData.autresMotivations}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Message */}
        <div className="col-md-12 mb-30">
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Consentement */}
        <div className="col-md-12 mb-30">
          <label>
            <input
              type="checkbox"
              name="consentement"
              checked={formData.consentement}
              onChange={handleChange}
            /> Oui, je souhaite recevoir des offres exclusives, des promotions et des informations sur les débuts de session.
          </label>
        </div>

        {/* Bouton d’envoi */}
        <div className="col-md-12">
          <button type="submit" className="btn-one">
            Envoyer ma préinscription
          </button>
        </div>

      </div>
    </form>
  );
};

export default FormInscription;
