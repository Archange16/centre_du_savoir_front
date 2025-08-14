// pages/api/leads.ts
import  { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/db'; // adapte ce chemin à ton projet

import { z } from 'zod';

// Schéma de validation avec Zod
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
  if (req.method === 'GET') {
    try {
      const leads = await db.lead.findMany({
        select: {
          id: true,
          nom: true,
          email: true,
          createdAt: true,
          formName: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      return res.status(200).json({ success: true, data: leads });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'POST') {
    try {
      // Validation des données
      const body = leadSchema.parse(req.body);

      // Vérification si l'email existe déjà
      /* const existingLead = await db.lead.findUnique({
        where: { email: body.email }
      });

      if (existingLead) {
        return res.status(400).json({ 
          success: false, 
          error: 'Un lead avec cet email existe déjà' 
        });
      } */

      // Création du lead dans la base de données
      const newLead = await db.lead.create({
        data: {
          situation: body.situation,
          formations: body.formations, // PostgreSQL gère nativement les tableaux
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
      return res.status(500).json({ 
        success: false, 
        error: 'Erreur serveur lors de l\'enregistrement' 
      });
    }
  }

 /*  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ 
    success: false, 
    error: `Méthode ${req.method} non autorisée` 
  }); */
}