import React from "react";
import {
    Building2,
    UtensilsCrossed,
    Palette,
    Camera,
    Music,
    CalendarDays,
} from "lucide-react";

const VendorStep1 = ({ formData, handleChange, handleCategorySelect }) => {
    const categories = [
        { id: 1, name: "Wedding Services", icon: Building2 },
        { id: 2, name: "Catering", icon: UtensilsCrossed },
        { id: 3, name: "Decoration", icon: Palette },
        { id: 4, name: "Photography", icon: Camera },
        { id: 5, name: "DJ/Music", icon: Music },
        { id: 6, name: "Event Planning", icon: CalendarDays },
    ];

    return (
        <div>
            {/* Business Info */}
            <h3 className="text-2xl text-center font-bold mb-1">Business Information</h3>
            <p className="text-gray-500 text-center mb-6">Tell us about your business</p>
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

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="border rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone || ""}
                        onChange={handleChange}
                        placeholder="e.g., +91 9876543210"
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
    );
};

export default VendorStep1;
