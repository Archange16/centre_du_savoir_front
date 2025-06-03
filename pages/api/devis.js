// pages/api/devis.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { firstName, lastName, email, phone, company, website, services, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.evolapp.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'evolapp10@gmail.com',
      subject: 'Nouvelle demande de devis',
      html: `
        <h2>Nouvelle demande de devis reçue :</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
        ${website ? `<p><strong>Site Web :</strong> ${website}</p>` : ''}
        <p><strong>Services demandés :</strong> ${Array.isArray(services) ? services.join(', ') : 'Non précisé'}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
