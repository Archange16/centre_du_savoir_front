import { db } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const formations = await db.formation.findMany({
      include: {
        modules: {
          include: {
            titres: true
          },
          orderBy: { ordre: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(formations);
  }

  if (req.method === 'POST') {
    const { titre, description } = req.body;
    const formation = await db.formation.create({
      data: { titre, description }
    });
    return res.status(201).json(formation);
  }
}

