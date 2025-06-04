"use client"
import { useParams, useRouter } from "next/navigation";
import formationsData  from '@/components/data/formationsPrincipales';
import FormationsSingle from "@/components/pages/formations/service-single";


const ServiceDetails = () => {
   const params = useParams();
    const router = useRouter();
    const id = params.id; 
    if (!id ) {
      return <div>Chargement...</div>;
    }
  // Trouve le groupe de formations avec l'ID de formation spécifié
  const selectedFormation = formationsData.find(
    (formation) => formation.id === id
  );  
    if (!selectedFormation) {
        return router.push("/404-error");
    }
    return (
        <>
            <FormationsSingle singleData={selectedFormation}/>
        </>
    );
};

export default ServiceDetails;