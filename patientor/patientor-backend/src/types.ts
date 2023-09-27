export interface diagnoseEntry {
  code: string
  name: string,
  latin?: string
}

export interface newPatientEntry {
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string
  entries: Entry[]
}

export interface Entry {
}

export interface patientsEntry {
  id: string
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: string,
  occupation: string,
  entries: Entry[]
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
}

export const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

export type patientsEntryNoSsn = Omit<patientsEntry, 'ssn'>

export type NonSensitivePatient = Omit<patientsEntry, 'ssn' | 'entries'>;