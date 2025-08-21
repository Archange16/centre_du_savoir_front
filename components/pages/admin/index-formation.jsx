// Page publique pour afficher toutes les formations aux apprenants
import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressionBar from "./ProgressionBar";
import FormationCompleteAdmin from "./adminContent/formation";

const FormationsPage = () => {
  const [formations, setFormations] = useState([]);
  const [userId, setUserId] = useState("demo-user"); // Remplacer avec un vrai ID utilisateur

  // Appel API pour récupérer les formations disponibles
  useEffect(() => {
    const fetchFormations = async () => {
      const res = await fetch("/api/index-formation");
      const data = await res.json();
      setFormations(data);
      //setFormations(data.formations);
    };

    fetchFormations();
  }, []);

  return (
    <div className="main-container container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="h4 m-0">📚 Formations disponibles</h2>
      <FormationCompleteAdmin />
    </div>
      

      {/* Aucune formation */}
      {formations?.length === 0 ? (
        <p>Aucune formation disponible.</p>
      ) : (
        <div className="row">
          {formations?.map((formation) => (
            <div className="col-md-6 mb-4" key={formation.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{formation.titre}</h5>
                  <p className="card-text">{formation.description}</p>

                  {/* Barre de progression liée à l'utilisateur */}
                  <ProgressionBar userId={userId} formationId={formation.id} />

                  <Link
                    href={`/formations/${formation.id}`}
                    className="btn btn-primary"
                  >
                    ▶️ Accéder à la formation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormationsPage;
