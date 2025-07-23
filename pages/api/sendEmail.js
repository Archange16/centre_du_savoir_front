import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, nom } = req.body;

  if (!to || !nom) {
    return res.status(400).json({ message: 'Missing required fields: to, nom' });
  }

  const subject = "Confirmation de votre demande d’inscription – Formation CPS";

  const message = `
Bonjour M./Mme ${nom},

Nous confirmons la bonne réception de votre demande d’inscription à une formation certifiante 100 % en ligne du Centre Professionnel du Savoir (CPS).

Ces formations, 100 % en ligne, sont conçues pour :

Vous transmettre des compétences techniques solides et immédiatement applicables,

Vous permettre d’intervenir sur le terrain avec maîtrise,

Valoriser votre profil auprès des recruteurs nationaux et internationaux.


📅 Durée : 6 à 8 semaines
💼 Certificat à l’issue de la formation
💳 Tarif : 350 € à 490 € selon la spécialité
Modes de paiement : Western Union, MoneyGram, RIA, Damane Cash

Un conseiller vous contactera sous 24h pour finaliser votre inscription et vous intégrer au groupe WhatsApp de la session.


📲 WhatsApp :  +212 780 223487


Merci cordialement,
Responsable Formations – CPS
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
  }
}