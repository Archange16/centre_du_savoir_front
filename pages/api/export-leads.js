import { db } from '../../lib/db';
import { stringify } from 'csv-stringify/sync';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
  }

  try {
    const { ids } = req.body;
    
    let whereCondition = {};
    if (ids && Array.isArray(ids) && ids.length > 0) {
      whereCondition = {
        id: { in: ids }
      };
    }

    const leads = await db.lead.findMany({
      where: whereCondition,
      select: {
        id: true,
        nom: true,
        email: true,
        telephone: true,
        situation: true,
        formations: true,
        financement: true,
        formName: true,
        createdAt: true,
        ipAddress: true,
        userAgent: true
      },
      orderBy: { createdAt: 'desc' }
    });

    // Préparer les données pour le CSV
    const csvData = leads.map(lead => ({
      ID: lead.id,
      Nom: lead.nom,
      Email: lead.email,
      Téléphone: lead.telephone || '',
      Situation: lead.situation,
      Formations: Array.isArray(lead.formations) ? lead.formations.join('; ') : '',
      Financement: lead.financement,
      Formulaire: lead.formName || '',
      Date: new Date(lead.createdAt).toLocaleDateString('fr-FR'),
      IP: lead.ipAddress || '',
      UserAgent: lead.userAgent || ''
    }));

    // Générer le CSV
    const csv = stringify(csvData, {
      header: true,
      delimiter: ',',
      quoted: true
    });

    // Définir les en-têtes de réponse pour le téléchargement
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename=leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    
    // Envoyer le CSV
    return res.status(200).send(csv);
  } catch (error) {
    console.error('Export error:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'export CSV' });
  }
}