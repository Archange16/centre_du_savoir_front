import { db } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { titre, ordre, formationId } = req.body;

    try {
      const module = await db.module.create({
        data: {
          titre,
          ordre,
          formationId,
        },
      });
      res.status(200).json(module);
    } catch (error) {
      console.error("Erreur création module:", error);
      res.status(500).json({ error: "Erreur création module" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}
