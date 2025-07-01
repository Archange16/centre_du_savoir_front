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

  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/preinscriptionsuivi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ success: true, message: 'Préinscription envoyée avec succès !' });
        setFormData({
          civilite: '',
          nom: '',
          autreTel: '',
          email: '',
          ville: '',
          pays: '',
          diplome: '',
          poste: '',
          etablissement: '',
          message: '',
        });
      } else {
        setStatus({ success: false, message: data.message || "Erreur lors de l'envoi." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: 'Erreur réseau.' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Civilité */}
        <div className="col-md-12 mb-30">
          <label className="form-label">Civilité :</label><br />
          {['Mlle', 'Mme', 'Mr'].map((civ) => (
            <label key={civ} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="civilite"
                value={civ}
                checked={formData.civilite === civ}
                onChange={handleChange}
                required
              />{' '}
              {civ}
            </label>
          ))}
        </div>

        {/* Nom et prénom */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom et prénom *"
            value={formData.nom}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        {/* Téléphone */}
        <div className="col-md-6 mb-30">
          <input
            type="tel"
            name="autreTel"
            placeholder="Téléphone"
            value={formData.autreTel}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>

        {/* Email */}
        <div className="col-md-6 mb-30">
          <input
            type="email"
            name="email"
            placeholder="Adresse Email *"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>

        {/* Ville */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="ville"
            placeholder="Ville *"
            value={formData.ville}
            onChange={handleChange}
            required
          />
        </div>

        {/* Pays */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="pays"
            placeholder="Pays *"
            value={formData.pays}
            onChange={handleChange}
            required
          />
        </div>

        {/* Diplôme */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="diplome"
            placeholder="Dernier diplôme obtenu *"
            value={formData.diplome}
            onChange={handleChange}
            required
          />
        </div>

        {/* Poste */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="poste"
            placeholder="Fonction ou Poste actuel *"
            value={formData.poste}
            onChange={handleChange}
            required
          />
        </div>

        {/* Établissement */}
        <div className="col-md-6 mb-30">
          <input
            type="text"
            name="etablissement"
            placeholder="Établissement"
            value={formData.etablissement}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="col-md-12 mb-30">
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Message de statut */}
        {status.message && (
          <div className={`col-md-12 mb-20 ${status.success ? 'text-success' : 'text-danger'}`}>
            {status.message}
          </div>
        )}

        {/* Bouton */}
        <div className="col-md-12">
          <button type="submit" className="btn-one">Envoyer</button>
        </div>
      </div>
    </form>
  );
};

export default FormSuiviProjet;
