import styled from "styled-components/macro";
import { Button, Select, TextField } from "@mui/material";

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TaskSearch = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MyTextField = styled(TextField)`
  ${(props) =>
    props.size === "small"
      ? "width:70px;"
      : props.size === "large"
      ? "width:400px;"
      : "width:auto;"}
  input {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    transform: translate(14px, 10px) scale(1);
  }
`;

export const MySelect = styled(Select)`
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const MyButton = styled(Button)`
  padding-top: 7.75px;
  padding-bottom: 7.75px;
`;

export const LoadmoreButton = styled(Button)`
  display: block !important;
  margin: 0 auto !important;
  margin-top: 50px !important;
  padding: 7px 30px !important;
  width: 100%;
  max-width: 500px;
  background-color: #1976d2 !important;
  color: #fff !important;
`;
