import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-600">Services offered by the company.</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded">Consulting</li>
          <li className="p-2 border rounded">Implementation</li>
          <li className="p-2 border rounded">Support</li>
        </ul>
      </div>
    </div>
  );
}
