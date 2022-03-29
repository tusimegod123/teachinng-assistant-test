import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import NavBar from "./NavBar";

import PatientService from "../services/PatientServices";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container id="container">
          <Row>
            <Col md={12}>
              <h3 id="title">
                Welcome to HolyCross Medical Center Management System(PMS)
              </h3>

              <p>
                Welcome to HolyCross Medical Center Management System for a
                comprehensive wellness visit that will identify how we can help
                you achieve your personal health and wellness goals. HolyCross
                Medical Center is an enhancement to services provided by your
                primary care physician and health plan. The HolyCross Medical
                Center is the first step in reaching your goals. In one extended
                appointment, you will experience:
              </p>
              <p>
                In the system, you can view{" "}
                <span>
                  <a href="http://localhost:3000/patients">
                    List of all patients
                  </a>{" "}
                </span>{" "}
                and{" "}
                <span>
                  <a href="http://localhost:3000/elderlypatients">
                    List of Elderly Patients
                  </a>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
