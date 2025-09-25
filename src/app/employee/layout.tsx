import React from "react";
import EmployeeSidebar from "../../components/employee/Sidebar";

export const metadata = {
  title: "Employee - Gear Up",
};

export default function EmployeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <EmployeeSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
