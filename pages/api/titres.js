import { db } from '../../lib/db';

export default async function handler(req, res) {
  // POST - Créer un titre
  if (req.method === "POST") {
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
  // PUT - Modifier un titre
  else if (req.method === "PUT") {
    try {
      const { id, nom, videoUrl, ordre } = req.body;

      if (!id || !nom || !videoUrl || !ordre) {
        return res.status(400).json({ message: "Champs requis manquants" });
      }

      const updatedTitre = await db.titre.update({
        where: { id },
        data: {
          nom,
          videoUrl,
          ordre,
        },
      });

      return res.status(200).json({ success: true, data: updatedTitre });
    } catch (error) {
      console.error("Erreur modification titre:", error);
      return res.status(500).json({ success: false, message: "Erreur modification titre" });
    }
  }
  // DELETE - Supprimer un titre
  else if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ message: "ID du titre requis" });
      }

      await db.titre.delete({
        where: { id }
      });

      return res.status(200).json({ success: true, message: "Titre supprimé avec succès" });
    } catch (error) {
      console.error("Erreur suppression titre:", error);
      return res.status(500).json({ success: false, message: "Erreur suppression titre" });
    }
  } else {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }
}