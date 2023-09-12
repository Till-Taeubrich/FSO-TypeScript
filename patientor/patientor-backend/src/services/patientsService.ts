import patientsData from "../../data/patients";
import { patientsEntryNoSsn } from "../types";

const patients: patientsEntryNoSsn[] = patientsData

const getPatientsEntries = (): patientsEntryNoSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }))
}

export default getPatientsEntries