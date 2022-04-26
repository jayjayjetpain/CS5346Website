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
import { HashLink as Link } from 'react-router-hash-link';

// core components
import MultiDropdownNavbar from "sections/InfoNavbar";
import LandingPageHeader from "sections/LandingPageHeader.js";
import FooterWhite from "sections/FooterGray.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader />
      <div className="wrapper">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title" id="LearnMore">Let's talk product</h2>
                <h5>
                  This is a one stop shop for SMU students who are looking for apartments near campus. We provide competitive, viable, and financially realistic apartments for those looking for housing. In addition, we offer pricing predictions using our proprietary technology to give you a future outlook into how prices may change. So whether you are looking for an affordable apartment now or in 6 months, we have got you covered.
                </h5>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="3">
                <div className="warning">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette" />
                  </div>
                  <div className="description">
                    <h4 className="warning-title">Diverse selections</h4>
                    <p className="description">
                      We offer a variety of apartments near campus so you can find your perfect fit
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="warning">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="warning-title">All in one</h4>
                    <p>
                      From pricing points to utility information, we got you covered
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="warning">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="warning-title">Prediction</h4>
                    <p>
                      Using our AI technology, we provide a forecast of pricing of each apartments
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="warning">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="warning-title">Choose your style</h4>
                    <p>
                      Browse through our collection of detailed images and information to find your best fit
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
            <Col className="ml-auto mr-auto" md="8">
                <h3>Want to Start Searching? Click this button below to start searching with custom filters or use the <Button className="btn-link m-0 p-0" color="dark" to="/index#search" tag={Link}><u>search bar</u></Button> above to get started by ZIP code!</h3>
                <br />
                <Button className="btn-fill btn-round" color="success" to="/search" tag={Link}>Search Now</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Col className="ml-auto mr-auto" md="8">
          <Card data-color="yellow">
            <CardBody className="text-center">
              <h6 className="card-category">
                <i className="fa fa-graduation-cap mr-1" />
                Dallas Apartment Locator Team
              </h6>
              <CardTitle tag="h5">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  "Search for apartments in Dallas by cost or location!"
                </a>
              </CardTitle>
              <p className="card-description">
                <b>Learn more about the development team for this project and their struggles with working with the cloud.
                Also learn more about their academic identities and find out where to contact them.</b>
              </p>
              <CardFooter className="text-center">
                <Button
                  className="btn-neutral btn-round"
                  color="default"
                  href="/about-us"
                >
                  <i className="fa fa-newspaper mr-1" />
                  More About the Team
                </Button>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
      </div>
      <FooterWhite />
    </>
  );
}

export default LandingPage;
