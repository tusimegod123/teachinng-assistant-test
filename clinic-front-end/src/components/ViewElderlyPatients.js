import React from "react";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import PatientService from "../services/PatientServices";

class ViewElderlyPatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };
  }

  componentDidMount() {
    PatientService.getElderlyPatients().then((response) => {
      this.setState({
        patients: response.data.map((patient) => {
          return {
            ...patient,
            outPatient: patient.anOutPatient === true ? "Yes" : "No",
          };
        }),
      });
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">List Of Elderly Patients</h2>
            </Col>
            <Col>
              <a
                href="http://localhost:3000/register"
                className="btn btn-primary"
              >
                <Button>Register Patient</Button>
              </a>
            </Col>
          </Row>
        </Container>
        <br></br>

        <table className="table table-striped">
          <thead>
            <tr>
              <td>id</td>
              <td>Patient Number</td>
              <td>Patient Name</td>
              <td>Patient Email</td>
              <td>Patient Phone Number</td>
              <td>Patient Date of Birth</td>
              <td>Out patient?</td>
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.patientId}</td>
                <td>{patient.patientNumber}</td>
                <td>{patient.fullNames}</td>
                <td>{patient.emailAddress}</td>
                <td>{patient.contactPhoneNumber}</td>
                <td>{patient.dateOfBirth}</td>
                <td>{patient.outPatient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ViewElderlyPatients;
