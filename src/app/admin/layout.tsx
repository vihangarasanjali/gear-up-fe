import React from "react";
import Sidebar from "../../componenets/admin/Sidebar";

export const metadata = {
  title: "Admin - Gear Up",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
