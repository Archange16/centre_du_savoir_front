import { db } from '../../lib/db';
import { z } from 'zod';
import { hash } from 'bcrypt';

// Schéma de validation pour POST
const userSchema = z.object({
  email: z.string().email('Email invalide'),
  username: z.string().min(1, 'Nom d\'utilisateur requis'),
  password: z.string().min(6, 'Mot de passe trop court'),
  role: z.enum(['APPRENANT', 'FORMATEUR', 'ADMIN']).optional()
});

// Fonction de fallback pour la base de données
const getFallbackData = (page, limit) => {
  const skip = (page - 1) * limit;
  const mockUsers = [
    {
      id: '1',
      email: 'admin@example.com',
      username: 'admin',
      role: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      email: 'formateur@example.com',
      username: 'formateur',
      role: 'FORMATEUR',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      email: 'apprenant@example.com',
      username: 'apprenant',
      role: 'APPRENANT',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  
  return {
    users: mockUsers.slice(skip, skip + limit),
    total: mockUsers.length
  };
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ✅ GET : liste paginée des utilisateurs
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      console.log('Fetching users with pagination:', { page, limit, skip });

      let users, total;

      try {
        // Test de connexion à la base de données
        await db.$queryRaw`SELECT 1`;
        
        [users, total] = await Promise.all([
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
        ]);

        console.log('Database users found:', users.length);
        console.log('Total users in DB:', total);

      } catch (dbError) {
        console.warn('Database connection failed, using fallback data:', dbError.message);
        // Utiliser des données de fallback si la base de données n'est pas disponible
        const fallbackData = getFallbackData(page, limit);
        users = fallbackData.users;
        total = fallbackData.total;
        console.log('Using fallback users:', users.length);
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
        isFallbackData: users.some(user => user.id === '1') // Indicateur pour le frontend
      });
    } catch (error) {
      console.error('Error in GET /api/users:', error);
      
      // Fallback en cas d'erreur générale
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const fallbackData = getFallbackData(page, limit);
      
      return res.status(200).json({ 
        success: true, 
        data: fallbackData.users, 
        total: fallbackData.total,
        pagination: {
          page,
          limit,
          totalPages: Math.ceil(fallbackData.total / limit)
        },
        isFallbackData: true,
        message: 'Données de démonstration (base de données non disponible)'
      });
    }
  }

  // ✅ POST : création d'un nouvel utilisateur
  if (req.method === 'POST') {
    try {
      console.log('POST request received:', req.body);
      
      const body = userSchema.parse(req.body);
      console.log('Validated data:', body);

      // Vérifier la connexion à la base de données
      let dbAvailable = true;
      try {
        await db.$queryRaw`SELECT 1`;
      } catch (dbError) {
        dbAvailable = false;
        console.warn('Database not available for POST:', dbError.message);
      }

      if (!dbAvailable) {
        return res.status(503).json({
          success: false,
          error: 'Service indisponible',
          message: 'La base de données n\'est pas disponible pour le moment. Veuillez réessayer plus tard.'
        });
      }

      // Vérifier si l'email ou le username existe déjà
      const existingUser = await db.user.findFirst({
        where: {
          OR: [
            { email: body.email },
            { username: body.username }
          ]
        }
      });

      if (existingUser) {
        console.log('User already exists:', existingUser);
        return res.status(400).json({
          success: false,
          error: existingUser.email === body.email 
            ? 'Cet email est déjà utilisé' 
            : 'Ce nom d\'utilisateur est déjà utilisé'
        });
      }

      // Hacher le mot de passe
      const hashedPassword = await hash(body.password, 12);
      console.log('Password hashed successfully');

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
          createdAt: true
        }
      });

      console.log('User created successfully:', newUser);

      return res.status(201).json({
        success: true,
        data: newUser,
        message: 'Utilisateur créé avec succès'
      });

    } catch (error) {
      console.error('Error in POST /api/users:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path ? e.path.join('.') : 'unknown',
            message: e.message || 'Validation error'
          }))
        });
      }

      return res.status(500).json({ 
        success: false,
        error: 'Erreur serveur lors de la création',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Une erreur est survenue lors de la création de l\'utilisateur'
      });
    }
  }

  // ❌ Méthode non supportée
  return res.status(405).json({ 
    success: false,
    error: `Méthode ${req.method} non autorisée` 
  });
}