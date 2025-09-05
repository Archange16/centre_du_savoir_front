import { db } from "../../../lib/db";

export default async function handler(req, res) {
  const { id } = req.query;

  // GET - Récupérer un module spécifique
  if (req.method === "GET") {
    try {
      const module = await db.module.findUnique({
        where: { id },
        include: {
          titres: {
            orderBy: { ordre: 'asc' }
          }
        }
      });
      
      if (!module) {
        return res.status(404).json({ error: "Module non trouvé" });
      }
      
      res.status(200).json(module);
    } catch (error) {
      console.error("Erreur récupération module:", error);
      res.status(500).json({ error: "Erreur récupération module" });
    }
  }
  // PUT - Modifier un module
  else if (req.method === "PUT") {
    try {
      const { titre, ordre } = req.body;

      const updatedModule = await db.module.update({
        where: { id },
        data: {
          titre,
          ordre,
        },
      });
      
      res.status(200).json(updatedModule);
    } catch (error) {
      console.error("Erreur modification module:", error);
      res.status(500).json({ error: "Erreur modification module" });
    }
  }
  // DELETE - Supprimer un module
  else if (req.method === "DELETE") {
    try {
      // D'abord supprimer tous les titres associés à ce module
      await db.titre.deleteMany({
        where: { moduleId: id }
      });

      // Puis supprimer le module
      await db.module.delete({
        where: { id }
      });

      res.status(200).json({ message: "Module et titres associés supprimés avec succès" });
    } catch (error) {
      console.error("Erreur suppression module:", error);
      res.status(500).json({ error: "Erreur suppression module" });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée" });
  }
}