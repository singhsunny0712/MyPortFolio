import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
// import L_PEPCODING from "../../assets/img/experience/pepcoding1.svg";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 20 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                {/* <Card.Img variant="top" className="img-resize" src={L_PEPCODING} alt="Pepcoding logo" /> */}
                <Card.Title className="text-center" ><a className="pep" href="https://www.pepcoding.com/">PEPCODING</a> PVT LTD.</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Backend Developer & Mentor</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Backend Developer</strong>
                    <br />
                    <strong>Technology:</strong> Node JS, Express Js 
                    <br />
                    <strong>Duration:</strong> Jan 2k20 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> the doubt support on the web portal between teacher and the student.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working.</li>
                      <li><strong>Part time</strong> working as <strong> Mentor </strong>,where i taught the about complex algorithm and web develeopment. </li>
                      
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;