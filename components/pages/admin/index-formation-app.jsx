"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressionBar from "./ProgressionBar";
import FormationCompleteAdmin from "./adminContent/formation";
import AssignFormationModal from "@/components/modal-comp/AssignFormationModal";

const FormationsPage = () => {
  const [formations, setFormations] = useState([]);
  const [userId, setUserId] = useState(2); // ← METS ICI UN ID QUI EXISTE EN BASE (dans FormationAssignment)

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const res = await fetch(`/api/index-formation?userId=${userId}`);
        const data = await res.json();
        setFormations(data);
      } catch (err) {
        console.error("Erreur lors du chargement:", err);
      }
    };

    fetchFormations();
  }, [userId]);

  return (
    <div className="main-container container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 m-0">📚 Formations assignées</h2>
        <FormationCompleteAdmin />
      </div>

      {formations?.length === 0 ? (
        <p>Aucune formation assignée.</p>
      ) : (
        <div className="row">
          {formations.map((formation) => (
            <div className="col-md-6 mb-4" key={formation.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{formation.titre}</h5>
                  <p className="card-text">{formation.description}</p>
                  <ProgressionBar userId={userId} formationId={formation.id} />
                  <Link href={`/formations/${formation.id}`} className="btn btn-primary">
                    ▶️ Accéder à la formation
                  </Link>
                  <AssignFormationModal formationId={formation.id} />
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
