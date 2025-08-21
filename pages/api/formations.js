import { db } from '../../lib/db';
import { z } from 'zod';

// Schéma de validation pour la création d'une formation
const FormationCreateSchema = z.object({
  titre: z.string()
    .min(1, "Le titre est requis")
    .max(255, "Le titre ne peut pas dépasser 255 caractères"),
  description: z.string()
    .max(1000, "La description ne peut pas dépasser 1000 caractères")
    .optional()
    .nullable(),
});

export default async function handler(req, res) {
  // Seules les méthodes GET et POST sont autorisées
  if (!['GET', 'POST'].includes(req.method)) {
    return res.status(405).json({ 
      error: "Méthode non autorisée",
      message: "Seules les méthodes GET et POST sont autorisées" 
    });
  }

  try {
    if (req.method === 'GET') {
      const formations = await db.formation.findMany({
        include: {
          modules: {
            include: {
              titres: true
            },
            orderBy: { ordre: 'asc' }
          }
        },
        orderBy: { createdAt: 'desc' }
      });
      
      return res.status(200).json({
        success: true,
        data: formations,
        count: formations.length
      });
    }

    if (req.method === 'POST') {
      // Validation des données d'entrée
      const validationResult = FormationCreateSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          success: false,
          error: "Données invalides", 
          details: validationResult.error.format() 
        });
      }

      const { titre, description } = validationResult.data;
      
      const formation = await db.formation.create({
        data: { 
          titre, 
          description: description || null 
        }
      });
      
      return res.status(201).json({
        success: true,
        data: formation,
        message: "Formation créée avec succès"
      });
    }
  } catch (error) {
    console.error("Erreur API formations:", error);
    
    // Gestion d'erreurs spécifiques
    if (error.code === 'P2002') {
      return res.status(409).json({
        success: false,
        error: "Conflit de données",
        message: "Une formation avec ce titre existe déjà"
      });
    }
    
    return res.status(500).json({
      success: false,
      error: "Erreur serveur",
      message: "Une erreur est survenue lors du traitement de la requête"
    });
  }
}