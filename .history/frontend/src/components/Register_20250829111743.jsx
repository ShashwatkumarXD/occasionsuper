// // VendorRegistration.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ShowHideButton from "./ShowHideButton" 

// function Register() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         middleName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         whatsapp: "",
//         address1: "",
//         address2: "",
//         address3: "",
//         address4: "",
//         password: "",
//         confirmPassword: "",
//         terms: false,
//     });

//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirm, setShowConfirm] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }

//         console.log("Form Data Submitted: ", formData);
//         alert("Vendor registered successfully!");
//     };

//     return (
//         <div className="h-fit flex justify-center items-center">
//             <form
//                 onSubmit={handleSubmit}
//                 className="text-white p-4 rounded-xl w-full max-w-4xl"
//             >
//                 <h2 className="text-3xl text-black text-center font-bold mb-6">
//                     Vendor Registration
//                 </h2>

//                 {/* Name Fields */}
//                 <div className="grid grid-cols-3 gap-4">
//                     <div>
//                         <label className="text-black block mb-1">First Name *</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="text-black block mb-1">Middle Name (Optional)</label>
//                         <input
//                             type="text"
//                             name="middleName"
//                             value={formData.middleName}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                         />
//                     </div>
//                     <div>
//                         <label className="text-black block mb-1">Last Name *</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* Email & Phone */}
//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                     <div>
//                         <label className="text-black block mb-1">Email *</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="text-black block mb-1">Phone Number *</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>
//                 </div>

//                 {/* WhatsApp */}
//                 {/* <div className="mt-4">
//                     <label className="text-black block mb-1">WhatsApp Number (Optional)</label>
//                     <input
//                         type="text"
//                         name="whatsapp"
//                         value={formData.whatsapp}
//                         onChange={handleChange}
//                         className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                     />
//                 </div> */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//                     {/* Address 1 */}
//                     <div>
//                         <label className="text-black block mb-1">
//                             Address 1 (State, Region) *
//                         </label>
//                         <input
//                             type="text"
//                             name="address1"
//                             value={formData.address1}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>

//                     {/* Address 2 */}
//                     <div>
//                         <label className="text-black block mb-1">
//                             Address 2 (Street) *
//                         </label>
//                         <input
//                             type="text"
//                             name="address2"
//                             value={formData.address2}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>

//                     {/* Address 3 */}
//                     {/* <div>
//                         <label className="text-black block mb-1">
//                             Address 3 (Block, Office No., House No.) *
//                         </label>
//                         <input
//                             type="text"
//                             name="address3"
//                             value={formData.address3}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="text-black block mb-1">
//                             Address 4 (Nearby - Optional)
//                         </label>
//                         <input
//                             type="text"
//                             name="address4"
//                             value={formData.address4}
//                             onChange={handleChange}
//                             className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                         />
//                     </div> */}
//                 </div>


//                 {/* Passwords */}
//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                     {/* Password */}
//                     <div className="relative">
//                         <label className="text-black block mb-1">Password *</label>
//                         <div className="relative w-full">
//                             <input
//                                 type={showPassword ? "text" : "password"}
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                                 required
//                             />
//                             <ShowHideButton
//                                 show={showPassword}
//                                 onToggle={() => setShowPassword(!showPassword)}
//                             />
//                         </div>
//                     </div>

//                     {/* Confirm Password */}
//                     <div className="relative">
//                         <label className="text-black block mb-1">Confirm Password *</label>
//                         <div className="relative w-full">
//                             <input
//                                 type={showConfirm ? "text" : "password"}
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                                 className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
//                                 required
//                             />
//                             <ShowHideButton
//                                 show={showConfirm}
//                                 onToggle={() => setShowConfirm(!showConfirm)}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Terms */}
//                 <div className="flex items-center mt-4">
//                     <input
//                         type="checkbox"
//                         name="terms"
//                         checked={formData.terms}
//                         onChange={handleChange}
//                         className="mr-2"
//                         required
//                     />
//                     <Link to="" className="text-md text-gray-500 hover:text-[#E69B83]">I agree to the Terms & Conditions</Link>
//                 </div>

//                 {/* Submit */}
//                 <button
//                     type="submit"
//                     className="mt-4 text-xl w-full bg-[#E69B83] text-white font-bold p-4 rounded-lg hover:cursor-pointer hover:shadow-md hover:shadow-[#c16a4d] hover:bg-[#c16a4d]"
//                 >
//                     Save & Continue
//                 </button>
//             </form >
//         </div >
//     );
// }

// export default Register;


import React, { useState } from "react";
import {
  Building2,
  UtensilsCrossed,
  Palette,
  Camera,
  Music,
  CalendarDays,
} from "lucide-react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    city: "",
    serviceArea: "",
    categories: [],
  });

  const categories = [
    { id: 1, name: "Wedding Services", icon: Building2 },
    { id: 2, name: "Catering", icon: UtensilsCrossed },
    { id: 3, name: "Decoration", icon: Palette },
    { id: 4, name: "Photography", icon: Camera },
    { id: 5, name: "DJ/Music", icon: Music },
    { id: 6, name: "Event Planning", icon: CalendarDays },
  ];

  const handleCategorySelect = (name) => {
    setFormData((prev) => {
      const alreadySelected = prev.categories.includes(name);
      return {
        ...prev,
        categories: alreadySelected
          ? prev.categories.filter((cat) => cat !== name)
          : [...prev.categories, name],
      };
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-2">Become a Vendor</h2>
      <p className="text-gray-500 mb-6">Step {step} of 3</p> {/* changed from 4 to 3 */}

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div
          className="bg-orange-400 h-2 rounded-full transition-all"
          style={{ width: `${(step / 3) * 100}%` }} 
        ></div>
      </div>

      {step === 1 && (
        <div>
          {/* Business Info */}
          <h3 className="text-xl font-bold mb-4">Business Information</h3>
          <p className="text-gray-500 mb-6">Tell us about your business</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="e.g., Royal Events & Catering"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Your full name"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Select your city"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              name="serviceArea"
              value={formData.serviceArea}
              onChange={handleChange}
              placeholder="e.g., Mumbai & Pune"
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Categories */}
          <h3 className="text-xl font-bold mb-4">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const selected = formData.categories.includes(cat.name);
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`flex flex-col items-center justify-center border rounded-xl py-6 hover:shadow-md transition ${
                    selected ? "border-orange-400 bg-orange-50" : "border-gray-200"
                  }`}
                >
                  <Icon size={32} className="text-orange-400 mb-2" />
                  <span className="font-medium text-gray-700">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          disabled={step === 1}
          className="px-6 py-2 rounded-lg border text-gray-400 hover:bg-gray-100 disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
          className="px-6 py-2 rounded-lg bg-orange-300 hover:bg-orange-400 text-white"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Register