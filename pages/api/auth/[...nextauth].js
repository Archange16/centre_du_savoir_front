// pages/api/auth/[...nextauth].js

import { authOptions } from "../../../lib/auth";
import NextAuth from "next-auth";

// ✅ Obligatoire avec Pages Router
export default NextAuth(authOptions);
