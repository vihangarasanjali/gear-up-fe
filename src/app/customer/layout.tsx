import React from "react";
import Sidebar from "../../componenets/customer/Sidebar";

export const metadata = {
  title: "Customer - Gear Up",
};

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar column (fixed width) */}
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content column */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
