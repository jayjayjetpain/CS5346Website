import React from "react";
import { useHistory } from 'react-router-dom';

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Input,
  Label
} from "reactstrap";

import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries} from 'react-vis';

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
    console.log(window.location.pathname.split("/")[2])
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const history = useHistory();
  const [histNum, setHistNum] = React.useState(12)

  // let apartments = JSON.parse(localStorage.getItem("apartments"))
  let index = window.location.pathname.split("/")[2]
  let apartment, costHistory, displayHist, costPredict

  if(index >= JSON.parse(localStorage.getItem("apartments")).length) {
    history.push("")
  }
  else {
    apartment = JSON.parse(localStorage.getItem("apartments"))[index]
    costHistory = [{x: 'Apr 2021', y: apartment["history"][0]}, {x: 'May 2021', y: apartment["history"][1]}, {x: 'June 2021', y: apartment["history"][2]}, {x: 'July 2021', y: apartment["history"][3]}, {x: 'Aug 2021', y: apartment["history"][4]}, {x: 'Sept 2021', y: apartment["history"][5]}, {x: 'Oct 2021', y: apartment["history"][6]}, {x: 'Nov 2021', y: apartment["history"][7]}, {x: 'Dec 2021', y: apartment["history"][8]}, {x: 'Jan 2022', y: apartment["history"][9]}, {x: 'Feb 2022', y: apartment["history"][10]}, {x: 'Mar 2022', y: apartment["history"][11]}]
    displayHist = costHistory.slice(12-histNum, 12)
    costPredict = [{x: 'May 2022', y: apartment["predict"][0]}, {x: 'June 2022', y: apartment["predict"][1]}, {x: 'July 2022', y: apartment["predict"][2]}, {x: 'Aug 2022', y: apartment["predict"][3]}, {x: 'Sept 2022', y: apartment["predict"][4]}, {x: 'Oct 2022', y: apartment["predict"][5]}]
  }

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
                  <div className="name">
                    <h3 className="text-center">
                      <b>{apartment["name"]}</b> <br />
                      <a href={apartment["url"]}><small>{apartment["url"]}</small></a>
                    </h3>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  "{apartment["desc"]}"
                </p>
                <div class="d-flex my-4 border-dark border">
                  <div class="d-flex flex-row w-100">
                    <div class="w-100">
                      <ul class="d-flex justify-content-between w-100 p-3 m-0 list-unstyled">
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Monthly Rent</u></p>
                                <p class="font-weight-normal">${apartment["price"][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - ${apartment["price"][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Bedrooms</u></p>
                                <p class="font-weight-normal">{apartment["units"][0]} - {apartment["units"][apartment["units"].length - 1]} bd</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center border-right">
                                <p class="font-weight-bold"><u>Bathrooms</u></p>
                                <p class="font-weight-normal">{apartment["units"][0] === 0 ? apartment["units"][1] : apartment["units"][0]} - {apartment["units"][apartment["units"].length - 1]} ba</p>
                            </div>
                        </li>
                        <li class="flex-grow-1 flex-shrink-1 flex-fill">
                            <div class="m-auto text-center">
                                <p class="font-weight-bold"><u>Square Feet</u></p>
                                <p class="font-weight-normal">{apartment["sqft"][0]} - {apartment["sqft"][1]} sq ft</p>
                            </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Button className="btn-round" color="default" outline href={apartment["listings"]}>
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
              <TabPane className="text-center" tabId="1" id="following">
                <h3 className="text-muted">Average Cost History</h3>
                <Row className="justify-content-center">
                  <XYPlot width={600} height={300} xType="ordinal" margin={{bottom:80, right: 50, left: 20}}>
                    <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
                    <VerticalGridLines style={{stroke: '#B7E9ED'}} />
                    <XAxis
                      title="Months"
                      tickLabelAngle={-45}
                      style={{
                        line: {stroke: '#ADDDE1'},
                        ticks: {stroke: '#ADDDE1'},
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                      }}
                    />
                    <YAxis orientation="right" title="Average Cost" tickFormat={v => `$${v}`} />
                    <LineSeries
                      data={displayHist}
                      style={{
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                      }}
                    />
                  </XYPlot>
                </Row>
                <Row className="justify-content-center">
                    <div className="form-check-radio px-2 mr-1">
                      <Label check>
                        <Input
                          value={12}
                          id="month"
                          name="month"
                          type="radio"
                          onClick={e => setHistNum(12)}
                        />
                        12 Months <span className="form-check-sign" />
                      </Label>
                    </div>
                    <div className="form-check-radio px-2 mx-1">
                      <Label check>
                        <Input
                          value={6}
                          id="months"
                          name="month"
                          type="radio"
                          onClick={e => setHistNum(6)}
                        />
                        6 Months <span className="form-check-sign" />
                      </Label>
                    </div>
                    <div className="form-check-radio px-2 ml-1">
                      <Label check>
                        <Input
                          value={3}
                          id="months"
                          name="month"
                          type="radio"
                          onClick={e => setHistNum(3)}
                        />
                        3 Months <span className="form-check-sign" />
                      </Label>
                    </div>
                </Row>
              </TabPane>
              <TabPane className="text-center" tabId="2" id="following">
                <h3 className="text-muted">Average Cost Prediction</h3>
                <Row className="justify-content-center">
                <XYPlot width={600} height={300} xType="ordinal" margin={{left:50, right:10, bottom:80, top:20}}>
                    <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
                    <VerticalGridLines style={{stroke: '#B7E9ED'}} />
                    <XAxis
                      title="Months"
                      tickLabelAngle={-45}
                      style={{
                        line: {stroke: '#ADDDE1'},
                        ticks: {stroke: '#ADDDE1'},
                        text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                      }}
                    />
                    <YAxis title="Average Cost" tickFormat={v => `$${v}`} />
                    <LineSeries
                      data={costPredict}
                      style={{
                        strokeLinejoin: 'round',
                        strokeWidth: 4
                      }}
                    />
                    <LineSeries data={null} />
                  </XYPlot>
                </Row>
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
