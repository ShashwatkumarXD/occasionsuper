import FileUpload from "./FileUpload";
import { CircleCheck, Shield } from "lucide-react";

const VendorStep3 = () => {
  const handleGSTUpload = (file) => {
    console.log("GST file:", file);
  };

  const handleBussinessUpload = (file) => {
    console.log("Bussiness Proof file:", file);
  };

  const handleIDUpload = (file) => {
    console.log("ID Proof file:", file);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl text-center font-bold">Document Upload</h2>
      <p className="text-center text-gray-600 mb-4">
        Upload required documents for verification
      </p>

      {/* GST Upload */}
      <FileUpload
        label="GST Certificate"
        description="Required for tax compliance"
        onFileSelect={handleGSTUpload}
      />

      <FileUpload
        label="Business Registration"
        description="Shop license or business registration"
        onFileSelect={handleBussinessUpload}
      />


      {/* ID Proof Upload */}
      <FileUpload
        label="ID Proof"
        description="Aadhaar, PAN, or Passport"
        onFileSelect={handleIDUpload}
      />

      {/* Security Note */}
      <div className="p-4 bg-blue-50 rounded-lg mt-6">
        import {Shield} from "lucide-react";

        import { Shield } from "lucide-react";

<h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
  <Shield className="w-5 h-5 text-orange-500" />
  Document Security
</h3>


        <ul className="text-gray-600 list-disc pl-5 space-y-1">
          <li>All documents are encrypted and stored securely</li>
          <li>Used only for verification purposes</li>
          <li>Deleted after verification is complete</li>
        </ul>
      </div>
    </div>
  );
};

export default VendorStep3;
