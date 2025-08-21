import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const formData = req.body;

  // Vérification simple des champs requis, tu peux l'ajuster
  const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
  for (const field of requiredFields) {
    if (!formData[field]) {
      return res.status(400).json({ message: `Champ requis manquant: ${field}` });
    }
  }

  // Générer dynamiquement le contenu HTML en fonction de toutes les clés reçues
  const htmlContent = `
    <h3>Nouvelle demande de brochure</h3>
    ${Object.entries(formData).map(([key, value]) => {
      // Pour un tableau (ex: services), on affiche une liste à part
      if (Array.isArray(value)) {
        return `<p><strong>${key} :</strong> ${value.join(', ') || 'Aucun'}</p>`;
      }
      return `<p><strong>${key} :</strong> ${value || 'Non spécifié'}</p>`;
    }).join('')}
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

    await transporter.sendMail({
      from: `"${formData.firstName} ${formData.lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: formData.email,
      subject: 'Nouvelle demande de brochure',
      html: htmlContent,
    });

    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
