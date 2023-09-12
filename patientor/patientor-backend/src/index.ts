import express from 'express';
import getDiagnoses from './services/diagnoseService';
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  const diagnoses = getDiagnoses()
  res.send(diagnoses)
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});