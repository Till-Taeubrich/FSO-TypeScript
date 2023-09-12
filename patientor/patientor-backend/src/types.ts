export interface diagnoseEntry {
  code: string
  name: string,
  latin?: string
}

interface patientsEntry {
  id: string
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string
}

export type patientsEntryNoSsn = Omit<patientsEntry, 'ssn'>