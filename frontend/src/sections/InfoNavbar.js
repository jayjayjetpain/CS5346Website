import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    localStorage.setItem("apartments", JSON.stringify([
      {"name": "The Standard Apartments", "units": [0,1,2], "address": "5920 E University Blvd, Dallas, TX 75206", "price": [1500, 2425], "sqft": [597, 1229], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.thestandardliving.com/", "listings": "https://www.thestandardliving.com/floor-plans.aspx", "desc": "At The Standard, you'll find all the necessities you need for easy living. Combining luxury apartments with premier amenities and a convenient northeast Dallas, TX neighborhood, you won't want to live anywhere else. These pet-friendly apartments feature stunning interiors with comfort and convenience in every room."},
      {"name": "Jewel on Landmark", "units": [1,2], "address": "14650 Landmark Blvd, Dallas, TX 75254", "price": [1580, 2964], "sqft": [508, 1626], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2300, 2400, 2500, 2500, 2700], "trend": false, "url": "https://www.jewelonlandmark.com/", "listings": "https://jewelonlandmark.securecafe.com/onlineleasing/jewel-on-landmark/floorplans", "desc": "Welcome to the Jewel on Landmark! Experience resort-style living in an urban oasis of excitement. Located in the heart of Addison, Texas, our stunning community is easily accessible to premium shopping, bustling entertainment, exquisite dining, and more! You’re just minutes from a variety of retail, dining, and entertainment options, including Village on the Parkway and the Galleria Dallas."},
      {"name": "Arrive on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"name": "Arrive2 on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"name": "Arrive3 on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"name": "Arrive3 on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"name": "Arrive4 on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."},
      {"name": "Arrive5 on University", "units": [1,2], "address": "5750 E University Blvd, Dallas, TX 75206", "price": [1640, 2425], "sqft": [508, 3175], "history": [2000, 2100, 2300, 2300, 2400, 2700, 2600, 2300, 2000, 2100, 1900, 2100], "predict": [2100, 2100, 2000, 1900, 1900, 1800], "trend": true, "url": "https://www.arriveonuniversity.com/", "listings": "https://www.arriveonuniversity.com/dallas-tx-apartments/arrive-on-university/conventional/", "desc": "At Arrive on University, you'll experience the excitement of big-city life in the heart of the sprawling Dallas metroplex. Whether you commute, study, travel, or enjoy the occasional weekend excursion, our easy access to I-30 and the 75 opens every avenue to elevated living. Our pet-friendly community provides spacious one and two-bedroom floor plans featuring some of the largest living spaces in Dallas."}
    ]))
    headroom.init();
  });

  const [auth, setAuth] = React.useState(JSON.parse(window.sessionStorage.getItem("auth")))
  // const [refresh, setRefresh] = React.useState(false)
  // history = useHistory()

  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              Dallas Apartment Locator
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Dallas Apartment Locator
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
            {!auth ?
              <Button
                className="btn-neutral ml-auto"
                color="link"
                to="/login"
                tag={Link}
              >
                Login
              </Button>
              : 
              <Button
                className="btn-neutral ml-auto"
                color="link"
                onClick={ e => { window.sessionStorage.setItem("auth", JSON.stringify(false)); setAuth(false); } }
              >
                Logout
              </Button>
            }
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  More Info
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/index#LearnMore" tag={Link}>
                    <i className="nc-icon nc-alert-circle-i" />
                    Learn More
                  </DropdownItem>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-app" />
                    About Us
                  </DropdownItem>
                  <DropdownItem to="/about-us#Contact" tag={Link}>
                    <i className="nc-icon nc-circle-10" />
                    Contact Us
                  </DropdownItem>
                  {/* <DropdownItem to="/add-product" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    <i className="nc-icon nc-world-2" />
                    Discover
                  </DropdownItem>
                  <DropdownItem to="/e-commerce" tag={Link}>
                    <i className="nc-icon nc-send" />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="nc-icon nc-spaceship" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="nc-icon nc-lock-circle-open" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="nc-icon nc-album-2" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="nc-icon nc-bookmark-2" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/search-with-sidebar" tag={Link}>
                    <i className="nc-icon nc-zoom-split" />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to="/settings" tag={Link}>
                    <i className="nc-icon nc-settings-gear-65" />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to="/twitter-redesign" tag={Link}>
                    <i className="nc-icon nc-tie-bow" />
                    Twitter
                  </DropdownItem>*/}
                </DropdownMenu> 
              </UncontrolledDropdown>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Possible Apartment Pages
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/product-page" tag={Link}>
                    Possible Apartment Page Example 1
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    Possible Apartment Page Example 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Sections
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <Button
                  className="btn-round"
                  color="success"
                  to="/search"
                  tag={Link}
                >
                  <i className="nc-icon nc-zoom-split" /> Search
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;