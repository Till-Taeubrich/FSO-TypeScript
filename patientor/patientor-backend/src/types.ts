export interface Diagnose {
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

interface BaseEntry {
  id: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose['code']>;
  description: string;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {
    date: string
    criteria: string
  }
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string
  sickLeave?: {
    startDate: string
    endDate: string
  }
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}


export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;