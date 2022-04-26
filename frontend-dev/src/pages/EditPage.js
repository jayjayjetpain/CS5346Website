import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";

// core components
import InfoNavbar from "sections/InfoNavbar.js";
import FooterGlack from "sections/FooterGray.js";

function ProfileEditor() {
    const [name, setName] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [url, setUrl] = React.useState("")
    const [listings, setListings] = React.useState("")
    const [desc, setDesc] = React.useState("")
    const [units, setUnits] = React.useState(null)
    const [price1, setPrice1] = React.useState(0)
    const [price2, setPrice2] = React.useState(0)
    const [sqft1, setSqft1] = React.useState(0)
    const [sqft2, setSqft2] = React.useState(0)

    const history = useHistory();

    function validateForm() {
        return !(name !== "" && address !== "" && url !== "" && listings !== "" && desc !== "" && price1 > 0 && price2 > 0 && price1 < price2 && sqft1 > 0 && sqft2 > 0 && sqft1 < sqft2);
    }

    function handleSubmit() {
        let unitsChoice
        if(units.value === true) {
            unitsChoice = [0, 1, 2]
        }
        else {
            unitsChoice = [1, 2]
        }
        
        let priceFix = [price1, price2]
        if(typeof price1 === 'string') {
            if(typeof price2 === 'string') {
                priceFix = [parseInt(price1), parseInt(price2)]
            }
            else {
                priceFix = [parseInt(price1), price2]
            }
        }
        else if(typeof price2 === 'string') {
            priceFix = [price1, parseInt(price2)]
        }

        let sqftFix = [sqft1, sqft2]
        if(typeof sqft1 === 'string') {
            if(typeof sqft2 === 'string') {
                sqftFix = [parseInt(sqft1), parseInt(sqft2)]
            }
            else {
                sqftFix = [parseInt(sqft1), sqft2]
            }
        }
        else if(typeof sqft2 === 'string') {
            sqftFix = [sqft1, parseInt(sqft2)]
        }

        let data = {
            name: name,
            address: address,
            url: url,
            listings: listings,
            desc: desc,
            units: unitsChoice,
            price: priceFix,
            sqft: sqftFix
        }

        // axios.post(`http://localhost:8000/apartment/${window.location.pathname.split("/")[2]}`, data)
        axios.post(`https://backend-api-pdococvs7a-uc.a.run.app/apartment/${window.location.pathname.split("/")[2]}`, data)
        history.push(`/apartment/${window.location.pathname.split("/")[2]}`)
    }

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        setupForm(window.location.pathname.split("/")[2])
      document.body.classList.add("add-product");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("add-product");
      };
    },[]);

    function setupForm(id) {
        // axios.get(`http://localhost:8000/apartment/${id}`)
        axios.get(`https://backend-api-pdococvs7a-uc.a.run.app/apartment/${id}`)
        .then(response => {
            if(response.data) {
            window.sessionStorage.setItem("apt2", JSON.stringify(response.data))
            setName(response.data["name"])
            setDesc(response.data["desc"])
            setAddress(response.data["address"])
            setUrl(response.data["url"])
            setListings(response.data["listings"])
            setPrice1(response.data["price"][0])
            setPrice2(response.data["price"][1])
            setSqft1(response.data["sqft"][0])
            setSqft2(response.data["sqft"][1])

            if(response.data["units"][0] === 0) {
                setUnits({label: "Studio", value: true})
            }
            else {
                setUnits({label: "No Studio", value: false})
            }
            // setApartment(response.data)
            // setCostHistory([{x: 'Apr 2021', y: response.data["history"][0]}, {x: 'May 2021', y: response.data["history"][1]}, {x: 'June 2021', y: response.data["history"][2]}, {x: 'July 2021', y: response.data["history"][3]}, {x: 'Aug 2021', y: response.data["history"][4]}, {x: 'Sept 2021', y: response.data["history"][5]}, {x: 'Oct 2021', y: response.data["history"][6]}, {x: 'Nov 2021', y: response.data["history"][7]}, {x: 'Dec 2021', y: response.data["history"][8]}, {x: 'Jan 2022', y: response.data["history"][9]}, {x: 'Feb 2022', y: response.data["history"][10]}, {x: 'Mar 2022', y: response.data["history"][11]}]);
            // setDisplayHist([{x: 'Apr 2021', y: response.data["history"][0]}, {x: 'May 2021', y: response.data["history"][1]}, {x: 'June 2021', y: response.data["history"][2]}, {x: 'July 2021', y: response.data["history"][3]}, {x: 'Aug 2021', y: response.data["history"][4]}, {x: 'Sept 2021', y: response.data["history"][5]}, {x: 'Oct 2021', y: response.data["history"][6]}, {x: 'Nov 2021', y: response.data["history"][7]}, {x: 'Dec 2021', y: response.data["history"][8]}, {x: 'Jan 2022', y: response.data["history"][9]}, {x: 'Feb 2022', y: response.data["history"][10]}, {x: 'Mar 2022', y: response.data["history"][11]}])
            // setCostPredict([{x: 'May 2022', y: response.data["predict"][0]}, {x: 'June 2022', y: response.data["predict"][1]}, {x: 'July 2022', y: response.data["predict"][2]}, {x: 'Aug 2022', y: response.data["predict"][3]}, {x: 'Sept 2022', y: response.data["predict"][4]}, {x: 'Oct 2022', y: response.data["predict"][5]}]);
            } else {
            history.push("/index")
            }
        })
      .catch(error => console.error(`Error: ${error}`))
        // let apartment = JSON.parse(window.localStorage.getItem("apartments"))[id]
        // // console.log(apartment)
        // setName(apartment["name"])
        // setDesc(apartment["desc"])
        // setAddress(apartment["address"])
        // setUrl(apartment["url"])
        // setListings(apartment["listings"])
        // setPrice1(apartment["price"][0])
        // setPrice2(apartment["price"][1])
        // setSqft1(apartment["sqft"][0])
        // setSqft2(apartment["sqft"][1])

        // if(apartment["units"][0] === 0) {
        //     setUnits({label: "Studio", value: true})
        // }
        // else {
        //     setUnits({label: "No Studio", value: false})
        // }
    }


  return (
    <>
      <InfoNavbar />
      <div className="main">
        <div className="section">
          <Container>
            <h1 className="text-center">Edit Apartment</h1>
            <div>
              <Row>
                <Col md="1" sm="1" />
                <Col md="10" sm="10">
                  <FormGroup>
                    <h6>
                      Name <span className="icon-danger">*</span>
                    </h6>
                    <Input
                      className="border-input"
                      placeholder="Enter the Apartment Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(`${e.target.value}`)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <h6>
                      Address <span className="icon-danger">*</span>
                    </h6>
                    <Input
                      className="border-input"
                      placeholder="Enter the Full Apartment Address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(`${e.target.value}`)}
                    />
                  </FormGroup>
                  <Row className="price-row">
                    <Col md="4">
                      <h6>
                        Main URL <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter URL to Main Page"
                          type="text"
                          value={url}
                          onChange={(e) => setUrl(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {/* <i className="fa fa-euro" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="5">
                      <h6>Listings URL<span className="icon-danger">*</span></h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter URL to Listings Page"
                          type="text"
                          value={listings}
                          onChange={(e) => setListings(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="3">
                      <h6>Has Studio<span className="icon-danger">*</span></h6>
                      <FormGroup >
                        <Select
                          className="react-select react-select-default font-weight-bold"
                          classNamePrefix="react-select"
                          name="price"
                          value={units}
                          onChange={(value) => setUnits(value)}
                          options={[{value: true, label:"Studio"}, {value: false, label:"No Studio"}]}
                          placeholder="Has Studio"
                        />
                     </FormGroup>
                    </Col>
                  </Row>
                  <Row className="price-row">
                    <Col md="3">
                      <h6>
                        Price Range (Bottom) <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter Bottom Price"
                          type="number"
                          value={price1}
                          onChange={(e) => setPrice1(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {/* <i className="fa fa-euro" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="3">
                      <h6>Price Range (Top)<span className="icon-danger">*</span></h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter Top Price"
                          type="number"
                          value={price2}
                          onChange={(e) => setPrice2(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="3">
                      <h6>
                        Sq Feet (Bottom) <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter Bottom Sqft"
                          type="number"
                          value={sqft1}
                          onChange={(e) => setSqft1(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            {/* <i className="fa fa-euro" /> */}
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="3">
                      <h6>Sq Feet (Top)<span className="icon-danger">*</span></h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="Enter Top Sqft"
                          type="number"
                          value={sqft2}
                          onChange={(e) => setSqft2(`${e.target.value}`)}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <h6>Description<span className="icon-danger">*</span></h6>
                    <Input
                      className="textarea-limited"
                      placeholder="Enter a Brief Description for the Apartment"
                      rows="13"
                      type="textarea"
                      value={desc}
                      onChange={(e) => setDesc(`${e.target.value}`)}
                    />
                  </FormGroup>
                </Col>
                <Col md="1" sm="1" />
              </Row>
              <Row className="buttons-row">
                <Col md="6" sm="6">
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    outline
                    type="reset"
                    onClick={e => history.push(`/apartment/${window.location.pathname.split("/")[2]}`)}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col md="6" sm="6">
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    outline
                    type="submit"
                    disabled={validateForm()}
                    onClick={e => handleSubmit()}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <FooterGlack />
    </>
  );
}

export default ProfileEditor;