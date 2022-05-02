import React from "react";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
import axios from 'axios';

// core components
import InfoNavbar from "sections/InfoNavbar.js";
import FooterGray from "sections/FooterGray.js";

function LoginPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });

  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [alertSuccess, setAlertSuccess] = React.useState(false);

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    setUserName("")
    setPassword("")
    await axios.post('https://backend-api-pdococvs7a-uc.a.run.app/login', {email: username, password: password})
    .then(response => {
      console.log(response)
      if(response.data === true) {
        // window.localStorage.setItem("auth", "3679589297632471748952355614378599543023488409396668784553438754299765791421104174527947963796027010673403360752994033614121562176472671734325027601139042156557493675")
        window.open('https://frontend-dev-pdococvs7a-uc.a.run.app/index', "_self")
      }
      else {
        setAlertSuccess(true)
        console.log("Login Failed")
      }
    })
  }

  return (
    <>
      <InfoNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("images/apartment.jpg") +
              ")",
          }}
        >
          <Alert color="danger" isOpen={alertSuccess}>
            <Container>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setAlertSuccess(false)}
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <span>The Email/Password Combination is Incorrect.</span>
            </Container>
          </Alert>
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register" color="warning">
                  <CardTitle tag="h3"><strong>Login to Dev</strong></CardTitle>
                  <Form className="register-form">
                    <label><strong>Email</strong></label>
                    <Input
                      className="no-border"
                      placeholder="Email"
                      type="email"
                      value={username}
                      onChange={e => setUserName(e.target.value)}
                    />
                    <label><strong>Password</strong></label>
                    <Input
                      className="no-border"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <Button block className="btn-round" color="success" onClick={ e => handleSubmit(e) }>
                      Login
                    </Button>
                  </Form>
                  {/* <div className="forgot">
                    <Button
                      className="btn-link"
                      color="dark"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div> */}
                </Card>
              </Col>
            </Row>
            {/* <div className="demo-footer text-center">
              <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
              </h6>
            </div> */}
          </Container>
        </div>
      </div>
      <FooterGray />
    </>
  );
}

export default LoginPage;
