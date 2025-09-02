import { useState, useEffect } from 'react'
import { Container, Button, Alert, Row, Col, Pagination, Spinner } from 'react-bootstrap'
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
      const response = await fetch(`/api/utilisateur?page=${pagination.page}&limit=${pagination.limit}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch users')
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
        showAlert('Error fetching users', 'danger')
        setUsers([])
      }
    } catch (error) {
      console.error('Fetch error:', error)
      showAlert('Error fetching users', 'danger')
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (userData) => {
    try {
      const response = await fetch('/api/utilisateur', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setShowAddModal(false)
        fetchUsers()
        showAlert(result.message || 'User added successfully', 'success')
      } else {
        if (result.errors) {
          const errorMsg = result.errors.map(e => e.message).join(', ')
          showAlert(errorMsg, 'danger')
        } else {
          showAlert(result.error || 'Failed to add user', 'danger')
        }
      }
    } catch (error) {
      showAlert('Error adding user', 'danger')
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
      
      const result = await response.json()
      
      if (result.success) {
        setShowEditModal(false)
        setSelectedUser(null)
        fetchUsers()
        showAlert(result.message || 'User updated successfully', 'success')
      } else {
        if (result.errors) {
          const errorMsg = result.errors.map(e => e.message).join(', ')
          showAlert(errorMsg, 'danger')
        } else {
          showAlert(result.error || 'Failed to update user', 'danger')
        }
      }
    } catch (error) {
      showAlert('Error updating user', 'danger')
    }
  }

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        })
        
        const result = await response.json()
        
        if (result.success) {
          fetchUsers()
          showAlert(result.message || 'User deleted successfully', 'success')
        } else {
          showAlert(result.error || 'Failed to delete user', 'danger')
        }
      } catch (error) {
        showAlert('Error deleting user', 'danger')
      }
    }
  }

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000)
  }

  // Définition de la fonction openEditModal qui manquait
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
        </div>
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