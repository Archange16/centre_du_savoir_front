"use client";
// Page publique pour afficher toutes les formations aux apprenants
import { useEffect, useState } from "react";
import Link from "next/link";
//import ProgressionBar from "./ProgressionBar";
//import FormationCompleteAdmin from "./adminContent/formation";
import AssignFormationModal from "@/components/modal-comp/AssignFormationModal";

const FormationsPage = () => {
  const [formations, setFormations] = useState([]);
  const [userId, setUserId] = useState("demo-user");
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // États pour l'édition
  const [editTitre, setEditTitre] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState(null);

  // Appel API pour récupérer les formations disponibles
  useEffect(() => {
    fetchFormations();
  }, []);

  const fetchFormations = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/index-formation");
      const data = await res.json();
      setFormations(data);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement des formations');
      setLoading(false);
    }
  };

  const handleDeleteClick = (formation) => {
    setSelectedFormation(formation);
    setShowDeleteModal(true);
  };

  const handleEditClick = (formation) => {
    setSelectedFormation(formation);
    setEditTitre(formation.titre);
    setEditDescription(formation.description);
    setEditImagePreview(formation.image);
    setShowEditModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`/api/formations/${selectedFormation.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }

      setSuccess('Formation supprimée avec succès');
      setShowDeleteModal(false);
      fetchFormations(); // Recharger la liste
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = editImagePreview;
      
      if (editImage) {
        // Convertir l'image en base64 si une nouvelle image est fournie
        imageUrl = await convertToBase64(editImage);
      }

      const response = await fetch(`/api/formations/${selectedFormation.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titre: editTitre,
          description: editDescription,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la modification');
      }

      setSuccess('Formation modifiée avec succès');
      setShowEditModal(false);
      fetchFormations(); // Recharger la liste
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        setError('Veuillez sélectionner une image valide (JPG, PNG, GIF)');
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        setError('L\'image ne doit pas dépasser 2MB');
        return;
      }
      
      setEditImage(file);
      setError('');
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
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
        <FormationCompleteAdmin onFormationCreated={fetchFormations} />
      </div>

      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError('')}></button>
        </div>
      )}

      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {success}
          <button type="button" className="btn-close" onClick={() => setSuccess('')}></button>
        </div>
      )}

      {/* Aucune formation */}
      {formations?.length === 0 ? (
        <p>Aucune formation disponible.</p>
      ) : (
        <div className="row gy-4">
          {formations?.map((formation) => (
            <div className="col-xl-4 col-lg-6" key={formation.id}>
              <div className="blog__four-single-blog-content1 ">
                
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
                  <div className="d-grid gap-2">
                    <Link
                      href={`/formations/${formation.id}`}
                      className="btn-two"
                    >
                      ▶️ Accéder à la formation <i className="fas fa-angle-right"></i>
                    </Link>

                    <AssignFormationModal formationId={formation.id} />

                    <div className="btn-group w-100 mt-2" role="group">
                      <button 
                        type="button" 
                        className="btn btn-outline-primary"
                        onClick={() => handleEditClick(formation)}
                      >
                        ✏️ Modifier
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteClick(formation)}
                      >
                        🗑️ Supprimer
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      )}

      {/* Modal de suppression */}
      <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmer la suppression</h5>
              <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              Êtes-vous sûr de vouloir supprimer la formation "{selectedFormation?.titre}" ? 
              Cette action est irréversible.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                Annuler
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal d'édition */}
      <div className={`modal fade ${showEditModal ? 'show' : ''}`} style={{ display: showEditModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modifier la formation</h5>
              <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <form onSubmit={handleEditSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Titre de la formation *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editTitre}
                    onChange={(e) => setEditTitre(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image de la formation</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleEditImageChange}
                  />
                  <div className="form-text">
                    Formats acceptés: JPG, PNG, GIF. Taille max: 2MB
                  </div>
                </div>

                {editImagePreview && (
                  <div className="mb-3 text-center">
                    <img 
                      src={editImagePreview} 
                      alt="Aperçu" 
                      style={{ maxWidth: '100%', maxHeight: '200px', border: '1px solid #ddd', borderRadius: '4px' }} 
                    />
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Annuler
                </button>
                <button type="submit" className="btn btn-primary">
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay pour les modals */}
      {(showDeleteModal || showEditModal) && (
        <div className="modal-backdrop fade show"></div>
      )}
    </div>
  );
};

// FormationCompleteAdmin.js - Version mise à jour avec callback
const FormationCompleteAdmin = ({ onFormationCreated }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [modules, setModules] = useState([
    { titre: "", ordre: 1, titres: [{ nom: "", videoUrl: "", ordre: 1 }] },
  ]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const addModule = () => {
    setModules([
      ...modules,
      {
        titre: "",
        ordre: modules.length + 1,
        titres: [{ nom: "", videoUrl: "", ordre: 1 }],
      },
    ]);
  };

  const addTitre = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].titres.push({
      nom: "",
      videoUrl: "",
      ordre: newModules[moduleIndex].titres.length + 1,
    });
    setModules(newModules);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        setError("Veuillez sélectionner une image valide (JPG, PNG, GIF)");
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) {
        setError("L'image ne doit pas dépasser 2MB");
        return;
      }
      
      setImageFile(file);
      setError("");
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setTitre("");
    setDescription("");
    setImageFile(null);
    setImagePreview(null);
    setModules([
      { titre: "", ordre: 1, titres: [{ nom: "", videoUrl: "", ordre: 1 }] },
    ]);
    setError("");
  };

  const handleClose = () => {
    setShow(false);
    resetForm();
    setSuccess(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let imageUrl = null;
      if (imageFile) {
        const base64Image = await convertToBase64(imageFile);
        imageUrl = base64Image;
      }

      const res = await fetch("/api/formations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          titre, 
          description, 
          image: imageUrl 
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Erreur lors de la création de la formation");
      }

      const formationId = result.data.id;

      for (const mod of modules) {
        const moduleRes = await fetch("/api/modules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            titre: mod.titre,
            ordre: mod.ordre,
            formationId: formationId,
          }),
        });

        if (!moduleRes.ok) {
          throw new Error("Erreur lors de la création d'un module");
        }

        const moduleResult = await moduleRes.json();
        const moduleId = moduleResult.id;

        for (const t of mod.titres) {
          const titreRes = await fetch("/api/titres", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nom: t.nom,
              videoUrl: t.videoUrl,
              ordre: t.ordre,
              moduleId: moduleId,
            }),
          });

          if (!titreRes.ok) {
            throw new Error("Erreur lors de la création d'un titre");
          }
        }
      }

      setSuccess(true);
      resetForm();
      
      // Appeler le callback pour rafraîchir la liste des formations
      if (onFormationCreated) {
        onFormationCreated();
      }
      
      setTimeout(() => {
        setShow(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Erreur lors de la création :", err);
      setError(err.message || "Une erreur est survenue lors de la création");
    } finally {
      setLoading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        ➕ Ajouter une formation complète
      </button>

      <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Créer une formation complète 📚</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {success && (
                <div className="alert alert-success d-flex align-items-center">
                  <span className="me-2">✅</span>
                  <span>Formation créée avec succès</span>
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger d-flex align-items-center">
                  <span className="me-2">❌</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Titre de la formation *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image de la formation (optionnel)</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleImageChange}
                    disabled={loading}
                  />
                  <div className="form-text">
                    Formats acceptés: JPG, PNG, GIF. Taille max: 2MB
                  </div>
                </div>

                {imagePreview && (
                  <div className="mb-3 text-center">
                    <img 
                      src={imagePreview} 
                      alt="Aperçu" 
                      style={{ maxHeight: '200px', border: '1px solid #ddd', borderRadius: '4px' }} 
                    />
                    <div className="mt-2">
                      <button 
                        type="button"
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview(null);
                        }}
                        disabled={loading}
                      >
                        Supprimer l'image
                      </button>
                    </div>
                  </div>
                )}

                <h5 className="mt-4">Modules</h5>
                {modules.map((module, modIdx) => (
                  <div key={modIdx} className="border p-3 my-2 rounded">
                    <div className="mb-3">
                      <label className="form-label">Titre du module {modIdx + 1} *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={module.titre}
                        onChange={(e) => {
                          const newModules = [...modules];
                          newModules[modIdx].titre = e.target.value;
                          setModules(newModules);
                        }}
                        required
                        disabled={loading}
                      />
                    </div>

                    <h6 className="mt-2">Titres (vidéos)</h6>
                    {module.titres.map((titre, titreIdx) => (
                      <div key={titreIdx} className="mb-3 border-bottom pb-3">
                        <div className="mb-2">
                          <label className="form-label">Nom du titre *</label>
                          <input
                            type="text"
                            className="form-control"
                            value={titre.nom}
                            onChange={(e) => {
                              const newModules = [...modules];
                              newModules[modIdx].titres[titreIdx].nom = e.target.value;
                              setModules(newModules);
                            }}
                            required
                            disabled={loading}
                          />
                        </div>
                        
                        <div className="mb-2">
                          <label className="form-label">URL de la vidéo *</label>
                          <input
                            type="url"
                            className="form-control"
                            placeholder="https://example.com/video.mp4"
                            value={titre.videoUrl}
                            onChange={(e) => {
                              const newModules = [...modules];
                              newModules[modIdx].titres[titreIdx].videoUrl = e.target.value;
                              setModules(newModules);
                            }}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => addTitre(modIdx)}
                      disabled={loading}
                    >
                      ➕ Ajouter un titre
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-outline-primary mt-2"
                  onClick={addModule}
                  disabled={loading}
                >
                  ➕ Ajouter un module
                </button>

                <div className="d-grid gap-2 mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-success"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Création en cours...
                      </>
                    ) : (
                      <>
                        <span className="me-2">✅</span>
                        Créer la formation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour le modal */}
      {show && (
        <div className="modal-backdrop fade show"></div>
      )}
    </>
  );
};

export default FormationsPage;