import { db } from '../../lib/db'; // adapte ce chemin si besoin

// GET /api/progressions/:userId/:formationId
export default async function handler(req, res) {
  const { userId, formationId } = req.query;

  if (req.method === 'GET') {
    try {
      // Titres (vidéos) dans la formation
      const titres = await db.titre.findMany({
        where: {
          module: { formationId },
        },
        select: { id: true },
      });

      const total = titres.length;
      if (total === 0) return res.status(200).json({ percentage: 0 });

      const titreIds = titres.map((t) => t.id);

      // Progressions utilisateur
      const completed = await db.progression.findMany({
        where: {
          userId,
          titreId: { in: titreIds },
          completed: true,
        },
      });

      const percentage = Math.round((completed.length / total) * 100);

      return res.status(200).json({ percentage });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erreur progression" });
    }
  }
}
