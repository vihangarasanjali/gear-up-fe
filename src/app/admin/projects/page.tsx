import React from "react";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-600">Overview of projects.</p>
        <ul className="mt-4 space-y-3">
          <li className="p-3 border rounded">Website Revamp — In Progress</li>
          <li className="p-3 border rounded">Mobile App — Planning</li>
        </ul>
      </div>
    </div>
  );
}
