import { Table, Button, Badge } from 'react-bootstrap'

const UserTable = ({ users, onEdit, onDelete }) => {
  // S'assurer que users est toujours un tableau
  const userList = Array.isArray(users) ? users : []
  
  const getRoleVariant = (role) => {
    switch (role) {
      case 'ADMIN': return 'danger'
      case 'FORMATEUR': return 'warning'
      case 'APPRENANT': return 'info'
      default: return 'secondary'
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center py-4">
              No users found
            </td>
          </tr>
        ) : (
          userList.map((user) => (
            <tr key={user.id}>
              <td className="fw-bold">{user.username || 'N/A'}</td>
              <td>{user.email || 'N/A'}</td>
              <td>
                <Badge bg={getRoleVariant(user.role)}>
                  {user.role || 'N/A'}
                </Badge>
              </td>
              <td>{formatDate(user.createdAt)}</td>
              <td>{formatDate(user.updatedAt)}</td>
              <td>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="me-2"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  )
}

export default UserTable