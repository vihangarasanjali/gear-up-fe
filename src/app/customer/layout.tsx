import React from "react";
import CustomerSidebar from "../../componenets/customer/Sidebar";

export const metadata = {
  title: "Customer - Gear Up",
};

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <CustomerSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
