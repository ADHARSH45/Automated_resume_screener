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

// Upload Resume & Trigger AI Scoring
router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    // Call Python AI Model
    const pythonProcess = spawn("python3", ["ai_model.py", filePath]);

    pythonProcess.stdout.on("data", async (data) => {
      const score = parseFloat(data.toString().trim());

      const newResume = new Resume({
        filename: req.file.filename,
        fileUrl: filePath,
        score: score,
      });

      await newResume.save();
      res.json({ message: "Resume uploaded & scored", score });
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
