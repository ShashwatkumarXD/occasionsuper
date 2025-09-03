import React, { useState } from "react";
import EventBasics from "../components/EventPlanning/EventBasics";
import BudgetPriorities from "../components/EventPlanning/BudgetPriorities";
import VenuePreferences from "../components/EventPlanning/VenuePreferences";
import ServicesRequired from "../components/EventPlanning/ServicesRequired";
import SpecialInstructions from "../components/EventPlanning/SpecialInstructions";

const EventPlanning = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        eventType: "",
        date: "",
        city: "",
        guests: 50,
        budget: 100000,
        priorities: {
            "Food & Catering": 5,
            "Decoration & Ambiance": 5,
            "Photography & Videography": 5,
        },
        venuePreference: "",
    });


    const totalSteps = 5;

    return (
        <div className="min-h-screen  bg-gray-50 flex justify-center items-center p-6 border-2 border-black">
            <div className="max-w-3xl w-full space-y-6 border-2">
                {/* Progress Bar */}
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">
                            Event Planner Wizard
                        </h1>
                        <p className="text-sm text-gray-500">
                            Step {step} of {totalSteps}
                        </p>
                    </div>

                    <div className="mt-2 h-2 bg-gray-200 rounded-full">
                        <div
                            className="h-2 bg-orange-400 rounded-full"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Step Content */}
                {step === 1 && (
                    <EventBasics formData={formData} setFormData={setFormData} />
                )}
                {step === 2 && (
                    <BudgetPriorities formData={formData} setFormData={setFormData} />
                )}
                {step === 3 && (
                    <VenuePreferences formData={formData} setFormData={setFormData} />
                )}
                {step === 4 && (
                    <ServicesRequired formData={formData} setFormData={setFormData} />
                )}
                {step === 5 && (
                    <SpecialInstructions
                        event={{
                            type: "Wedding",
                            date: "2025-08-13",
                            city: "Delhi",
                            guests: 210,
                            budget: "100,000",
                            venue: "",
                            services: [],
                        }}
                    />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                    <button
                        onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                        disabled={step === 1}
                        className="px-6 py-2 rounded-xl border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-40"
                    >
                        ← Previous
                    </button>
                    <button
                        onClick={() => setStep((prev) => Math.min(prev + 1, totalSteps))}
                        className="px-6 py-2 rounded-xl bg-orange-300 text-white hover:bg-orange-400"
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventPlanning;
