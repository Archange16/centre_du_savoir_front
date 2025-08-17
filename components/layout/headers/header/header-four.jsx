// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { FaUser, FaSignInAlt } from "react-icons/fa";
import { Button } from "@/components/pages/ui/button";
import UserAccountnav from "@/components/pages/ui/UserAccountnav";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  px-4 py-3 navbarbg">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          CPS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            {status === "loading" ? null : session ? (
              <>
                <span className="text-white me-2 d-none d-md-inline">
                  <FaUser className="me-1" />
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
