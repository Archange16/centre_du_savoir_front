// pages/api/userid/[id].js
import { hash } from 'bcrypt';
import { db } from '../../../lib/db';
import { z } from 'zod';

const updateUserSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().optional(),
});

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const body = req.body;
      const { email, username, password } = updateUserSchema.parse(body);

      const existingUser = await db.user.findUnique({ where: { id: id } });
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      const existingEmail = await db.user.findFirst({ 
        where: { 
          email, 
          id: { not: id } 
        } 
      });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const existingUsername = await db.user.findFirst({ 
        where: { 
          username, 
          id: { not: id } 
        } 
      });
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      const updateData = {
        email,
        username,
      };

      if (password && password.length > 0) {
        updateData.password = await hash(password, 10);
      }

      const updatedUser = await db.user.update({
        where: { id: id },
        data: updateData,
      });

      const { password: _, ...userWithoutPassword } = updatedUser;

      return res.status(200).json({ 
        success: true, 
        user: userWithoutPassword, 
        message: 'User updated successfully' 
      });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const existingUser = await db.user.findUnique({ where: { id: id } });
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      await db.user.delete({
        where: { id: id },
      });

      return res.status(200).json({ 
        success: true, 
        message: 'User deleted successfully' 
      });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}