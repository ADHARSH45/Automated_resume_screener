const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const Resume = require("../models/resume_model");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


const uploadFields = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "jobDesc", maxCount: 1 },
]);

// Upload Resume & Trigger AI Scoring
router.post("/upload", uploadFields, async (req, res) => {
  try {
    const resumeFile = req.files["resume"] ? req.files["resume"][0] : null;
    const jobDescFile = req.files["jobDesc"] ? req.files["jobDesc"][0] : null;

    if (!resumeFile || !jobDescFile) {
      return res.status(400).json({ error: "Both resume and job description files are required." });
    }

    const resumePath = resumeFile.path;
    const jobDescPath = jobDescFile.path;

    // Pass both file paths to your Python script
    const pythonProcess = spawn("python3", ["ai_model.py", resumePath, jobDescPath]);

    pythonProcess.stdout.on("data", async (data) => {
      const score = parseFloat(data.toString().trim());

      const newResume = new Resume({
        filename: resumeFile.filename,
        fileUrl: resumePath,
        score: score,
      });

      await newResume.save();
      res.json({ message: "Files uploaded & scored", score });
    });

    pythonProcess.stderr.on("data", (error) => {
      console.error(`Python error: ${error}`);
      res.status(500).json({ error: "AI model failed" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get All Resumes
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
