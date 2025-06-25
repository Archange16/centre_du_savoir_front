import React, { useState } from 'react';

const FormSuiviProjet = () => {
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    autreTel: '',
    email: '',
    ville: '',
    pays: '',
    diplome: '',
    poste: '',
    etablissement: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    /* if (name === 'motivations') {
      const newMotivations = checked
        ? [...formData.motivations, value]
        : formData.motivations.filter((mot) => mot !== value);
      setFormData({ ...formData, motivations: newMotivations });
    } else if (type === 'checkbox' && name === 'consentement') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    } */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/preinscriptionsuivi', {
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
          <input type="tel" name="autreTel" placeholder="Téléphone" value={formData.autreTel} onChange={handleChange} />
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

        {/* Message */}
        <div className="col-md-12 mb-30">
          <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange}></textarea>
        </div>

        {/* Bouton */}
        <div className="col-md-12">
          <button type="submit" className="btn-one">Envoyer</button>
        </div>
      </div>
    </form>
  );
};

export default FormSuiviProjet;
