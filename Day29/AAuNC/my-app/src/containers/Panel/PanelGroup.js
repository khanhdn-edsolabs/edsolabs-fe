import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TableGroup from "../../components/TableData/TableGroup";

export default function PanelGroup(props) {
  const { list } = props;

  const groupByRank = (rank) => {
    return list.filter((o) => o.rank === rank);
  };

  let listRank = [];
  let ranks = [...new Set(list.map((o) => o.rank))];
  for (const i of ranks) {
    listRank[i - 1] = groupByRank(i);
  }

  let minGroup = Math.min([...listRank].length);

  let groups = [[], [], [], [], []];

  for (let i = 0; i < minGroup; i++) {
    for (let j = 0; j < listRank.length; j++) {
      groups[i].push(listRank[j][i]);
    }
  }

  return (
    <Grid container justifyContent="space-between" xl>
      {groups.map((o, i) => {
        return (
          <Grid key={i} item xl={5} style={{ marginTop: "5%" }}>
            <p>Team {i + 1}</p>
            <TableGroup group={o} />
          </Grid>
        );
      })}
    </Grid>
  );
}
