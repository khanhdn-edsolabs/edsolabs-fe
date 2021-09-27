import React, { useState } from "react";
import { FloatingLabel, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getUser } from "../../Api/api";
// import PropTypes from 'prop-types';

Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const aut = async () => {
    const res = await getUser(username, password);
    const { data } = res;
    console.log(data);
    if (data.length === 0 || data.length > 1) {
      alert("Tài khoản hoặc mật khẩu không chính xác");
      return;
    }
    if (username === "admin@gmail.com") {
      history.push("/");
    } else {
      alert("Tài khoản không tồn tại");
    }
  };
  const handleClick = (e) => {
    localStorage.setItem("user", username);
    aut();
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
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <Button
            variant="outline-dark"
            className="mt-3"
            onClick={(e) => handleClick(e)}
          >
            Login
          </Button>
        </Card.Body>
      </Card>
    </main>
  );
}

export default Login;
