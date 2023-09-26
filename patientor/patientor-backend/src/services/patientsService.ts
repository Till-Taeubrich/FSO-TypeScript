import patientsData from "../../data/patients";
import { isGender, newPatientEntry, patientsEntry, patientsEntryNoSsn } from "../types";
import { v1 as uuid } from 'uuid';

const patients: patientsEntryNoSsn[] = patientsData

export const getPatientsEntries = (): patientsEntryNoSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }))
}

export const addPatient = ( entry :newPatientEntry ): patientsEntry => {
  if (!isGender(entry.gender)) {
    throw new Error('Incorrect or missing gender: ' + entry.gender);
  }

  const newPatientEntry = {
    id: uuid(),
    ...entry
  }

  patientsData.push(newPatientEntry)

  return newPatientEntry
}