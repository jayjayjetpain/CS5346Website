import React from "react";

// reactstrap components
import {
  Input,
  Container,
  Row,
  Col,
  Table,
  FormGroup,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Select from "react-select";

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

  let apartments = JSON.parse(localStorage.getItem("apartments"))
  const [filterResults, setFilterResults] = React.useState(handleQuery())
  const [displayPage, setDisplayPage] = React.useState(1)
  const [displayResults, setDisplayResults] = React.useState(setupResults())
 
  const [zip, setZip] = React.useState(null);
  const [bedAmt, setBedAmt] = React.useState(null);
  const [priceRange, setPriceRange] = React.useState(null);
  const [priceTrend, setPriceTrend] = React.useState(null);

  function handleQuery() {
    let queryZip = window.location.search.split("?")[1]
    if(!window.location.href.includes("?") || !(/^\d+$/.test(queryZip)) || queryZip.length < 5) {
      return apartments
    }
    else {
      return apartments.filter((apt) => {
        return apt.address.includes(queryZip)
      })
    }
  }
  
  function setupResults() {
    let queryZip = window.location.search.split("?")[1]
    if(!window.location.href.includes("?") || !(/^\d+$/.test(queryZip)) || queryZip.length < 5) {
      if(apartments.length > 4) {
        return apartments.slice(0,5)
      }
      else {
        return apartments
      }
    }
    else {
      let result = apartments.filter((apt) => {
        return apt.address.includes(queryZip)
      })
      if(result.length > 4) {
        return result.slice(0,5)
      }
      else {
        return result
      }
    }
  }

  function changePage(page) {
    if(5 + (page-1)*5 > filterResults.length) {
      setDisplayResults(filterResults.slice(0 + (page-1)*5, filterResults.length));
    }
    else {
      setDisplayResults(filterResults.slice(0 + (page-1)*5, 5 + (page-1)*5));
    }
    setDisplayPage(page)
  }

  function resetFilters() {
    document.getElementById("zip").value = ""
    setZip(null);
    setBedAmt(null);
    setPriceRange(null);
    setPriceTrend(null);
    setFilterResults(apartments);
    setDisplayPage(1);
    if(apartments.length > 4) {
      setDisplayResults(apartments.slice(0,5));
    }
    else {
      setDisplayResults(apartments);
    }
  }

  function validateFilters() {
    if(zip !== null && zip !== "") {
      return !(zip.length > 4 && (bedAmt !== null || priceRange !== null || priceTrend !== null))
    }
    else {
      return !(bedAmt !== null || priceRange !== null || priceTrend !== null)
    }
  }

  function search() {
    let result = apartments
    if(zip !== null) {
       result = result.filter((apt) => {
        return apt.address.includes(zip)
       })
    }
    if(bedAmt !== null) {
      result = result.filter((apt) => {
        return apt.units.includes(bedAmt.value)
      })
    }
    if(priceRange !== null) {
      result = result.filter((apt) => {
        return apt.price[0] <= priceRange.value && apt.price[1] >= priceRange.value
      })
    }
    if(priceTrend !== null) {
      result = result.filter((apt) => {
        return apt.trend === priceTrend.value
      })
    }
    setFilterResults(result)
    setDisplayPage(1)
    if(result.length > 4) {
      setDisplayResults(result.slice(0,5))
    }
    else {
      setDisplayResults(result)
    }
  }

  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white section-search">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-3" md="6" xs="12">
                  <h2 className="text-muted">
                    Apply Search Filters
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <FormGroup>
                    <Input id="zip" value={zip} placeholder="Enter ZIP Code Here (Must be at least 5 digits)" type="number" onChange={(e) => setZip(`${e.target.value}`)} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="2"></Col>
                
                <Col md="3">
                  <FormGroup>
                    <Select
                      className="react-select react-select-default font-weight-bold"
                      classNamePrefix="react-select"
                      name="price"
                      value={priceRange}
                      onChange={(value) => setPriceRange(value)}
                      options={[{value: null, label: "Monthly Cost", isDisabled: true}, {value: 1000, label:"< $1,000"}, {value: 1499, label:"$1,000 - $1,499"}, {value: 1999, label:"$1,500 - $1,999"}, {value: 2499, label:"$2,000 - $2,499"}, {value: 2500, label:"> $2,500"}]}
                      placeholder="Monthly Cost"
                    />
                  </FormGroup>
                </Col>
                <Col md="3">
                  <FormGroup>
                    <Select
                      className="react-select react-select-default font-weight-bold"
                      classNamePrefix="react-select"
                      name="beds"
                      value={bedAmt}
                      onChange={(value) => setBedAmt(value)}
                      options={[{value: null, label: "Bedroom and Bathroom #", isDisabled: true}, {value: 0, label:"Studio"}, {value:1, label:"1 Bed, 1 Bath"}, {value: 2, label:"2 Bed, 2 Bath"}]}
                      placeholder="Bedroom and Bathroom #"
                    />
                  </FormGroup>
                </Col>
                <Col md="2">
                  <FormGroup>
                    <Select
                      className="react-select react-select-default font-weight-bold"
                      classNamePrefix="react-select"
                      name="trend"
                      value={priceTrend}
                      onChange={(value) => setPriceTrend(value)}
                      options={[{value: null, label: "Price Trend", isDisabled: true}, {value: true, label:<i className="fas fa-arrow-trend-down"> Falling</i>}, {value: false, label: <i className="fas fa-arrow-trend-up"> Rising</i>}]}
                      placeholder="Price Trend"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3"></Col>
                <Col md="3">
                  <Button
                    className="btn-block btn-round mr-1"
                    color="danger"
                    outline
                    type="button"
                    onClick={e => resetFilters()}
                  >
                    Clear Filters
                  </Button>
                </Col>
                <Col md="3">
                  <Button
                    className="btn-block btn-round mr-1"
                    color="success"
                    outline
                    type="button"
                    onClick={e => search()}
                    disabled={validateFilters()}
                  >
                    Apply Filters
                  </Button>
                </Col>
              </Row>
              
              <br />
              <br />
              <h2 className="title text-center">
                <u>Search Results - ({filterResults.length})</u>
              </h2>
              <Col className="ml-auto mr-auto" md="10">
              <Table className="table-shopping" responsive>
                <thead>
                  <tr>
                    <th className="text-left">Apartment</th>
                    <th className="text-right">Address</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Trend</th>
                  </tr>
                </thead>
                {displayResults.length > 0 &&
                <tbody>
                  {displayResults.map((apartment, index) =>
                      <tr>
                      <td className="td-product">
                        <a className="link" href={ "/apartment/" + index } tag={Link}><strong>{apartment["name"]}</strong></a>
                        <p>
                          {apartment["units"][0] === 0 ? "Studio, 1 Bed 1 Bath, 2 Bed 2 Bath" : "1 Bed 1 Bath or 2 Bed 2 Bath"}
                        </p>
                      </td>
                      <td className="td-price">
                        <small>{apartment["address"]}</small>
                      </td>
                      <td className="td-number td-quantity">
                        ${apartment["price"][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - ${apartment["price"][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                      <td className="td-number">
                        {apartment["trend"] ? <i className="fas fa-arrow-trend-down"></i> : <i className="fas fa-arrow-trend-up"></i>}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>}
              </Table>
              </Col>
              <Row className="justify-content-center">
                <nav aria-label="Page navigation example">
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Previous"
                        style={{border: "2px solid #f5593d", borderColor: "#f5593d", color: "#f5593d", height: "36px", minWidth: "36px", padding: "8px 12px", margin: "0 2px"}}
                        onClick={(e) => changePage(displayPage-1)}
                        disabled={displayPage === 1}
                      >
                        <i aria-hidden={true} className="fa fa-angle-double-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem style={{backgroundColor: "transparent", border: "2px solid #f5593d", borderColor: "#f5593d", color: "#f5593d", height: "36px", minWidth: "36px", padding: "8px 12px", margin: "0 2px"}}>
                        {displayPage} / {Math.ceil(filterResults.length/5)}
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Next"
                        style={{border: "2px solid #f5593d", borderColor: "#f5593d", color: "#f5593d", height: "36px", minWidth: "36px", padding: "8px 12px", margin: "0 2px"}}
                        onClick={(e) => changePage(displayPage+1)}
                        disabled={displayPage === Math.ceil(filterResults.length/5)}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-angle-double-right"
                        />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default SearchWithSidebar;
