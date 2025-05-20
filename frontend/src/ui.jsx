import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume || !jobDesc) return alert("Both files are required!");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDesc", jobDesc);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/resumes/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        // Navigate to score page with score data
        navigate("/result", { state: { score: data.score } });
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <form
        className="bg-gray-50 p-8 shadow-xl rounded-2xl w-full max-w-lg"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Upload Resume & Job Description</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setJobDesc(e.target.files[0])}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
