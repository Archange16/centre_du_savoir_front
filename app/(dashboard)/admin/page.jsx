//"use client";
// app/%28dashboard%29/page.jsx
import HeaderIndex from "@/components/pages/admin";
import { authOptions } from "../../../lib/auth/[...nextauth]";

import { getServerSession } from "next-auth/next";
const Admin = async () => {

    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
                 <div>
                  <HeaderIndex />
                </div>           
        );
    }
    return (
        <>
           <h3>Please login to see this admin page</h3>
        </>
    );
};

export default Admin;