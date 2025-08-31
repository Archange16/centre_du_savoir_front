"use client";
import React, { useEffect, useState } from "react";
import { Spinner, Table, Button, Alert, Pagination } from "react-bootstrap";

const LeadManager = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeads, setSelectedLeads] = useState(new Set());
  const [exporting, setExporting] = useState(false);
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
      console.log("Leads reçus:", data.data);
      setLeads(data.data);
      setTotalLeads(data.total);
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
      fetchLeads(currentPage);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la suppression.");
    }
  };

  const handleSelectLead = (id) => {
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedLeads(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedLeads.size === leads.length) {
      setSelectedLeads(new Set());
    } else {
      const allIds = leads.map(lead => lead.id);
      setSelectedLeads(new Set(allIds));
    }
  };

  const exportToCSV = async (exportAll = false) => {
    try {
      setExporting(true);
      const ids = exportAll ? [] : Array.from(selectedLeads);
      
      const res = await fetch("/api/export-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: exportAll ? null : ids }),
      });
      
      if (!res.ok) throw new Error("Erreur lors de l'export");
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setSuccessMessage("Export CSV réussi !");
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'export CSV.");
    } finally {
      setExporting(false);
    }
  };

  const totalPages = Math.ceil(totalLeads / pageSize);
  
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const items = [];
    const visiblePages = 5;
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, totalPages);
    
    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    items.push(
      <Pagination.Prev 
        key="prev" 
        disabled={currentPage === 1} 
        onClick={() => setCurrentPage(currentPage - 1)} 
      />
    );

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

    for (let number = startPage; number <= endPage; number++) {
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

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }
      items.push(
        <Pagination.Item 
          key={totalPages} 
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

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
      <div className="main-title d-flex justify-content-between align-items-center">
        <h3>Gestion des Leads</h3>
        <div>
          <Button 
            variant="outline-primary" 
            className="me-2"
            onClick={() => exportToCSV(false)}
            disabled={selectedLeads.size === 0 || exporting}
          >
            {exporting ? <Spinner animation="border" size="sm" /> : "Exporter les sélectionnés"}
          </Button>
          <Button 
            variant="primary"
            onClick={() => exportToCSV(true)}
            disabled={exporting}
          >
            {exporting ? <Spinner animation="border" size="sm" /> : "Exporter tout"}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      
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
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectedLeads.size === leads.length && leads.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>N°</th>
                <th>Nom</th>
                <th>Situation</th>
                <th>Formations</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={lead.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedLeads.has(lead.id)}
                      onChange={() => handleSelectLead(lead.id)}
                    />
                  </td>
                  <td>{(currentPage - 1) * pageSize + index + 1}</td>
                  <td>{lead.nom}</td>
                  <td>{lead.situation}</td>
                  <td>{Array.isArray(lead.formations) ? lead.formations.join(' | ') : '-'}</td>
                  <td>{lead.telephone || '-'}</td>
                  <td>{lead.email}</td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          <div className="d-flex justify-content-center mt-3">
            {renderPagination()}
          </div>
        </>
      )}
    </div>
  );
};

export default LeadManager;