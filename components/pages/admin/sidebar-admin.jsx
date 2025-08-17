"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaUsers, FaBook, FaCog } from "react-icons/fa";

const SidebarAdmin = () => {
  const pathname = usePathname();

  const linkClass = (href) =>
    `nav-link text-white ${pathname === href ? "fw-bold" : ""}`;

  return (
    <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dashboard/users" className={linkClass("/dashboard/users")}>
            <FaUsers className="me-2" /> Utilisateurs
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dashboard/courses" className={linkClass("/dashboard/courses")}>
            <FaBook className="me-2" /> Cours
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dashboard/settings" className={linkClass("/dashboard/settings")}>
            <FaCog className="me-2" /> Paramètres
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
