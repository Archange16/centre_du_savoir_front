// pages/formations/[id].js
"use client";

import { useEffect, useState } from "react";
import VideoPlayer from "@/components/pages/admin/adminContent/VideoPlayer";
import ProgressionBar from "@/components/pages/admin/ProgressionBar";
import { useSession } from "next-auth/react";

const FormationDetailPage = ({ params }) => {
  const { data: session } = useSession();
  const { id } = params;
  const userId = session?.user?.id; // à remplacer plus tard

  function convertGoogleDriveLink(driveUrl) {
  const match = driveUrl.match(/\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=preview&id=${match[1]}`;
  }
  return driveUrl; // fallback si ce n'est pas un lien Google Drive
}

  const [formation, setFormation] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [currentTitre, setCurrentTitre] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Charger la formation et construire la liste des vidéos
  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const res = await fetch(`/api/formations/${id}`);
        const data = await res.json();
        setFormation(data);

        const titres = data.modules
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
        setCurrentTitre(titres[0]);
        setCurrentIndex(0);
        setLoading(false);
      } catch (err) {
        console.error("Erreur chargement formation", err);
      }
    };

    fetchFormation();
  }, [id]);

  const goToTitre = (index) => {
    setCurrentTitre(videoList[index]);
    setCurrentIndex(index);
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

  if (loading) return <div className="container my-5">Chargement...</div>;
  if (!formation) return <div className="container my-5">Formation non trouvée</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Bootstrap */}
        <aside className="col-md-3 border-end bg-light vh-100 overflow-auto p-3">
          <h5 className="mb-3">{formation.titre}</h5>

          <ProgressionBar formationId={id} userId={userId} />

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

                      return (
                        <li
                          key={titre.id}
                          className={`list-group-item list-group-item-action ${
                            isActive ? "active" : ""
                          }`}
                          role="button"
                          onClick={() => goToTitre(index)}
                        >
                          🎬 {titre.nom}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
        </aside>

        {/* Main content */}
        <main className="col-md-9 p-4">
          <h3>{currentTitre?.nom}</h3>

          <VideoPlayer
            videoUrl={convertGoogleDriveLink(currentTitre?.videoUrl)}
            titreId={currentTitre?.id}
            userId={userId}
          />

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-outline-secondary"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              ⬅ Précédent
            </button>

            <button
              className="btn btn-outline-secondary"
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
