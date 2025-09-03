import { db } from '@/lib/db';

export default async function handler(req, res) {
  const { userId, formationId } = req.query;
  //console.log("API Progressions - GET:", { userId, formationId });

  if (req.method === 'GET') {
    try {
      if (!userId || !formationId) {
        return res.status(400).json({ error: "Paramètres manquants" });
      }

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
          userId: userId,
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
  } else {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}