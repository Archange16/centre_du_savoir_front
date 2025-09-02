"use client";
import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AssignFormationModal = ({ formationId }) => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const open = () => setShow(true);
  const close = () => setShow(false);

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/apprenant");
      const data = await res.json();
      console.log("Données reçues:", data);

      const usersArray = Array.isArray(data.data) ? data.data : [];
      setUsers(usersArray);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
      setUsers([]);
    }
  };

  fetchUsers();
}, []);


  const handleAssign = async () => {
    if (!selectedUser) return;
    console.log("Assigning formation", formationId, "to user", selectedUser);

    const res = await fetch("/api/assign-formation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: selectedUser, formationId }),
    });

    const result = await res.json();

    if (result.success) {
      alert("✅ Formation assignée !");
      close();
    } else {
      alert(result.message || "Erreur lors de l’assignation");
    }
  };

  return (
    <>
      <Button variant="outline-light" size="sm" onClick={open}>
        🎯 Assigner à un utilisateur
      </Button>

      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Assigner la formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Choisir un utilisateur</Form.Label>
            <Form.Select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">-- Sélectionner un utilisateur --</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username || `Utilisateur #${user.id}`}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAssign} disabled={!selectedUser}>
            ✅ Assigner
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AssignFormationModal;
