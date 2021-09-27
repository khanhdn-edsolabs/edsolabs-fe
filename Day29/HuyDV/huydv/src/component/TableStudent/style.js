import styled from "styled-components/macro";
import { TableContainer, TableHead } from "@mui/material";

export const StyledTableHeader = styled(TableHead)`
  background-color: #000;
  th{
    color: #fff;
  }
`;

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 10px;
  border: 1px solid #000;
`;
