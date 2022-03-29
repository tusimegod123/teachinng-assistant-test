import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import NavBar from "./NavBar";

class RegisterPatient extends React.Component {
  state = {
    patientNumber: "",
    fullNames: "",
    emailAddress: "",
    contactPhoneNumber: "",
    dateOfBirth: "",
    anOutPatient: "",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const patientDetails = {
      fullName: this.state.patientNumber,
      email: this.state.fullNames,
      password: this.state.emailAddress,
      contactPhoneNumber: this.state.contactPhoneNumber,
      dateOfBirth: this.state.dateOfBirth,
      anOutPatient: this.state.anOutPatient,
    };

    axios
      .post("http://localhost:8080/api/patient", patientDetails)
      .then((res) => {
        console.log(res);

        window.location = "/login";
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div id="signup">
        <NavBar />

        <Container>
          <Row>
            <Col>
              <Form id="form" onSubmit={this.submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Patient Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patient number"
                    name="patientNumber"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patient name"
                    name="fullNames"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Patient Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patient number"
                    name="patientNumber"
                    onChange={this.changeHandler}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter patient email"
                    name="emailAddress"
                    onChange={this.changeHandler}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Patient Contact</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patient Contact"
                    name="contactPhoneNumber"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Patient Date Of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Out Patient?</Form.Label>
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter patient Contact"
                    name="contactPhoneNumber"
                    onChange={this.changeHandler}
                  /> */}
                  <Form.Select>
                    <option>Slect</option>
                    <option name="anOutPatient" value={this.state.anOutPatient}>
                      Yes
                    </option>
                    <option name="anOutPatient" value={this.state.anOutPatient}>
                      No
                    </option>
                  </Form.Select>
                </Form.Group>
                <Button id="button" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default RegisterPatient;
