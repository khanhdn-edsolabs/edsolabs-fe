import React, { useState, useContext, useEffect } from "react";
import { Paper, Typography, Grid, Box, makeStyles } from "@material-ui/core";
import { Pie, Bar } from "react-chartjs-2";

import ReportContainer from "../../containers/ReportContainer";
import ReportHeader from "../../components/ReportHeader";
import { convertDate, momentDate, calculateTimeDif } from "../../utils";
import { useGlobalContext } from "../../components/ContextProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: theme.breakpoints.values.sm,
  },
  paper: {
    padding: theme.spacing(2),
  },
  typo: {
    lineHeight: "48px",
  },
}));

const ReportContext = React.createContext();

export default function Report() {
  const classes = useStyles();
  const { tasks, tags } = useGlobalContext();
  const [selected, setSelected] = useState("This week");
  const [dateRange, setDateRange] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selected === "Date range") {
      return;
    }
    const dateRange = convertDate(selected);
    setDateRange(dateRange);
  }, [selected]);
  useEffect(() => {
    if (!tags || !tasks) {
      return;
    }
    if (dateRange && !dateRange.startDate && !dateRange.endDate) {
      setDateRange(null);
      return;
    }
    let matchTasks = [];
    const finishTasks = tasks.filter((task) => task.status === 1);
    if (!dateRange) {
      matchTasks = [...finishTasks];
    } else {
      if (!dateRange.startDate) {
        matchTasks = finishTasks.filter(({ start_time }) =>
          momentDate(start_time).isBefore(momentDate(dateRange.endDate))
        );
      }
      if (!dateRange.endDate) {
        matchTasks = finishTasks.filter(({ start_time }) =>
          momentDate(start_time).isAfter(momentDate(dateRange.startDate))
        );
      }
      if (dateRange.startDate && dateRange.endDate) {
        matchTasks = finishTasks.filter(({ start_time }) =>
          momentDate(start_time).isBetween(
            momentDate(dateRange.startDate),
            momentDate(dateRange.endDate)
          )
        );
      }
    }
    const data = tags.map((tag) => {
      const totalTime = matchTasks.reduce((total, item) => {
        if (item.tags.includes(tag.id)) {
          const timeSpent = calculateTimeDif(item.start_time, item.end_time);
          return total + Math.ceil((timeSpent * 100) / 3600000) / 100;
        }
        return total;
      }, 0);
      return totalTime;
    });
    setChartData(data);
  }, [dateRange, tasks, tags]);

  return (
    <ReportContext.Provider
      value={{ selected, setSelected, dateRange, setDateRange, chartData }}
    >
      <Box className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" component="h1" className={classes.typo}>
            Productivity Report
          </Typography>
        </Paper>
        <ReportContainer>
          <ReportHeader />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Pie
                width={100}
                height={100}
                data={{
                  labels: tags.map((tag) => tag.name),
                  datasets: [
                    {
                      label: "Tasks Productivity ",
                      data: chartData,
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "#198754",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
              ></Pie>
            </Grid>
            <Grid item xs={12} md={6}>
              <Bar
                width={100}
                height={60}
                data={{
                  labels: ["online", "meetting", "training", "coding"],
                  datasets: [
                    {
                      axis: "y",
                      label: "Tasks Productivity",
                      data: chartData,
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "#198754",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
                options={{
                  indexAxis: "y",
                }}
              />
            </Grid>
          </Grid>
        </ReportContainer>
      </Box>
    </ReportContext.Provider>
  );
}

export const useReportContext = () => useContext(ReportContext);
