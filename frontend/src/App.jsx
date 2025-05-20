import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UploadResume from "./pages/UploadResume.jsx";
import UI from './ui.jsx';
import Match from './matchscore.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UI />} />
        <Route path="/result" element={<Match />} />
        
      </Routes>
    </Router>
  );
}

export default App;