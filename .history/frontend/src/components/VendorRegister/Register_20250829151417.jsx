import React, { useState } from "react";
import VendorStep1 from "./VendorStep1";   // ⬅️ new
import VendorStep2 from "./VendorStep2";
import VendorStep3 from "./VendorStep3";
import VendorStep4 from "./VendorStep4";

const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: "",
        ownerName: "",
        city: "",
        serviceArea: "",
        categories: [],
    });

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
                <VendorStep1
                    formData={formData}
                    handleChange={handleChange}
                    handleCategorySelect={handleCategorySelect}
                />
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

            {step === 3 && (
                <VendorStep3
                    onPrev={() => setStep(2)}
                    onNext={(data) => {
                        console.log("Step 3 data:", data);
                        setStep(4);
                    }}
                />
            )}

            {step === 4 && (
                <VendorStep4
                    onPrev={() => setStep(3)}
                    onNext={(data) => {
                        console.log("Step 4 data:", data);
                        setStep(4);
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

                {step < 4 ? (
                    <button
                        onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                        className="px-6 py-2 rounded-lg bg-orange-300 hover:bg-orange-400 text-white"
                    >
                        Next →
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            console.log("Final Application Data:", formData);
                            alert("Application Submitted Successfully ✅");
                        }}
                        className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                    >
                        Submit Application
                    </button>
                )}
            </div>
        </div>
    );
};

export default Register;
