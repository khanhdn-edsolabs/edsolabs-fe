import React, { useState, useContext } from "react";
import { Box } from "@mui/system";
import Team from "./team";
import { DataContext } from "../../../Context/dataContext";
import group from "../../../helpers/SplitTeam";

const Teams = () => {
  const { listStudents } = useContext(DataContext);
  const [...listSort] = listStudents;
  const gr = group(listSort);
  return (
    <Box display="flex" justifyContent="center" pl={10}>
      <Box width="55%">
        {gr.map((x, index) => (
          <Team valueTeam={x} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Teams;
