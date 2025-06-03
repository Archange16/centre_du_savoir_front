// pages/api/contact-accueil.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { firstName, phone, email } = req.body;

  if (!firstName || !phone || !email) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
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
      from: `"${firstName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: 'evolapp10@gmail.com', // Remplace par l'adresse de réception réelle si nécessaire
      subject: 'Nouveau message de contact',
      html: `
        <h2>Nouvelle demande de contact :</h2>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
