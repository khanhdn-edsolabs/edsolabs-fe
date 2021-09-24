import styled from "styled-components/macro";

import BG_LOGIN from "../../assets/image/bg-login.png";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export const Wrapper = styled.div`
  background-image: url(${BG_LOGIN});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const BoxForm = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
`;

export const MyValidatorForm = styled(ValidatorForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: stretch;

  h2 {
    position: relative;
    font-family: "Roboto", sans-serif;
    color: #ed2553;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 30px;
    padding: 5px 0;
    text-align: center;
    font-weight: 600;
    &:before {
      content: "";
      width: 5px;
      height: 100%;
      position: absolute;
      top: 0;
      left: -20px;
      background: #ed2553;
    }
  }
`;

export const MyTextValidator = styled(TextValidator)`
  width: 100%;
  input {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    transform: translate(14px, 10px) scale(1);
  }
`;

export const OutLineBtn = styled(Button)`
  border: 2px solid #ed2553 !important;
  background-color: transparent !important;
  color: #ed2553 !important;
`;
