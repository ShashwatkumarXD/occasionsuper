// // src/components/FileUpload.js
// import { useState } from "react";

// const FileUpload = ({ label, description, onFileSelect }) => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//     if (onFileSelect) {
//       onFileSelect(selectedFile);
//     }
//   };

//   return (
//     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 bg-white">
//       <div className="flex items-center gap-3 mb-2">
//         <span className="text-2xl">📄</span>
//         <div>
//           <h3 className="font-semibold text-lg">{label}</h3>
//           <p className="text-gray-500 text-sm">{description}</p>
//         </div>
//       </div>

//       <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition">
//         <span className="text-gray-400 mb-2">⬆️ Drag and drop your file here</span>
//         <span className="px-4 py-2 bg-[#E69B83] text-white rounded-md hover:bg-[#c16a4d] transition">
//           Choose File
//         </span>
//         <input type="file" className="hidden" onChange={handleFileChange} />
//       </label>

//       {file && (
//         <p className="mt-2 text-sm text-green-600">
//           ✅ {file.name} uploaded successfully
//         </p>
//       )}
//     </div>
//   );
// };

// export default FileUpload;


import { useState } from "react";
import axios from "axios";

const FileUpload = ({ label, description, uploadUrl }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // multiple files
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) return alert("Please select at least one file!");

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file); // backend should expect "files"
    });

    try {
      setUploading(true);
      const response = await axios.post(uploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Files uploaded successfully!");
      console.log("Uploaded:", response.data);
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ Failed to upload files!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-6 bg-white">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">📂</span>
        <div>
          <h3 className="font-semibold text-lg">{label}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition">
        <span className="text-gray-400 mb-2">⬆️ Drag and drop files here</span>
        <span className="px-4 py-2 bg-[#E69B83] text-white rounded-md hover:bg-[#c16a4d] transition">
          Choose Files
        </span>
        <input type="file" className="hidden" multiple onChange={handleFileChange} />
      </label>

      {files.length > 0 && (
        <ul className="mt-2 text-sm text-green-600">
          {files.map((file, i) => (
            <li key={i}>✅ {file.name}</li>
          ))}
        </ul>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Files"}
      </button>
    </div>
  );
};

export default FileUpload;
