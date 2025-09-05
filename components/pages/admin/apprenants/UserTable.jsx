import { Table, Button, Badge, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  const [userList, setUserList] = useState([]);
  const [loadingIds, setLoadingIds] = useState(new Set());

  useEffect(() => {
    if (Array.isArray(users)) {
      setUserList(users);
    }
  }, [users]);

  const getRoleVariant = (role) => {
    switch (role) {
      case 'ADMIN': return 'danger';
      case 'FORMATEUR': return 'warning';
      case 'APPRENANT': return 'info';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleStatus = async (user) => {
    const newStatus = !user.status;
    setLoadingIds((prev) => new Set(prev).add(user.id));

    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || 'Erreur lors de la mise à jour du statut');
        return;
      }

      alert(`Utilisateur ${newStatus ? 'activé' : 'désactivé'} avec succès !`);

      // ✅ Mettre à jour l'utilisateur localement dans la liste
      setUserList((prevList) =>
        prevList.map((u) =>
          u.id === user.id ? { ...u, status: newStatus, updatedAt: new Date().toISOString() } : u
        )
      );
    } catch (error) {
      console.error('Erreur réseau lors du changement de statut :', error);
      alert('Erreur réseau');
    } finally {
      setLoadingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(user.id);
        return newSet;
      });
    }
  };

  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Statut</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center py-4">
              Aucun utilisateur trouvé
            </td>
          </tr>
        ) : (
          userList.map((user) => {
            const isLoading = loadingIds.has(user.id);
            return (
              <tr key={user.id}>
                <td className="fw-bold">{user.username || 'N/A'}</td>
                <td>{user.email || 'N/A'}</td>
                <td>
                  <Badge bg={getRoleVariant(user.role)}>
                    {user.role || 'N/A'}
                  </Badge>
                </td>
                <td>
                  {user.status ? (
                    <Badge bg="success">Actif</Badge>
                  ) : (
                    <Badge bg="secondary">Inactif</Badge>
                  )}
                </td>
                <td>{formatDate(user.createdAt)}</td>
                <td>{formatDate(user.updatedAt)}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => onEdit(user)}
                    disabled={isLoading}
                  >
                    Éditer
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="me-2"
                    onClick={() => onDelete(user.id)}
                    disabled={isLoading}
                  >
                    Supprimer
                  </Button>
                  {user.role === 'APPRENANT' && (
                    <Button
                      variant={user.status ? 'warning' : 'success'}
                      size="sm"
                      onClick={() => toggleStatus(user)}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-1"
                          />
                          Chargement...
                        </>
                      ) : user.status ? 'Désactiver' : 'Activer'}
                    </Button>
                  )}
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
