// pages/api/utilisateur.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import { db } from '../../lib/db';
import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Méthode GET - Récupérer tous les utilisateurs
  if (req.method === 'GET') {
    try {
      const users = await db.user.findMany({
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      return res.status(200).json(users);
    } catch (error) {
      console.error('Erreur récupération utilisateurs:', error);
      return res.status(500).json({ error: 'Erreur serveur lors de la récupération' });
    }
  }

  // Méthode POST - Créer un nouvel utilisateur
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const { email, username, password } = userSchema.parse(body);

      // Vérifier si l'email existe déjà
      const existingEmail = await db.user.findUnique({ where: { email } });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Vérifier si le username existe déjà
      const existingUsername = await db.user.findUnique({ where: { username } });
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Hasher le mot de passe
      const hashedPassword = await hash(password, 10);

      // Créer l'utilisateur
      const newUser = await db.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });

      // Exclure le mot de passe de la réponse
      const { password: _, ...userWithoutPassword } = newUser;

      return res.status(201).json({ 
        success: true, 
        user: userWithoutPassword, 
        message: 'User created successfully' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: 'Données invalides', details: error });
      }
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Méthode non supportée
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}