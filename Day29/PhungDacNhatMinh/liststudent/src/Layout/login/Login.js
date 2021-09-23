import React from "react";
import { FloatingLabel, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import PropTypes from 'prop-types';

Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const handleClick = (e) => {
    localStorage.setItem("user", "admin@gmail.com");
    history.push("/");
  };
  return (
    <main className="container d-flex justify-content-center align-items-center">
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>Admin Login</Card.Title>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button
            variant="outline-dark"
            className="mt-3"
            onClick={() => handleClick()}
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Login;
