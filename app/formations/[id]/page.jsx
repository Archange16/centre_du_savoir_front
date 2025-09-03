// pages/formations/[id].js
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import ProgressionBar from "@/components/pages/admin/ProgressionBar";
import { useSession } from "next-auth/react";

const FormationDetailPage = ({ params }) => {
  const { data: session, status } = useSession();
  const { id } = params;
  const userId = session?.user?.id;
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  // États pour gérer les données et l'interface
  const [formation, setFormation] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [currentTitre, setCurrentTitre] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completedTitres, setCompletedTitres] = useState(new Set());
  const [progressionKey, setProgressionKey] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);
  const [progressionPercentage, setProgressionPercentage] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [showCompletionAlert, setShowCompletionAlert] = useState(false);

  // Référence pour éviter les boucles de rendu
  const emailSentRef = useRef(false);
  const initialLoadRef = useRef(false);

  // Référence pour accéder à la valeur actuelle de currentIndex de manière synchrone
  const currentIndexRef = useRef(0);

  // Mettre à jour la référence lorsque currentIndex change
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  /**
   * Convertit un lien Google Drive en lien de prévisualisation embed
   */
  const convertGoogleDriveLink = (driveUrl) => {
    if (!driveUrl) return "";
    const match = driveUrl.match(/\/d\/([^\/]+)/) || driveUrl.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return driveUrl;
  };

  /**
   * Calcule le pourcentage de progression
   */
  const calculateProgress = useCallback((completedSet, totalVideos) => {
    if (totalVideos === 0) return 0;
    return Math.round((completedSet.size / totalVideos) * 100);
  }, []);

  /**
   * Vérifie si la formation est complétée à 100% et envoie un email
   */
  const checkAndSendCompletionEmail = useCallback(async (percentage, completedSet, totalVideos) => {
    // Vérifier si la formation est complète et si l'email n'a pas déjà été envoyé
    if (percentage === 100 && !emailSentRef.current && userId && userEmail && formation) {
      try {
        emailSentRef.current = true; // Marquer immédiatement pour éviter les envois multiples
        
        const response = await fetch('/api/send-completion-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail: userEmail,
            userName: userName || 'Utilisateur',
            formationName: formation.titre
          }),
        });

        if (response.ok) {
          setEmailSent(true);
          setShowCompletionAlert(true);
          console.log('Email de félicitations envoyé !');
          
          // Cacher l'alerte après 5 secondes
          setTimeout(() => {
            setShowCompletionAlert(false);
          }, 5000);
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        emailSentRef.current = false; // Réactiver en cas d'erreur
      }
    }
  }, [userId, userEmail, userName, formation]);

  /**
   * Charge les données de la formation et la progression utilisateur
   */
  useEffect(() => {
    // Éviter de charger les données plusieurs fois
    if (initialLoadRef.current || status === "loading") return;
    initialLoadRef.current = true;

    const loadData = async () => {
      try {
        setLoading(true);
        
        // 1. Charger les détails de la formation
        const formationRes = await fetch(`/api/formations/${id}`);
        if (!formationRes.ok) throw new Error("Erreur lors du chargement de la formation");
        
        const formationData = await formationRes.json();
        setFormation(formationData);

        // 2. Organiser les titres dans l'ordre correct
        const titres = formationData.modules
          .sort((a, b) => a.ordre - b.ordre)
          .flatMap((mod) =>
            mod.titres
              .sort((a, b) => a.ordre - b.ordre)
              .map((titre) => ({
                ...titre,
                moduleTitre: mod.titre,
              }))
          );

        setVideoList(titres);

        // 3. Charger la progression utilisateur si connecté
        if (userId) {
          const progressionRes = await fetch(`/api/progressions/${userId}/${id}`);
          if (progressionRes.ok) {
            const progressionData = await progressionRes.json();
            
            if (progressionData.completedTitres) {
              const completedSet = new Set(progressionData.completedTitres);
              setCompletedTitres(completedSet);
              
              // Calculer le pourcentage initial
              const initialPercentage = calculateProgress(completedSet, titres.length);
              setProgressionPercentage(initialPercentage);
              
              // Vérifier si un email a déjà été envoyé
              if (progressionData.emailSent) {
                setEmailSent(true);
                emailSentRef.current = true;
              }
            }

            // 4. Restaurer la dernière position ou utiliser la première vidéo
            const savedPosition = localStorage.getItem(`lastPosition_${userId}_${id}`);
            let startIndex = 0;
            
            if (savedPosition) {
              const index = titres.findIndex(t => t.id === savedPosition);
              if (index !== -1) startIndex = index;
            }
            
            setCurrentIndex(startIndex);
            setCurrentTitre(titres[startIndex]);
            setIframeKey(prev => prev + 1);
          } else {
            // Fallback si l'API de progression échoue
            setCurrentIndex(0);
            setCurrentTitre(titres[0]);
            setIframeKey(prev => prev + 1);
          }
        } else {
          // Utilisateur non connecté - commencer par la première vidéo
          setCurrentIndex(0);
          setCurrentTitre(titres[0]);
          setIframeKey(prev => prev + 1);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [id, userId, status, calculateProgress]);

  /**
   * Effet pour vérifier l'envoi d'email après le chargement des données
   */
  useEffect(() => {
    if (formation && videoList.length > 0 && completedTitres.size > 0) {
      const percentage = calculateProgress(completedTitres, videoList.length);
      
      // Vérifier si on doit envoyer l'email
      if (percentage === 100 && !emailSentRef.current) {
        checkAndSendCompletionEmail(percentage, completedTitres, videoList.length);
      }
    }
  }, [formation, videoList.length, completedTitres, calculateProgress, checkAndSendCompletionEmail]);

  /**
   * Sauvegarde la position actuelle dans le localStorage
   */
  useEffect(() => {
    if (currentTitre && userId) {
      localStorage.setItem(`lastPosition_${userId}_${id}`, currentTitre.id);
    }
  }, [currentTitre, userId, id]);

  /**
   * Marque un titre comme complété via l'API
   */
  const markAsCompleted = async (titreId) => {
    if (!titreId || !userId) {
      console.log("Impossible de marquer comme terminé: userId ou titreId manquant");
      return false;
    }
    
    try {
      const response = await fetch('/api/progressions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titreId, userId, formationId: id })
      });
      
      if (response.ok) {
        const newSet = new Set(completedTitres);
        newSet.add(titreId);
        setCompletedTitres(newSet);
        
        // Calculer le nouveau pourcentage
        const newPercentage = calculateProgress(newSet, videoList.length);
        setProgressionPercentage(newPercentage);
        
        setProgressionKey(prev => prev + 1);
        return true;
      } else {
        console.error("Erreur dans la réponse API");
        return false;
      }
    } catch (error) {
      console.error("Erreur lors du marquage:", error);
      return false;
    }
  };

  /**
   * Navigue vers un titre spécifique
   */
  const goToTitre = async (index) => {
    if (index < 0 || index >= videoList.length) return;
    
    // Marquer la vidéo actuelle comme terminée avant de changer
    if (currentTitre && userId && !completedTitres.has(currentTitre.id)) {
      await markAsCompleted(currentTitre.id);
    }
    
    setCurrentIndex(index);
    setCurrentTitre(videoList[index]);
    setIframeKey(prev => prev + 1);
  };

  /**
   * Passe à la vidéo suivante
   */
  const handleNext = async () => {
    const currentIdx = currentIndexRef.current;
    
    if (currentIdx < videoList.length - 1) {
      // Marquer la vidéo actuelle comme terminée si nécessaire
      if (currentTitre && userId && !completedTitres.has(currentTitre.id)) {
        const success = await markAsCompleted(currentTitre.id);
        if (!success) return;
      }
      
      // Passer à la vidéo suivante
      const nextIndex = currentIdx + 1;
      setCurrentIndex(nextIndex);
      setCurrentTitre(videoList[nextIndex]);
      setIframeKey(prev => prev + 1);
    }
  };

  /**
   * Retourne à la vidéo précédente
   */
  const handlePrevious = async () => {
    const currentIdx = currentIndexRef.current;
    
    if (currentIdx > 0) {
      // Marquer la vidéo actuelle comme terminée si nécessaire
      if (currentTitre && userId && !completedTitres.has(currentTitre.id)) {
        const success = await markAsCompleted(currentTitre.id);
        if (!success) return;
      }
      
      // Passer à la vidéo précédente
      const prevIndex = currentIdx - 1;
      setCurrentIndex(prevIndex);
      setCurrentTitre(videoList[prevIndex]);
      setIframeKey(prev => prev + 1);
    }
  };

  /**
   * Marque manuellement la vidéo comme terminée via la checkbox
   */
  const handleManualCompletion = async () => {
    if (currentTitre && !completedTitres.has(currentTitre.id)) {
      await markAsCompleted(currentTitre.id);
    }
  };

  /**
   * Gère le clic sur le label de la checkbox
   */
  const handleLabelClick = async () => {
    if (currentTitre && !completedTitres.has(currentTitre.id)) {
      await markAsCompleted(currentTitre.id);
    }
  };

  // États de chargement
  if (status === "loading" || loading) {
    return (
      <div className="container my-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </div>
    );
  }

  // Gestion des erreurs
  if (!formation) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Formation non trouvée</div>
      </div>
    );
  }

  // Rendu principal
  return (
    <div className="container-fluid">
      {/* Alerte de completion */}
      {showCompletionAlert && (
        <div className="alert alert-success alert-dismissible fade show m-3" role="alert">
          <strong>🎉 Félicitations !</strong> Vous avez complété la formation à 100%. Un email de félicitations a été envoyé.
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowCompletionAlert(false)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="row">
        {/* Sidebar avec liste des modules et titres */}
        <aside className="col-md-3 border-end bg-light vh-100 overflow-auto p-3">
          <h5 className="mb-3">{formation.titre}</h5>

          {/* Barre de progression */}
          {userId && (
            <div className="mb-3">
              <ProgressionBar 
                key={progressionKey} 
                userId={userId} 
                formationId={formation.id} 
              />
              
              {/* Barre de progression visuelle */}
              {/* <div className="progress mt-2" style={{height: '20px'}}>
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{width: `${progressionPercentage}%`}}
                  aria-valuenow={progressionPercentage} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                >
                  {progressionPercentage}%
                </div>
              </div> */}
              
              {/* Message de completion */}
              {progressionPercentage === 100 && (
                <div className="alert alert-success mt-2 mb-0 p-2">
                  <strong>🎓 Formation complétée !</strong>
                  {emailSent && <div className="small">Email envoyé ✓</div>}
                </div>
              )}
            </div>
          )}

          {/* Liste des modules et titres */}
          {formation.modules
            .sort((a, b) => a.ordre - b.ordre)
            .map((module) => (
              <div key={module.id} className="mb-3">
                <strong>{module.titre}</strong>
                <ul className="list-group list-group-flush">
                  {module.titres
                    .sort((a, b) => a.ordre - b.ordre)
                    .map((titre) => {
                      const index = videoList.findIndex((t) => t.id === titre.id);
                      const isActive = currentTitre?.id === titre.id;
                      const isCompleted = completedTitres.has(titre.id);

                      return (
                        <li
                          key={titre.id}
                          className={`list-group-item list-group-item-action ${
                            isActive ? "active" : ""
                          } ${isCompleted ? "list-group-item-success" : ""}`}
                          style={{ cursor: "pointer" }}
                          onClick={() => goToTitre(index)}
                        >
                          {isCompleted ? "✅" : "🎬"} {titre.nom}
                          {isActive && " ▶"}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
        </aside>

        {/* Contenu principal avec lecteur vidéo */}
        <main className="col-md-9 p-4">
          {currentTitre && (
            <>
              <h3>{currentTitre.nom}</h3>
              <p className="text-muted">Module: {currentTitre.moduleTitre}</p>

              {/* Lecteur vidéo avec clé unique pour forcer le re-rendu */}
              {currentTitre.videoUrl ? (
                <div className="">
                  <div className="ratio ratio-16x9" style={{ height: "500px", width: "100%" }}>
                    <iframe
                      key={iframeKey}
                      src={convertGoogleDriveLink(currentTitre.videoUrl)}
                      title={currentTitre.nom}
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  
                  {/* Checkbox de complétion */}
                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="completedCheck"
                      checked={completedTitres.has(currentTitre.id)}
                      onChange={handleManualCompletion}
                      disabled={completedTitres.has(currentTitre.id)}
                    />
                    <label 
                      className="form-check-label" 
                      htmlFor="completedCheck"
                      onClick={handleLabelClick}
                      style={{ cursor: "pointer" }}
                    >
                      {completedTitres.has(currentTitre.id) 
                        ? "✅ Vidéo complétée" 
                        : "Marquer comme terminé"}
                    </label>
                  </div>
                </div>
              ) : (
                <div className="alert alert-warning">
                  Aucune vidéo disponible pour ce titre.
                </div>
              )}

              {/* Navigation entre les vidéos */}
             {/*  <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-outline-primary"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  ⬅ Précédent
                </button>

                <span className="my-auto">
                  Vidéo {currentIndex + 1} sur {videoList.length}
                </span>

                <button
                  className="btn btn-outline-primary"
                  onClick={handleNext}
                  disabled={currentIndex === videoList.length - 1}
                >
                  Suivant ➡
                </button>
              </div> */}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default FormationDetailPage;