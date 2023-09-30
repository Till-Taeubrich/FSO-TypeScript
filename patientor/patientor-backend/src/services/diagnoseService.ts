import diagnoseData from "../../data/diagnoses";
import { Diagnose } from "../types";

const diagnoses: Diagnose[] = diagnoseData;

const getDiagnoseEntries = (): Diagnose[] => {
	return diagnoses;
};

export default getDiagnoseEntries