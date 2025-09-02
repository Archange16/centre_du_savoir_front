import { db } from '../../../lib/db';
import { z } from 'zod'
import { hash } from 'bcrypt'

// Schéma de validation corrigé pour PUT
const userUpdateSchema = z.object({
  email: z.string().email('Email invalide').optional(),
  username: z.string().min(1, 'Nom d\'utilisateur requis').optional(),
  // Correction: utiliser .optional() avec une transformation pour les chaînes vides
  password: z.string()
    .min(6, 'Mot de passe trop court')
    .optional()
    .transform(val => val === '' ? undefined : val)
    .nullable(),
  role: z.enum(['APPRENANT', 'FORMATEUR', 'ADMIN']).optional()
})

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query

  // ✅ GET : récupérer un utilisateur spécifique
  if (method === 'GET') {
    try {
      const user = await db.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          username: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      })
      
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' })
      }
      
      res.status(200).json({ success: true, data: user })
    } catch (error) {
      console.error('GET error:', error)
      res.status(500).json({ success: false, error: 'Internal server error' })
    }
  }

  // ✅ PUT : mise à jour d'un utilisateur
  else if (method === 'PUT') {
    try {
      console.log('PUT request received for user:', id)
      console.log('Request body:', req.body)

      // Transformation préalable pour gérer les chaînes vides
      const requestData = {
        ...req.body,
        password: req.body.password === '' ? undefined : req.body.password
      }

      const validatedData = userUpdateSchema.parse(requestData)
      console.log('Validated data:', validatedData)

      // Vérifier si l'utilisateur existe
      const existingUser = await db.user.findUnique({
        where: { id }
      })

      if (!existingUser) {
        return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' })
      }

      // Vérifier si l'email ou le username existe déjà (pour un autre utilisateur)
      if (validatedData.email || validatedData.username) {
        const whereConditions = []
        
        if (validatedData.email) {
          whereConditions.push({ email: validatedData.email })
        }
        
        if (validatedData.username) {
          whereConditions.push({ username: validatedData.username })
        }

        const conflictingUser = await db.user.findFirst({
          where: {
            AND: [
              { id: { not: id } },
              { OR: whereConditions }
            ]
          }
        })

        if (conflictingUser) {
          return res.status(400).json({
            success: false,
            error: conflictingUser.email === validatedData.email 
              ? 'Cet email est déjà utilisé' 
              : 'Ce nom d\'utilisateur est déjà utilisé'
          })
        }
      }

      // Préparer les données de mise à jour
      const updateData = { ...validatedData }

      // Hacher le nouveau mot de passe s'il est fourni et non vide
      if (validatedData.password && validatedData.password.trim() !== '') {
        updateData.password = await hash(validatedData.password, 12)
      } else {
        // Ne pas inclure le mot de passe s'il n'est pas fourni ou vide
        delete updateData.password
      }

      console.log('Update data (after password processing):', updateData)

      const updatedUser = await db.user.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          email: true,
          username: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      })

      console.log('User updated successfully:', updatedUser)

      return res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Utilisateur mis à jour avec succès'
      })

    } catch (error) {
      console.error('Update error:', error)
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors ? error.errors.map(e => ({
            field: e.path ? e.path.join('.') : 'unknown',
            message: e.message || 'Validation error'
          })) : [{ field: 'unknown', message: 'Validation error' }]
        })
      }

      return res.status(500).json({ 
        success: false, 
        error: 'Erreur lors de la mise à jour',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }
  }

  // ✅ DELETE : suppression d'un utilisateur
  else if (method === 'DELETE') {
    try {
      // Vérifier si l'utilisateur existe
      const existingUser = await db.user.findUnique({
        where: { id }
      })

      if (!existingUser) {
        return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' })
      }

      await db.user.delete({
        where: { id }
      })

      return res.status(200).json({
        success: true,
        message: 'Utilisateur supprimé avec succès'
      })
    } catch (error) {
      console.error('Delete error:', error)
      return res.status(500).json({ success: false, error: 'Erreur lors de la suppression' })
    }
  }

  // ❌ Méthode non supportée
  else {
    return res.status(405).json({ success: false, error: `Méthode ${method} non autorisée` })
  }
}