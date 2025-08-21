// app/components/HeaderAdmin.tsx
//"use client";

import React from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsJustify,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/pages/ui/button";
import UserAccountnav from "@/components/pages/ui/UserAccountnav";

const HeaderAdmin = ({ OpenSidebar }) => {
  const { data: session, status } = useSession();

  return (
    <header className="header navbarbg px-4 py-3 d-flex justify-content-between align-items-center">
      {/* Sidebar toggle button */}
      <div className="menu-icon d-flex align-items-center">
        <BsJustify className="icon me-3" onClick={OpenSidebar} />
        <BsSearch className="icon" />
      </div>

      {/* Centered brand/logo */}
      <div className="text-white fw-bold d-none d-md-block">
        <Link href="/">CPS Admin</Link>
      </div>

      {/* Right-side icons and auth */}
      <div className="header-right d-flex align-items-center gap-3">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />

        {status === "loading" ? null : session ? (
          <>
            <span className="text-white d-none d-md-inline-flex align-items-center gap-1">
              <FaUser />
              {session.user?.name || "User"}
            </span>
            <UserAccountnav />
          </>
        ) : (
          <Button onClick={() => signIn()} variant="outline" size="sm">
            <FaSignInAlt className="me-2" />
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default HeaderAdmin;
