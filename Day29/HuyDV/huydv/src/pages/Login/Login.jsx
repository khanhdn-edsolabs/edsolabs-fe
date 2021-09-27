import React, { useEffect, useState } from "react";
import {
  BoxForm,
  MyTextValidator,
  MyValidatorForm,
  OutLineBtn,
  Wrapper,
} from "./style";
import { auth } from "../../apis/axiosBase";
import { useHistory } from "react-router";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataLogin, setDataLogin] = useState({});

  useEffect(() => {
    localStorage.getItem("accessToken")
      ? history.replace("/home")
      : history.replace("/");
  }, [localStorage.getItem("accessToken")]);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("bạn phải nhập đầy đủ thông tin");
    } else {
      auth({ email: email, password: password })
        .then((res) => {
          const data = res.data;
          alert("đăng nhập thành công!");
          history.push("/home");
          localStorage.setItem("accessToken", data.accessToken);
        })
        .catch((err) => {
          alert("sai tài khoản hoặc mật khẩu");
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Wrapper>
      <BoxForm>
        <MyValidatorForm onSubmit={handleSubmit}>
          <h2>Admin login</h2>
          <MyTextValidator
            label="Email"
            onChange={handleChangeEmail}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <MyTextValidator
            label="Password"
            onChange={handleChangePassword}
            name="password"
            type="password"
            value={password}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <OutLineBtn
            onClick={() => {
              handleClick();
            }}
            color="primary"
            variant="contained"
            type="button"
          >
            Login
          </OutLineBtn>
        </MyValidatorForm>
      </BoxForm>
    </Wrapper>
  );
};

export default Login;
