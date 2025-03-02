const { spawn } = require("child_process");

// Path to your sample resume
const filePath = "ADHARSHMV.pdf"; // Change this to an actual resume file

// Call the AI model using Python
const pythonProcess = spawn("python3", ["ai_model.py", filePath]);

pythonProcess.stdout.on("data", (data) => {
  console.log(`AI Model Output: ${data.toString().trim()}`);
});

pythonProcess.stderr.on("data", (error) => {
  console.error(`AI Model Error: ${error.toString()}`);
});

pythonProcess.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
