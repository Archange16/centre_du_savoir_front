"use client";

import React, { useEffect, useState } from "react";
import { Spinner, Table, Button, Alert, Pagination } from "react-bootstrap";

const LeadManager = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    fetchLeads(currentPage);
  }, [currentPage]);

  const fetchLeads = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/leads?page=${page}&limit=${pageSize}`);
      if (!res.ok) throw new Error("Erreur HTTP");
      const data = await res.json();
      setLeads(data.data);
      setTotalLeads(data.total); // 👈 total leads from API
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des leads.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Confirmer la suppression de ce lead ?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("/api/leads", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Erreur lors de la suppression.");

      setSuccessMessage("Lead supprimé avec succès.");
      fetchLeads(currentPage); // Recharger la page actuelle
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la suppression.");
    }
  };

  // 👉 Générer la pagination
  const totalPages = Math.ceil(totalLeads / pageSize);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const items = [];

    // 🔹 Affichage dynamique des numéros de pages (ex: 1 ... 4 5 6 ... 10)
  const visiblePages = 5;
  let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage < visiblePages - 1) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  // ⬅️ Bouton précédent
  items.push(
    <Pagination.Prev
      key="prev"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    />
  );

  // ⬅️ Si première page n’est pas visible
  if (startPage > 1) {
    items.push(
      <Pagination.Item key={1} onClick={() => setCurrentPage(1)}>
        1
      </Pagination.Item>
    );
    if (startPage > 2) {
      items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
    }
  }
    // 🔢 Numéros visibles
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    // ➡️ Si dernière page n’est pas visible
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
    }
    items.push(
      <Pagination.Item key={totalPages} onClick={() => setCurrentPage(totalPages)}>
        {totalPages}
      </Pagination.Item>
    );
  }

  // ➡️ Bouton suivant
  items.push(
    <Pagination.Next
      key="next"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    />
  );
    return <Pagination>{items}</Pagination>;
  };

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>Gestion des Leads</h3>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && (
        <Alert variant="success" dismissible onClose={() => setSuccessMessage(null)}>
          {successMessage}
        </Alert>
      )}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : leads.length === 0 ? (
        <p>Aucun lead trouvé.</p>
      ) : (
        <>
         <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>N°</th>
                <th>Nom</th>
                <th>Formations</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Date</th>
               {/*  <th>Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {leads.map((lead, index) => (
                <tr key={lead.id}>
                    <td>{(currentPage - 1) * pageSize + index + 1}</td>
                    <td>{lead.nom}</td>
                    <td>{Array.isArray(lead.formations) ? lead.formations.join(' | ') : '-'}</td>
                    <td>{lead.telephone || '-'}</td>
                    <td>{lead.email}</td>
                    <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                    {/* <td>
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(lead.id)}
                    >
                        Supprimer
                    </Button>
                    </td> */}
                </tr>
                ))}
            </tbody>
            </Table>

          {/* ✅ Pagination */}
          <div className="d-flex justify-content-center">{renderPagination()}</div>
        </>
      )}
    </div>
  );
};

export default LeadManager;
