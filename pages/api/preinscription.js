import nodemailer from 'nodemailer';


async function appelerApiSendEmail({ to, nom }) {
  try {
    const response = await fetch('http://localhost:3000/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, nom }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API sendEmail error: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur appel API sendEmail:', error);
    throw error;
  }
}

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
    secure: process.env.SMTP_PORT === '465', // true si port 465, sinon false
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify(); // Vérifie la connexion SMTP
    console.log('✅ SMTP server ready');

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

    const mailHtml = `
      <h3>Nouvelle préinscription reçue</h3>
      <p><strong>Civilité :</strong> ${civilite}</p>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Titre de la formation :</strong> ${titre}</p>
      <p><strong>Prix :</strong> ${prix} €</p>
      <p><strong>Autre téléphone :</strong> ${autreTel || 'N/A'}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Ville :</strong> ${ville}</p>
      <p><strong>Pays :</strong> ${pays}</p>
      <p><strong>Diplôme :</strong> ${diplome}</p>
      <p><strong>Poste :</strong> ${poste}</p>
      <p><strong>Établissement :</strong> ${etablissement || 'N/A'}</p>
      <p><strong>Motivations :</strong> ${motivations.join(', ')}</p>
      <p><strong>Autres motivations :</strong> ${autresMotivations || 'N/A'}</p>
      <p><strong>Message :</strong> ${message || 'N/A'}</p>
      <p><strong>Consentement :</strong> ${consentement ? 'Oui' : 'Non'}</p>
    `;

    await transporter.sendMail({
      from: `"Préinscription" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Nouvelle préinscription reçue',
      text: mailText,
      html: mailHtml,
      replyTo: email,
    });

    res.status(200).json({ message: 'Préinscription envoyée avec succès !' });
    
    // Appel à l’API sendEmail pour le mail de confirmation
    await appelerApiSendEmail({ to: email, nom });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du mail:', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'envoi du mail.' });
  }
}
