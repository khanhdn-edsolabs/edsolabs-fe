import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { StyledTableContainer, StyledTableHeader, Title } from "./style";

const TableTeam = ({ data, team }) => {
  return (
    <>
      <Title>Team {team}</Title>
      <StyledTableContainer>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <StyledTableHeader>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>name</TableCell>
              <TableCell>rank</TableCell>
            </TableRow>
          </StyledTableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell scope="row">{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {item.full_name}
                </TableCell>
                <TableCell>{item.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default TableTeam;
