import { db } from '../../../lib/db'; // adapte ce chemin si besoin

import { db } from '../../../../lib/db'

export default async function handler(req, res) {
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'GET':
      try {
        const user = await db.user.findUnique({
          where: { id }
        })
        if (!user) {
          return res.status(404).json({ error: 'User not found' })
        }
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break
    case 'PUT':
      try {
        const { email, username, password, role } = req.body
        const user = await db.user.update({
          where: { id },
          data: {
            email,
            username,
            password,
            role
          }
        })
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break
    case 'DELETE':
      try {
        await db.user.delete({
          where: { id }
        })
        res.status(204).end()
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}