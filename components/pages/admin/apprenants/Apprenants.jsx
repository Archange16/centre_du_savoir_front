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
        // Si la réponse n'est pas OK, on utilise des données mockées en production
        if (process.env.NODE_ENV === 'production') {
          console.warn('API non disponible, utilisation des données mockées')
          useMockData()
          return
        }
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
        useMockData()
      }
    } catch (error) {
      console.error('Fetch error:', error)
      showAlert('Erreur de connexion au serveur', 'danger')
      useMockData()
    } finally {
      setLoading(false)
    }
  }

  // Données mockées pour le fallback
  const useMockData = () => {
    const mockUsers = [
      {
        id: '1',
        email: 'admin@example.com',
        username: 'admin',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        email: 'formateur@example.com',
        username: 'formateur',
        role: 'FORMATEUR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        email: 'apprenant@example.com',
        username: 'apprenant',
        role: 'APPRENANT',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    setUsers(mockUsers)
    setPagination(prev => ({
      ...prev,
      total: mockUsers.length,
      totalPages: 1
    }))
  }

  const handleAddUser = async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      // Vérifier si l'API est disponible
      if (!response.ok) {
        if (process.env.NODE_ENV === 'production') {
          showAlert('Mode démo: Utilisateur simulé (API non disponible)', 'warning')
          // Simuler l'ajout en local
          const newUser = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date(),
            updatedAt: new Date()
          }
          setUsers(prev => [newUser, ...prev])
          setShowAddModal(false)
          return
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success) {
        setShowAddModal(false)
        fetchUsers() // Recharger les données
        showAlert(result.message || 'Utilisateur ajouté avec succès', 'success')
      } else {
        if (result.errors) {
          const errorMsg = result.errors.map(e => e.message).join(', ')
          showAlert(errorMsg, 'danger')
        } else {
          showAlert(result.error || 'Échec de l\'ajout de l\'utilisateur', 'danger')
        }
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      // Vérifier si l'API est disponible
      if (!response.ok) {
        if (process.env.NODE_ENV === 'production') {
          showAlert('Mode démo: Modification simulée (API non disponible)', 'warning')
          // Simuler la modification en local
          setUsers(prev => prev.map(u => 
            u.id === selectedUser.id 
              ? { ...u, ...userData, updatedAt: new Date() }
              : u
          ))
          setShowEditModal(false)
          setSelectedUser(null)
          return
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success) {
        setShowEditModal(false)
        setSelectedUser(null)
        fetchUsers() // Recharger les données
        showAlert(result.message || 'Utilisateur modifié avec succès', 'success')
      } else {
        if (result.errors) {
          const errorMsg = result.errors.map(e => e.message).join(', ')
          showAlert(errorMsg, 'danger')
        } else {
          showAlert(result.error || 'Échec de la modification de l\'utilisateur', 'danger')
        }
      }
    } catch (error) {
      console.error('Error updating user:', error)
      showAlert('Erreur lors de la modification de l\'utilisateur', 'danger')
    }
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        })
        
        // Vérifier si l'API est disponible
        if (!response.ok) {
          if (process.env.NODE_ENV === 'production') {
            showAlert('Mode démo: Suppression simulée (API non disponible)', 'warning')
            // Simuler la suppression en local
            setUsers(prev => prev.filter(u => u.id !== id))
            return
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        
        if (result.success) {
          fetchUsers() // Recharger les données
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
     {/*  <h1 className="text-center mb-4">Gestion des Apprenants</h1> */}
      
      {alert.show && (
        <Alert variant={alert.type} onClose={() => setAlert({ show: false, message: '', type: '' })} dismissible>
          {alert.message}
        </Alert>
      )}
      
      <Row className="mb-3">
        <Col>
          <h2>Liste des Utilisateurs</h2>
          {process.env.NODE_ENV === 'production' && users.length > 0 && users[0].id.includes('example') && (
            <Alert variant="warning" className="mt-2">
              <small>Mode démonstration : données simulées</small>
            </Alert>
          )}
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
                <p className="text-muted">
                  {process.env.NODE_ENV === 'production' 
                    ? "L'API n'est pas disponible pour le moment. Veuillez réessayer plus tard."
                    : "Aucun utilisateur n'a été trouvé dans la base de données."
                  }
                </p>
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