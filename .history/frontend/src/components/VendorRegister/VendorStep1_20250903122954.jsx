import {
    Building2,
    UtensilsCrossed,
    Palette,
    Camera,
    Music,
    CalendarDays,
    MoreHorizontal
} from "lucide-react";
import FileUpload from "./FileUpload";
import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const VendorStep1 = ({ formData, handleChange, handleCategorySelect, setFormData }) => {
    const [cityOptions, setCityOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [showOthersInput, setShowOthersInput] = useState(false);


    const categories = [
        { id: 1, name: "Wedding Services", icon: Building2 },
        { id: 2, name: "Catering", icon: UtensilsCrossed },
        { id: 3, name: "Decoration", icon: Palette },
        { id: 4, name: "Photography", icon: Camera },
        { id: 5, name: "DJ/Music", icon: Music },
        { id: 6, name: "Event Planning", icon: CalendarDays },
        { id: 7, name: "Others", icon: MoreHorizontal },
    ];

    useEffect(() => {
        if (inputValue.length < 2) {
            setCityOptions([]);
            return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => {
            fetch(`http://localhost:3000/api/cities?q=${encodeURIComponent(inputValue)}`, {
                signal: controller.signal,
            })
                .then((res) => res.json())
                .then((data) => {
                    setCityOptions(data.map((place) => place.display_name));
                })
                .catch((err) => {
                    if (err.name !== "AbortError") console.error("City fetch failed:", err);
                });
        }, 1000); // debounce 1s

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [inputValue]);

    return (
        <div>
            {/* Business Info */}
            <h3 className="text-2xl text-center font-bold ">Business Information</h3>
            <p className="text-gray-500 text-center mb-8">Tell us about your business</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* Business Name */}
                <div className="flex flex-col">
                    <label htmlFor="businessName" className="text-xl mb-1 font-medium text-gray-700">
                        Business Name
                    </label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g., Royal Events & Catering"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* Owner Name */}
                <div className="flex flex-col">
                    <label htmlFor="ownerName" className="text-xl mb-1 font-medium text-gray-700">
                        Owner Name
                    </label>
                    <input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-xl mb-1 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xl mb-1 font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone || ""}
                        onChange={(e) => {
                            const digitsOnly = (e.target.value || "").replace(/\D/g, "");
                            setFormData({ ...formData, phone: digitsOnly });
                        }}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={15}
                        placeholder="e.g., 9876543210"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* City */}
                <div className="flex flex-col">
                    <label htmlFor="city" className="text-xl mb-1 font-medium text-gray-700">
                        City
                    </label>
                    <Autocomplete
                        freeSolo
                        options={cityOptions}
                        inputValue={inputValue}
                        onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
                        value={formData.city}
                        onChange={(e, newValue) =>
                            setFormData({ ...formData, city: newValue || "" })
                        }
                        renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                                <input
                                    type="text"
                                    {...params.inputProps}
                                    placeholder="Select your city"
                                    required
                                    className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                                />
                            </div>
                        )}
                    />
                </div>

                {/* Service Area */}
                <div className="flex flex-col">
                    <label htmlFor="serviceArea" className="text-xl mb-1 font-medium text-gray-700">
                        Service Area
                    </label>
                    <input
                        required
                        type="text"
                        id="serviceArea"
                        name="serviceArea"
                        value={formData.serviceArea}
                        onChange={handleChange}
                        placeholder="e.g., Mumbai & Pune"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                    />
                </div>

                {/* Social Media Link */}
                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="socialMedia" className="text-xl mb-1 font-medium text-gray-700">
                        Social Media Link
                    </label>
                    <input
                        type="url"
                        id="socialMedia"
                        name="socialMedia"
                        value={formData.socialMedia || ""}
                        onChange={handleChange}
                        placeholder="https://instagram.com/yourbusiness"
                        className="outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2 w-full"
                        required
                    />
                </div>

                {/* Categories */}


                <FileUpload
                    label="Upload Images"
                    description="You can upload multiple images"
                    onFileSelect={(urls) => setFormData((prev) => ({ ...prev, images: urls }))}
                    required={false}
                />

                <FileUpload
                    label="Upload Videos"
                    description="You can upload multiple videos"
                    onFileSelect={(urls) => setFormData((prev) => ({ ...prev, videos: urls }))}
                    required={false}
                />
            </div>

            <h3 className="text-xl font-bold mb-4">Service Categories</h3>
            <div className="grid md:grid-cols-3 gap-4">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const selected = formData.categories.includes(cat.name);
                    return (
                        // <button
                        //     key={cat.id}
                        //     onClick={() => handleCategorySelect(cat.name)}
                        //     className={`flex flex-col items-center justify-center border rounded-xl py-6 hover:shadow-md transition ${selected ? "border-orange-400 bg-orange-50" : "border-gray-200"
                        //         }`}
                        // >
                        //     <Icon size={32} className="text-orange-400 mb-2" />
                        //     <span className="font-medium text-gray-700">{cat.name}</span>
                        // </button>

                        <div key={cat.id} className={cat.name === "Others" ? "md:col-span-3" : ""}>
                            <button
                                onClick={() => {
                                    handleCategorySelect(cat.name);
                                    if (cat.name === "Others") {
                                        setShowOthersInput((prev) => !prev);
                                    }
                                }}
                                className={`flex flex-col items-center justify-center border rounded-xl py-6 w-full hover:shadow-md transition ${selected ? "border-orange-400 bg-orange-50" : "border-gray-200"
                                    }`}
                            >
                                <Icon size={32} className="text-orange-400 mb-2" />
                                <span className="font-medium text-gray-700">{cat.name}</span>
                            </button>

                            {cat.name === "Others" && showOthersInput && (
                                <input
                                    type="text"
                                    placeholder="Enter your category (e.g., Anchor, Bouncers, etc..)"
                                    value={formData.othersCategory || ""}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, othersCategory: e.target.value }))
                                    }
                                    className="mt-3 w-full outline-1 hover:outline-2 hover:outline-[#E69B83] rounded-lg px-4 py-2"
                                />
                            )}
                        </div>

                    );
                })}
            </div>

        </div>
    );
};

export default VendorStep1;
