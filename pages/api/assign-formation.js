// pages/api/assign-formation.js
import { db } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, formationId } = req.body;

    if (!userId || !formationId) {
      return res.status(400).json({ error: "Champs manquants" });
    }

    try {
      const exists = await db.formationAssignment.findFirst({
        where: { userId, formationId },
      });

      if (exists) {
        return res.status(200).json({ message: "Formation déjà assignée" });
      }

      const assignment = await db.formationAssignment.create({
        data: { userId, formationId },
      });

      return res.status(200).json({ success: true, assignment });
    } catch (error) {
      console.error("Erreur assignation :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }

  if (req.method === "GET") {
    const { userId } = req.query;

    if (!userId || typeof userId !== "string") {
      return res.status(400).json({ error: "Paramètre userId invalide" });
    }

    try {
      const assignments = await db.formationAssignment.findMany({
        where: { userId },
        include: { formation: true },
        orderBy: { assignedAt: "desc" },
      });

      return res.status(200).json(assignments);
    } catch (error) {
      console.error("Erreur récupération formations assignées :", error);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }

  return res.status(405).json({ error: "Méthode non autorisée" });
}
