import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  const {
    situation,
    formations,
    financement,
    nom,
    telephone,
    email,
    formName
  } = req.body;

  if (!nom || !telephone || !email) {
    return res.status(400).json({ success: false, error: 'Champs requis manquants' });
  }

  // Création du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true pour port 465, false pour 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Email à envoyer
  const mailOptions = {
    from: `"Formulaire ${formName}" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: `📥 Nouvelle soumission - ${formName}`,
    html: `
      <h3>Nouvelle demande de formation</h3>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Situation :</strong> ${situation}</p>
      <p><strong>Financement :</strong> ${financement}</p>
      <p><strong>Formations choisies :</strong> ${formations?.join(', ') || 'Aucune sélectionnée'}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’email :', error);
    return res.status(500).json({ success: false, error: 'Erreur lors de l’envoi de l’email' });
  }
}
