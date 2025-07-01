import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Méthode non autorisée' });
    return;
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
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailText = `
Civilité : ${civilite}
Nom : ${nom}
Titre de la formation : ${titre}
Prix : ${prix} €
Autre téléphone : ${autreTel || 'N/A'}
Email : ${email}
Ville : ${ville}
Pays : ${pays}
Diplôme : ${diplome}
Poste : ${poste}
Établissement : ${etablissement || 'N/A'}
Motivations : ${motivations.join(', ')}
Autres motivations : ${autresMotivations || 'N/A'}
Message : ${message || 'N/A'}
Consentement : ${consentement ? 'Oui' : 'Non'}
`;

  try {
    await transporter.sendMail({
      from: `"Préinscription" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Nouvelle préinscription reçue',
      text: mailText,
      replyTo: email,
    });

    res.status(200).json({ message: 'Préinscription envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du mail:', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'envoi du mail.' });
  }
}
