import { useState, useEffect } from 'react'
import { Modal, Button, Form, Alert, InputGroup } from 'react-bootstrap'
import { Eye, EyeSlash } from 'react-bootstrap-icons'

const EditUserModal = ({ show, onHide, onSave, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'APPRENANT'
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
        password: '', // Password is not pre-filled for security
        role: user.role
      })
    }
    setErrors({})
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.username) {
      newErrors.username = 'Username is required'
    }
    
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    
    setSubmitting(true)
    await onSave(formData)
    setSubmitting(false)
  }

  const handleClose = () => {
    setFormData({
      email: '',
      username: '',
      password: '',
      role: 'APPRENANT'
    })
    setErrors({})
    onHide()
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  if (!user) return null

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit User: {user.username}</Modal.Title>
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
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Password (leave blank to keep current)</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Enter new password (min 6 characters)"
              />
              <Button 
                variant="outline-secondary" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Text className="text-muted">
              Le mot de passe sera haché avant d'être stocké en base de données
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="APPRENANT">Apprenant</option>
              <option value="FORMATEUR">Formateur</option>
              <option value="ADMIN">Admin</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={submitting}>
          Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSubmit} 
          disabled={submitting}
        >
          {submitting ? 'Updating...' : 'Update User'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditUserModal