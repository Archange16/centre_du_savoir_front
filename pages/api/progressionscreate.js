// pages/api/progressions/create.js
import { db } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { titreId, userId } = req.body;
      console.log("API Progressions - POST:", { titreId, userId });

      if (!titreId || !userId) {
        return res.status(400).json({ error: "Paramètres manquants" });
      }

      // Vérifier si la progression existe déjà
      const existingProgression = await db.progression.findFirst({
        where: {
          userId: userId,
          titreId: titreId
        }
      });

      if (existingProgression) {
        // Mettre à jour si elle existe déjà
        await db.progression.update({
          where: { id: existingProgression.id },
          data: { 
            completed: true,
            completedAt: new Date()
          }
        });
        console.log("Progression mise à jour:", existingProgression.id);
      } else {
        // Créer une nouvelle progression
        const newProgression = await db.progression.create({
          data: {
            userId: userId,
            titreId: titreId,
            completed: true,
            completedAt: new Date()
          }
        });
        console.log("Nouvelle progression créée:", newProgression.id);
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Erreur API progressions:", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  } else {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}