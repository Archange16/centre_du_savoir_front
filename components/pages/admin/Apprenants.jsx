// components/UserTable.jsx
"use client";

import { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [deleteLoading, setDeleteLoading] = useState(null);
  
  // États pour les modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  // États pour les formulaires
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);

  // Charger les utilisateurs
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des utilisateurs1');
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  // Ouvrir le modal d'édition
  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: '',
      confirmPassword: ''
    });
    setFormErrors({});
    setShowEditModal(true);
  };

  // Ouvrir le modal d'ajout
  const handleAdd = () => {
    setSelectedUser(null);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setFormErrors({});
    setShowAddModal(true);
  };

  // Fermer les modals
  const handleCloseModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setFormErrors({});
  };

  // Gérer les changements dans les formulaires
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur du champ lorsqu'on commence à taper
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Valider le formulaire
  const validateForm = () => {
    const errors = {};
    
    if (!formData.username.trim()) errors.username = 'Le nom d\'utilisateur est requis';
    if (!formData.email.trim()) errors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email invalide';
    
    if (showAddModal) {
      if (!formData.password) errors.password = 'Le mot de passe est requis';
      else if (formData.password.length < 8) errors.password = 'Le mot de passe doit avoir au moins 8 caractères';
      
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Les mots de passe ne correspondent pas';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Soumettre le formulaire (ajout ou modification)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitLoading(true);
    
    try {
      const url = showAddModal ? '/api/user' : `/api/user/${selectedUser.id}`;
      const method = showAddModal ? 'POST' : 'PUT';
      
      // Préparer les données à envoyer
      const submitData = showAddModal 
        ? { username: formData.username, email: formData.email, password: formData.password }
        : { username: formData.username, email: formData.email };
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la sauvegarde');
      }
      
      // Recharger la liste des utilisateurs
      await fetchUsers();
      
      // Fermer le modal et réinitialiser le formulaire
      handleCloseModals();
      alert(showAddModal ? 'Utilisateur ajouté avec succès!' : 'Utilisateur modifié avec succès!');
      
    } catch (err) {
      alert('Erreur: ' + err.message);
      console.error('Erreur:', err);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Supprimer un utilisateur
  const handleDelete = async (userId) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      return;
    }

    try {
      setDeleteLoading(userId);
      const response = await fetch(`/api/user/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la suppression');
      }

      // Mettre à jour la liste des utilisateurs
      setUsers(users.filter(user => user.id !== userId));
      
      alert('Utilisateur supprimé avec succès');
    } catch (err) {
      alert('Erreur lors de la suppression: ' + err.message);
      console.error('Erreur:', err);
    } finally {
      setDeleteLoading(null);
    }
  };

  // Calcul de la pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Erreur: {error}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestion des Apprenants</h2>
        <button 
          className="btn btn-primary"
          onClick={handleAdd}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Ajouter Utilisateur
        </button>
      </div>

      <div className="">
        <div className="card-body">
          {users.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">Aucun utilisateur trouvé</p>
            </div>
          ) : (
            <>
              <div className="table-responsive rounded">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">N°</th>
                      <th scope="col">Nom d'utilisateur</th>
                      <th scope="col">Email</th>
                      <th scope="col" className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user, index) => (
                      <tr key={user.id}>
                        <th scope="row">{indexOfFirstItem + index + 1}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td className="text-center">
                          <div className="btn-group" role="group">
                            <button
                              onClick={() => handleEdit(user)}
                              className="btn btn-outline-primary btn-sm me-2"
                            >
                              <i className="bi bi-pencil"></i> Modifier
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              disabled={deleteLoading === user.id}
                              className="btn btn-outline-danger btn-sm"
                            >
                              {deleteLoading === user.id ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-1" />
                                  Suppression...
                                </>
                              ) : (
                                <>
                                  <i className="bi bi-trash"></i> Supprimer
                                </>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Précédent
                      </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => paginate(number)}
                        >
                          {number}
                        </button>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Suivant
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
        </div>
      </div>

      <div className="mt-3">
        <small className="text-muted">
          Affichage de {indexOfFirstItem + 1} à {Math.min(indexOfLastItem, users.length)} sur {users.length} utilisateurs
        </small>
      </div>

      {/* Modal d'ajout */}
      {showAddModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter un utilisateur</h5>
                <button type="button" className="btn-close" onClick={handleCloseModals}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {formErrors.username && <div className="invalid-feedback">{formErrors.username}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input
                      type="password"
                      className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                    <input
                      type="password"
                      className={`form-control ${formErrors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    {formErrors.confirmPassword && <div className="invalid-feedback">{formErrors.confirmPassword}</div>}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModals}>
                    Annuler
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitLoading}>
                    {submitLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Ajout...
                      </>
                    ) : (
                      'Ajouter'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal de modification */}
      {showEditModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modifier l'utilisateur</h5>
                <button type="button" className="btn-close" onClick={handleCloseModals}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="editUsername" className="form-label">Nom d'utilisateur</label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                      id="editUsername"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                    {formErrors.username && <div className="invalid-feedback">{formErrors.username}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="editEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      id="editEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="editPassword" className="form-label">Nouveau mot de passe (laisser vide pour ne pas changer)</label>
                    <input
                      type="password"
                      className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                      id="editPassword"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Laisser vide pour ne pas changer"
                    />
                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModals}>
                    Annuler
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitLoading}>
                    {submitLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Modification...
                      </>
                    ) : (
                      'Modifier'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;