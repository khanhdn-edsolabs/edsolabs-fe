import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SingleTeam from './SingleTeam';

const divideTeams = (list) => {
  const ranks = [...new Set(list.map((s) => s.rank))];
  ranks.sort((a, b) => a - b);
  //danh sách nhóm có cùng mức rank
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

  // fix cứng chạy 5 lần :((
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

const Teams = (props) => {
  const { listStudents } = props;

  const [list, setList] = useState(listStudents);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    setGroups(divideTeams(list));
  }, [list]);

  return (
    <Grid
      sx={{ marginTop: '10px' }}
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {groups.map((group, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <SingleTeam key={index} group={group} />
        </Grid>
      ))}
    </Grid>
  );
};

Teams.propTypes = {
  listStudents: PropTypes.array,
};

Teams.defaultProps = {
  listStudents: [],
};

export default Teams;
