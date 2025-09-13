import React from "react";

export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-600">Upcoming appointments and bookings.</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded">2025-09-15 — Client Meeting — 10:00 AM</li>
          <li className="p-2 border rounded">2025-09-18 — Site Visit — 2:00 PM</li>
        </ul>
      </div>
    </div>
  );
}
