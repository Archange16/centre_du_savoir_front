import React, { useState } from 'react';

const FormArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Message envoyé avec succès !');
      } else {
        alert(data.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur réseau.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6 mb-30">
            <div className="contact__form-area-item">
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6 mb-30">
            <div className="contact__form-area-item">
              <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-12 mb-30">
            <div className="contact__form-area-item">
              <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact__two-right-form-item">
              <button className="btn-one" type="submit">Submit Now</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormArea;
