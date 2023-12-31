import express from 'express';
import getDiagnoses from './services/diagnoseService';
import { getPatientsEntries, addPatient } from './services/patientsService';
const app = express();
import cors from 'cors';
import patients from '../data/patients';

app.use(cors())
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

app.get('/api/patients', (_req, res) => {
  const patients = getPatientsEntries()
  res.send(patients)
});

app.post('/api/patients', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body

  const newPatient = addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries: req.body.entries || []
  })

  res.send(newPatient)
});

app.get('/api/patients/:id', (req, res) => {
  const id = req.params.id
  const patient = patients.find(patient => patient.id === id)
  res.json(patient)
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});