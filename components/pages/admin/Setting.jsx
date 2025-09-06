"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import AssignFormationModal from "@/components/modal-comp/AssignFormationModal";

const FormationDetailPage = ({ id, onBack }) => {
  const params = useParams();
  const router = useRouter();
  const [formation, setFormation] = useState(null);
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

  // États pour la gestion des modules et titres
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [showTitreForm, setShowTitreForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [editingTitre, setEditingTitre] = useState(null);
  const [moduleFormData, setModuleFormData] = useState({ titre: "", ordre: 0 });
  const [titreFormData, setTitreFormData] = useState({ 
    nom: "", 
    videoUrl: "", 
    ordre: 0, 
    moduleId: "" 
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }
    
  }, [status, router]);

  // Appel API pour récupérer la formation spécifique
  useEffect(() => {
    if (id) {
      fetchFormation();
    }
  }, [params.id]);

  const fetchFormation = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/formations/${id}`);
      if (!res.ok) {
        throw new Error('Erreur lors de la récupération de la formation');
      }
      const data = await res.json();
      setFormation(data);
      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement de la formation: ' + err.message);
      setLoading(false);
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleEditClick = () => {
    setEditTitre(formation.titre);
    setEditDescription(formation.description);
    setEditImagePreview(formation.image);
    setShowEditModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(`/api/formations/${formation.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }

      setSuccess('Formation supprimée avec succès');
      setShowDeleteModal(false);
      router.push('/formations'); // Rediriger vers la liste des formations
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

      const response = await fetch(`/api/formations/${formation.id}`, {
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
      fetchFormation(); // Recharger les données
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

  // Fonctions pour gérer les modules
  const handleAddModule = () => {
    setEditingModule(null);
    setModuleFormData({ 
      titre: "", 
      ordre: formation.modules ? formation.modules.length + 1 : 1 
    });
    setShowModuleForm(true);
  };

  const handleEditModule = (module) => {
    setEditingModule(module);
    setModuleFormData({ 
      titre: module.titre, 
      ordre: module.ordre 
    });
    setShowModuleForm(true);
  };

  const handleDeleteModule = async (moduleId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce module ? Tous ses titres seront également supprimés.")) {
      try {
        const response = await fetch(`/api/modules/${moduleId}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          setSuccess('Module supprimé avec succès');
          await fetchFormation(); // Recharger les données
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Erreur lors de la suppression du module");
        }
      } catch (error) {
        setError("Erreur lors de la suppression du module: " + error.message);
      }
    }
  };

  const handleSubmitModule = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingModule 
        ? `/api/modules/${editingModule.id}`
        : '/api/modules';
      
      const method = editingModule ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...moduleFormData,
          formationId: formation.id
        })
      });
      
      if (response.ok) {
        setSuccess(editingModule ? 'Module modifié avec succès' : 'Module ajouté avec succès');
        setShowModuleForm(false);
        await fetchFormation(); // Recharger les données
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de l'opération sur le module");
      }
    } catch (error) {
      setError("Erreur lors de l'ajout/modification du module: " + error.message);
    }
  };

  // Fonctions pour gérer les titres
  const handleAddTitre = (moduleId) => {
    const module = formation.modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const ordre = module.titres ? module.titres.length + 1 : 1;
    
    setTitreFormData({ 
      nom: "", 
      videoUrl: "", 
      ordre, 
      moduleId 
    });
    setEditingTitre(null);
    setShowTitreForm(true);
  };

  const handleEditTitre = (titre) => {
    setEditingTitre(titre);
    setTitreFormData({ 
      nom: titre.nom, 
      videoUrl: titre.videoUrl, 
      ordre: titre.ordre, 
      moduleId: titre.moduleId 
    });
    setShowTitreForm(true);
  };

  const handleDeleteTitre = async (titreId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce titre ?")) {
      try {
        const response = await fetch(`/api/titres/${titreId}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          setSuccess('Titre supprimé avec succès');
          await fetchFormation(); // Recharger les données
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Erreur lors de la suppression du titre");
        }
      } catch (error) {
        setError("Erreur lors de la suppression du titre: " + error.message);
      }
    }
  };

  const handleSubmitTitre = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingTitre 
        ? `/api/titres/${editingTitre.id}`
        : '/api/titres';
      
      const method = editingTitre ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(titreFormData)
      });
      
      if (response.ok) {
        setSuccess(editingTitre ? 'Titre modifié avec succès' : 'Titre ajouté avec succès');
        setShowTitreForm(false);
        await fetchFormation(); // Recharger les données
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de l'opération sur le titre");
      }
    } catch (error) {
      setError("Erreur lors de l'ajout/modification du titre: " + error.message);
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

  if (!formation) {
    return (
      <div className="main-container container mt-4">
        <div className="alert alert-danger">
          Formation non trouvée
        </div>
        <Link href="/formations" className="btn btn-primary">
          Retour aux formations
        </Link>
      </div>
    );
  }

  return (
    <div className="main-container container mt-4" >
      <div className="d-flex justify-content-between align-items-center mb-4" style={{ borderBottom: '2px solid #ef930aff', paddingBottom: '10px' }}>
        <div>
           <button 
          className="btn btn-outline-secondary me-2"
          onClick={onBack}
        >
          ← Retour aux formations
        </button>
          <h2 className="h4 m-0 d-inline-block ms-2" style={{ color: '#ef930aff' }}>
            Gestion de: {formation.titre}
        </h2>
        </div>
        <div>
          <button 
            type="button" 
            className="btn btn-outline-primary me-2"
            onClick={handleEditClick}
          >
            ✏️ Modifier
          </button>
          <button 
            type="button" 
            className="btn btn-outline-danger"
            onClick={handleDeleteClick}
          >
            🗑️ Supprimer
          </button>
        </div>
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

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src={formation.image || '/default-image.jpg'} 
              alt={formation.titre} 
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{formation.titre}</h5>
              <p className="card-text">{formation.description}</p>
              <AssignFormationModal formationId={formation.id} />
              <Link 
                href={`/formations/${formation.id}`} 
                className="btn btn-primary w-100 mt-2"
              >
                ▶️ Voir la formation
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Modules et titres</h3>
            <button 
              type="button" 
              className="btn btn-outline-info"
              onClick={handleAddModule}
            >
              ➕ Ajouter un module
            </button>
          </div>

          {/* Liste des modules et titres */}
          <div className="mt-3">
            {formation.modules?.sort((a, b) => a.ordre - b.ordre).map((module) => (
              <div key={module.id} className="card mb-3">
                <div className="card-header py-2 d-flex justify-content-between align-items-center">
                  <strong>{module.titre} (Ordre: {module.ordre})</strong>
                  <div>
                    <button 
                      className="btn btn-sm btn-outline-secondary me-1"
                      onClick={() => handleEditModule(module)}
                    >
                      ✏️
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger me-1"
                      onClick={() => handleDeleteModule(module.id)}
                    >
                      🗑️
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleAddTitre(module.id)}
                    >
                      ➕ Titre
                    </button>
                  </div>
                </div>
                <div className="card-body py-2">
                  <ul className="list-group list-group-flush">
                    {module.titres?.sort((a, b) => a.ordre - b.ordre).map((titre) => (
                      <li key={titre.id} className="list-group-item d-flex justify-content-between align-items-center py-2">
                        <div>
                          <span className="fw-bold">{titre.nom}</span>
                          <br />
                          <small className="text-muted">Ordre: {titre.ordre}</small>
                        </div>
                        <div>
                          <button 
                            className="btn btn-sm btn-outline-secondary me-1"
                            onClick={() => handleEditTitre(titre)}
                          >
                            ✏️
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteTitre(titre.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de suppression de formation */}
      <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmer la suppression</h5>
              <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
            </div>
            <div className="modal-body">
              Êtes-vous sûr de vouloir supprimer la formation "{formation.titre}" ? 
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

      {/* Modal d'édition de formation */}
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

      {/* Modal pour ajouter/modifier un module */}
      <div className={`modal fade ${showModuleForm ? 'show' : ''}`} style={{ display: showModuleForm ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editingModule ? 'Modifier le module' : 'Ajouter un module'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowModuleForm(false)}></button>
            </div>
            <form onSubmit={handleSubmitModule}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Titre du module *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={moduleFormData.titre}
                    onChange={(e) => setModuleFormData({...moduleFormData, titre: e.target.value})}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ordre *</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={moduleFormData.ordre}
                    onChange={(e) => setModuleFormData({...moduleFormData, ordre: parseInt(e.target.value)})}
                    required 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModuleForm(false)}>Annuler</button>
                <button type="submit" className="btn btn-primary">{editingModule ? 'Modifier' : 'Ajouter'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal pour ajouter/modifier un titre */}
      <div className={`modal fade ${showTitreForm ? 'show' : ''}`} style={{ display: showTitreForm ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editingTitre ? 'Modifier le titre' : 'Ajouter un titre'}</h5>
              <button type="button" className="btn-close" onClick={() => setShowTitreForm(false)}></button>
            </div>
            <form onSubmit={handleSubmitTitre}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nom du titre *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={titreFormData.nom}
                    onChange={(e) => setTitreFormData({...titreFormData, nom: e.target.value})}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL de la vidéo *</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    value={titreFormData.videoUrl}
                    onChange={(e) => setTitreFormData({...titreFormData, videoUrl: e.target.value})}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ordre *</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={titreFormData.ordre}
                    onChange={(e) => setTitreFormData({...titreFormData, ordre: parseInt(e.target.value)})}
                    required 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowTitreForm(false)}>Annuler</button>
                <button type="submit" className="btn btn-primary">{editingTitre ? 'Modifier' : 'Ajouter'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay pour les modals */}
      {(showDeleteModal || showEditModal || showModuleForm || showTitreForm) && (
        <div className="modal-backdrop fade show"></div>
      )}
    </div>
  );
};

export default FormationDetailPage;