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
  '🌉 Formation ouvrages d’art (ponts)',
  '⛏️ Exploitation minière à ciel ouvert',
  '🛣️ Conception et réalisation des infrastructures routières avancées (route)',
  '🗺️ Cartographie géologique et topographique avancée',
  '🏗️ Calcul des structures et solidité des bâtiments',
  '📋 OPC : Pilotage et Planification BTP',
  '🧱 Formation avancée en V.R.D (Voirie urbaine)',
  '🚰 Assainissement (Maîtrise des réseaux eaux usées et pluviales)',
  '📊 Gestion intégrée des projets miniers',
  '🧊 Modélisation 3D (Géologie minière)'
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
    if (!formData.telephone || !/^[0-9]{9,15}$/.test(formData.telephone)) {
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
              <h2 className="mb-3 accroche">Accélérez votre carrière grâce à nos formations en <span style={{ color: '#f39200' }}>Génie Civil</span> et <span style={{ color: '#f39200' }}>Géologie Minière</span></h2>
             <div className="row">
                <div className="col-md-12  text-center ">
                  <span className="col-md-5" style={{
                    backgroundColor: '#198754',
                    color: '#ffffffff',
                    borderRadius: '50px',
                    padding: '10px 10px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    marginRight: '20px'
                  }}>💶 À partir de 490 €</span>
                  <span 
                  className='col-md-5'
                  style={{
                    backgroundColor: '#0f70b7',
                    color: '#ffffffff',
                    borderRadius: '50px',
                    padding: '10px 10px',
                    display: 'inline-block',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
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
                    fontSize: '1rem'
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
                  <label htmlFor="telephone" className="form-label fw-bold">Numéro de whatsapp *</label>
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
                      <option value="+229">🇧🇯 +229 (Bénin)</option>
                      <option value="+226">🇧🇫 +226 (Burkina Faso)</option>
                      <option value="+238">🇨🇻 +238 (Cap‑Vert)</option>
                      <option value="+225">🇨🇮 +225 (Côte d’Ivoire)</option>
                      <option value="+220">🇬🇲 +220 (Gambie)</option>
                      <option value="+233">🇬🇭 +233 (Ghana)</option>
                      <option value="+224">🇬🇳 +224 (Guinée)</option>
                      <option value="+245">🇬🇼 +245 (Guinée‑Bissau)</option>
                      <option value="+231">🇱🇷 +231 (Libéria)</option>
                      <option value="+223">🇲🇱 +223 (Mali)</option>
                      <option value="+227">🇳🇪 +227 (Niger)</option>
                      <option value="+234">🇳🇬 +234 (Nigéria)</option>
                      <option value="+221">🇸🇳 +221 (Sénégal)</option>
                      <option value="+232">🇸🇱 +232 (Sierra Leone)</option>
                      <option value="+228">🇹🇬 +228 (Togo)</option>
                      <option value="+290">🇸🇭 +290 (Sainte‑Hélène / Ascension / Tristan da Cunha)</option>
                      <option value="+213">🇩🇿 +213 (Algérie)</option>
                      <option value="+20">🇪🇬 +20 (Égypte)</option>
                      <option value="+218">🇱🇾 +218 (Libye)</option>
                      <option value="+222">🇲🇷 +222 (Mauritanie)</option>
                      <option value="+212">🇲🇦 +212 (Maroc)</option>
                      <option value="+249">🇸🇩 +249 (Soudan)</option>
                      <option value="+216">🇹🇳 +216 (Tunisie)</option>
                      <option value="+244">🇦🇴 +244 (Angola)</option>
                      <option value="+237">🇨🇲 +237 (Cameroun)</option>
                      <option value="+236">🇫🇷 +236 (République centrafricaine)</option>
                      <option value="+235">🇹🇩 +235 (Tchad)</option>
                      <option value="+242">🇨🇬 +242 (République du Congo)</option>
                      <option value="+243">🇨🇩 +243 (République démocratique du Congo)</option>
                      <option value="+240">🇬🇶 +240 (Guinée équatoriale)</option>
                      <option value="+241">🇬🇦 +241 (Gabon)</option>
                      <option value="+239">🇸🇹 +239 (São Tomé‑et‑Principe)</option>
                      <option value="+257">🇧🇮 +257 (Burundi)</option>
                      <option value="+269">🇰🇲 +269 (Comores)</option>
                      <option value="+253">🇩🇯 +253 (Djibouti)</option>
                      <option value="+291">🇪🇷 +291 (Érythrée)</option>
                      <option value="+251">🇪🇹 +251 (Éthiopie)</option>
                      <option value="+252">🇸🇴 +252 (Somalie)</option>
                      <option value="+254">🇰🇪 +254 (Kenya)</option>
                      <option value="+261">🇲🇬 +261 (Madagascar)</option>
                      <option value="+265">🇲🇼 +265 (Malawi)</option>
                      <option value="+230">🇲🇺 +230 (Maurice)</option>
                      <option value="+258">🇲🇿 +258 (Mozambique)</option>
                      <option value="+250">🇷🇼 +250 (Rwanda)</option>
                      <option value="+248">🇸🇨 +248 (Seychelles)</option>
                      <option value="+255">🇹🇿 +255 (Tanzanie)</option>
                      <option value="+256">🇺🇬 +256 (Ouganda)</option>
                      <option value="+260">🇿🇲 +260 (Zambie)</option>
                      <option value="+263">🇿🇼 +263 (Zimbabwe)</option>
                      <option value="+211">🇸🇸 +211 (Soudan du Sud)</option>
                      <option value="+267">🇧🇼 +267 (Botswana)</option>
                      <option value="+266">🇱🇸 +266 (Lesotho)</option>
                      <option value="+264">🇳🇦 +264 (Namibie)</option>
                      <option value="+27">🇿🇦 +27 (Afrique du Sud)</option>
                      <option value="+268">🇸🇿 +268 (Eswatini)</option>
                      <option value="+230">🇲🇺 +230 (Maurice)</option>
                      <option value="+33">🇫🇷 +33 (France)</option>
                      <option value="+32">🇧🇪 +32 (Belgique)</option>
                      <option value="+31">🇳🇱 +31 (Pays‑Bas)</option>
                      <option value="+350">🇬🇮 +350 (Gibraltar)</option>
                      <option value="+353">🇮🇪 +353 (Irlande)</option>
                      <option value="+351">🇵🇹 +351 (Portugal)</option>
                      <option value="+352">🇱🇺 +352 (Luxembourg)</option>
                      <option value="+356">🇲🇹 +356 (Malte)</option>
                      <option value="+30">🇬🇷 +30 (Grèce)</option>
                      <option value="+34">🇪🇸 +34 (Espagne)</option>
                      <option value="+39">🇮🇹 +39 (Italie)</option>
                      <option value="+378">🇸🇲 +378 (Saint‑Marin)</option>
                      <option value="+36">🇭🇺 +36 (Hongrie)</option>
                      <option value="+43">🇦🇹 +43 (Autriche)</option>
                      <option value="+44">🇬🇧 +44 (Royaume‑Uni)</option>
                      <option value="+45">🇩🇰 +45 (Danemark)</option>
                      <option value="+46">🇸🇪 +46 (Suède)</option>
                      <option value="+47">🇳🇴 +47 (Norvège)</option>
                      <option value="+48">🇵🇱 +48 (Pologne)</option>
                      <option value="+40">🇷🇴 +40 (Roumanie)</option>
                      <option value="+41">🇨🇭 +41 (Suisse)</option>
                      <option value="+370">🇱🇹 +370 (Lituanie)</option>
                      <option value="+371">🇱🇻 +371 (Lettonie)</option>
                      <option value="+372">🇪🇪 +372 (Estonie)</option>
                      <option value="+420">🇨🇿 +420 (République tchèque)</option>
                      <option value="+421">🇸🇰 +421 (Slovaquie)</option>
                      <option value="+385">🇭🇷 +385 (Croatie)</option>
                      <option value="+386">🇸🇮 +386 (Slovénie)</option>
                      <option value="+387">🇧🇦 +387 (Bosnie‑Herzégovine)</option>
                      <option value="+389">🇲🇰 +389 (Nord‑Macédoine)</option>
                      <option value="+381">🇷🇸 +381 (Serbie)</option>
                      <option value="+382">🇲🇪 +382 (Monténégro)</option>
                      <option value="+383">🇽🇰 +383 (Kosovo)</option>
                      <option value="+373">🇲🇩 +373 (Moldavie)</option>
                      <option value="+380">🇺🇦 +380 (Ukraine)</option>
                      <option value="+7">🇷🇺 +7 (Russie)</option>
                      <option value="+374">🇦🇲 +374 (Arménie)</option>
                      <option value="+375">🇧🇾 +375 (Biélorussie)</option>
                      <option value="+995">🇬🇪 +995 (Géorgie)</option>
                      <option value="+1">🇺🇸/🇨🇦 +1 (États-Unis, Canada, etc.)</option>
                      <option value="+1-242">🇧🇸 +1‑242 (Bahamas)</option>
                      <option value="+1-246">🇧🇧 +1‑246 (Barbade)</option>
                      <option value="+1-264">🇦🇮 +1‑264 (Anguilla)</option>
                      <option value="+1-268">🇦🇬 +1‑268 (Antigua-et-Barbuda)</option>
                      <option value="+1-284">🇻🇬 +1‑284 (Îles Vierges britanniques)</option>
                      <option value="+1-345">🇰🇾 +1‑345 (Caïmans)</option>
                      <option value="+1-441">🇧🇲 +1‑441 (Bermudes)</option>
                      <option value="+1-473">🇬🇩 +1‑473 (Grenade)</option>
                      <option value="+1-658, +1-876">🇯🇲 +1‑658 / +1‑876 (Jamaïque)</option>
                      <option value="+1-664">🇲🇸 +1‑664 (Montserrat)</option>
                      <option value="+1-721">🇸🇽 +1‑721 (Sint Maarten)</option>
                      <option value="+1-758">🇱🇨 +1‑758 (Sainte‑Lucie)</option>
                      <option value="+1-767">🇩🇲 +1‑767 (Dominique)</option>
                      <option value="+1-784">🇻🇨 +1‑784 (Saint‑Vincent‑et‑les‑Grenadines)</option>
                      <option value="+1-809, +1-829, +1-849">🇩🇴 +1‑809 / +1‑829 / +1‑849 (République dominicaine)</option>
                      <option value="+1-868">🇹🇹 +1‑868 (Trinité‑et‑Tobago)</option>
                      <option value="+1-649">🇹🇨 +1‑649 (Turks‑et‑Caicos)</option>
                      <option value="+1-340">🇻🇮 +1‑340 (Îles Vierges US)</option>
                      <option value="+297">🇦🇼 +297 (Aruba)</option>
                      <option value="+299">🇬🇱 +299 (Groenland)</option>
                      <option value="+501">🇧🇿 +501 (Belize)</option>
                      <option value="+502">🇬🇹 +502 (Guatemala)</option>
                      <option value="+503">🇸🇻 +503 (El Salvador)</option>
                      <option value="+504">🇭🇳 +504 (Honduras)</option>
                      <option value="+505">🇳🇮 +505 (Nicaragua)</option>
                      <option value="+506">🇨🇷 +506 (Costa Rica)</option>
                      <option value="+507">🇵🇦 +507 (Panama)</option>
                      <option value="+590">🇬🇫/🇧🇱/🇲🇫 +590 (Guadeloupe, Saint‑Barthélemy, Saint‑Martin)</option>
                      <option value="+54">🇦🇷 +54 (Argentine)</option>
                      <option value="+55">🇧🇷 +55 (Brésil)</option>
                      <option value="+56">🇨🇱 +56 (Chili)</option>
                      <option value="+57">🇨🇴 +57 (Colombie)</option>
                      <option value="+58">🇻🇪 +58 (Venezuela)</option>
                      <option value="+591">🇧🇴 +591 (Bolivie)</option>
                      <option value="+592">🇬🇾 +592 (Guyana)</option>
                      <option value="+593">🇪🇨 +593 (Équateur)</option>
                      <option value="+594">🇬🇵 +594 (Guyane française)</option>
                      <option value="+595">🇵🇾 +595 (Paraguay)</option>
                      <option value="+596">🇲🇶 +596 (Martinique)</option>
                      <option value="+597">🇸🇷 +597 (Suriname)</option>
                      <option value="+598">🇺🇾 +598 (Uruguay)</option>
                      <option value="+500">🇫🇰 +500 (Îles Falkland / Géorgie du Sud et Sandwich du Sud)</option>
                      <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                      <option value="+374">🇦🇲 +374 (Arménie)</option>
                      <option value="+994">🇦🇿 +994 (Azerbaïdjan)</option>
                      <option value="+973">🇧🇭 +973 (Bahreïn)</option>
                      <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                      <option value="+975">🇧🇹 +975 (Bhoutan)</option>
                      <option value="+973">🇧🇭 +973 (Bahrain)</option>
                      <option value="+965">🇰🇼 +965 (Koweït)</option>
                      <option value="+968">🇴🇲 +968 (Oman)</option>
                      <option value="+971">🇦🇪 +971 (Émirats arabes unis)</option>
                      <option value="+962">🇯🇴 +962 (Jordanie)</option>
                      <option value="+963">🇸🇾 +963 (Syrie)</option>
                      <option value="+964">🇮🇶 +964 (Irak)</option>
                      <option value="+972">🇮🇱 +972 (Israël)</option>
                      <option value="+98">🇮🇷 +98 (Iran)</option>
                      <option value="+995">🇬🇪 +995 (Géorgie)</option>
                      <option value="+91">🇮🇳 +91 (Inde)</option>
                      <option value="+92">🇵🇰 +92 (Pakistan)</option>
                      <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                      <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                      <option value="+95">🇲🇲 +95 (Myanmar)</option>
                      <option value="+960">🇲🇻 +960 (Maldives)</option>
                      <option value="+977">🇳🇵 +977 (Népal)</option>
                      <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                      <option value="+975">🇧🇹 +975 (Bhoutan)</option>
                      <option value="+60">🇲🇾 +60 (Malaisie)</option>
                      <option value="+62">🇮🇩 +62 (Indonésie)</option>
                      <option value="+63">🇵🇭 +63 (Philippines)</option>
                      <option value="+65">🇸🇬 +65 (Singapour)</option>
                      <option value="+66">🇹🇭 +66 (Thaïlande)</option>
                      <option value="+670">🇹🇱 +670 (Timor‑Leste)</option>
                      <option value="+673">🇧🇳 +673 (Brunei)</option>
                      <option value="+855">🇰🇭 +855 (Cambodge)</option>
                      <option value="+856">🇱🇦 +856 (Laos)</option>
                      <option value="+84">🇻🇳 +84 (Vietnam)</option>
                      <option value="+81">🇯🇵 +81 (Japon)</option>
                      <option value="+82">🇰🇷 +82 (Corée du Sud)</option>
                      <option value="+850">🇰🇵 +850 (Corée du Nord)</option>
                      <option value="+86">🇨🇳 +86 (Chine)</option>
                      <option value="+852">🇭🇰 +852 (Hong Kong)</option>
                      <option value="+853">🇲🇴 +853 (Macau)</option>
                      <option value="+886">🇹🇼 +886 (Taïwan)</option>
                      <option value="+7">🇷🇺 / 🇰🇿 +7 (Russie, Kazakhstan)</option>
                      <option value="+996">🇰🇬 +996 (Kirghizistan)</option>
                      <option value="+998">🇺🇿 +998 (Ouzbékistan)</option>
                      <option value="+976">🇲🇳 +976 (Mongolie)</option>
                      <option value="+992">🇹🇯 +992 (Tadjikistan)</option>
                      <option value="+993">🇹🇲 +993 (Turkménistan)</option>
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