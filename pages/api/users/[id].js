// pages/api/[users].js
import { db } from '../../../lib/db'
import { z } from 'zod'
import { hash } from 'bcryptjs'

// Schéma de validation pour PUT
const userUpdateSchema = z.object({
  email: z.string().email('Email invalide').optional(),
  username: z.string().min(1, 'Nom d\'utilisateur requis').optional(),
  password: z.string()
    .min(6, 'Mot de passe trop court')
    .optional()
    .transform(val => val === '' ? undefined : val)
    .nullable(),
  role: z.enum(['APPRENANT', 'FORMATEUR', 'ADMIN']).optional()
})

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query // ✅ id est une string (UUID)

  // ✅ GET : Récupérer un utilisateur
  if (method === 'GET') {
    try {
      const user = await db.user.findUnique({
        where: { id }, // id est une string
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
        return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' })
      }

      return res.status(200).json({ success: true, data: user })
    } catch (error) {
      console.error('GET error:', error)
      return res.status(500).json({ success: false, error: 'Erreur serveur' })
    }
  }

  // ✅ PUT : Mettre à jour un utilisateur
  if (method === 'PUT') {
    try {
      const requestData = {
        ...req.body,
        password: req.body.password === '' ? undefined : req.body.password
      }

      const validatedData = userUpdateSchema.parse(requestData)

      const existingUser = await db.user.findUnique({
        where: { id } // id string
      })

      if (!existingUser) {
        return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' })
      }

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

      const updateData = { ...validatedData }

      if (validatedData.password && validatedData.password.trim() !== '') {
        updateData.password = await hash(validatedData.password, 12)
      } else {
        delete updateData.password
      }

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
          errors: error.errors?.map(e => ({
            field: e.path?.join('.') || 'unknown',
            message: e.message || 'Erreur de validation'
          }))
        })
      }

      return res.status(500).json({
        success: false,
        error: 'Erreur lors de la mise à jour',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }
  }

  // ✅ DELETE : Supprimer un utilisateur
  if (method === 'DELETE') {
    try {
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

  // ❌ Méthode non autorisée
  return res.status(405).json({ success: false, error: `Méthode ${method} non autorisée` })
}
