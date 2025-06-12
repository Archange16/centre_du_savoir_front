import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { firstName, lastName, email, phone, pays, experience, niveauEtudes } = req.body;

  if (!firstName || !lastName || !email || !phone || !pays || !experience || !niveauEtudes) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <h3>Nouvelle demande de brochure</h3>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Pays :</strong> ${pays}</p>
      <p><strong>Expérience :</strong> ${experience} an(s)</p>
      <p><strong>Niveau d'études :</strong> ${niveauEtudes}</p>
    `;

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: 'Nouvelle demande de brochure',
      html: htmlContent,
    });

    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
