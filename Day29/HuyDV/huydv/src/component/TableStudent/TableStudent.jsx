import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { StyledTableContainer, StyledTableHeader } from "./style";
import moment from "moment";

const TableStudent = ({ data, sizeLoad }) => {
  const calculateAge = (value) => {
    const day = Number(value?.split("/")[1]);
    const month = Number(value?.split("/")[0]);
    if (month > moment().month()) {
      return moment().diff(value, "years");
    } else if (month === moment().month() && day > moment().day()) {
      return moment().diff(value, "years");
    } else {
      return moment().diff(value, "years") + 1;
    }
  };

  return (
    <StyledTableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHeader>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Rank</TableCell>
          </TableRow>
        </StyledTableHeader>
        <TableBody>
          {data.map((item, index) => {
            if (sizeLoad > index) {
              return (
                <TableRow key={index}>
                  <TableCell scope="row">{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {
                      item.full_name?.split(" ")[
                        item.full_name?.split(" ").length - 1
                      ]
                    }
                  </TableCell>
                  <TableCell>
                    {
                      item.full_name?.split(
                        `${
                          item.full_name?.split(" ")[
                            item.full_name?.split(" ").length - 1
                          ]
                        }`
                      )[0]
                    }
                  </TableCell>
                  <TableCell align="center">
                    {item.gender === "F"
                      ? "FeMale"
                      : item.gender === "M"
                      ? "Male"
                      : "Giới tính không xác định"}
                  </TableCell>
                  <TableCell align="center">{calculateAge(item.dob)}</TableCell>
                  <TableCell align="center">{item.rank}</TableCell>
                </TableRow>
              );
            }
          })}
          <TableRow>
            <TableCell colSpan={6}>
              {`There are ${data.length >= sizeLoad ? sizeLoad : data.length}/${data.length} students`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TableStudent;
