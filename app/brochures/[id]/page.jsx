"use client"
import { useParams, useRouter } from "next/navigation";
import formationsData  from '../../../components/data/services-data';

import RequestQuotePage from "../../../components/pages/brochures";


const ServiceDetails = () => {
    const params = useParams();
    console.log("params", params);
    const selectedFormation = formationsData?.find((formation) => formation.slug === params.id);
    console.log("selectedFormation", selectedFormation);
    const router = useRouter();
    if (!selectedFormation) {
        return router?.push("/404-error");
    }
    return (
        <>
            <RequestQuotePage selectedFormation={selectedFormation}/>
        </>
    );
};

export default ServiceDetails;