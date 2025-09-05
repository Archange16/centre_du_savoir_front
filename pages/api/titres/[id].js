import { db } from '../../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  // GET - Récupérer un titre spécifique
  if (req.method === "GET") {
    try {
      const titre = await db.titre.findUnique({
        where: { id }
      });
      
      if (!titre) {
        return res.status(404).json({ error: "Titre non trouvé" });
      }
      
      res.status(200).json(titre);
    } catch (error) {
      console.error("Erreur récupération titre:", error);
      res.status(500).json({ error: "Erreur récupération titre" });
    }
  }
  // PUT - Modifier un titre
  else if (req.method === "PUT") {
    try {
      const { nom, videoUrl, ordre } = req.body;

      const updatedTitre = await db.titre.update({
        where: { id },
        data: {
          nom,
          videoUrl,
          ordre,
        },
      });
      
      res.status(200).json(updatedTitre);
    } catch (error) {
      console.error("Erreur modification titre:", error);
      res.status(500).json({ error: "Erreur modification titre" });
    }
  }
  // DELETE - Supprimer un titre
  else if (req.method === "DELETE") {
    try {
      await db.titre.delete({
        where: { id }
      });

      res.status(200).json({ message: "Titre supprimé avec succès" });
    } catch (error) {
      console.error("Erreur suppression titre:", error);
      res.status(500).json({ error: "Erreur suppression titre" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}