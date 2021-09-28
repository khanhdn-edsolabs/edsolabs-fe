import React, { useState, useEffect } from "react";
import Header from "../timer/header";
import Filter from "../timer/dateFilter";
import Showtask from "../timer/renderTask";
import Sidebar from "../layout/Sidebar";
import { 
  Grid,
  Button,
 } from '@material-ui/core';
import { useStyles } from "./style";
import { useTaskContext } from "../layout/taskContext";
import { getTasks } from "../apis/apis";
import moment from "moment";

export default function Timer() {
  const classes = useStyles();
  const { render, setRender, value } = useTaskContext();
  const [limit, setLimit] = useState(5);
  const handleLoadmore = () => {
    setRender();
    setLimit(limit + 5);
  };
  const [tasks, setTask] = useState([]);
  console.log(value);
  useEffect(() => {
    if (value === null) {
      console.log(1);
      getTasks(0)
        .then((res) => {
          setTask(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
          alert("Không thể kết nối tới server");
        });
    } else {
      console.log(2);
      getTasks(moment(`${value}`).format("YYYY-MM-DD"))
        .then((res) => {
          setTask(res.data.reverse());
        })
        .catch((err) => {
          console.log(err);
          alert("Không thể kết nối tới server");
        });
    }
  }, [render]);
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={2} className={classes.border}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} className={classes.main}>
          <Header />
          <Filter />
          <Showtask task={tasks} limit={limit} />
          <div className={classes.loadmore}>
            <Button variant="contained" onClick={handleLoadmore}>
              Load more
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}