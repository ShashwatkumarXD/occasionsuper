// VendorRegistration.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowHideButton from "./ShowHideButton" 

function Register() {
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
        <div className="h-fit flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="outline-10 outline-white text-white p-4 rounded-xl w-full max-w-4xl"
            >
                <h2 className="text-3xl text-black text-center font-bold mb-6">
                    Vendor Registration
                </h2>

                {/* Name Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="text-black block mb-1">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-black block mb-1">Middle Name (Optional)</label>
                        <input
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                        />
                    </div>
                    <div>
                        <label className="text-black block mb-1">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="text-black block mb-1">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-black block mb-1">Phone Number *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>
                </div>

                {/* WhatsApp */}
                {/* <div className="mt-4">
                    <label className="text-black block mb-1">WhatsApp Number (Optional)</label>
                    <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                    />
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Address 1 */}
                    <div>
                        <label className="text-black block mb-1">
                            Address 1 (State, Region) *
                        </label>
                        <input
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>

                    {/* Address 2 */}
                    <div>
                        <label className="text-black block mb-1">
                            Address 2 (Street) *
                        </label>
                        <input
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>

                    {/* Address 3 */}
                    {/* <div>
                        <label className="text-black block mb-1">
                            Address 3 (Block, Office No., House No.) *
                        </label>
                        <input
                            type="text"
                            name="address3"
                            value={formData.address3}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-black block mb-1">
                            Address 4 (Nearby - Optional)
                        </label>
                        <input
                            type="text"
                            name="address4"
                            value={formData.address4}
                            onChange={handleChange}
                            className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                        />
                    </div> */}
                </div>


                {/* Passwords */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {/* Password */}
                    <div className="relative">
                        <label className="text-black block mb-1">Password *</label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
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
                        <label className="text-black block mb-1">Confirm Password *</label>
                        <div className="relative w-full">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-2 outline-1 outline-gray-500 hover:outline-2 hover:outline-[#E69B83] rounded text-black"
                                required
                            />
                            <ShowHideButton
                                show={showConfirm}
                                onToggle={() => setShowConfirm(!showConfirm)}
                            />
                        </div>
                    </div>
                </div>

                {/* Terms */}
                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <Link to="" className="text-md text-gray-500 hover:text-[#E69B83]">I agree to the Terms & Conditions</Link>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-4 text-xl w-full bg-[#E69B83] text-white font-bold p-4 rounded-lg hover:cursor-pointer hover:shadow-md hover:shadow-[#c16a4d] hover:bg-[#c16a4d]"
                >
                    Save & Continue
                </button>
            </form >
        </div >
    );
}

export default Register;
