import { Link } from "react-router-dom";
import { FaFileAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const LandingPage = ()=>{
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">AI Resume Screener</h1>
      <p className="text-lg text-center mb-8 max-w-lg">
        Upload your resume and let AI analyze it to provide insights and scoring for better job opportunities.
      </p>
      <div className="flex space-x-6">
        <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-gray-200 transition">
          <FaUserPlus /> <span>Sign Up</span>
        </Link>
        <Link to="/login" className="bg-white text-purple-600 px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:bg-gray-200 transition">
          <FaSignInAlt /> <span>Login</span>
        </Link>
      </div>
      <div className="mt-12 flex space-x-6">
        <FaFileAlt className="text-5xl" />
        <FaUserPlus className="text-5xl" />
        <FaSignInAlt className="text-5xl" />
      </div>
    </div>
  );
}
export default LandingPage;