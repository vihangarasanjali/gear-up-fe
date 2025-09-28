import React from "react";
import Sidebar from "../../components/admin/Sidebar"; 
import Header from "../../components/admin/Header";   

export const metadata = {
  title: "Admin - Gear Up",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}