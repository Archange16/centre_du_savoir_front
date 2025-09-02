import { useState, useEffect } from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import UserTable from './UserTable'
import AddUserModal from './AddUserModal'
import EditUserModal from './EditUserModal'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const [users, setUsers] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      showAlert('Error fetching users', 'danger')
    }
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
      
      if (response.ok) {
        setShowAddModal(false)
        fetchUsers()
        showAlert('User added successfully', 'success')
      } else {
        throw new Error('Failed to add user')
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
      
      if (response.ok) {
        setShowEditModal(false)
        setSelectedUser(null)
        fetchUsers()
        showAlert('User updated successfully', 'success')
      } else {
        throw new Error('Failed to update user')
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
        
        if (response.ok) {
          fetchUsers()
          showAlert('User deleted successfully', 'success')
        } else {
          throw new Error('Failed to delete user')
        }
      } catch (error) {
        showAlert('Error deleting user', 'danger')
      }
    }
  }

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000)
  }

  const openEditModal = (user) => {
    setSelectedUser(user)
    setShowEditModal(true)
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">User Management</h1>
      
      {alert.show && (
        <Alert variant={alert.type} onClose={() => setAlert({ show: false, message: '', type: '' })} dismissible>
          {alert.message}
        </Alert>
      )}
      
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Add User
        </Button>
      </div>
      
      <UserTable 
        users={users} 
        onEdit={openEditModal} 
        onDelete={handleDeleteUser} 
      />
      
      <AddUserModal 
        show={showAddModal} 
        onHide={() => setShowAddModal(false)} 
        onSave={handleAddUser} 
      />
      
      <EditUserModal 
        show={showEditModal} 
        onHide={() => setShowEditModal(false)} 
        onSave={handleEditUser} 
        user={selectedUser} 
      />
    </Container>
  )
}