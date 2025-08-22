import { db } from '../../lib/db'; // adapte ce chemin si besoin
import { z } from 'zod';

// Schéma de validation pour POST/PUT
const leadSchema = z.object({
  situation: z.string().min(1, 'Situation professionnelle requise'),
  formations: z.array(z.string()).min(1, 'Au moins une formation requise'),
  financement: z.string().min(1, 'Mode de financement requis'),
  nom: z.string().min(1, 'Nom complet requis'),
  telephone: z.string().min(10, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  formName: z.string().optional()
});

export default async function handler(req, res) {
  // ✅ GET : liste paginée des leads
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const [leads, total] = await Promise.all([
        db.lead.findMany({
          skip,
          take: limit,
          select: {
            id: true,
            nom: true,
            email: true,
            telephone: true, 
            situation: true,      
            formations: true,    
            createdAt: true,
            formName: true
          },
          orderBy: { createdAt: 'desc' }
        }),
        db.lead.count()
      ]);

      return res.status(200).json({ success: true, data: leads, total });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  // ✅ POST : création d’un nouveau lead
  if (req.method === 'POST') {
    try {
      const body = leadSchema.parse(req.body);

      const newLead = await db.lead.create({
        data: {
          situation: body.situation,
          formations: body.formations,
          financement: body.financement,
          nom: body.nom,
          telephone: body.telephone,
          email: body.email,
          formName: body.formName || 'CPF Génie Civil',
          ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
          userAgent: req.headers['user-agent']
        },
        select: {
          id: true,
          nom: true,
          email: true,
          createdAt: true
        }
      });

      return res.status(201).json({
        success: true,
        data: newLead,
        message: 'Lead enregistré avec succès'
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }

      console.error('Database error:', error);
      return res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement' });
    }
  }

  // ✅ PUT : mise à jour d’un lead
  if (req.method === 'PUT') {
    try {
      const { id, ...data } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID du lead requis pour la mise à jour' });
      }

      const validatedData = leadSchema.parse(data);

      const updatedLead = await db.lead.update({
        where: { id },
        data: validatedData
      });

      return res.status(200).json({
        success: true,
        data: updatedLead,
        message: 'Lead mis à jour avec succès'
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }

      console.error('Update error:', error);
      return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
  }

  // ✅ DELETE : suppression d’un lead
  if (req.method === 'DELETE') {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID du lead requis pour suppression' });
      }

      await db.lead.delete({
        where: { id }
      });

      return res.status(200).json({
        success: true,
        message: 'Lead supprimé avec succès'
      });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: 'Erreur lors de la suppression' });
    }
  }

  // ❌ Méthode non supportée
  return res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
}
