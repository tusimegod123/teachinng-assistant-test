import axios from "axios";
const PATIENT_SERVICE_URL = "http://localhost:8080/api/patients/fullNames";
const ELDERLYPATIENT_SERVICE_URL = "http://localhost:8080/api/elderlypatients";

class Patients {
  getPatients() {
    return axios.get(PATIENT_SERVICE_URL);
  }
  getElderlyPatients() {
    return axios.get(ELDERLYPATIENT_SERVICE_URL);
  }
}
export default new Patients(); //Export the object of the patients class.
