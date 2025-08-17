// app/%28dashboard%29/page.jsx
import HeaderFour from "@/components/layout/headers/header/header-four";
import { authOptions } from "../../lib/auth";

import { getServerSession } from "next-auth/next";
import SidebarAdmin from "../../components/pages/admin/sidebar-admin";
const Admin = async () => {

    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
                 <div>
                    <HeaderFour />
                    <SidebarAdmin />
                    {/* <h1>Admin Page</h1>
                    <h2>Admin page - welcome back {session?.user.name}</h2> */}
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