import React from "react";

export default function ModificationRequestsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Modification Requests</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-600">Requests submitted by customers/clients to modify projects or services.</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded">#1234 — Change color palette — Pending</li>
          <li className="p-2 border rounded">#1256 — Update scope — Approved</li>
        </ul>
      </div>
    </div>
  );
}
