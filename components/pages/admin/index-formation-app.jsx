"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProgressionBar from "./ProgressionBar";

const FormationsPage = () => {
  const { data: session, status } = useSession();
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === "authenticated") {
      const userId = session?.user?.id;
 //console.log("Fetching assignments for userId:", session);
      const fetchAssignments = async () => {
        try {
          const res = await fetch(`/api/assign-formation?userId=${userId}`);
          const data = await res.json();

          if (!Array.isArray(data)) {
            console.error("Réponse inattendue :", data);
            setError(data.error || "Erreur lors de la récupération des données");
            setAssignments([]);
            return;
          }

          setAssignments(data);
        } catch (err) {
          console.error("Erreur lors du chargement:", err);
          setError("Impossible de charger les formations.");
        }
      };

      fetchAssignments();
    }
  }, [status, session]);

  if (status === "loading") return <p>Chargement en cours...</p>;
  if (status !== "authenticated") return <p>Veuillez vous connecter pour voir vos formations.</p>;
  if (error) return <p className="text-danger">❌ {error}</p>;

  return (
    <div className="main-container container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 m-0">📚 Formations assignées</h2>
      </div>

      {assignments.length === 0 ? (
        <p>Aucune formation assignée.</p>
      ) : (
        <div className="row">
          {assignments.map((assignment) => {
            const { id, titre, description, image, formationId, formation } = assignment;

            return (
              <div className="col-md-6 mb-4" key={id}>
                <div className="card shadow-sm h-100">
                  {image || formation?.image ? (
                    <img
                      src={image || formation.image}
                      className="card-img-top"
                      alt="Image de la formation"
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                  ) : null}

                  <div className="card-body">
                    <h5 className="card-title">
                      {titre || formation?.titre || "Formation sans titre"}
                    </h5>
                    <p className="card-text">
                      {description || formation?.description || "Aucune description fournie."}
                    </p>

                    <ProgressionBar userId={session.user.id} formationId={formationId} />

                    <Link
                      href={`/formations/${formationId}`}
                      className="btn btn-primary mt-2"
                    >
                      ▶️ Accéder à la formation
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FormationsPage;
