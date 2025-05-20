import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MatchScore = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score;

  if (score === undefined) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-gray-50 shadow-lg rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-br-full z-0 opacity-40"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 Resume Match Score</h2>
          <p className="text-gray-600 mb-6">
            Based on your resume and the job description, your match score is:
          </p>
          <div className="text-6xl font-extrabold text-indigo-600 mb-4">{score}%</div>

          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                score >= 70
                  ? "bg-green-500"
                  : score >= 40
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            A higher score indicates better alignment with the job role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchScore;
