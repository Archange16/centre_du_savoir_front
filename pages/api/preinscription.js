import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const {
    titre,
    prix,
    civilite,
    nom,
    autreTel,
    email,
    ville,
    pays,
    diplome,
    poste,
    etablissement,
    motivations = [],
    autresMotivations,
    message,
    consentement,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlContent = `
    <h3>Nouvelle préinscription</h3>
    <p><strong>Civilité :</strong> ${civilite}</p>
    <p><strong>Nom :</strong> ${nom}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Titre de la formation :</strong> ${titre}</p>
    <p><strong>Prix :</strong> ${prix} €</p>
    <p><strong>Autre téléphone :</strong> ${autreTel || 'N/A'}</p>
    <p><strong>Ville :</strong> ${ville}</p>
    <p><strong>Pays :</strong> ${pays}</p>
    <p><strong>Diplôme :</strong> ${diplome}</p>
    <p><strong>Poste :</strong> ${poste}</p>
    <p><strong>Établissement :</strong> ${etablissement || 'N/A'}</p>
    <p><strong>Motivations :</strong> ${motivations.length ? motivations.join(', ') : 'Aucune'}</p>
    <p><strong>Autres motivations :</strong> ${autresMotivations || 'N/A'}</p>
    <p><strong>Message :</strong> ${message || 'N/A'}</p>
    <p><strong>Consentement :</strong> ${consentement ? 'Oui' : 'Non'}</p>
  `;

  try {
    await transporter.verify();
    console.log('✅ SMTP server ready');

    // Envoi à l'administration
    await transporter.sendMail({
      from: `"Préinscription" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO, // Destinataire : administration
      subject: 'Nouvelle préinscription reçue',
      html: htmlContent,
      replyTo: email,
    });

    // Envoi de confirmation à l'utilisateur
    await transporter.sendMail({
      from: `"Équipe pédagogique" <${process.env.SMTP_USER}>`,
      to: email, // Destinataire : l’utilisateur
      subject: 'Confirmation de votre préinscription',
      html: `
        <h3>Merci pour votre préinscription</h3>
        <p>Bonjour ${civilite} ${nom},</p>
        <p>Nous avons bien reçu votre demande de préinscription à la formation :</p>
        <p><strong>${titre}</strong> pour <strong>${prix} €</strong>.</p>
        <p>Voici un récapitulatif de vos informations :</p>
        ${htmlContent}
        <p>Nous vous contacterons prochainement pour la suite.</p>
        <p>Cordialement,<br>L’équipe pédagogique</p>
      `,
    });

    res.status(200).json({ message: 'Préinscription envoyée avec succès !' });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    res.status(500).json({ message: 'Erreur serveur lors de l’envoi du mail.' });
  }
}
