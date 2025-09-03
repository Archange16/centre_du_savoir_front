// pages/api/users.js
import { db } from '../../lib/db'
import { z } from 'zod'
import { hash } from 'bcryptjs'

// Validation schema
const userSchema = z.object({
  email: z.string().email('Email invalide'),
  username: z.string().min(1, 'Nom d\'utilisateur requis'),
  password: z.string().min(6, 'Mot de passe trop court'),
  role: z.enum(['APPRENANT', 'FORMATEUR', 'ADMIN']).optional()
})

// GET + POST Handler
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10
      const skip = (page - 1) * limit

      const [users, total] = await Promise.all([
        db.user.findMany({
          skip,
          take: limit,
          select: {
            id: true,
            email: true,
            username: true,
            role: true,
            createdAt: true,
            updatedAt: true
          },
          orderBy: { createdAt: 'desc' }
        }),
        db.user.count()
      ])

      return res.status(200).json({
        success: true,
        data: users,
        total,
        pagination: {
          page,
          limit,
          totalPages: Math.ceil(total / limit)
        }
      })

    } catch (error) {
      console.error('GET error:', error)
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur'
      })
    }
  }

  if (req.method === 'POST') {
    try {
      const body = userSchema.parse(req.body)

      // Vérifier si l'email existe déjà
      const existing = await db.user.findUnique({
        where: { email: body.email }
      })

      if (existing) {
        return res.status(409).json({
          success: false,
          message: 'Email déjà utilisé'
        })
      }

      const hashedPassword = await hash(body.password, 10)

      const newUser = await db.user.create({
        data: {
          email: body.email,
          username: body.username,
          password: hashedPassword,
          role: body.role || 'APPRENANT'
        },
        select: {
          id: true,
          email: true,
          username: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      })

      return res.status(201).json({
        success: true,
        data: newUser,
        message: 'Utilisateur créé'
      })

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        })
      }

      console.error('POST error:', error)
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur'
      })
    }
  }

  return res.status(405).json({
    success: false,
    message: `Méthode ${req.method} non autorisée`
  })
}
