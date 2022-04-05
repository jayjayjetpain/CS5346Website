import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/sections/gerrit-vermeulen.jpg").default +
            ")",
        }}
      >
        <div className="filter filter-info" />
        <div className="content-center">
          <Container>
            <h1>
              Hello, <br />
              We are Dallas Apartment Locator.
            </h1>
            <h3>Let us tell you more about what we do.</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
