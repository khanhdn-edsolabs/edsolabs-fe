import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import TableTeam from "../TableList/TableTeam";

const Team = ({ dataTeam }) => {
  

  return (
    <Container>
      <Grid container spacing={3}>
        {dataTeam.map((item, index) => (
          <Grid key={item + index} item xs={12} md={6}>
            <TableTeam team={index + 1} data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
