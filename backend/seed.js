const mongoose = require("mongoose");
const Resume = require("./models/resume_model");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = [
  {
    _id: "65df32a94bd7c8a1f1234567",
    filename: "JohnDoe_Resume.pdf",
    fileUrl: "uploads/JohnDoe_Resume.pdf",
    score: 85.2,
    uploadedAt: new Date("2025-03-01T12:00:00Z"),
  },
  {
    _id: "65df32a94bd7c8a1f9876543",
    filename: "JaneSmith_Resume.pdf",
    fileUrl: "uploads/JaneSmith_Resume.pdf",
    score: 90.1,
    uploadedAt: new Date("2025-03-02T10:30:00Z"),
  },
];

const seedDatabase = async () => {
  try {
    await Resume.insertMany(seedData);
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDatabase();
