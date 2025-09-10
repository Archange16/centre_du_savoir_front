'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

import { getSession } from 'next-auth/react'; // 🔁 pour récupérer la session

import image2 from '../../../../public/assets/img/logo-1.png';
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const res = await signIn('credentials', {
      redirect: false, // On gère la redirection manuellement
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
    // 🔁 Récupère la session mise à jour après connexion
    const session = await getSession();

    const role = session?.user?.role;
    console.log('Rôle utilisateur:', role);

    if (role === 'ADMIN') {
      router.push('/admin');
    } else {
      router.push('/apprenant'); // ou une autre page pour apprenants
    }
  } else {
    alert('Échec de la connexion. Vérifie tes identifiants.');
  }

  setIsLoading(false);
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary min-vh-100">
      <main className="form-signin w-100 m-auto" style={{ maxWidth: '400px' }}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="text-center">
            
             <img className="img__full" src={image2?.src} alt="logo" />
            <h4>Connectez-vous</h4>
          </div>

          {/* Champ Email */}
          <div className="form-floating mb-2">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="floatingInput"
              placeholder="name@example.com"
              {...register('email')}
            />
            <label htmlFor="floatingInput">Adresse email</label>
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Champ Mot de passe */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="floatingPassword"
              placeholder="Mot de passe"
              {...register('password')}
            />
            <label htmlFor="floatingPassword">Mot de passe</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Se souvenir de moi
            </label>
          </div>

          {/* Bouton connexion */}
          <button
            className="btn btnconnexion w-100 py-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>

          <div className="text-center mt-3">
            <p className="mt-4 mb-3 text-body-secondary">
              Pas encore de compte?{' '}
              <Link 
                href="/"
                className="text-primary text-decoration-none"
              >
                Visiter notre site
              </Link>
            </p>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2025</p>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignInForm;