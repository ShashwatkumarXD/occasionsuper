// import FileUpload from "./FileUpload";
// import { CircleCheck, Shield } from "lucide-react";

// const VendorStep3 = ({ formData, setFormData }) => {
//  const handleGSTUpload = (files) => setFormData((prev) => ({
//    ...prev, documents: { ...prev.documents, gst: files }
//  }));

//  const handleBussinessUpload = (files) => setFormData((prev) => ({
//    ...prev, documents: { ...prev.documents, businessProof: files }
//  }));

//  const handleIDUpload = (files) => setFormData((prev) => ({
//    ...prev, documents: { ...prev.documents, idProof: files }
//  }));
//   return (
//     <div className="max-w-3xl mx-auto">
//       <h2 className="text-2xl text-center font-bold">Document Upload</h2>
//       <p className="text-center text-gray-600 mb-4">
//         Upload required documents for verification
//       </p>

//       {/* GST Upload */}
//       <FileUpload
//         label="GST Certificate"
//         description="Required for tax compliance"
//         onFileSelect={handleGSTUpload}
//       />

//       <FileUpload
//         label="Business Registration"
//         description="Shop license or business registration"
//         onFileSelect={handleBussinessUpload}
//       />


//       {/* ID Proof Upload */}
//       <FileUpload
//         label="ID Proof"
//         description="Aadhaar, PAN, or Passport"
//         onFileSelect={handleIDUpload}
//       />

//       {/* Security Note */}
//       <div className="p-4 bg-blue-50 rounded-lg mt-6">
//         <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
//           <Shield className="w-6 h-6 text-orange-500" />
//           Document Security
//         </h3>
//         <ul className="text-gray-600 list-disc space-y-1">
//           <li className="flex items-center gap-2">
//             <CircleCheck className="w-4 h-4 text-green-500" />
//             All documents are encrypted and stored securely
//           </li>
//           <li className="flex items-center gap-2">
//             <CircleCheck className="w-4 h-4 text-green-500" />
//             Used only for verification purposes
//           </li>
//           <li className="flex items-center gap-2">
//             <CircleCheck className="w-4 h-4 text-green-500" />
//             Deleted after verification is complete
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default VendorStep3;


import FileUpload from "./FileUpload";
import { CircleCheck, Shield } from "lucide-react";

const VendorStep3 = ({ formData, setFormData }) => {
 const handleGSTUpload = (files) => setFormData((prev) => ({
   ...prev, documents: { ...prev.documents, gst: files }
 }));

 const handleBussinessUpload = (files) => setFormData((prev) => ({
   ...prev, documents: { ...prev.documents, businessProof: files }
 }));

 const handleIDUpload = (files) => setFormData((prev) => ({
   ...prev, documents: { ...prev.documents, idProof: files }
 }));
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl text-center font-bold">Document Upload</h2>
      <p className="text-center text-gray-600 mb-4">
        Upload required documents for verification (all documents are optional)
      </p>

      {/* GST Upload */}
      <FileUpload
        label="GST Certificate"
        description="Required for tax compliance"
        onFileSelect={handleGSTUpload}
        required={false}
      />

      <FileUpload
        label="Business Registration"
        description="Shop license or business registration"
        onFileSelect={handleBussinessUpload}
        required={false}
      />


      {/* ID Proof Upload */}
      <FileUpload
        label="ID Proof"
        description="Aadhaar, PAN, or Passport"
        onFileSelect={handleIDUpload}
        required={false}
      />

      {/* Security Note */}
      <div className="p-4 bg-blue-50 rounded-lg mt-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-500" />
          Document Security
        </h3>
        <ul className="text-gray-600 list-disc space-y-1">
          <li className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-green-500" />
            All documents are encrypted and stored securely
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-green-500" />
            Used only for verification purposes
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-green-500" />
            Deleted after verification is complete
          </li>
          <li className="flex items-center gap-2">
            <CircleCheck className="w-4 h-4 text-green-500" />
            Documents are optional - you can upload them later
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VendorStep3;
