// /pages/api/titres/index.js

import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const { nom, videoUrl, ordre, moduleId } = req.body;

    if (!nom || !videoUrl || !ordre || !moduleId) {
      return res.status(400).json({ message: "Champs requis manquants" });
    }

    const titre = await db.titre.create({
      data: {
        nom,
        videoUrl,
        ordre,
        module: {
          connect: { id: moduleId },
        },
      },
    });

    return res.status(201).json({ success: true, data: titre });
  } catch (error) {
    console.error("Erreur API titres:", error);
    return res.status(500).json({ success: false, message: "Erreur serveur" });
  }
}

