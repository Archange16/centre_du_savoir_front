import { useState, useEffect } from 'react';
import { pushToDataLayer } from '../../../lib/tracking';
import Link from 'next/link';

import more_152529 from "../../../public/assets/img/formulaire-lead/more_152529.png";
import architecture_917572 from "../../../public/assets/img/formulaire-lead/architecture_917572.png";
import plumber_2350398 from "../../../public/assets/img/formulaire-lead/plumber_2350398.png";
import student_837825 from "../../../public/assets/img/formulaire-lead/student_837825.png";



// Configuration par défaut
const DEFAULT_FORM_NAME = 'CPF Génie Civil';
const FORMATIONS_LIST = [
  '⛏️ Exploitation minière',
  '🛣️ Infrastructures routières',
  '🌉 Ouvrages d\'art (ponts)',
  '📋 Formation en OPC',
  '📊 Gestion projets miniers',
  '🧱 Formation avancée en V.R.D',
  '🏗️ Structures et solidité des bâtiments',
  '🗺️ Cartographie géologique et topographique',
  '🚰 Maîtrise des réseaux eaux usées',
  '🧭 Projets 3D'
];

const SITUATION_OPTIONS = [
  { label: 'Ingénieur', icon: architecture_917572 },
  { label: 'Technicien', icon: plumber_2350398  },
  { label: 'Étudiant', icon: student_837825 },
  { label: 'Autre', icon: more_152529  },
];

