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

  const removePackage = (index) => {
    setPackages((prev) => prev.filter((_, i) => i !== index));
  };


  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow">
      <h2 className="text-2xl text-center font-bold">Packages & Calendar</h2>
      <p className="text-gray-500 text-center mb-8">Create packages and connect your calendar</p>
      {packages.map((pkg, idx) => (
        <div key={idx} className="outline-2 outline-[#E69B83] rounded-lg p-4 mb-4">
          <p className="font-bold text-xl mb-2">Package {idx + 1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="flex flex-col">
              <label htmlFor="businessName" className="text-lg mb-1 font-medium text-gray-700">
                Package Title
              </label>
              <input
                type="text"
                placeholder="e.g., Premium Wedding Package"
                value={pkg.title}
                onChange={(e) =>
                  handlePackageChange(idx, "title", e.target.value)
                }
                className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded p-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="businessName" className="text-lg mb-1 font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                placeholder="Price (₹)"
                value={pkg.price}
                onChange={(e) =>
                  handlePackageChange(idx, "price", e.target.value)
                }
                className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded p-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="businessName" className="text-lg mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Describe what's included in this package..."
              value={pkg.description}
              onChange={(e) =>
                handlePackageChange(idx, "description", e.target.value)
              }
              className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded p-2 w-full mb-3"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="businessName" className="text-xl mb-1 font-medium text-gray-700">
              Inclusions
            </label>
            <textarea
              placeholder="List all items/services included (one per line)"
              value={pkg.inclusions}
              onChange={(e) =>
                handlePackageChange(idx, "inclusions", e.target.value)
              }
              className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded p-2 w-full"
            />
          </div>
        </div>
      ))}

      {/* <button
        type="button"
        onClick={addPackage}
        className="text-orange-500 font-semibold hover:underline mb-6"
      >
        + Add Another Package
      </button> */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={addPackage}
          className="text-[#E69B83] font-semibold hover:underline"
        >
          + Add Another Package
        </button>

        {packages.length > 1 && (
          <button
            type="button"
            onClick={() => removePackage(packages.length - 1)}
            className="text-red-500 font-semibold hover:underline"
          >
            − Delete this Package
          </button>
        )}
      </div>

    </div>
  );
};

export default VendorStep2;
