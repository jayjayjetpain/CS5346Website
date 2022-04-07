import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import InfoNavbar from "sections/InfoNavbar.js";
import ProfilePageHeader from "sections/ProfilePageHeader.js";
import FooterGray from "sections/FooterGray.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <InfoNavbar />
      <ProfilePageHeader />
      <div className="wrapper">
        <div className="profile-content section">
          <Container>
            <Row>
              <div className="profile-picture">
                <div
                  className="fileinput fileinput-new"
                  data-provides="fileinput"
                >
                  {/* <div className="fileinput-new img-no-padding">
                    <img
                      alt="..."
                      src={
                        require("assets/img/faces/joe-gardner-2.jpg")
                      }
                    />
                  </div> */}
                  <div className="name">
                    <h3 className="text-center">
                      <b>The Standard Apartments</b> <br />
                      <a href="https://www.thestandardliving.com/"><small>https://www.thestandardliving.com/</small></a>
                    </h3>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  "At The Standard, you'll find all the necessities you need for easy living. Combining luxury apartments with premier amenities and a convenient northeast Dallas, TX neighborhood, you won't want to live anywhere else. These pet-friendly apartments feature stunning interiors with comfort and convenience in every room."
                </p>
                <div class="d-flex my-4 border-dark border">
                  <div class="d-flex flex-row w-100">
                    <div class="w-100">
                      <ul class="d-flex justify-content-between w-100 p-3 m-0 list-unstyled">
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Monthly Rent</u></p>
                                <p class="font-weight-normal">$1,580 - $2,964</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Bedrooms</u></p>
                                <p class="font-weight-normal">0 - 2 bd</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Bathrooms</u></p>
                                <p class="font-weight-normal">1 - 2 ba</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center">
                                <p class="font-weight-bold"><u>Square Feet</u></p>
                                <p class="font-weight-normal">508 - 1,626 sq ft</p>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Button className="btn-round" color="default" outline href="https://www.thestandardliving.com/floor-plans.aspx">
                  <i className="fas fa-building-user mr-1" />
                  View Available Units
                </Button>
              </Col>
            </Row>
            <br />
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Cost History
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Cost Prediction
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            {/* Tab panes */}
            <TabContent className="following" activeTab={activeTab}>
              <TabPane tabId="1" id="follows">
                <Row>
                      Put Chart Here
                  {/* <Col className="ml-auto mr-auto" md="6">
                    <ul className="list-unstyled follows">
                      <li>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={
                                require("assets/img/faces/clem-onojeghuo-3.jpg")
                                  
                              }
                            />
                          </Col>
                          <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                            <h6>
                              Lincoln <br />
                              <small>Car Producer</small>
                            </h6>
                          </Col>
                          <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            <FormGroup check>
                              <Label check>
                                <Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                      </li>
                      <hr />
                      <li>
                        <Row>
                          <Col className="mx-auto" lg="2" md="4" xs="4">
                            <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={
                                require("assets/img/faces/erik-lucatero-2.jpg")
                                  
                              }
                            />
                          </Col>
                          <Col lg="7" md="4" xs="4">
                            <h6>
                              Banks <br />
                              <small>Singer</small>
                            </h6>
                          </Col>
                          <Col lg="3" md="4" xs="4">
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign" />
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                  </Col> */}
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <h3 className="text-muted">Not following anyone yet :(</h3>
                <Button className="btn-round" color="warning">
                  Find artists
                </Button>
              </TabPane>
            </TabContent>
          </Container>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default ProfilePage;
