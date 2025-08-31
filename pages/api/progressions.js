import { db } from '../../lib/db';

export default async function handler(req, res) {
  // Extraire les paramètres de l'URL
  const { query, method } = req;
  const { userId, formationId, action } = query;

  console.log("API Progressions:", { method, userId, formationId, action, body: req.body });

  // GET /api/progressions?userId=1&formationId=abc
  if (method === 'GET' && userId && formationId) {
    try {
      // Récupérer tous les titres de la formation
      const titres = await db.titre.findMany({
        where: {
          module: { 
            formationId: formationId 
          },
        },
        select: { id: true },
      });

      const totalTitres = titres.length;
      console.log("Total des titres:", totalTitres);

      if (totalTitres === 0) {
        return res.status(200).json({ 
          percentage: 0,
          completedTitres: [],
          totalTitres: 0
        });
      }

      // Récupérer les progressions complétées
      const completedProgressions = await db.progression.findMany({
        where: {
          userId: parseInt(userId),
          titreId: { in: titres.map(t => t.id) },
          completed: true,
        },
        select: { titreId: true }
      });

      const completedTitreIds = completedProgressions.map(p => p.titreId);
      const percentage = Math.round((completedTitreIds.length / totalTitres) * 100);
      
      console.log("Progression calculée:", { 
        completed: completedTitreIds.length, 
        total: totalTitres, 
        percentage 
      });

      return res.status(200).json({ 
        percentage,
        completedTitres: completedTitreIds,
        totalTitres
      });
    } catch (err) {
      console.error("Erreur API progressions GET:", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  
  // POST /api/progressions
  else if (method === 'POST') {
    try {
      const { titreId, userId } = req.body;
      console.log("API Progressions - POST:", { titreId, userId });

      if (!titreId || !userId) {
        return res.status(400).json({ error: "Paramètres manquants" });
      }

      // Vérifier si la progression existe déjà
      const existingProgression = await db.progression.findFirst({
        where: {
          userId: parseInt(userId),
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
            userId: parseInt(userId),
            titreId: titreId,
            completed: true,
            completedAt: new Date()
          }
        });
        console.log("Nouvelle progression créée:", newProgression.id);
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error("Erreur API progressions POST:", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
  }
  
  else {
    return res.status(404).json({ error: "Endpoint non trouvé" });
  }
}