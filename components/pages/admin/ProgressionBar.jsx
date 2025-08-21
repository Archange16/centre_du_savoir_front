import { useEffect, useState } from "react";

// Composant pour afficher la barre de progression d'une formation
const ProgressionBar = ({ userId, formationId }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fetchProgression = async () => {
      const res = await fetch(`/api/progressions/${userId}/${formationId}`);
      const data = await res.json();
      setPercentage(data.percentage || 0);
    };

    fetchProgression();
  }, [userId, formationId]);

  return (
    <div className="my-3">
      <p>Progression : {percentage}%</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default ProgressionBar;
