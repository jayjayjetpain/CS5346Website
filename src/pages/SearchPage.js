import React from "react";

// reactstrap components
import {
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";

import { HashLink as Link } from 'react-router-hash-link';

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
                </Col>
              </Row>
              <h4 className="title">
                <small>Example Table Results</small>
              </h4>
              <Col className="ml-auto mr-auto" md="10">
              <Table className="table-shopping" responsive>
                <thead>
                  <tr>
                    <th />
                    <th className="text-right">Address</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-product">
                      <a className="link" href="/apartment" tag={Link}><strong>The Standard Apartments</strong></a>
                      <p>
                        Studio, 1 Bed 1 Bath, 2 Bed 2 Bath
                      </p>
                    </td>
                    <td className="td-price">
                      <small>5920 EAST UNIVERSITY BOULEVARD, DALLAS, TX 75206</small>
                    </td>
                    <td className="td-number td-quantity">
                      $1,500 - $2,425
                    </td>
                    <td className="td-number">
                      <i className="fas fa-arrow-trend-up"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-product">
                      <strong>Jewel on Landmark</strong>
                      <p>
                        1 Bed 1 Bath or 2 Bed 2 Bath
                      </p>
                    </td>
                    <td className="td-price">
                      <small>14650 Landmark Blvd, Dallas, TX 75254</small>
                    </td>
                    <td className="td-number td-quantity">
                      $1,580 - $2,964
                    </td>
                    <td className="td-number">
                      <i className="fas fa-arrow-trend-down"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="td-product">
                      <strong>Arrive on University</strong>
                      <p>
                        1 Bed 1 Bath or 2 Bed 2 Bath
                      </p>
                    </td>
                    <td className="td-price">
                      <small>5750 E University Blvd, Dallas, TX 75206</small>
                    </td>
                    <td className="td-number td-quantity">
                      $1,640 - $3,175
                    </td>
                    <td className="td-number">
                      <i className="fas fa-arrow-trend-up"></i>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </Table>
            </Col>
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default SearchWithSidebar;
