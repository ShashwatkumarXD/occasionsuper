import React, { useState } from "react";
import VendorStep2 from "./VendorStep2";
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
            <p className="text-gray-500 mb-6">Step {step} of 4</p>


            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
                <div
                    className="bg-orange-400 h-2 rounded-full transition-all"
                    style={{ width: `${(step / 4) * 100}%` }}
                ></div>
            </div>

            {step === 1 && (
                <div>
                    {/* Business Info */}
                    <h3 className="text-xl font-bold mb-4">Business Information</h3>
                    <p className="text-gray-500 mb-6">Tell us about your business</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {/* Business Name */}
                        <div className="flex flex-col">
                            <label htmlFor="businessName" className="mb-1 font-medium text-gray-700">
                                Business Name
                            </label>
                            <input
                                type="text"
                                id="businessName"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="e.g., Royal Events & Catering"
                                className="border rounded-lg px-4 py-2 w-full"
                                required
                            />
                        </div>

                        {/* Owner Name */}
                        <div className="flex flex-col">
                            <label htmlFor="ownerName" className="mb-1 font-medium text-gray-700">
                                Owner Name
                            </label>
                            <input
                                type="text"
                                id="ownerName"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="border rounded-lg px-4 py-2 w-full"
                                required
                            />
                        </div>

                        {/* City */}
                        <div className="flex flex-col">
                            <label htmlFor="city" className="mb-1 font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Select your city"
                                className="border rounded-lg px-4 py-2 w-full"
                                required
                            />
                        </div>

                        {/* Service Area */}
                        <div className="flex flex-col">
                            <label htmlFor="serviceArea" className="mb-1 font-medium text-gray-700">
                                Service Area
                            </label>
                            <input
                                type="text"
                                id="serviceArea"
                                name="serviceArea"
                                value={formData.serviceArea}
                                onChange={handleChange}
                                placeholder="e.g., Mumbai & Pune"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        {/* Social Media Link */}
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="socialMedia" className="mb-1 font-medium text-gray-700">
                                Social Media Link
                            </label>
                            <input
                                type="url"
                                id="socialMedia"
                                name="socialMedia"
                                value={formData.socialMedia || ""}
                                onChange={handleChange}
                                placeholder="https://instagram.com/yourbusiness"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        {/* Upload Images */}
                        <div className="flex flex-col">
                            <label htmlFor="images" className="mb-1 font-medium text-gray-700">
                                Upload Images
                            </label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                multiple
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        {/* Upload Videos */}
                        <div className="flex flex-col">
                            <label htmlFor="videos" className="mb-1 font-medium text-gray-700">
                                Upload Videos
                            </label>
                            <input
                                type="file"
                                id="videos"
                                name="videos"
                                accept="video/*"
                                multiple
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>
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
                                    className={`flex flex-col items-center justify-center border rounded-xl py-6 hover:shadow-md transition ${selected ? "border-orange-400 bg-orange-50" : "border-gray-200"
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

            {step === 2 && (
   <VendorStep2
     onPrev={() => setStep(1)}
     onNext={(data) => {
       console.log("Step 2 data:", data);
       setStep(3);
     }}
   />
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
