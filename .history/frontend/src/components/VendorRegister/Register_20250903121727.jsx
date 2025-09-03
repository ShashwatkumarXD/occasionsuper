import React, { useState } from "react";
import axios from "axios";
import VendorStep1 from "./VendorStep1";
import VendorStep2 from "./VendorStep2";
import VendorStep3 from "./VendorStep3";
import VendorStep4 from "./VendorStep4";
import { toast } from "react-toastify";

const Register = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        city: "",
        serviceArea: "",
        socialMedia: "",
        categories: [],
        images: [],
        videos: [],
        packages: [],
        documents: {
            gst: null,
            businessProof: null,
            idProof: null,
        },
        bankDetails: {
            accountHolder: "",
            accountNumber: "",
            ifsc: "",
        },
    });

    const isStepValid = (currentStep) => {
        if (currentStep === 1) {
            return (
                formData.businessName &&
                formData.ownerName &&
                formData.email &&
                formData.phone &&
                formData.city &&
                formData.serviceArea &&
                formData.categories.length > 0
            );
        }
        if (currentStep === 2) {
            return true;
        }
        if (currentStep === 3) {
            return true;
        }
        if (currentStep === 4) {
            return true;
        }
        return false;
    };


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

    const handleSubmit = async () => {
        if (
            !formData.businessName ||
            !formData.ownerName ||
            !formData.email ||
            !formData.phone ||
            !formData.city ||
            !formData.serviceArea ||
            !formData.categories.length
        ) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const sanitizedPackages = Array.isArray(formData.packages)
                ? formData.packages
                    .filter((pkg) => pkg && (pkg.title || pkg.price || pkg.description))
                    .map((pkg) => ({
                        title: (pkg.title || "").trim(),
                        price: String(pkg.price ?? "").trim(),
                        description: (pkg.description || "").trim(),
                        inclusions: pkg.inclusions || "",
                    }))
                    .filter((pkg) => pkg.title && pkg.price && pkg.description)
                : [];

            const payload = {
                ...formData,
                phone: String(formData.phone).replace(/\D/g, ""),
                categories: (formData.categories || []).map((c) => String(c).trim()),
                packages: sanitizedPackages,
                images: formData.images || null,
                videos: formData.videos || null,
                documents: formData.documents || {
                    gst: null,
                    businessProof: null,
                    idProof: null
                },
                socialMedia: formData.socialMedia || null,
            };

            localStorage.setItem("vendorFormData", JSON.stringify(payload));

            const response = await axios.post(
                "http://localhost:3000/api/register/vendor/register",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            console.log("Vendor Registered:", response.data);
            toast.success("Application Submitted Successfully");
        } catch (error) {
            console.error("Error submitting form:", error);
            const serverMsg = error?.response?.data?.message;
            const serverErrors = error?.response?.data?.errors;
            if (serverErrors && Array.isArray(serverErrors)) {
                toast.error(`Validation failed: ${serverErrors.join(", ")}`);
            } else if (serverMsg) {
                toast.error(serverMsg);
            } else {
                toast.error("Failed to submit application");
            }
        }
    };



    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Become a Vendor</h2>
                <p className="text-gray-500 font-semibold">Step {step} of 4</p>
            </div>


            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                <div
                    className="bg-[#E69B83] h-2 rounded-full transition-all"
                    style={{ width: `${(step / 4) * 100}%` }}
                ></div>
            </div>

            {step === 1 && (
                <VendorStep1
                    formData={formData}
                    handleChange={handleChange}
                    handleCategorySelect={handleCategorySelect}
                    setFormData={setFormData}
                />
            )}

            {step === 2 && (
                <VendorStep2
                    formData={formData}
                    setFormData={setFormData}
                    onPrev={() => setStep(1)}
                    onNext={() => setStep(3)}
                />
            )}



            {step === 3 && (
                <VendorStep3
                    formData={formData}
                    setFormData={setFormData}
                    onPrev={() => setStep(2)}
                />
            )}

            {step === 4 && (
                <VendorStep4
                    formData={formData}
                    setFormData={setFormData}
                    onPrev={() => setStep(3)}
                />
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                    disabled={step === 1}
                    className="px-6 py-2 rounded-lg text-white hover:bg-[#c16a4d] bg-[#E69B83] disabled:opacity-50"
                >
                    ← Previous
                </button>

                {step < 4 ? (
                    <button
                        onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                        disabled={!isStepValid(step)}
                        className="px-6 py-2 rounded-lg bg-[#E69B83] hover:bg-[#c16a4d] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next →
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={!isStepValid(step)}
                        className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Submit Application
                    </button>
                )}

            </div>
        </div>
    );
};

export default Register;
