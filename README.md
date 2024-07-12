# certificate-system-backend

Task: Certificate Issuing and Verifying System

Background:
You are tasked with creating a simple Certificate Issuing and Verifying System. The system should 
allow users to issue certificates and others to verify the authenticity of those certificates.

Requirements:

Frontend:

1. Certificate Issuing Page:
◦ Create a form that allows users to input the following details:
▪ Recipient's Name
▪ Course Name
▪ Issuer's Name
▪ Date of Issue
2. Certificate Verification Page:
◦ Create a form that allows users to input a unique certificate ID.
◦ Display the details of the certificate if it exists, including Recipient's Name, Course Name, 
Issuer's Name, and Date of Issue.
◦ Display a message indicating whether the certificate is valid or not.

Backend:

1. API Endpoints:
◦ Create RESTful API endpoints for issuing and verifying certificates.
◦ The issuing endpoint should accept a POST request with the required details and return a unique 
certificate ID.
◦ The verifying endpoint should accept a GET request with a certificate ID and return the details if 
the certificate is valid.
2. Data Storage:
◦ Use a simple in-memory data storage mechanism to store issued certificates.
◦ Each certificate should have a unique ID, and the data structure can be a simple object or an array.

Additional Notes:
• You can use any frontend framework or library (e.g., React, Vue, Angular) for the frontend.
• Use any backend technology of your choice (e.g., Node.js, Flask, Django).
• Focus on simplicity and functionality rather than complex features.
• Provide clear instructions on how to run the application locally.
