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
        <div className="row gy-4">
  {assignments.map((assignment) => {
    const { id, titre, description, image, formationId, formation } = assignment;

    return (
      <div className="col-xl-4 col-lg-6" key={id}>
        <div className="blog__four-single-blog-content1">
          
          <div className="blog__four-single-blog-img">
            <Link href={`/formations/${formationId}`}>
              <img
                src={image || formation?.image || '/default-image.jpg'}
                alt={titre || formation?.titre || 'Formation'}
                style={{ height: '250px', objectFit: 'cover', width: '100%' }}
              />
            </Link>
          </div>

          <div className="p-2">
            <h4 className="blog__four-single-blog-content-title" style={{ color: '#f39200' }}>
              {titre || formation?.titre || 'Formation sans titre'}
            </h4>
            <p className="mb-3">
              {(description || formation?.description || 'Aucune description fournie.').length > 100
                ? `${(description || formation?.description).substring(0, 100)}...`
                : (description || formation?.description || 'Aucune description fournie.')}
            </p>

            <div className="d-grid gap-2">
               <ProgressionBar userId={session.user.id} formationId={formationId} />
              <Link
                href={`/formations/${formationId}`}
                className="btn-two"
              >
                ▶️ Accéder à la formation <i className="fas fa-angle-right"></i>
              </Link>
            </div>
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
