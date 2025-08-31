// FormationCompleteAdmin.js
"use client";
import { useState } from "react";
import { Button, Modal, Form, Alert, Image, Spinner } from "react-bootstrap";

const FormationCompleteAdmin = () => {
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
      // Vérification du type de fichier
      if (!file.type.match("image.*")) {
        setError("Veuillez sélectionner une image valide (JPG, PNG, GIF)");
        return;
      }
      
      // Vérification de la taille (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setError("L'image ne doit pas dépasser 2MB");
        return;
      }
      
      setImageFile(file);
      setError("");
      
      // Créer une prévisualisation
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
      // Étape 1: Upload de l'image si elle existe
      let imageUrl = null;
      if (imageFile) {
        // Convertir l'image en base64 pour l'envoyer via JSON
        const base64Image = await convertToBase64(imageFile);
        imageUrl = base64Image;
      }

      // Étape 2: Création de la formation avec l'image en base64
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

      // Étape 3: Création des modules et titres
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

  // Fonction pour convertir un fichier en base64
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
      <Button variant="primary" onClick={() => setShow(true)}>
        ➕ Ajouter une formation complète
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Créer une formation complète 📚</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && (
            <Alert variant="success" className="d-flex align-items-center">
              <span className="me-2">✅</span>
              <span>Formation créée avec succès</span>
            </Alert>
          )}
          
          {error && (
            <Alert variant="danger" className="d-flex align-items-center">
              <span className="me-2">❌</span>
              <span>{error}</span>
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Titre de la formation *</Form.Label>
              <Form.Control
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                required
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                disabled={loading}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image de la formation (optionnel)</Form.Label>
              <Form.Control
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageChange}
                disabled={loading}
              />
              <Form.Text className="text-muted">
                Formats acceptés: JPG, PNG, GIF. Taille max: 2MB
              </Form.Text>
            </Form.Group>

            {imagePreview && (
              <div className="mb-3 text-center">
                <Image 
                  src={imagePreview} 
                  alt="Aperçu" 
                  fluid 
                  style={{ maxHeight: '200px', border: '1px solid #ddd', borderRadius: '4px' }} 
                />
                <div className="mt-2">
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                    disabled={loading}
                  >
                    Supprimer l'image
                  </Button>
                </div>
              </div>
            )}

            <h5 className="mt-4">Modules</h5>
            {modules.map((module, modIdx) => (
              <div key={modIdx} className="border p-3 my-2 rounded">
                <Form.Group className="mb-3">
                  <Form.Label>Titre du module {modIdx + 1} *</Form.Label>
                  <Form.Control
                    type="text"
                    value={module.titre}
                    onChange={(e) => {
                      const newModules = [...modules];
                      newModules[modIdx].titre = e.target.value;
                      setModules(newModules);
                    }}
                    required
                    disabled={loading}
                  />
                </Form.Group>

                <h6 className="mt-2">Titres (vidéos)</h6>
                {module.titres.map((titre, titreIdx) => (
                  <div key={titreIdx} className="mb-3 border-bottom pb-3">
                    <Form.Group className="mb-2">
                      <Form.Label>Nom du titre *</Form.Label>
                      <Form.Control
                        type="text"
                        value={titre.nom}
                        onChange={(e) => {
                          const newModules = [...modules];
                          newModules[modIdx].titres[titreIdx].nom = e.target.value;
                          setModules(newModules);
                        }}
                        required
                        disabled={loading}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-2">
                      <Form.Label>URL de la vidéo *</Form.Label>
                      <Form.Control
                        type="url"
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
                    </Form.Group>
                  </div>
                ))}

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => addTitre(modIdx)}
                  type="button"
                  disabled={loading}
                >
                  ➕ Ajouter un titre
                </Button>
              </div>
            ))}

            <Button
              variant="outline-primary"
              className="mt-2"
              onClick={addModule}
              type="button"
              disabled={loading}
            >
              ➕ Ajouter un module
            </Button>

            <div className="d-grid gap-2 mt-4">
              <Button 
                variant="success" 
                type="submit" 
                disabled={loading}
                className="d-flex justify-content-center align-items-center"
              >
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Création en cours...
                  </>
                ) : (
                  <>
                    <span className="me-2">✅</span>
                    Créer la formation
                  </>
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormationCompleteAdmin;