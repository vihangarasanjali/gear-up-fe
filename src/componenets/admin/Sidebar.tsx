"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Home, Users, User, Folder, Wrench, Calendar, FileText, LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: <Home size={18} /> },
  { href: "/admin/employees", label: "Employees", icon: <Users size={18} /> },
  { href: "/admin/customers", label: "Customers", icon: <User size={18} /> },
  { href: "/admin/projects", label: "Projects", icon: <Folder size={18} /> },
  { href: "/admin/services", label: "Services", icon: <Wrench size={18} /> },
  { href: "/admin/appointments", label: "Appointments", icon: <Calendar size={18} /> },
  { href: "/admin/modification-requests", label: "Modification Requests", icon: <FileText size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname() || "/admin";

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm px-4 py-6 flex flex-col">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center bg-gray-100 rounded px-2 py-1 mx-auto">
          <Image src="/Logo.png" alt="Company Logo" width={110} height={32} className="block" />
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href === "/admin" && pathname === "/admin");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                active ? "bg-gray-100 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-gray-700">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8">
        <Link href="/" className="flex items-center gap-3 text-gray-700 hover:text-black">
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
