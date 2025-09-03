// pages/api/send-completion-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userEmail, userName, formationName } = req.body;

  try {
    // Configuration du transporter Nodemailer
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: `🎉 Félicitations ! Vous avez complété la formation ${formationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Félicitations ${userName} ! 🎓</h2>
          <p>Vous avez <strong>complété à 100%</strong> la formation :</p>
          <h3 style="color: #2196F3;">${formationName}</h3>
          <p>Nous sommes fiers de votre accomplissement !</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;">📚 Continuez à apprendre et à développer vos compétences !</p>
          </div>
          <p>Cordialement,<br>L'équipe de formation</p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Marquer l'email comme envoyé dans la base de données
    // (à implémenter selon votre structure de base de données)

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}