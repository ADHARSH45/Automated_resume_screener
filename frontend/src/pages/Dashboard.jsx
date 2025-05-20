import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/profile", {
        withCredentials: true, // ✅ This sends the cookie to the backend
      })
      .then((response) => setUser(response.data))
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleLogout = () => {
    axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        navigate("/login");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome, {user?.name}</h2>
        <p className="text-gray-600 text-center mt-2">Manage your profile and upload resumes easily</p>

        <div className="mt-6 flex flex-col items-center space-y-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
