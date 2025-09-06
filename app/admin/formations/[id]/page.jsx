"use client"

import FormationDetailPage from "@/components/pages/admin/Setting";
import { useParams, useRouter } from "next/navigation";

const FormationDetailPageindex = () => {
    const params = useParams();

    const router = useRouter();
    if (!params.id) {
        return router.push("/404-error");
    }
    return (
        <> 
            <div className="main-container container mt-4 background-black">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <FormationDetailPage singleData={params.id} />
                </div>
            </div>
        </>
    );
};

export default FormationDetailPageindex;