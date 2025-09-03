// components/AddUserModal.jsx
import { useState } from 'react'
import { Modal, Button, Form, InputGroup } from 'react-bootstrap'
import { Eye, EyeSlash } from 'react-bootstrap-icons'

const AddUserModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'APPRENANT'
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email requis'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!formData.username) {
      newErrors.username = 'Nom d\'utilisateur requis'
    }

    if (!formData.password) {
      newErrors.password = 'Mot de passe requis'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setSubmitting(true)

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          const apiErrors = {}
          data.errors.forEach(err => {
            apiErrors[err.field] = err.message
          })
          setErrors(apiErrors)
        } else {
          alert(data.message || 'Une erreur est survenue.')
        }
      } else {
        // Succès
        resetForm()
        onHide()
      }
    } catch (error) {
      alert('Erreur de connexion au serveur.')
      console.error(error)
    }

    setSubmitting(false)
  }

  const resetForm = () => {
    setFormData({
      email: '',
      username: '',
      password: '',
      role: 'APPRENANT'
    })
    setErrors({})
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un nouvel utilisateur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="Ex: nom@example.com"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nom d'utilisateur *</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
              placeholder="Nom d'utilisateur"
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mot de passe *</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Minimum 6 caractères"
              />
              <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Text className="text-muted">
              Le mot de passe sera chiffré.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rôle</Form.Label>
            <Form.Select name="role" value={formData.role} onChange={handleChange}>
              <option value="APPRENANT">Apprenant</option>
              <option value="FORMATEUR">Formateur</option>
              <option value="ADMIN">Admin</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={submitting}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
          {submitting ? 'Ajout...' : 'Ajouter'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddUserModal
