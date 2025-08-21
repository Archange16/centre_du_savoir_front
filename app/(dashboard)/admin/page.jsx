"use client";
// app/%28dashboard%29/page.jsx
import HeaderIndex from "@/components/pages/admin";
import { authOptions } from "../../../lib/auth";

import { getServerSession } from "next-auth/next";
const Admin = async () => {

    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
                 <div>
                   {/*  <HeaderFour />
                    <SidebarAdmin /> */}
                    {/* <h1>Admin Page</h1>
                    <h2>Admin page - welcome back {session?.user.name}</h2> */}
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