export default function MultiStepForm({ 
  formName = process.env.NEXT_PUBLIC_FORM_NAME || DEFAULT_FORM_NAME 
}) {
  // États du formulaire
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    situation: '',
    formations: [],
    financement: '',
    nom: '',
    telephone: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 4,
    minutes: 21,
    seconds: 59
  });

  // Barre de progression
  const progressPercentage = (step / 4) * 100;

  // Compte à rebours
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = {...prev};
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Initialisation du tracking
  useEffect(() => {
    pushToDataLayer('form_view', { formName });
    pushToDataLayer('form_step_1', { formName });
  }, [formName]);

  // Track le changement d'étape
  useEffect(() => {
    if (step > 1) {
      pushToDataLayer(`form_step_${step}`, { formName });
    }
  }, [step, formName]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        formations: checked
          ? [...prev.formations, value]
          : prev.formations.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1 && !formData.situation) {
      newErrors.situation = 'Veuillez sélectionner une option';
    }
    
    if (currentStep === 2 && formData.formations.length === 0) {
      newErrors.formations = 'Veuillez sélectionner au moins une formation';
    }
    
    if (currentStep === 3 && !formData.financement) {
      newErrors.financement = 'Veuillez sélectionner une option';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation finale
    const finalErrors = {};
    if (!formData.nom) finalErrors.nom = 'Veuillez entrer votre nom';
    if (!formData.telephone || !/^[0-9]{10,15}$/.test(formData.telephone)) {
      finalErrors.telephone = 'Veuillez entrer un numéro valide';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      finalErrors.email = 'Veuillez entrer un email valide';
    }
    
    setErrors(finalErrors);
    if (Object.keys(finalErrors).length > 0) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formName, telephone: `${formData.indicatif}${formData.telephone}` }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        pushToDataLayer('form_submit', { 
          formName,
          formationsChoisies: formData.formations,
          financement: formData.financement,
          situation: formData.situation
        });
        setIsSuccess(true);
      } else {
        throw new Error(data.error || 'Une erreur est survenue lors de l’envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Composant Countdown
  const Countdown = () => (
    <div className="countdown-container mb-4 p-3 bg-light rounded">
      <h5 className="text-center mb-3">Prochaine session dans :</h5>
      <div className="d-flex justify-content-center text-center">
        <div className="mx-2">
          <div className="countdown-value bg-white p-2 rounded shadow-sm">{timeLeft.days}</div>
          <div className="countdown-label small mt-1">jours</div>
        </div>
        <div className="mx-2">
          <div className="countdown-value bg-white p-2 rounded shadow-sm">{timeLeft.hours}</div>
          <div className="countdown-label small mt-1">heures</div>
        </div>
        <div className="mx-2">
          <div className="countdown-value bg-white p-2 rounded shadow-sm">{timeLeft.minutes}</div>
          <div className="countdown-label small mt-1">minutes</div>
        </div>
        <div className="mx-2">
          <div className="countdown-value bg-white p-2 rounded shadow-sm">{timeLeft.seconds}</div>
          <div className="countdown-label small mt-1">secondes</div>
        </div>
      </div>
    </div>
  );

  // Affichage du message de succès
  if (isSuccess) {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-5">
                <h2>Formulaire complété, Bravo !</h2>
                <p>Nos experts formateurs vous appelleront sous 24-48h</p>
                <Link href="/" className="btn-one">Visitez notre site<i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Rendu du formulaire
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="form-container p-4 p-md-5">
            {/* En-tête avec titre et compte à rebours */}
            <div className="text-center mb-4">
              <h2 className="mb-3">Accélérez votre carrière grâce à nos formations en <span style={{ color: '#f39200' }}>Génie Civil</span> et <span style={{ color: '#f39200' }}>Géologie Minière</span></h2>
             <div className="row">
                <div className="col-md-12 text-center ">
                  <span className="" style={{
                    backgroundColor: '#198754',
                    color: '#ffffffff',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '20px'
                  }}>💶 À partir de 350 €</span>
                  <span 
                  style={{
                    backgroundColor: '#0f70b7',
                    color: '#ffffffff',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }} >✅ Certifiante</span>
                </div>
                <div className="col-md-12 text-center mt-3">
                      <span
                      style={{
                    backgroundColor: '#f39200',
                    color: '#ffffffff',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }} className="">💻 100% en ligne</span>
                  </div>
             </div>
            </div>
            
            {/* Barre de progression */}
            <div className="progress mb-4" style={{height: "10px"}}>
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{width: `${progressPercentage}%`,
                backgroundColor: '#f39200',}}
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Situation professionnelle */}
              <div className={`form-step ${step === 1 ? 'active' : ''}`}>
                <div className="mb-4">
                  <h4 className="form-label fw-bold">Quelle est votre situation professionnelle ? *</h4>
                  <div className="row g-3">
                    {SITUATION_OPTIONS.map(({ label, icon } ) => (
                      <div key={label} className="col-md-6">
                        <div className="form-check p-3 border rounded">
                          <label htmlFor={`situation-${label}`} className="form-check cursor-pointer"
                          style={{ cursor: 'pointer' }}>
                          <input
                            type="radio"
                            id={`situation-${label}`}
                            name="situation"
                            value={label}
                            checked={formData.situation === label}
                            onChange={handleChange}
                            className="form-check-input"
                            required
                          />
                          {/* Icône PNG devant chaque label */}
                          <img src={icon.src} width="30" height="30" className="me-5" alt="image" />
                            {label}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.situation && <div className="text-danger mt-2">{errors.situation}</div>}
                </div>
                
                <div className="d-flex justify-content-end">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    id="cta-step1"
                    onClick={nextStep}
                  >
                    Suivant
                  </button>
                </div>
              </div>
              
              {/* Étape 2: Formations d'intérêt */}
              <div className={`form-step ${step === 2 ? 'active' : ''}`}>
                <div className="mb-4">
                  <h4 className="form-label fw-bold">Laquelle de ces formations vous intéresse ? *</h4>
                  <div className="row g-3">
                    {FORMATIONS_LIST.map((formation) => (
                      <div key={formation} className="col-md-6">
                        <div className="form-check p-3 border rounded">
                           <label 
                            htmlFor={`formation-${formation.replace(/\s+/g, '-')}`} 
                            className="form-check-label ms-2 form-check cursor-pointer"
                            style={{ cursor: 'pointer' }}
                          >
                          <input
                            type="checkbox"
                            id={`formation-${formation.replace(/\s+/g, '-')}`}
                            name="formations"
                            value={formation}
                            checked={formData.formations.includes(formation)}
                            onChange={handleChange}
                            className="form-check-input"
                          />
                            {formation}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.formations && <div className="text-danger mt-2">{errors.formations}</div>}
                </div>
                
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    id="cta-prev-step2"
                    onClick={prevStep}
                  >
                    Précédent
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    id="cta-step2"
                    onClick={nextStep}
                  >
                    Suivant
                  </button>
                </div>
              </div>
              
              {/* Étape 3: Financement */}
              <div className={`form-step ${step === 3 ? 'active' : ''}`}>
                <div className="mb-4">
                  <h4 className="form-label fw-bold">Comment comptez-vous financer votre formation ? *</h4>
                  <div className="row g-3">
                    {['👤 Personnel',
                      '🏢 Entreprise',
                      '🏛️ Dispositif État/ONG',
                      '❓ À définir'].map((option) => (
                      <div key={option} className="col-md-6">
                        <div className="form-check p-3 border rounded">
                           <label htmlFor={`financement-${option}`} className="form-check-label ms-2 form-check cursor-pointer"
                            style={{ cursor: 'pointer' }}>
                          <input
                            type="radio"
                            id={`financement-${option}`}
                            name="financement"
                            value={option}
                            checked={formData.financement === option}
                            onChange={handleChange}
                            className="form-check-input"
                            required
                          />
                            {option}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.financement && <div className="text-danger mt-2">{errors.financement}</div>}
                </div>
                
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    id="cta-prev-step3"
                    onClick={prevStep}
                  >
                    Précédent
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    id="cta-step3"
                    onClick={nextStep}
                  >
                    Suivant
                  </button>
                </div>
              </div>
              
              {/* Étape 4: Coordonnées */}
              <div className={`form-step ${step === 4 ? 'active' : ''}`}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label fw-bold">Nom complet *</label>
                  <input
                    type="text"
                    id="nom-field"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                    required
                  />
                  {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                </div>
                
                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label fw-bold">Numéro de téléphone *</label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      style={{ maxWidth: '120px' }}
                      name="indicatif"
                      value={formData.indicatif || '+225'}
                      onChange={(e) => setFormData(prev => ({ ...prev, indicatif: e.target.value }))}
                      required
                    >
                      <option value="">Indicatif</option>
                      <option value="+225">🇨🇮 +225</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+237">🇨🇲 +237</option>
                      <option value="+221">🇸🇳 +221</option>
                       <option value="+212">🇲🇦 +212</option>
                      {/* Ajoute d'autres pays si besoin */}
                    </select>
                    <input
                      type="tel"
                      id="telephone-field"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                      placeholder="Ex: 0700000000"
                      required
                    />
                  </div>
                  {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Email *</label>
                  <input
                    type="email"
                    id="email-field"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                
                {errors.submit && (
                  <div className="alert alert-danger">
                    {errors.submit}
                  </div>
                )}
                
                <div className="d-flex justify-content-between">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary"
                    id="cta-prev-step4"
                    onClick={prevStep}
                  >
                    Précédent
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-success"
                    id="cta-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Envoi en cours...
                      </>
                    ) : 'Envoyer la demande'}
                  </button>
                </div>
              </div>
            </form>

            {/* Pied de page avec info prix et compte à rebours */}
            <div className="mt-4 pt-3 border-top">
               <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}