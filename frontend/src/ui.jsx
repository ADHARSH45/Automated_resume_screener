import React, { useState } from "react";

function ResumeScreeningPage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescFile, setJobDescFile] = useState(null);
  const [message, setMessage] = useState("");

  // Handle resume file upload
  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  // Handle job description file upload
  const handleJobDescChange = (e) => {
    setJobDescFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resumeFile || !jobDescFile) {
      setMessage("Please upload both resume and job description files.");
      return;
    }

    // You can implement your API call here to send files to backend
    setMessage("Files ready for upload! Implement API call to process.");
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Automated Resume Screening Tool</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="resumeUpload">Upload Resume (PDF):</label><br />
          <input type="file" id="resumeUpload" accept=".pdf" onChange={handleResumeChange} />
          {resumeFile && <p>Selected file: {resumeFile.name}</p>}
        </div>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="jobDescUpload">Upload Job Description (PDF):</label><br />
          <input type="file" id="jobDescUpload" accept=".pdf" onChange={handleJobDescChange} />
          {jobDescFile && <p>Selected file: {jobDescFile.name}</p>}
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: 20, color: "red" }}>{message}</p>}
    </div>
  );
}

export default ResumeScreeningPage;
