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
                            require("assets/img/faces/ayo-ogunseinde-2.jpg")
                              .default
                          }
                        />
                        <CardTitle tag="h4">Jayson Werth</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes orchestra
                      to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" />
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
                            require("assets/img/faces/joe-gardner-2.jpg")
                              .default
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
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-github" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            {/* <h3 className="more-info">Need more information?</h3>
            <Row className="coloured-cards">
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Blue Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Green Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">Best cards</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Yellow Card
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        What all of these have in common is that they're pulling
                        information out of the app or the service and making it
                        relevant to the moment.
                      </p>
                    </CardBody>
                  </Card>
                  
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
