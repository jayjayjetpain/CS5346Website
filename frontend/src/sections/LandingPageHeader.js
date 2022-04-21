import React from "react";

// reactstrap components
import { Button, Container, Input, InputGroup } from "reactstrap";
import { HashLink as Link } from 'react-router-hash-link';

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  
  const [zip, setZip] = React.useState(null)

  function validateInput() {
    return !(zip !== null && zip.length > 4)
  }

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">Dallas Apartment Locator</h1>
              <h3 className="description">
                Start searching for your dream apartment here.
              </h3>
              <br />
              <InputGroup>
              <Input id="zip" value={zip} placeholder="Enter ZIP Code Here (Must be at least 5 digits)" type="number" onChange={(e) => setZip(`${e.target.value}`)} />
                <Button to={"/search?" + zip} tag={Link} color="warning" disabled={validateInput()}>
                  Search
                </Button>
              </InputGroup>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
