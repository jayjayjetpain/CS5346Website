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
    if(username === "admin123" && password === "QWE|}{P") {
      window.sessionStorage.setItem("auth", JSON.stringify(true))
      history.push("/");
    }
    else {
      setAlertSuccess(true)
    }
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
              <span>This is a notification with close button.</span>
            </Container>
          </Alert>
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register" color="info">
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
