// app/components/UserAccountnav.tsx
"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { FaSignOutAlt } from "react-icons/fa";

const UserAccountnav = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant="destructive"
      size="sm"
    >
      <FaSignOutAlt className="me-2" />
      Sign Out
    </Button>
  );
};

export default UserAccountnav;
