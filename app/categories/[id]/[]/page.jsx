"use client"
import { useParams, useRouter } from "next/navigation";
import portfolioData from '@/components/data/formationsPrincipales';
import FormationsSingle from "@/components/pages/formations/service-single";

const PortfolioDetail = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }
    return (
        <>
            <FormationsSingle singleData={singleData} />
        </>
    );
};

export default PortfolioDetail;