// VendorRegistration.jsx
import React, { useState } from "react";
import ShowHideButton from "./ShowHideButton"; // import eye toggle

function VendorRegistration() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsapp: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Form Data Submitted: ", formData);
        alert("Vendor registered successfully!");
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="outline-1 outline-orange-500 text-white p-10 rounded-xl shadow-lg w-full max-w-4xl"
            >
                <h2 className="text-2xl font-bold text-purple-400 mb-6">
                    Vendor Registration
                </h2>

                {/* Name Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Middle Name (Optional)</label>
                        <input
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                            required
                        />
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block mb-1">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Phone Number *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                            required
                        />
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="mt-4">
                    <label className="block mb-1">WhatsApp Number (Optional)</label>
                    <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                    />
                </div>

                {/* Address */}
                <div className="mt-4">
                    <label className="block mb-1">Address 1 (State, Region) *</label>
                    <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block mb-1">Address 2 (Street) *</label>
                    <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block mb-1">Address 3 (Block, Office No., House No.) *</label>
                    <input
                        type="text"
                        name="address3"
                        value={formData.address3}
                        onChange={handleChange}
                        className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label className="block mb-1">Address 4 (Nearby - Optional)</label>
                    <input
                        type="text"
                        name="address4"
                        value={formData.address4}
                        onChange={handleChange}
                        className="w-full p-2 border border-purple-500 rounded bg-black text-white"
                    />
                </div>

                {/* Passwords */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Password */}
                    <div className="relative">
                        <label className="block mb-1">Password *</label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-purple-500 rounded bg-black text-white pr-10"
                                required
                            />
                            <ShowHideButton
                                show={showPassword}
                                onToggle={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                    <label className="block mb-1">Confirm Password *</label>
                    <div className="relative w-full">
                        <input
                            type={showConfirm ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border border-purple-500 rounded bg-black text-white pr-10"
                            required
                        />
                        <ShowHideButton
                            show={showConfirm}
                            onToggle={() => setShowConfirm(!showConfirm)}
                        />
                    </div>
                </div>
        </div>

        {/* Terms */ }
    <div className="flex items-center mt-4">
        <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mr-2"
            required
        />
        <span>I agree to the Terms & Conditions *</span>
    </div>

    {/* Submit */ }
    <button
        type="submit"
        className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg"
    >
        Save & Continue
    </button>
      </form >
    </div >
  );
}

export default VendorRegistration;
