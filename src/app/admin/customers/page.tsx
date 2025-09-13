import React from "react";

export default function CustomersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="bg-white rounded shadow p-4">
        <p className="text-sm text-gray-600">Customers and their basic details.</p>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-4 border rounded">Acme Corp<br /><span className="text-xs text-gray-500">Primary contact: Jane</span></div>
          <div className="p-4 border rounded">Omega LLC<br /><span className="text-xs text-gray-500">Primary contact: Mark</span></div>
          <div className="p-4 border rounded">Delta Inc<br /><span className="text-xs text-gray-500">Primary contact: Sam</span></div>
        </div>
      </div>
    </div>
  );
}
