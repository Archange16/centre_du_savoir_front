"use client"

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import FormationsSingle from "@/components/pages/formations/service-single";
import { fetchFormationById } from "@/services/apiFormation";

const FormationsDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const result = await fetchFormationById(params.id);
        console.log('Service fetched:', result);

        if (!result) {
          router.push("/404-error");
          return;
        }

        setServiceDetails(result);
      } catch (error) {
        console.error('Erreur de chargement:', error);
        router.push("/404-error");
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [params.id, router]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!serviceDetails) {
    return null; // On ne retourne rien, redirection déjà faite
  }

  return (
    <FormationsSingle serviceDetails={serviceDetails} />
  );
};

export default FormationsDetail;
