import patientsData from "../../data/patients";
import { newPatientEntry, patientsEntry, patientsEntryNoSsn } from "../types";
import { v1 as uuid } from 'uuid';

const patients: patientsEntryNoSsn[] = patientsData

export const getPatientsEntries = (): patientsEntryNoSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
}

export const addPatient = ( entry :newPatientEntry ): patientsEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry
  }

  patientsData.push(newPatientEntry)

  return newPatientEntry
}