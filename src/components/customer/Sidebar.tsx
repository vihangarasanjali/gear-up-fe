"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { Home, Car, Calendar, Folder, User, MessageSquare, LogOut } from "lucide-react";

const navItems = [
  { href: "/customer", label: "Dashboard", icon: <Home size={16} /> },
  { href: "/customer/vehicles", label: "My Vehicles", icon: <Car size={16} /> },
  { href: "/customer/appointments", label: "My Appointments", icon: <Calendar size={16} /> },
  { href: "/customer/projects", label: "My Projects", icon: <Folder size={16} /> },
  { href: "/customer/profile", label: "Profile", icon: <User size={16} /> },
  { href: "/customer/chatbot", label: "Chatbot", icon: <MessageSquare size={16} /> },
];

export default function CustomerSidebar() {
  const pathname = usePathname() || "/customer";

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm px-4 py-6 flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center bg-gray-100 rounded px-2 py-1 mx-auto">
          <Image src="/Logo.png" alt="Company Logo" width={110} height={32} className="block" />
        </div>
      </div>

      <div className="mb-4 text-center font-semibold">User Name</div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href === "/customer" && pathname === "/customer");
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
          <LogOut size={16} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
