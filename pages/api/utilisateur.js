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

export default async function handler(req, res) {
  // ✅ GET : liste paginée des utilisateurs
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      console.log('Fetching users with pagination:', { page, limit, skip });

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
      ]);

       return res.status(200).json({ success: true, data: users, total });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  // ✅ POST : création d'un nouvel utilisateur
  if (req.method === 'POST') {
    try {
      console.log('POST request received:', req.body);
      
      const body = userSchema.parse(req.body);
      console.log('Validated data:', body);

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
          errors: error.errors ? error.errors.map(e => ({
            field: e.path ? e.path.join('.') : 'unknown',
            message: e.message || 'Validation error'
          })) : [{ field: 'unknown', message: 'Validation error' }]
        });
      }

      return res.status(500).json({ 
        success: false,
        error: 'Erreur serveur lors de la création',
        message: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // ❌ Méthode non supportée
  return res.status(405).json({ 
    success: false,
    error: `Méthode ${req.method} non autorisée` 
  });
}