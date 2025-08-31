// pages/api/formations/[id].js
import { db } from '../../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const formation = await db.formation.findUnique({
        where: { id },
        include: {
          modules: {
            orderBy: { ordre: 'asc' },
            include: {
              titres: {
                orderBy: { ordre: 'asc' },
              },
            },
          },
        },
      });

      if (!formation) {
        return res.status(404).json({
          error: "Formation non trouvée",
          message: `Aucune formation avec l'ID ${id} n'a été trouvée.`,
        });
      }

      return res.status(200).json(formation);
    } catch (error) {
      console.error("Erreur lors de la récupération de la formation:", error);
      return res.status(500).json({
        error: "Erreur serveur",
        message: "Impossible de récupérer la formation.",
      });
    }
  }

  else if (req.method === 'DELETE') {
    try {
      // Supprimer d'abord les titres associés aux modules de cette formation
      const formationWithModules = await db.formation.findUnique({
        where: { id },
        include: { modules: { include: { titres: true } } }
      });

      for (const module of formationWithModules.modules) {
        await db.titre.deleteMany({
          where: { moduleId: module.id }
        });
      }

      // Supprimer les modules
      await db.module.deleteMany({
        where: { formationId: id }
      });

      // Supprimer la formation
      await db.formation.delete({
        where: { id }
      });

      res.status(200).json({ 
        success: true, 
        message: "Formation supprimée avec succès" 
      });
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      res.status(500).json({ 
        success: false, 
        error: "Erreur lors de la suppression" 
      });
    }
  }

  else if (req.method === 'PUT') {
    try {
      const { titre, description, image } = req.body;

      const updatedFormation = await db.formation.update({
        where: { id },
        data: {
          titre,
          description,
          image
        }
      });

      res.status(200).json({ 
        success: true, 
        data: updatedFormation,
        message: "Formation mise à jour avec succès" 
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      res.status(500).json({ 
        success: false, 
        error: "Erreur lors de la mise à jour" 
      });
    }
  }

  else {
    res.status(405).json({ 
      error: "Méthode non autorisée",
      message: "Méthodes autorisées : GET, PUT, DELETE" 
    });
  }
}
