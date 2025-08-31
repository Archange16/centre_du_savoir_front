// pages/api/dashboard-stats.js

import { db } from '../../lib/db'; // ton client Prisma

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Comptage des formations
    const formationsCount = await db.formation.count();

    // Comptage des apprenants
    const usersCount = await db.user.count();

    // Comptage des leads
    const leadsCount = await db.lead.count();

    // Exemple : si tu veux compter les "alerts" (modèle fictif)
    // const alertsCount = await db.alert.count();

    return res.status(200).json({
      formations: formationsCount,
      users: usersCount,
      leads: leadsCount,
      // alerts: alertsCount,
    });
  } catch (error) {
    console.error('Erreur API dashboard-stats:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
