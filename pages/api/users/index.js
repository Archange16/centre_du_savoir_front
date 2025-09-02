//import { prisma } from '../../../../lib/prisma'
import { db } from '../../../lib/db'; // adapte ce chemin si besoin


export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const users = await db.user.findMany()
        res.status(200).json(users)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break
    case 'POST':
      try {
        const { email, username, password, role } = req.body
        const user = await db.user.create({
          data: {
            email,
            username,
            password,
            role
          }
        })
        res.status(201).json(user)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}