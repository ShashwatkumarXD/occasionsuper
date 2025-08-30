import React, { useState } from "react";

const VendorStep4 = () => {
  const [bankDetails, setBankDetails] = useState({
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
  });

  // This summary data could come from previous steps (props, context, or API)
  const applicationSummary = {
    business: "asfd",
    owner: "ad",
    location: "Lucknow",
    categories: "catering",
    packages: "0 created",
    documents: "0/3 uploaded",
    bankDetails: "Pending",
  };

  const handleChange = (e) => {
    setBankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Final submission:", {
      ...applicationSummary,
      bankDetails,
    });
    alert("Application submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-3 bg-white rounded-lg">
      {/* Bank Details Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8" >
        <h3 className="text-2xl font-semibold mb-4 text-center">Bank Details</h3>
        <p className="text-gray-600 text-center mb-6">
          Add your bank details for secure payouts
        </p>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Account Holder Name *
            </label>
            <input
              type="text"
              name="accountHolder"
              value={bankDetails.accountHolder}
              onChange={handleChange}
              placeholder="As per bank records"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Account Number *</label>
            <input
              type="text"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              placeholder="Enter your account number"
              className="w-full border rounded-lg p-3"
            />
            <p className="text-sm text-gray-500 mt-1">
              Account number will be masked for security
            </p>
          </div>

          <div>
            <label className="block font-medium mb-1">IFSC Code *</label>
            <input
              type="text"
              name="ifsc"
              value={bankDetails.ifsc}
              onChange={handleChange}
              placeholder="e.g., SBIN0001234"
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>
      </div >

      {/* Security & Privacy */}
      <div div className="m-8" >
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="text-orange-400 mr-2">🔒</span> Security & Privacy
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Bank details are encrypted and stored securely
          </li>
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Account numbers are masked in all interfaces
          </li>
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Used only for legitimate payout processing
          </li>
          <li className="flex items-center">
            <span className="text-orange-400 mr-2">✔</span>
            Compliant with banking security standards
          </li>
        </ul>
      </div >


      {/* Application Summary Section */}
      <div div className="bg-orange-50 shadow-md rounded-xl p-6 mb-8" >
        <h3 className="text-xl font-semibold mb-4">Application Summary</h3>
        <ul className="space-y-2">
          <li>
            <strong>Business:</strong> {applicationSummary.business}
          </li>
          <li>
            <strong>Owner:</strong> {applicationSummary.owner}
          </li>
          <li>
            <strong>Location:</strong> {applicationSummary.location}
          </li>
          <li>
            <strong>Categories:</strong> {applicationSummary.categories}
          </li>
          <li>
            <strong>Packages:</strong> {applicationSummary.packages}
          </li>
          <li>
            <strong>Documents:</strong> {applicationSummary.documents}
          </li>
          <li>
            <strong>Bank Details:</strong> {applicationSummary.bankDetails}
          </li>
        </ul>
      </div >
    </div >
  );
};

export default VendorStep4;
