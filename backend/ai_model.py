import sys
import PyPDF2
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def extract_text_from_pdf(pdf_path):
    try:
        with open(pdf_path, "rb") as file:
            reader = PyPDF2.PdfReader(file)
            text = " ".join([page.extract_text() for page in reader.pages if page.extract_text()])
        return text
    except Exception as e:
        return ""

def calculate_similarity(resume_text, job_desc_text):
    documents = [resume_text, job_desc_text]
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(documents)
    similarity_score = cosine_similarity(tfidf_matrix[0], tfidf_matrix[1])
    return round(float(similarity_score[0][0]) * 100, 2)  # Convert to percentage

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python ai_model.py <resume_pdf_path> <job_description_pdf_path>")
        sys.exit(1)

    resume_pdf_path = sys.argv[1]
    job_desc_pdf_path = sys.argv[2]

    resume_text = extract_text_from_pdf(resume_pdf_path)
    job_desc_text = extract_text_from_pdf(job_desc_pdf_path)

    score = calculate_similarity(resume_text, job_desc_text)
    print(score)  # Output score for Node.js to capture
