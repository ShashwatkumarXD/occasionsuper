// import React from "react";

// const VendorStep1 = ({ formData, handleChange, handleCategorySelect, categories }) => {
//   return (
//     <div>
//       {/* Business Info */}
//       <h3 className="text-xl font-bold mb-4">Business Information</h3>
//       <p className="text-gray-500 mb-6">Tell us about your business</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//         {/* Business Name */}
//         <div className="flex flex-col">
//           <label htmlFor="businessName" className="mb-1 font-medium text-gray-700">
//             Business Name
//           </label>
//           <input
//             type="text"
//             id="businessName"
//             name="businessName"
//             value={formData.businessName}
//             onChange={handleChange}
//             placeholder="e.g., Royal Events & Catering"
//             className="border rounded-lg px-4 py-2 w-full"
//             required
//           />
//         </div>

//         {/* Owner Name */}
//         <div className="flex flex-col">
//           <label htmlFor="ownerName" className="mb-1 font-medium text-gray-700">
//             Owner Name
//           </label>
//           <input
//             type="text"
//             id="ownerName"
//             name="ownerName"
//             value={formData.ownerName}
//             onChange={handleChange}
//             placeholder="Your full name"
//             className="border rounded-lg px-4 py-2 w-full"
//             required
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col">
//           <label htmlFor="city" className="mb-1 font-medium text-gray-700">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="Select your city"
//             className="border rounded-lg px-4 py-2 w-full"
//             required
//           />
//         </div>

//         {/* Service Area */}
//         <div className="flex flex-col">
//           <label htmlFor="serviceArea" className="mb-1 font-medium text-gray-700">
//             Service Area
//           </label>
//           <input
//             type="text"
//             id="serviceArea"
//             name="serviceArea"
//             value={formData.serviceArea}
//             onChange={handleChange}
//             placeholder="e.g., Mumbai & Pune"
//             className="border rounded-lg px-4 py-2 w-full"
//           />
//         </div>

//         {/* Social Media Link */}
//         <div className="flex flex-col md:col-span-2">
//           <label htmlFor="socialMedia" className="mb-1 font-medium text-gray-700">
//             Social Media Link
//           </label>
//           <input
//             type="url"
//             id="socialMedia"
//             name="socialMedia"
//             value={formData.socialMedia || ""}
//             onChange={handleChange}
//             placeholder="https://instagram.com/yourbusiness"
//             className="border rounded-lg px-4 py-2 w-full"
//           />
//         </div>

//         {/* Upload Images */}
//         <div className="flex flex-col">
//           <label htmlFor="images" className="mb-1 font-medium text-gray-700">
//             Upload Images
//           </label>
//           <input
//             type="file"
//             id="images"
//             name="images"
//             accept="image/*"
//             multiple
//             className="border rounded-lg px-4 py-2 w-full"
//           />
//         </div>

//         {/* Upload Videos */}
//         <div className="flex flex-col">
//           <label htmlFor="videos" className="mb-1 font-medium text-gray-700">
//             Upload Videos
//           </label>
//           <input
//             type="file"
//             id="videos"
//             name="videos"
//             accept="video/*"
//             multiple
//             className="border rounded-lg px-4 py-2 w-full"
//           />
//         </div>
//       </div>

//       {/* Categories */}
//       <h3 className="text-xl font-bold mb-4">Service Categories</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {categories.map((cat) => {
//           const Icon = cat.icon;
//           const selected = formData.categories.includes(cat.name);
//           return (
//             <button
//               key={cat.id}
//               type="button"
//               onClick={() => handleCategorySelect(cat.name)}
//               className={`flex flex-col items-center justify-center border rounded-xl py-6 hover:shadow-md transition ${
//                 selected ? "border-orange-400 bg-orange-50" : "border-gray-200"
//               }`}
//             >
//               <Icon size={32} className="text-orange-400 mb-2" />
//               <span className="font-medium text-gray-700">{cat.name}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default VendorStep1;

import React, { useState } from "react";
import VendorStep2 from "./VendorStep2";

const VendorStep1 = () => {
  const [step, setStep] = useState(1);
  const [vendorData, setVendorData] = useState({
    businessName: "",
    category: "",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    setVendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleNext = (data) => {
    setVendorData({ ...vendorData, ...data });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      {step === 1 && (
        <>
          {/* Progress Bar */}
          <div className="mb-6">
            <p className="text-lg font-semibold">Step 1 of 4</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-orange-400 h-2 rounded w-1/4"></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Business Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={vendorData.businessName}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Photography, Catering)"
              value={vendorData.category}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={vendorData.location}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={vendorData.contact}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => handleNext({})}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <VendorStep2
          onNext={(data) => handleNext(data)}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default VendorStep1;
