// pages/api/user.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import { db } from '../../lib/db'; // adapte ce chemin à ton projet
import { NextResponse } from 'next/server';
import { z } from 'zod';

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ success: true, message: "User API is working!" });
  }

  if (req.method === 'POST') {
    try {
      const body = req.body;
      const { email, username, password } = userSchema.parse(body);

      const existingEmail = await db.user.findUnique({ where: { email } });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const existingUsername = await db.user.findUnique({ where: { username } });
      if (existingUsername) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      const hashedPassword = await hash(password, 10);

      const newUser = await db.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });
      const { password: newUserPassword, ...rest } = newUser; // Exclure le mot de passe de la réponse

      return res.status(201).json({ success: true, user: rest, message: 'User created successfully' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
