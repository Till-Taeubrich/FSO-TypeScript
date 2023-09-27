import { useParams } from "react-router-dom";
import { getPatient } from "../../services/patients"
import { useEffect, useState } from "react";
import { Patient } from "../../types";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>()
  const id = useParams().id || ''

  const renderEntries = () => {
    const entries = patient!.entries
    return (
	    <>
	      {entries.map((entry, i) => (
	        <div key={i} className="entry">
            <div>{entry.date} {entry.description}</div>
            {entry.diagnosisCodes && (
              <ul>
                {entry.diagnosisCodes?.map((code) => (
                  <li>{code}</li>
                ))}
              </ul>
            )}
          </div>
				))}
	    </>
    )
  }

  useEffect(() => {
    const getPatientData = async () => {
      setPatient(await getPatient(id))
    }

    getPatientData()
  }, [id]) 

  return (
    <div>
      {patient !== undefined && (
      <div>
        <h2>{patient.name}</h2>
        <div>ssn: {patient.ssn}</div>
        <div>occupation: {patient.occupation}</div>
        <h2>entries</h2>
        {renderEntries()}
      </div>
      )}
    </div>
  )
}

export default PatientPage