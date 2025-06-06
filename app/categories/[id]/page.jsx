"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import portfolioData from "@/components/data/categoriesPrincipale";
import CategorieSingle from "@/components/pages/formations/categorie-single";

const ServiceDetails = () => {
    const params = useParams();
    const router = useRouter();
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        const found = portfolioData?.find((portfolio) => portfolio.categorie === params.id);
        if (!found) {
            router.push("/404-error");
        } else {
            setSingleData(found);
        }
    }, [params.id, router]);

    if (!singleData) {
        return null; // ou un petit loader si tu veux
    }

    return (
        <>
            <CategorieSingle singleData={singleData} />
        </>
    );
};

export default ServiceDetails;
