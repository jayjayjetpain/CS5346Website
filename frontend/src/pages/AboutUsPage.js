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
              Collaboratively kill administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </p>
            <h3 className="title-uppercase">
              We
              <i className="fa fa-heart heart mr-3 ml-1" />
              what we do.
            </h3>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate resource-leveling
              customer service for state of the art customer service.
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
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
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
