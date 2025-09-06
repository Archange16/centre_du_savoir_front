"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import FormationCompleteAdmin from "./adminContent/formation";

const FormationsPage = ({onComponentChange}) => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }
    
  }, [status, router]);

  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/index-formation");
      if (!res.ok) {
        throw new Error('Erreur lors de la récupération des formations');
      }
      const data = await res.json();
      setFormations(data);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement des formations: ' + err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="main-container container mt-4">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 m-0">📚 Formations disponibles</h2>
        <FormationCompleteAdmin onRefresh={fetchFormations}/>
      </div>

      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError('')}></button>
        </div>
      )}

      {/* Aucune formation */}
      {formations?.length === 0 ? (
        <p>Aucune formation disponible.</p>
      ) : (
        <div className="row gy-4">
          {formations?.map((formation) => (
            <div className="col-xl-4 col-lg-6" key={formation.id}>
              <div className="blog__four-single-blog-content1">
                <div className="blog__four-single-blog-img">
                  <Link href={`/formations/${formation.id}`}>
                    <img 
                      src={formation.image || '/default-image.jpg'} 
                      alt={formation.titre} 
                      style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                    />
                  </Link>
                </div>
                
                <div className="p-2">
                  <h4 className="blog__four-single-blog-content-title" style={{ color: '#f39200' }}>
                    {formation.titre}
                  </h4>
                  <p className="mb-3">
                    {formation.description.length > 100 
                      ? `${formation.description.substring(0, 100)}...` 
                      : formation.description}
                  </p>

                  {/* Boutons d'action pour la formation */}
                  <div className="d-grid gap-2">
                    <Link
                      href={`/formations/${formation.id}`}
                      className="btn-two"
                    >
                      ▶️ Accéder à la formation <i className="fas fa-angle-right"></i>
                    </Link>

                    <button
                      className="btn btn-sm btn-outline-info"
                      onClick={() => onComponentChange('formationDetailPage', formation.id)}
                    >
                      Voir les détails
                    </button>
                  </div>
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