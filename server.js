const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let certificates = [];

app.post('/api/issue', (req, res) => {
  const { recipientName, courseName, issuerName, dateOfIssue } = req.body;
  const certificateId = uuidv4();
  certificates.push({ certificateId, recipientName, courseName, issuerName, dateOfIssue });
  res.json({ certificateId });
});

app.get('/api/verify/:id', (req, res) => {
  const certificate = certificates.find(c => c.certificateId === req.params.id);
  if (certificate) {
    res.json(certificate);
  } else {
    res.status(404).json({ error: 'Certificate not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
