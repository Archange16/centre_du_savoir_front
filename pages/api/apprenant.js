import { db } from '../../lib/db'; // adapte ce chemin si besoin
import { z } from 'zod';

// Schéma de validation pour POST/PUT
/* const userSchema = z.object({
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

  // ✅ POST : création d’un nouvel utilisateur
  if (req.method === 'POST') {
    try {
      const body = userSchema.parse(req.body);

      const newUser = await db.user.create({
        data: {
          email: body.email,
          username: body.username,
          password: body.password, // ⚠️ À hasher dans un vrai projet !
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

      return res.status(201).json({
        success: true,
        data: newUser,
        message: 'Utilisateur créé avec succès'
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Erreur serveur lors de la création' });
    }
  }

  // ✅ PUT : mise à jour d’un utilisateur
  if (req.method === 'PUT') {
    try {
      const { id, ...data } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID requis pour mise à jour' });
      }

      const validatedData = userSchema.parse(data);

      const updatedUser = await db.user.update({
        where: { id },
        data: validatedData
      });

      return res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Utilisateur mis à jour avec succès'
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }

      console.error('Update error:', error);
      return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
  }

  // ✅ DELETE : suppression d’un utilisateur
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID requis pour suppression' });
      }

      await db.user.delete({
        where: { id }
      });

      return res.status(200).json({
        success: true,
        message: 'Utilisateur supprimé avec succès'
      });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
  }

  // ❌ Méthode non supportée
  return res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
}
 */