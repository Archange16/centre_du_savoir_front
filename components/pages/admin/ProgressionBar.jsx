// components/pages/admin/ProgressionBar.js
"use client";

import { useEffect, useState } from "react";

const ProgressionBar = ({ userId, formationId }) => {
  const [percentage, setPercentage] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("ProgressionBar props:", { userId, formationId });

  useEffect(() => {
    const fetchProgression = async () => {
      if (!userId || !formationId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        // CORRECTION: Utiliser la bonne URL de l'API
        const res = await fetch(`/api/progressions/${userId}/${formationId}`);
        
        if (res.ok) {
          const data = await res.json();
          console.log("Données de progression reçues:", data);
          
          setPercentage(data.percentage || 0);
          setCompleted(data.completedTitres?.length || 0);
          setTotal(data.totalTitres || 0);
        } else {
          const errorText = await res.text();
          console.error("Erreur API:", res.status, errorText);
          setError(`Erreur ${res.status}: ${errorText}`);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de la progression", error);
        setError("Impossible de charger la progression");
      } finally {
        setLoading(false);
      }
    };

    fetchProgression();
  }, [userId, formationId]);

  if (loading) {
    return (
      <div className="my-3">
        <p>Chargement de la progression...</p>
        <div className="progress">
          <div 
            className="progress-bar progress-bar-striped progress-bar-animated" 
            style={{ width: "100%" }}
          >
            Chargement...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-3">
        <div className="alert alert-warning">
          <small>{error}</small>
        </div>
      </div>
    );
  }

  return (
    <div className="my-3">
      <p>Progression globale : {completed}/{total} vidéos ({percentage}%)</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressionBar;