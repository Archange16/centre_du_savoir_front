import React from 'react';
import { useForm } from 'react-hook-form'; // Bibliothèque pour gérer les formulaires React
import { z } from 'zod'; // Bibliothèque pour la validation de schémas
import { zodResolver } from '@hookform/resolvers/zod'; // Pour connecter Zod à React Hook Form
import Link from 'next/link';

// 📌 Définition du schéma de validation du formulaire avec Zod
const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have more than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // On affiche l'erreur sur le champ de confirmation
    message: 'Passwords do not match',
  });

const SignUpForm = () => {
  // ⚙️ Initialisation du formulaire avec validation Zod
  const {
    register,       // Pour enregistrer les champs du formulaire
    handleSubmit,   // Pour gérer la soumission du formulaire
    formState: { errors }, // Contient les erreurs de validation
    reset,          // Permet de réinitialiser le formulaire après soumission
  } = useForm({
    resolver: zodResolver(FormSchema), // On connecte le schéma Zod
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // 🚀 Fonction exécutée à la soumission du formulaire
  const onSubmit = async (values) => {
    // On enlève confirmPassword car il ne doit pas être envoyé à l'API
    const { confirmPassword, ...userData } = values;

    try {
      // Appel API vers /api/utilisateur pour créer un nouvel utilisateur
      const res = await fetch('/api/utilisateur', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Utilisateur créé avec succès !');
        reset(); // On réinitialise le formulaire après succès
      } else {
        alert(data.error || "Erreur lors de la création de l'utilisateur.");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau."); // Si le serveur n’est pas accessible
    }
  };

  return (
    // 🧾 Formulaire HTML connecté à React Hook Form
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Champ : Nom d'utilisateur */}
      <div className="contact__form-area-item">
      <input type="text" placeholder="Nom d'utilisateur" {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}
      </div>

      {/* Champ : Email */}
      <div className="contact__form-area-item">
      <input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      </div>
      {/* Champ : Mot de passe */}
      <div className="contact__form-area-item">
      <input type="password" placeholder="Mot de passe" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}
      </div>
      {/* Champ : Confirmation du mot de passe */}
      <div className="contact__form-area-item">
      <input type="password" placeholder="Confirmer le mot de passe" {...register('confirmPassword')} />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      {/* Bouton de soumission */}
      <button type="submit">Créer un compte</button>
       <p className='text-center text-sm text-gray-600 mt-2'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-in'>
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
