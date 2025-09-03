import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const formData = req.body;

  const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
  for (const field of requiredFields) {
    if (!formData[field]) {
      return res.status(400).json({ message: `Champ requis manquant: ${field}` });
    }
  }

  // Générer dynamiquement le contenu HTML
  const htmlContent = `
    <h3>Nouvelle demande de brochure</h3>
    ${Object.entries(formData).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `<p><strong>${key} :</strong> ${value.join(', ') || 'Aucun'}</p>`;
      }
      return `<p><strong>${key} :</strong> ${value || 'Non spécifié'}</p>`;
    }).join('')}
  `;

  // Contenu HTML pour l'utilisateur
  const userHtmlContent = `
    <h3>Merci pour votre demande de brochure</h3>
    <p>Bonjour ${formData.firstName},</p>
    <p>Nous avons bien reçu votre demande de brochure. Voici un récapitulatif des informations transmises :</p>
    ${htmlContent}
    <p>Nous vous contacterons prochainement si nécessaire.</p>
    <p>Direction CPS,<br>centre professionnel du savoir</p>
  `;

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

    // 1. Envoi à l'équipe
    await transporter.sendMail({
      from: `"${formData.firstName} ${formData.lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: formData.email,
      subject: 'Nouvelle demande de brochure',
      html: htmlContent,
    });

    // 2. Envoi de confirmation à l'utilisateur
    await transporter.sendMail({
      from: `"L'équipe" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: 'Confirmation de votre demande de brochure',
      html: userHtmlContent,
    });

    return res.status(200).json({ message: 'Emails envoyés avec succès !' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ message: "Erreur d'envoi des emails", error: error.message });
  }
}
