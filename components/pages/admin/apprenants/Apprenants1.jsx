import { useState, useEffect } from 'react'
import { Container, Button, Alert, Row, Col, Pagination, Spinner, Card } from 'react-bootstrap'
import UserTable from './UserTable'
import AddUserModal from './AddUserModal'
import EditUserModal from './EditUserModal'

const Apprenants = () => {
  const [users, setUsers] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1
  })

  useEffect(() => {
    fetchUsers()
  }, [pagination.page])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/users?page=${pagination.page}&limit=${pagination.limit}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        setUsers(Array.isArray(data.data) ? data.data : [])
        setPagination(prev => ({
          ...prev,
          total: data.total || 0,
          totalPages: data.pagination?.totalPages || 1
        }))
      } else {
        showAlert('Erreur lors de la récupération des utilisateurs', 'danger')
      }
    } catch (error) {
      console.error('Fetch error:', error)
      showAlert('Erreur de connexion au serveur', 'danger')
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success) {
        setShowAddModal(false)
        fetchUsers()
        showAlert(result.message || 'Utilisateur ajouté avec succès', 'success')
      } else {
        const errorMsg = result.errors
          ? result.errors.map(e => e.message).join(', ')
          : result.error || 'Échec de l\'ajout de l\'utilisateur'
        showAlert(errorMsg, 'danger')
      }
    } catch (error) {
      console.error('Error adding user:', error)
      showAlert('Erreur lors de l\'ajout de l\'utilisateur', 'danger')
    }
  }

  const handleEditUser = async (userData) => {
    try {
      const response = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success) {
        setShowEditModal(false)
        setSelectedUser(null)
        fetchUsers()
        showAlert(result.message || 'Utilisateur modifié avec succès', 'success')
      } else {
        const errorMsg = result.errors
          ? result.errors.map(e => e.message).join(', ')
          : result.error || 'Échec de la modification de l\'utilisateur'
        showAlert(errorMsg, 'danger')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      showAlert('Erreur lors de la modification de l\'utilisateur', 'danger')
    }
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        const response = await fetch(`/api/users/${id}`, { method: 'DELETE' })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        
        if (result.success) {
          fetchUsers()
          showAlert(result.message || 'Utilisateur supprimé avec succès', 'success')
        } else {
          showAlert(result.error || 'Échec de la suppression de l\'utilisateur', 'danger')
        }
      } catch (error) {
        console.error('Error deleting user:', error)
        showAlert('Erreur lors de la suppression de l\'utilisateur', 'danger')
      }
    }
  }

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000)
  }

  const openEditModal = (user) => {
    setSelectedUser(user)
    setShowEditModal(true)
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }))
    }
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Gestion des Apprenants</h1>
      
      {alert.show && (
        <Alert variant={alert.type} onClose={() => setAlert({ show: false, message: '', type: '' })} dismissible>
          {alert.message}
        </Alert>
      )}
      
      <Row className="mb-3">
        <Col>
          <h2>Liste des Utilisateurs</h2>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => setShowAddModal(true)}>
            Ajouter un Utilisateur
          </Button>
        </Col>
      </Row>
      
      {loading ? (
        <div className="text-center py-4">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
          <p className="mt-2">Chargement des utilisateurs...</p>
        </div>
      ) : (
        <>
          {users.length === 0 ? (
            <Card>
              <Card.Body className="text-center py-5">
                <h5>Aucun utilisateur trouvé</h5>
                <p className="text-muted">Aucun utilisateur n'a été trouvé dans la base de données.</p>
                <Button variant="primary" onClick={fetchUsers}>
                  Réessayer
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <>
              <UserTable 
                users={users} 
                onEdit={openEditModal} 
                onDelete={handleDeleteUser} 
              />
              
              {pagination.totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <Pagination>
                    <Pagination.Prev 
                      disabled={pagination.page === 1} 
                      onClick={() => handlePageChange(pagination.page - 1)} 
                    />
                    {[...Array(pagination.totalPages)].map((_, i) => (
                      <Pagination.Item
                        key={i + 1}
                        active={i + 1 === pagination.page}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next 
                      disabled={pagination.page === pagination.totalPages} 
                      onClick={() => handlePageChange(pagination.page + 1)} 
                    />
                  </Pagination>
                </div>
              )}
            </>
          )}
        </>
      )}
      
      <AddUserModal 
        show={showAddModal} 
        onHide={() => setShowAddModal(false)} 
        onSave={handleAddUser} 
      />
      
      <EditUserModal 
        show={showEditModal} 
        onHide={() => {
          setShowEditModal(false)
          setSelectedUser(null)
        }} 
        onSave={handleEditUser} 
        user={selectedUser} 
      />
    </Container>
  )
}

export default Apprenants
