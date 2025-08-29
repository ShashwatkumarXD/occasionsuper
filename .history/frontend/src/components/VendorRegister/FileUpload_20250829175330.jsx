import { useState } from "react";

const FileUpload = ({ label, description, onFileSelect, required = true }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // ⬅️ Multiple files
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);

    if (onFileSelect) {
      onFileSelect(updatedFiles);
    }

    if (required && updatedFiles.length === 0) {
      setError("At least one file is required.");
    } else {
      setError("");
    }
  };

  return (
    <div className="outline-2 outline-[#E69B83] border-gray-300 rounded-lg p-3 mb-6 bg-white">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">📄</span>
        <div>
          <h3 className="font-semibold text-lg">{label}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>

      {/* Upload box */}
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition">
        <span className="text-gray-400 mb-2">⬆️ Drag and drop your files here</span>
        <span className="px-4 py-2 bg-[#E69B83] text-white rounded-md hover:bg-[#c16a4d] transition">
          Choose Files
        </span>
        <input type="file" className="hidden" multiple onChange={handleFileChange} />
      </label>

      {/* Display selected files */}
      {files.length > 0 && (
        <ul className="mt-3 text-sm text-green-600">
          {files.map((file, idx) => (
            <li key={idx}>✅ {file.name}</li>
          ))}
        </ul>
      )}
      {required && error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
};

export default FileUpload;
