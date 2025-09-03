// pages/api/send-completion-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userEmail, userName, formationName, userMatricule, dateCompletion } = req.body;

  try {
    // CORRECTION : Utilisation correcte de createTransport (sans "e")
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: {
        user: process.env.SMTP_USER || 'directions.cps@gmail.com',
        pass: process.env.SMTP_PASS || '',
      },
    });

    // Email de la direction
    const adminEmail = process.env.MAIL_TO || 'directions.cps@gmail.com';
    
    // Date de completion formatée
    const completionDate = dateCompletion ? new Date(dateCompletion).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) : new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Configuration de l'email pour la direction
    const mailOptions = {
      from: {
        name: 'Plateforme de Formation CPS',
        address: process.env.SMTP_USER || 'directions.cps@gmail.com'
      },
      to: adminEmail,
      replyTo: adminEmail,
      subject: `✅ Formation Complétée - ${userName} a terminé "${formationName}"`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <!-- En-tête -->
          <div style="text-align: center; background-color: #4CAF50; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">🎓 FORMATION COMPLÉTÉE - CPS</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">Notification de fin de formation</p>
          </div>

          <!-- Contenu principal -->
          <div style="background-color: white; padding: 25px; border-radius: 8px; border: 1px solid #e0e0e0;">
            <h2 style="color: #2c3e50; margin-top: 0;">Félicitations à ${userName} !</h2>
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; color: #2c3e50; font-weight: bold;">
                🎯 L'utilisateur a complété avec succès la formation :
              </p>
              <h3 style="color: #4CAF50; margin: 10px 0;">"${formationName}"</h3>
            </div>

            <!-- Détails de l'utilisateur -->
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="color: #2c3e50; margin-top: 0;">📋 Informations de l'utilisateur :</h4>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Nom complet :</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${userName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email :</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${userEmail}</td>
                </tr>
                ${userMatricule ? `
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Matricule :</td>
                  <td style="padding: 8px; border-bottom: 1px solid #eee;">${userMatricule}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Date d'achèvement :</td>
                  <td style="padding: 8px;">${completionDate}</td>
                </tr>
              </table>
            </div>

            <!-- Message de félicitations -->
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="color: #1565c0; margin-top: 0;">⭐ Performance :</h4>
              <p style="margin: 0; color: #2c3e50;">
                ${userName} a démontré un excellent engagement et a suivi l'intégralité du programme de formation. 
                Cette achievement témoigne de sa motivation et de son professionnalisme.
              </p>
            </div>

            <!-- Prochaines étapes -->
            <div style="background-color: #fff3e0; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h4 style="color: #e65100; margin-top: 0;">📈 Prochaines étapes :</h4>
              <ul style="margin: 0; padding-left: 20px; color: #2c3e50;">
                <li>Valider la certification dans le système RH</li>
                <li>Planifier un entretien de suivi si nécessaire</li>
                <li>Envisager des formations complémentaires</li>
              </ul>
            </div>
          </div>

          <!-- Pied de page -->
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p style="margin: 0;">
              Cet email a été généré automatiquement par le système de gestion de formations CPS.<br>
              <strong>⚠️ Ne pas répondre à cet email.</strong>
            </p>
            <p style="margin: 10px 0 0 0;">
              © ${new Date().getFullYear()} - Centre de Formation CPS
            </p>
          </div>
        </div>
      `,
    };

    // Envoi de l'email à la direction
    await transporter.sendMail(mailOptions);

    // Email de félicitations à l'utilisateur
    const userMailOptions = {
      from: {
        name: 'Direction CPS - Formation',
        address: process.env.SMTP_USER || 'directions.cps@gmail.com'
      },
      to: userEmail,
      subject: `🎉 Félicitations ! Vous avez complété la formation ${formationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; background-color: #4CAF50; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0;">Félicitations ${userName} ! 🎓</h2>
          </div>
          
          <p>Cher(e) <strong>${userName}</strong>,</p>
          
          <p>Nous avons le plaisir de vous informer que vous avez <strong>complété à 100%</strong> la formation :</p>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center;">
            <h3 style="color: #4CAF50; margin: 0;">"${formationName}"</h3>
          </div>
          
          <p>La direction de CPS a été notifiée de votre réussite et votre certification sera traitée par le service RH.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0;">
              <strong>Date d'achèvement :</strong><br>
              ${completionDate}
            </p>
          </div>
          
          <p>Nous vous remercions pour votre engagement et vous félicitons pour cet accomplissement.</p>
          
          <div style="border-top: 2px solid #4CAF50; padding-top: 20px; margin-top: 30px;">
            <p style="color: #666; font-size: 14px;">
              <strong>Direction CPS</strong><br>
              Centre de Formation et de Développement<br>
              Email: directions.cps@gmail.com
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(userMailOptions);

    console.log('Emails envoyés avec succès:', {
      to: adminEmail,
      user: userEmail,
      formation: formationName
    });

    res.status(200).json({ 
      success: true,
      message: 'Emails envoyés avec succès',
      details: {
        adminNotified: adminEmail,
        userNotified: userEmail,
        formation: formationName
      }
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    
    res.status(500).json({ 
      success: false,
      message: 'Erreur lors de l\'envoi des emails',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Erreur serveur'
    });
  }
}