import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const FormationCompleteAdmin = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [modules, setModules] = useState([
    { titre: "", ordre: 1, titres: [{ nom: "", videoUrl: "", ordre: 1 }] },
  ]);
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

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

  const resetForm = () => {
    setTitre("");
    setDescription("");
    setModules([
      { titre: "", ordre: 1, titres: [{ nom: "", videoUrl: "", ordre: 1 }] },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/formations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titre, description }),
      });

      //const formation = await res.json();
      const result = await res.json();
      const formationId = result.data.id; // 👈 récupère le vrai id

      for (const mod of modules) {
        const moduleRes   = await fetch("/api/modules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            titre: mod.titre,
            ordre: mod.ordre,
            formationId: formationId,
          }),
        });

        const moduleResult = await moduleRes.json();
        const moduleId = moduleResult.id;

        for (const t of mod.titres) {
           // console.log("Titre envoyé :", t, "Module ID :", moduleId);
          await fetch("/api/titres", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nom: t.nom,
              videoUrl: t.videoUrl,
              ordre: t.ordre,
              moduleId: moduleId,
            }),
          });
        }
      }

      setSuccess(true);
      resetForm();
      setShow(false); // 👈 Fermer le modal après succès
    } catch (err) {
      console.error("Erreur lors de la création :", err);
    }
  };

  return (
    <>
      {/* ✅ Bouton pour afficher le Modal */}
      <Button variant="primary" onClick={() => setShow(true)}>
        ➕ Ajouter une formation complète
      </Button>

      {/* ✅ Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Créer une formation complète 📚</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && (
            <p className="text-success">Formation créée avec succès ✅</p>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Titre de la formation"
              className="my-2"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              required
            />
            <Form.Control
              as="textarea"
              placeholder="Description"
              className="my-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <h5 className="mt-4">Modules</h5>
            {modules.map((module, modIdx) => (
              <div key={modIdx} className="border p-3 my-2 rounded">
                <Form.Control
                  type="text"
                  placeholder={`Titre du module ${modIdx + 1}`}
                  className="my-2"
                  value={module.titre}
                  onChange={(e) => {
                    const newModules = [...modules];
                    newModules[modIdx].titre = e.target.value;
                    setModules(newModules);
                  }}
                  required
                />

                <h6 className="mt-2">Titres (vidéos)</h6>
                {module.titres.map((titre, titreIdx) => (
                  <div key={titreIdx} className="mb-2">
                    <Form.Control
                      type="text"
                      className="my-1"
                      placeholder="Nom du titre"
                      value={titre.nom}
                      onChange={(e) => {
                        const newModules = [...modules];
                        newModules[modIdx].titres[titreIdx].nom =
                          e.target.value;
                        setModules(newModules);
                      }}
                      required
                    />
                    <Form.Control
                      type="text"
                      className="mb-1"
                      placeholder="URL de la vidéo"
                      value={titre.videoUrl}
                      onChange={(e) => {
                        const newModules = [...modules];
                        newModules[modIdx].titres[titreIdx].videoUrl =
                          e.target.value;
                        setModules(newModules);
                      }}
                      required
                    />
                  </div>
                ))}

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => addTitre(modIdx)}
                >
                  ➕ Ajouter un titre
                </Button>
              </div>
            ))}

            <Button
              variant="outline-primary"
              className="mt-2"
              onClick={addModule}
            >
              ➕ Ajouter un module
            </Button>

            <Button variant="success" type="submit" className="mt-4 d-block">
              ✅ Créer la formation
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormationCompleteAdmin;
