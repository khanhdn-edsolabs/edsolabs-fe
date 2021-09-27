import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useTheme, makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import TeamTable from "components/TeamTable";
import { useGlobalContext } from "components/GlobalContext";
import { createTeam, getUniqRank } from "utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: (props) => (props.tab === 1 ? "flex" : "none"),
  },
}));

export default function TeamListContainer(props) {
  const theme = useTheme();
  const { students } = useGlobalContext();
  const classes = useStyles(props);
  const [data, setData] = useState([]);

  useEffect(() => {
    const ranks = getUniqRank(students).length;
    const length = Math.ceil(students.length / ranks);
    const temp = students.map(({ id, full_name, rank }) => ({
      id,
      full_name,
      rank,
    }));
    const tbls = Array.from({ length }, (_) => {
      if (temp.length <= ranks) {
        return temp.sort((a, b) => a.rank - b.rank);
      }
      return createTeam(temp, ranks);
    });
    setData(tbls);
  }, [students]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={theme.spacing(3)}
      pt={theme.spacing(3)}
      className={classes.root}
    >
      <Grid container spacing={3}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} lg={6} key={index}>
              <TeamTable data={item} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
