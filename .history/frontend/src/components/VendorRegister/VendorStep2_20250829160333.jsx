import React, { useState } from "react";

const VendorStep2 = ({ onNext, onPrev }) => {
  const [packages, setPackages] = useState([
    { title: "", price: 0, description: "", inclusions: "" },
  ]);
  const [calendarLink, setCalendarLink] = useState("");

  const handlePackageChange = (index, field, value) => {
    const updated = [...packages];
    updated[index][field] = value;
    setPackages(updated);
  };

  const addPackage = () => {
    setPackages([
      ...packages,
      { title: "", price: 0, description: "", inclusions: "" },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow">
      {/* Progress bar
      <div className="mb-6">
        <p className="text-lg font-semibold">Step 2 of 4</p>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div className="bg-orange-400 h-2 rounded w-1/2"></div>
        </div>
      </div> */}

      <h2 className="text-2xl text-center font-bold mb-2">Packages & Calendar</h2>

      {/* Service Packages */}
      <p className="text-gray-500 text-center mb-8">Create packages and connect your calendar</p>
      {packages.map((pkg, idx) => (
        <div key={idx} className="border rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Package {idx + 1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <input
              type="text"
              placeholder="e.g., Premium Wedding Package"
              value={pkg.title}
              onChange={(e) =>
                handlePackageChange(idx, "title", e.target.value)
              }
              className="border rounded p-2 w-full"
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={pkg.price}
              onChange={(e) =>
                handlePackageChange(idx, "price", e.target.value)
              }
              className="border rounded p-2 w-full"
            />
          </div>
          <textarea
            placeholder="Describe what's included in this package..."
            value={pkg.description}
            onChange={(e) =>
              handlePackageChange(idx, "description", e.target.value)
            }
            className="border rounded p-2 w-full mb-3"
          />
          <textarea
            placeholder="List all items/services included (one per line)"
            value={pkg.inclusions}
            onChange={(e) =>
              handlePackageChange(idx, "inclusions", e.target.value)
            }
            className="border rounded p-2 w-full"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addPackage}
        className="text-orange-500 font-semibold hover:underline mb-6"
      >
        + Add Another Package
      </button>

      {/* Calendar Integration */}
      <h3 className="text-xl font-semibold mb-2">Calendar Integration (Optional)</h3>
      <input
        type="url"
        placeholder="https://calendar.google.com/calendar/..."
        value={calendarLink}
        onChange={(e) => setCalendarLink(e.target.value)}
        className="border rounded p-2 w-full mb-3"
      />
      <ul className="list-disc pl-6 text-gray-600 text-sm mb-6">
        <li>Automatic availability updates</li>
        <li>Prevent double bookings</li>
        <li>Real-time schedule management</li>
      </ul>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => onNext({ packages, calendarLink })}
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default VendorStep2;
