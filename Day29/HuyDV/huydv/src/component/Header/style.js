import { Button } from "@mui/material";
import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #1976d2;
  padding: 0 24px;
  width: 100%;
  max-width: 100vw;
`;
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
`;

export const Logo = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
`;

export const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

export const MyButton = styled.button`
  padding: 2px;
  margin-left: -10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  min-width: 30px;
  color: #fff;
`;
