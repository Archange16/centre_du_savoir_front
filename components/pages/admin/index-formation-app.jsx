"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ProgressionBar from "./ProgressionBar";

const FormationsPage = () => {
  const { data: session, status } = useSession();

  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [userStatus, setUserStatus] = useState(null); // true / false / null
  const [isLoading, setIsLoading] = useState(true); // 💡 pour afficher "chargement..."

  const userId = session?.user?.id;

  // ✅ Étape 1 : Aller chercher le statut de l'utilisateur depuis ton API
  useEffect(() => {
    const fetchUserStatus = async () => {
      if (status !== "authenticated" || !userId) return;

      try {
        const res = await fetch(`/api/users/${userId}`);
        const json = await res.json();

        if (!res.ok || !json.success) {
          setError(json.error || "Erreur lors de la récupération de l'utilisateur.");
          setUserStatus(false);
          setIsLoading(false);
          return;
        }

        const user = json.data;
        setUserStatus(user.status === true);
      } catch (err) {
        console.error("Erreur lors de la récupération du statut:", err);
        setError("Erreur lors de la récupération du statut utilisateur.");
        setUserStatus(false);
      } finally {
        setIsLoading(false); // ✅ Terminé : on arrête le "Chargement..."
      }
    };

    fetchUserStatus();
  }, [status, userId]);

  // ✅ Étape 2 : Récupérer les formations uniquement si l'utilisateur est actif
  useEffect(() => {
    const fetchAssignments = async () => {
      if (!userId || userStatus !== true) return;

      try {
        const res = await fetch(`/api/assign-formation?userId=${userId}`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Réponse inattendue :", data);
          setError(data.error || "Erreur lors de la récupération des données");
          return;
        }

        setAssignments(data);
      } catch (err) {
        console.error("Erreur lors du chargement:", err);
        setError("Impossible de charger les formations.");
      }
    };

    fetchAssignments();
  }, [userStatus, userId]);

  // ✅ Étape 3 : États intermédiaires
  if (status === "loading" || isLoading) {
    return <p>⏳ Chargement en cours...</p>;
  }

  if (status !== "authenticated") {
    return <p>Veuillez vous connecter pour voir vos formations.</p>;
  }

  if (error) {
    return <p className="text-danger">❌ {error}</p>;
  }

  if (userStatus !== true) {
    return <p>🚫 Votre compte n’est pas encore activé pour accéder aux formations.</p>;
  }

  // ✅ Étape 4 : Affichage des formations
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
                        src={image || formation?.image || "/default-image.jpg"}
                        alt={titre || formation?.titre || "Formation"}
                        style={{ height: "250px", objectFit: "cover", width: "100%" }}
                      />
                    </Link>
                  </div>

                  <div className="p-2">
                    <h4 className="blog__four-single-blog-content-title" style={{ color: "#f39200" }}>
                      {titre || formation?.titre || "Formation sans titre"}
                    </h4>
                    <p className="mb-3">
                      {(description || formation?.description || "Aucune description fournie.").length > 100
                        ? `${(description || formation?.description).substring(0, 100)}...`
                        : description || formation?.description || "Aucune description fournie."}
                    </p>

                    <div className="d-grid gap-2">
                      <ProgressionBar userId={userId} formationId={formationId} />
                      <Link href={`/formations/${formationId}`} className="btn-two">
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
