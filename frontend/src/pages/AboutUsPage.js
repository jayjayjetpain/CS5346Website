import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

// core components
import InfoNavbar from "sections/InfoNavbar.js";
import AboutUsHeader from "sections/AboutUsHeader.js";
import FooterAboutUs from "sections/FooterGray.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <InfoNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">We build great products.</h3>
            <p>
              This project is for our CS 5346 - Cloud Computing Class at SMU. We were tasked with creating an application and deplying it to the cloud with specific requirements.
            </p>
            <p>
            <u>Overarching Goal:</u> To successfully host your software in the cloud, leveraging multiple cloud offerings in
the process, and present your experiences (demonstrate your software, discuss your choices, explain your
rationale and considerations, etc.) to the class as if presenting to a potential employer. We all get to
benefit from learning about one another’s project, and I want your project to be meaningful to you.

            </p>
            
            <h2 className="text-center creators" id="Contact">Creators</h2>
            <Row>
              <Col md="6">
              <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/jayson.jpg")
                          }
                        />
                        <CardTitle tag="h4">Jayson Werth</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science B.S. w/ Security Concentration, Cybersecurity M.S. <br />
                      Skills: Full Stack Development, C++, HTML, CSS, JavaScript, React, SQL, MongoDB, Git, Python
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260554"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260554"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        jwerth@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/jayjayjetpain"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("images/isaac.jpg")
                          }
                        />
                        <CardTitle tag="h4">Isaac Rose</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Computer Science B.S. w/ Software Engineering <br />
                      Skills: Full Stack Development, C++, Angular, JavaScript, React, SQL, Java, Git, Python
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      id="tooltip65260557"
                      type="button"
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <UncontrolledPopover
                      trigger="focus"
                      placement="bottom"
                      target="tooltip65260557"
                    >
                      <PopoverHeader>SMU Email</PopoverHeader>
                      <PopoverBody>
                        irose@smu.edu
                      </PopoverBody>
                    </UncontrolledPopover>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="https://github.com/itrose225"
                    >
                      <i className="fa-brands fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
