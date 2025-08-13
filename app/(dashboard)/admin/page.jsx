import { authOptions } from "../../../lib/auth";

import { getServerSession } from "next-auth/next";
const Admin = async () => {

    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
            <div>
                <h2>Admin page - welcome back {session?.user.name}</h2>
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