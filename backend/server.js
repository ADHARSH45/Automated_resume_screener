const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors(
    {origin: "http://localhost:5173", 
    credentials: true,}
));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/resumes", require("./routes/resume_routes"));
app.use("/api/auth", require("./routes/auth_routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
