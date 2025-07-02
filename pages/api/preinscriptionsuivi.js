import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Méthode non autorisée' });
    return;
  }

  const {
    entreprise,
    gerant,
    email,
    telephone,
    description,
  } = req.body;

  if (!entreprise || !gerant || !email || !telephone || !description) {
    res.status(400).json({ message: 'Tous les champs requis doivent être remplis.' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailText = `
Nom de l'entreprise : ${entreprise}
Nom du Gérant / Directeur : ${gerant}
Email : ${email}
Téléphone / WhatsApp : ${telephone}
Description du projet :
${description}
`;

  try {
    await transporter.sendMail({
      from: `"Formulaire Projet" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Nouvelle demande de suivi de projet',
      text: mailText,
      replyTo: email,
    });

    res.status(200).json({ message: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du mail:', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'envoi du mail.' });
  }
}
