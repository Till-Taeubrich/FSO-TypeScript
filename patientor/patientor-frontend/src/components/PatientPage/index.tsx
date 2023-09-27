import { useParams } from "react-router-dom";
import { getPatient } from "../../services/patients"
import { useEffect, useState } from "react";
import { Patient } from "../../types";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>()
  const id = useParams().id || ''

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
      </div>
      )}
    </div>
  )
}

export default PatientPage