'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

// 🔐 Schéma de validation : email et mot de passe
const FormSchema = z.object({
  email: z.string().min(1, 'Email requis').email('Email invalide'),
  password: z
    .string()
    .min(1, 'Mot de passe requis')
    .min(8, 'Au moins 8 caractères'),
});

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // ⚙️ Soumission du formulaire
  const onSubmit = async (data) => {
    const res = await signIn('credentials', {
      redirect: false, // On gère la redirection manuellement
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      // Connexion réussie → redirection
      router.push('/admin');
    } else {
      // Échec → message d’erreur
      alert('Échec de la connexion. Vérifie tes identifiants.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Champ Email */}
      <input
        type="email"
        placeholder="Email"
        {...register('email')}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      {/* Champ Mot de passe */}
      <input
        type="password"
        placeholder="Mot de passe"
        {...register('password')}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      {/* Bouton connexion */}
      <button type="submit">Se connecter</button>

      <p className="text-center text-sm text-gray-600 mt-2">
        Pas encore de compte ?{' '}
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Inscris-toi
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
