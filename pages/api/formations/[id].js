// pages/api/formations/[id].js
import { db } from "../../../lib/db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const formation = await db.formation.findUnique({
        where: { id },
        include: {
          modules: {
            orderBy: { ordre: "asc" },
            include: {
              titres: {
                orderBy: { ordre: "asc" },
              },
            },
          },
        },
      });

      if (!formation) {
        return res.status(404).json({ error: "Formation non trouvée" });
      }

      return res.status(200).json(formation);
    } catch (err) {
      console.error("Erreur API formation [id]", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
