import React, { useState } from 'react';

const FormSuiviProjet = () => {
  const [formData, setFormData] = useState({
    entreprise: '',
    gerant: '',
    email: '',
    telephone: '',
    description: ''
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
        setStatus({ success: true, message: 'Données envoyées avec succès !' });
        setFormData({
          entreprise: '',
          gerant: '',
          email: '',
          telephone: '',
          description: ''
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
        {/* Nom de l'entreprise */}
        <div className="col-md-12 mb-30">
          <input
            type="text"
            name="entreprise"
            placeholder="Nom de l'entreprise *"
            value={formData.entreprise}
            onChange={handleChange}
            required
          />
        </div>

        {/* Nom du Gérant/Directeur */}
        <div className="col-md-12 mb-30">
          <input
            type="text"
            name="gerant"
            placeholder="Nom du Gérant / Directeur *"
            value={formData.gerant}
            onChange={handleChange}
            required
          />
        </div>

        {/* Adresse email */}
        <div className="col-md-12 mb-30">
          <input
            type="email"
            name="email"
            placeholder="Adresse email *"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>

        {/* Téléphone / WhatsApp */}
        <div className="col-md-12 mb-30">
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone / WhatsApp *"
            value={formData.telephone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>

        {/* Description du projet */}
        <div className="col-md-12 mb-30">
          <textarea
            name="description"
            placeholder="Description du projet *"
            value={formData.description}
            onChange={handleChange}
            required
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
