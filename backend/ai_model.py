import sys
import PyPDF2
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample job description
job_description = """
Looking for a Software Engineer with experience in Python, Machine Learning, and React.
"""

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, "rb") as file:
            reader = PyPDF2.PdfReader(file)
            text = " ".join([page.extract_text() for page in reader.pages if page.extract_text()])
        return text
    except Exception as e:
        return ""

def calculate_similarity(resume_text, job_desc):
    documents = [resume_text, job_desc]
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)
    similarity_score = cosine_similarity(tfidf_matrix[0], tfidf_matrix[1])
    return round(float(similarity_score[0][0]) * 100, 2)  # Convert to percentage

if __name__ == "__main__":
    pdf_path = sys.argv[1]
    resume_text = extract_text_from_pdf(pdf_path)
    score = calculate_similarity(resume_text, job_description)
    print(score)  # Output score for Node.js to capture
    print(resume_text)
