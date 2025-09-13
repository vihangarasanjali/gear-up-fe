import React from "react";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">Total Employees<br /><span className="text-2xl font-semibold">24</span></div>
        <div className="p-4 bg-white rounded shadow">Total Customers<br /><span className="text-2xl font-semibold">128</span></div>
        <div className="p-4 bg-white rounded shadow">Open Projects<br /><span className="text-2xl font-semibold">8</span></div>
      </div>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-sm text-gray-600">No recent activity to show. This area can be wired to real data later.</p>
      </section>
    </div>
  );
}
