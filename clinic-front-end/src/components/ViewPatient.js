import React from "react";
import NavBar from "./NavBar";

import PatientService from "../services/PatientServices";
import { Row, Container, Col, Modal, Button } from "react-bootstrap";

class ViewPateient extends React.Component {
  // const [show, setShow] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false,
      patients: [],
    };
  }
  handleClose() {
    this.setState({ setShow: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  componentDidMount() {
    PatientService.getPatients().then((response) => {
      this.setState({
        patients: response.data.map((patient) => {
          return {
            ...patient,
            outPatient: patient.anOutPatient === true ? "Yes" : "No",
          };
        }),
      });

      // const bool = response.data.anOutPatient;
      // const str = bool === true ? "Yes" : "No";
      // response.data.anOutPatient = str;
      // // const bool = true;
      // console.log(str);
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
              <h2 className="text-center">List Of All Registered Patients</h2>
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
        <Container>
          <Row>
            <Col>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>#</td>
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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ViewPateient;
