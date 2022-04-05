import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Table
} from "reactstrap";

// core components
import DangerNavbar from "sections/InfoNavbar.js";
import FooterWhite from "sections/FooterGray.js";

function SearchWithSidebar() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white section-search">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                  <Form className="form-inline search-form" role="search">
                    <InputGroup className="no-border">
                      <span
                        className="input-group-addon addon-xtreme no-border"
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                      <Input
                        aria-describedby="basic-addon1"
                        className="input-xtreme no-border"
                        placeholder="Find Stuff"
                        type="text"
                      />
                    </InputGroup>
                  </Form>
                  <h6 className="text-muted">
                    Is this what you are looking for?
                  </h6>
                  {/* <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/ayo-ogunseinde-2.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Erik Faker <br />
                            <small>
                              Musical Artist with <b>3</b> songs.
                            </small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip565993392"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip565993392"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/kaci-baum-2.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Sophie Travolta <br />
                            <small>Singer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip385246717"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip385246717"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/erik-lucatero-2.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            John Lincoln <br />
                            <small>Musical Producer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip890195664"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip890195664"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/clem-onojeghuo-2.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Oleg Clem <br />
                            <small>Web Designer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip588441915"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip588441915"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                  <div className="text-missing">
                    <h5 className="text-muted">
                      If you are not finding who you’re looking for try using an
                      email address.
                    </h5>
                  </div> */}
                </Col>
              </Row>
              <h4 className="title">
                <small>Simple With Actions</small>
              </h4>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Job Position</th>
                    <th>Since</th>
                    <th className="text-right">Salary</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td className="text-right">€ 99,225</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip542628903"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip542628903"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip278266693"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip278266693"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip16493734"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip16493734"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>John Doe</td>
                    <td>Design</td>
                    <td>2012</td>
                    <td className="text-right">€ 89,241</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip835309420"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip835309420"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip287674338"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip287674338"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip479370246"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip479370246"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>Alex Mike</td>
                    <td>Design</td>
                    <td>2010</td>
                    <td className="text-right">€ 92,144</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip594620504"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip594620504"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip716621284"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip716621284"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip329473987"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip329473987"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>Mike Monday</td>
                    <td>Marketing</td>
                    <td>2013</td>
                    <td className="text-right">€ 49,990</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip673879542"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip673879542"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip661394722"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip661394722"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip755642510"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip755642510"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">5</td>
                    <td>Paul Dickens</td>
                    <td>Communication</td>
                    <td>2016</td>
                    <td className="text-right">€ 69,201</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip836884478"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip836884478"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip531808427"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip531808427"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip875159762"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip875159762"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
              {/* <SectionTables /> */}
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default SearchWithSidebar;
