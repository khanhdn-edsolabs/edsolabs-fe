import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useTheme, makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import moment from "moment";

import FilterStudent from "components/FilterStudent";
import StudentTable from "components/StudentTable";
import { useGlobalContext } from "components/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: (props) => (props.tab === 0 ? "flex" : "none"),
  },
  button: {
    width: 200,
    margin: "auto !important",
  },
}));

export default function StudentListContainer(props) {
  const theme = useTheme();
  const classes = useStyles(props);
  const { students } = useGlobalContext();
  const [total, setTotal] = useState(5);
  const [filter, setFilter] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    const setUpTable = students
      .map((student) => {
        const temp = student.full_name.split(" ");
        const lName = temp[0];
        const fName = temp[temp.length - 1];
        const age = moment().diff(moment(student.dob, "M/D/YYYY"), "years");
        return {
          ...student,
          fName,
          lName,
          age,
        };
      })
      .filter((student) => {
        const filterName = filter.name
          ? student.full_name.toLowerCase().includes(filter.name)
          : true;
        const filterGender = filter.gender
          ? student.gender === filter.gender
          : true;
        const filterAge = filter.age ? student.age === filter.age : true;
        return filterName && filterGender && filterAge;
      });
    setData(setUpTable);
    setTotal(5);
  }, [filter, students]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={theme.spacing(3)}
      pt={theme.spacing(3)}
      className={classes.root}
    >
      <FilterStudent setFilter={setFilter} />
      <StudentTable data={data.slice(0, total)} />
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => setTotal((total) => total + 6)}
        disabled={total >= data.length}
      >
        Load more
      </Button>
    </Box>
  );
}
