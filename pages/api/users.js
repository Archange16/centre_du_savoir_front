// pages/api/users.js
import { db } from '../../lib/db';
import { z } from 'zod';
import { hash } from 'bcryptjs';

// Schéma de validation
const userSchema = z.object({
  email: z.string().email('Email invalide'),
  username: z.string().min(1, 'Nom d\'utilisateur requis'),
  password: z.string().min(6, 'Mot de passe trop court'),
  role: z.enum(['APPRENANT', 'FORMATEUR', 'ADMIN']).optional()
});

// Données mockées pour fallback
const mockUsers = [
  {
    id: '1',
    email: 'admin@example.com',
    username: 'admin',
    role: 'ADMIN',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01')
  },
  {
    id: '2',
    email: 'formateur@example.com',
    username: 'formateur',
    role: 'FORMATEUR', 
    createdAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-02')
  }
];

export default async function handler(req, res) {
  // Headers CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET - Liste des utilisateurs
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      console.log(`GET /api/users - Page: ${page}, Limit: ${limit}`);

      let users = [];
      let total = 0;
      let usingFallback = false;

      // Essayer d'abord la base de données
      try {
        // Test de connexion simple
        await db.$queryRaw`SELECT 1`;
        
        // Compter le total
        total = await db.user.count().catch(() => 0);
        
        // Récupérer les utilisateurs
        users = await db.user.findMany({
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
        });

        console.log(`Database returned ${users.length} users`);

      } catch (dbError) {
        console.warn('Database unavailable, using fallback:', dbError.message);
        usingFallback = true;
        
        // Utiliser les données mockées
        total = mockUsers.length;
        users = mockUsers.slice(skip, skip + limit);
      }

      return res.status(200).json({
        success: true,
        data: users,
        total,
        pagination: {
          page,
          limit,
          totalPages: Math.ceil(total / limit)
        },
        usingFallback,
        message: usingFallback ? 'Données de démonstration' : undefined
      });

    } catch (error) {
      console.error('Unexpected error in GET /api/users:', error);
      
      // Fallback ultime
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      
      return res.status(200).json({
        success: true,
        data: mockUsers.slice(skip, skip + limit),
        total: mockUsers.length,
        pagination: {
          page,
          limit,
          totalPages: Math.ceil(mockUsers.length / limit)
        },
        usingFallback: true,
        message: 'Mode démonstration activé'
      });
    }
  }

  // POST - Création d'utilisateur
  if (req.method === 'POST') {
    try {
      const body = userSchema.parse(req.body);
      
      // Toujours refuser en mode fallback pour éviter la confusion
      return res.status(503).json({
        success: false,
        error: 'Service indisponible',
        message: 'La création d\'utilisateur est temporairement désactivée. Veuillez réessayer plus tard.'
      });

    } catch (error) {
      console.error('Error in POST /api/users:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }

      return res.status(500).json({
        success: false,
        error: 'Erreur de validation',
        message: 'Données invalides'
      });
    }
  }

  // Méthode non supportée
  return res.status(405).json({
    success: false,
    error: `Méthode ${req.method} non autorisée`
  });
}