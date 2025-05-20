# Automated Resume Screening Tool

## 📌 Overview
This project is an **Automated Resume Screening Tool** built using the **MERN stack**. It helps job seekers evaluate how well their resumes match a given job description by calculating a similarity score.

## 🚀 Features
- 📄 **Resume Upload**: Users can upload their resume in **PDF format**.
- 📝 **Job Description Input**: Users enter the job description for comparison.
- 📊 **AI-Based Matching**: Uses **TF-IDF Vectorization** and **Cosine Similarity** to compute a **match percentage**.
- 💻 **Frontend**: Built with **React + Tailwind CSS**.
- 🔧 **Backend**: Uses **Node.js, Express, and Python (scikit-learn, NLP)** for processing.
- 📂 **File Handling**: Implements **Multer** for file uploads.

## 🛠️ Tech Stack
### **Frontend**:
- React.js
- Tailwind CSS

### **Backend**:
- Node.js
- Express.js
- Multer (for file uploads)

### **Machine Learning & Processing**:
- Python
- scikit-learn
- PyPDF2
- TfidfVectorizer
- Cosine Similarity

## 📜 How It Works
1. **User uploads a resume (PDF) and inputs a job description**.
2. **Backend processes the resume and extracts text using PyPDF2**.
3. **Text from the resume and job description is vectorized using TF-IDF**.
4. **Cosine Similarity is calculated to determine the percentage match**.
5. **Result is sent back to the frontend and displayed to the user**.

## 🔧 Installation & Setup
### **1. Clone the repository**
```bash
git clone https://github.com/your-username/resume-screening-tool.git
cd resume-screening-tool
```

### **2. Backend Setup**
```bash
cd backend
npm install  # Install dependencies
```

### **3. Start Backend Server**
```bash
node server.js  # Start Express backend
```

### **4. Frontend Setup**
```bash
cd ../frontend
npm install  # Install dependencies
npm start    # Run the React app
```

## 📂 Project Structure
```
resume-screening-tool/
│-- backend/
│   │-- server.js
│   │-- routes/
│   │-- controllers/
│   │-- models/
│   └-- utils/
│-- frontend/
│   │-- src/
│   │-- components/
│   └-- pages/
└-- README.md
```

## 📌 API Endpoints
### **Upload Resume & Get Match Score**
**Endpoint:** `/upload`
**Method:** `POST`
**Request:**
```json
{
  "file": "resume.pdf",
  "jobDescription": "Software Engineer with experience in Python and ML"
}
```
**Response:**
```json
{
  "matchScore": 85.7
}
```

## 🎯 Future Enhancements
- ✅ Improve NLP preprocessing for better text matching.
- ✅ Add support for **multiple resume formats** (DOCX, TXT, etc.).
- ✅ Implement a user authentication system.
- ✅ Store previous resume screening results for users.

## 📜 License
This project is open-source and available under the **MIT License**.

## ✨ Contributing
Contributions are welcome! Feel free to open an **issue** or submit a **pull request**.

---

### 📩 Connect with Me
If you have any questions or suggestions, feel free to reach out!
📧 Email: your-email@example.com  
💻 GitHub: [your-username](https://github.com/your-username)

