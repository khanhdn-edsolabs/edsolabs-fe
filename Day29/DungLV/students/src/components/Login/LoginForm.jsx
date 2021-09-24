import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ButtonForm,
  Container,
  Form,
  Inputform,
  NameInput,
  Title,
} from "./styled";
export const LoginForm = () => {
  var axios = require("axios");
  const url = process.env.REACT_APP_URL;
  const history = useHistory();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const getValueForm = (data) => {
    let name = data.target.name;
    let value = data.target.value;
    setAccount({ ...account, [name]: value });
  };

  const handleFormSubMit = (e) => {
    e.preventDefault();
    var data = JSON.stringify(account);
    var config = {
      method: "post",
      url: `${url}auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then((response) => {
        alert("Login Success");
        localStorage.setItem("access_token", response.data.access_token);
        history.push("/students");
      })
      .catch((error) => {
        alert("Incorrect email or password");
      });
  };
  return (
    <Container>
      <Title>Log in</Title>
      <Form onSubmit={handleFormSubMit}>
        <NameInput>Email:</NameInput>
        <Inputform
          type="email"
          required
          name="email"
          onChange={getValueForm}
          value={account.email}
        />
        <NameInput>Password:</NameInput>
        <Inputform
          type="password"
          required
          name="password"
          onChange={getValueForm}
          value={account.password}
        />
        <ButtonForm>Log in</ButtonForm>
      </Form>
    </Container>
  );
};
