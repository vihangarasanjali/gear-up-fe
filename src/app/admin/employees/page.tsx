import React from "react";

export default function EmployeesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <div className="bg-white rounded shadow p-4">
        <p className="text-sm text-gray-600">List of employees will appear here.</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded">Alice Johnson — Manager</li>
          <li className="p-2 border rounded">Bob Smith — Technician</li>
          <li className="p-2 border rounded">Carol Lee — Designer</li>
        </ul>
      </div>
    </div>
  );
}
