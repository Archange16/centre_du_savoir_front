//"use client";
// app/%28dashboard%29/page.jsx
import HeaderAppIndex from "@/components/pages/admin/index-app";
import { authOptions } from "../../../lib/auth/[...nextauth]";

import { getServerSession } from "next-auth/next";
const Appenant = async () => {

    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
                 <div>
                  <HeaderAppIndex />
                </div>           
        );
    }
    return (
        <>
           <h3>Please login to see this admin page</h3>
        </>
    );
};

export default Appenant;