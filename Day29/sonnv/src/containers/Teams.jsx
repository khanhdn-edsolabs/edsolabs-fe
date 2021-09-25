import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectStudent } from "../features/ListStudentSlice";
import GroupStudent, { groupListStudent } from "../components/GroupStudent";
import { Grid } from "@mui/material";

const divideTeams = (list) => {
  const ranks = [...new Set(list.map((s) => s.rank))];

  const listTeamsByRank = ranks.map((rank) => {
    const newTeams = {
      rank: rank,
      teams: [],
    };
    list.map((s) => {
      if (s.rank === rank) newTeams.teams.push(s);
    });
    return newTeams;
  });
  let result = [];
  do {
    let teams = [];
    listTeamsByRank.map((rank, index) => {
      if (rank.teams.length > 0) {
        const team = rank.teams.shift();
        teams.push(team);
      }
    });
    result.push(teams);
  } while (result.length < 5);

  return result;
};

const Teams = () => {
  const [group, setGroup] = useState([]);
  const listStudent = useSelector(selectStudent);

  useEffect(() => {
    setGroup(divideTeams(listStudent));
  }, [listStudent]);

  return (
    <Grid
      sx={{ margin: " 10px 20px 10px 20px" }}
      container
      rowSpacing={3}
      columnSpacing={{ xs: 4, sm: 4, md: 7 }}
    >
      {group.map((group, index) => (
        <Grid item xs={10} sm={6} key={index}>
          <GroupStudent key={index} group={group} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Teams;
