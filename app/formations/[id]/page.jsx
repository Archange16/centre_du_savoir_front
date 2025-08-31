// pages/formations/[id].js
"use client";

import { useEffect, useState } from "react";
import ProgressionBar from "@/components/pages/admin/ProgressionBar";
import { useSession } from "next-auth/react";

const FormationDetailPage = ({ params }) => {
  const { data: session, status } = useSession();
  const { id } = params;
  const userId = session?.user?.id;

  const [formation, setFormation] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [currentTitre, setCurrentTitre] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completedTitres, setCompletedTitres] = useState(new Set());
  const [progressionKey, setProgressionKey] = useState(0);

  // Convertir les liens Google Drive
  const convertGoogleDriveLink = (driveUrl) => {
    if (!driveUrl) return "";
    const match = driveUrl.match(/\/d\/([^\/]+)/) || driveUrl.match(/id=([^&]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return driveUrl;
  };

  // Charger les données
  useEffect(() => {
    const loadData = async () => {
      if (status === "loading") return; // Attendre que la session soit chargée
      
      try {
        setLoading(true);
        console.log("Chargement des données pour la formation:", id);
        
        // Charger la formation
        const formationRes = await fetch(`/api/formations/${id}`);
        if (!formationRes.ok) throw new Error("Erreur lors du chargement de la formation");
        
        const formationData = await formationRes.json();
        setFormation(formationData);
        console.log("Formation chargée:", formationData);

        // Organiser les titres
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
        console.log("Liste des vidéos créée:", titres.length, "éléments");

        // Charger la progression si l'utilisateur est connecté
        if (userId) {
          console.log("Chargement de la progression pour l'utilisateur:", userId);
          const progressionRes = await fetch(`/api/progressions/${userId}/${id}`);
          if (progressionRes.ok) {
            const progressionData = await progressionRes.json();
            console.log("Données de progression:", progressionData);
            
            if (progressionData.completedTitres) {
              setCompletedTitres(new Set(progressionData.completedTitres));
            }

            // Restaurer la dernière position ou utiliser la première vidéo
            const savedPosition = localStorage.getItem(`lastPosition_${userId}_${id}`);
            let startIndex = 0;
            
            if (savedPosition) {
              const index = titres.findIndex(t => t.id === savedPosition);
              if (index !== -1) startIndex = index;
            }
            
            setCurrentIndex(startIndex);
            setCurrentTitre(titres[startIndex]);
          }
        } else {
          // Utilisateur non connecté - juste définir la première vidéo
          setCurrentIndex(0);
          setCurrentTitre(titres[0]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
        setLoading(false);
      }
    };

    loadData();
  }, [id, userId, status]);

  // Sauvegarder la position actuelle
  useEffect(() => {
    if (currentTitre && userId) {
      localStorage.setItem(`lastPosition_${userId}_${id}`, currentTitre.id);
    }
  }, [currentTitre, userId, id]);

  // Marquer une vidéo comme terminée
  const markAsCompleted = async (titreId) => {
    if (!titreId || !userId) {
      console.log("Impossible de marquer comme terminé: userId ou titreId manquant");
      return false;
    }
    
    try {
      console.log("Marquage comme terminé:", { titreId, userId });
      const response = await fetch('/api/progressions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titreId, userId })
      });
      
      if (response.ok) {
        console.log("Succès du marquage");
        setCompletedTitres(prev => {
          const newSet = new Set(prev);
          newSet.add(titreId);
          return newSet;
        });
        
        setProgressionKey(prev => prev + 1); // Forcer le re-rendu de la barre de progression
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

  // Aller à une vidéo spécifique
  const goToTitre = async (index) => {
    if (index < 0 || index >= videoList.length) return;
    
    // Marquer la vidéo actuelle comme terminée avant de changer
    if (currentTitre && userId && !completedTitres.has(currentTitre.id)) {
      console.log("Marquage automatique de la vidéo avant changement");
      await markAsCompleted(currentTitre.id);
    }
    
    setCurrentIndex(index);
    setCurrentTitre(videoList[index]);
  };

  const handleNext = () => {
    if (currentIndex < videoList.length - 1) {
      goToTitre(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      goToTitre(currentIndex - 1);
    }
  };

  const handleManualCompletion = async () => {
    if (currentTitre && !completedTitres.has(currentTitre.id)) {
      await markAsCompleted(currentTitre.id);
    }
  };

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

  if (!formation) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Formation non trouvée</div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 border-end bg-light vh-100 overflow-auto p-3">
          <h5 className="mb-3">{formation.titre}</h5>

          {userId && (
            <ProgressionBar 
              key={progressionKey} 
              userId={userId} 
              formationId={formation.id} 
            />
          )}

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

        {/* Contenu principal */}
        <main className="col-md-9 p-4">
          <h3>{currentTitre?.nom}</h3>
          <p className="text-muted">Module: {currentTitre?.moduleTitre}</p>

          {currentTitre?.videoUrl ? (
            <div className="border rounded p-3">
              <div className="ratio ratio-16x9">
                <iframe
                  src={convertGoogleDriveLink(currentTitre.videoUrl)}
                  title={currentTitre.nom}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="completedCheck"
                  checked={completedTitres.has(currentTitre.id)}
                  onChange={handleManualCompletion}
                  disabled={completedTitres.has(currentTitre.id)}
                />
                <label className="form-check-label" htmlFor="completedCheck">
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

          <div className="d-flex justify-content-between mt-4">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default FormationDetailPage;