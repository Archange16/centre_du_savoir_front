// pages/api/assign-formation.js

import { db } from '../../lib/db'; // adapte ce chemin à ton projet

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { userId, formationId } = req.body;

  if (!userId || !formationId) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  const userIdInt = parseInt(userId, 10); // ✅ conversion explicite

  if (isNaN(userIdInt)) {
    return res.status(400).json({ error: "userId invalide" });
  }

  try {
    // ✅ Vérifie si l'assignation existe déjà
    const exists = await db.formationAssignment.findFirst({
      where: { userId: userIdInt, formationId },
    });

    if (exists) {
      return res.status(200).json({ message: "Formation déjà assignée à cet utilisateur" });
    }

    // ✅ Création de l'assignation
    const assignment = await db.formationAssignment.create({
      data: {
        userId: userIdInt,
        formationId,
      },
    });

    return res.status(200).json({ success: true, assignment });
  } catch (error) {
    console.error("Erreur assignation :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
