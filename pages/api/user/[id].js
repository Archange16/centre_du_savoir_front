// pages/api/user/[id].js
import { db } from '../../../lib/db';
import { hash } from 'bcrypt';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const user = await db.user.findUnique({
        where: { id: parseInt(id) },
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error('Erreur récupération utilisateur:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { username, email, password } = req.body;

      // Vérifier si l'utilisateur existe
      const user = await db.user.findUnique({
        where: { id: parseInt(id) }
      });

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Vérifier si l'email est déjà utilisé par un autre utilisateur
      if (email !== user.email) {
        const existingEmail = await db.user.findUnique({ where: { email } });
        if (existingEmail) {
          return res.status(400).json({ error: 'Email déjà utilisé' });
        }
      }

      // Vérifier si le username est déjà utilisé par un autre utilisateur
      if (username !== user.username) {
        const existingUsername = await db.user.findUnique({ where: { username } });
        if (existingUsername) {
          return res.status(400).json({ error: 'Nom d\'utilisateur déjà utilisé' });
        }
      }

      // Préparer les données de mise à jour
      const updateData = { username, email };
      
      // Hasher le mot de passe s'il est fourni
      if (password) {
        updateData.password = await hash(password, 10);
      }

      // Mettre à jour l'utilisateur
      const updatedUser = await db.user.update({
        where: { id: parseInt(id) },
        data: updateData,
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Erreur modification utilisateur:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      // Vérifier si l'utilisateur existe
      const user = await db.user.findUnique({
        where: { id: parseInt(id) }
      });

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Supprimer l'utilisateur
      await db.user.delete({
        where: { id: parseInt(id) }
      });

      return res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error('Erreur suppression utilisateur:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}