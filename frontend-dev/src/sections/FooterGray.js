/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";
import { HashLink as Link } from 'react-router-hash-link';

// core components

function FooterGray() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <Link
                    to="/index"
                    className="mr-1"
                  >
                    DAL - Dev Website
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="mr-1"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search"
                    className="mr-1"
                  >
                    Search
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto ">
              <span className="">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by JW and IR
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterGray;
