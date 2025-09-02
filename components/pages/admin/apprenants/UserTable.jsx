import { Table, Button } from 'react-bootstrap'

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Role</th>
          <th>Date de création</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            <td>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="me-2"
                onClick={() => onEdit(user)}
              >
                Modifier
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => onDelete(user.id)}
              >
                Supprimer
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default UserTable