"use client";

import React from "react";
import { Car, Edit2, Trash2, Plus } from "lucide-react";

type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
};

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    licensePlate: "ABC-123",
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: 2020,
    licensePlate: "XYZ-789",
  },
  {
    id: "3",
    make: "Ford",
    model: "Focus",
    year: 2017,
    licensePlate: "FDE-456",
  },
  {
    id: "4",
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    licensePlate: "EV-2022",
  },
  { id: "5", make: "BMW", model: "X3", year: 2019, licensePlate: "BMW-900" },
  { id: "6", make: "Audi", model: "A4", year: 2021, licensePlate: "AUD-404" },
];

export default function VehiclesPage() {
  const [vehicles, setVehicles] = React.useState<Vehicle[]>(mockVehicles);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    make: "",
    model: "",
    year: "",
    licensePlate: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.make || !form.model || !form.year || !form.licensePlate) {
      alert("Please fill all fields");
      return;
    }

    const newVehicle: Vehicle = {
      id: String(Date.now()),
      make: form.make,
      model: form.model,
      year: Number(form.year),
      licensePlate: form.licensePlate,
    };

    setVehicles((prev) => [newVehicle, ...prev]);
    setForm({ make: "", model: "", year: "", licensePlate: "" });
    closeModal();
  };

  const handleAdd = () => {
    // Placeholder: open modal or navigate to add vehicle form
    // For now, just log and add a dummy vehicle
    console.log("Add Vehicle clicked");
    const newVehicle: Vehicle = {
      id: String(Date.now()),
      make: "New",
      model: "Vehicle",
      year: 2025,
      licensePlate: "NEW-000",
    };
    setVehicles((prev) => [newVehicle, ...prev]);
  };

  const handleEdit = (id: string) => {
    // Placeholder: open edit form/modal
    console.log("Edit vehicle", id);
  };

  const handleDelete = (id: string) => {
    // Placeholder: confirm and delete
    console.log("Delete vehicle", id);
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-primary font-bold text-2xl">My Vehicles</h1>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-white hover:bg-secondary"
          >
            <Plus size={16} />
            Add Vehicle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-custom rounded-lg shadow p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Car className="text-primary" />
                  <h2 className="text-lg font-semibold">
                    {v.make} {v.model}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mt-2">Year: {v.year}</p>
                <p className="text-sm text-gray-600">Plate: {v.licensePlate}</p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(v.id)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary text-white hover:bg-secondary"
                >
                  <Edit2 size={16} />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(v.id)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-red-600 text-white hover:bg-red-500"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-custom rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-primary font-bold text-xl">Add Vehicle</h3>
              <button onClick={closeModal} className="hover:text-secondary">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Make
                </label>
                <input
                  name="make"
                  value={form.make}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-ternary bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Model
                </label>
                <input
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-ternary bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Year
                </label>
                <input
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  type="number"
                  className="mt-1 w-full rounded-md border border-ternary bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  License Plate
                </label>
                <input
                  name="licensePlate"
                  value={form.licensePlate}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-ternary bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-gray-400"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
