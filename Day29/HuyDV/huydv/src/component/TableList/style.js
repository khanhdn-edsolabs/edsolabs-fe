import styled from "styled-components/macro";
import { TableContainer, TableHead } from "@mui/material";

export const Item = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 10px;
  border: 1px solid #000;
`;

export const StyledTableHeader = styled(TableHead)`
  background-color: #000;
  th{
    color: #fff;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
`

