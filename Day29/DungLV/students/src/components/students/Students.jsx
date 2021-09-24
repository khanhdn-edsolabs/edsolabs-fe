import { AppBar, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Header } from "../Header/Header";
import StudentList from "../StudentsList/StudenList";
import StudentTeam from "../StudentTeam/StudentTeam";
import { Mydiv } from "./styled";
export const Students = () => {
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Header />
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Box
          sx={{
            width: 300,
            margin: "100px auto",
          }}
        >
          <AppBar
            position="static"
            color="default"
            sx={{ borderRadius: 20, overflow: "hidden" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Student List" />
              <Tab label="Teams" />
            </Tabs>
          </AppBar>
        </Box>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <Mydiv style={{ padding: "0px 100px" }}>
            <StudentList />
          </Mydiv>
          <Mydiv style={{ padding: "0px 100px" }}>
            <StudentTeam />
          </Mydiv>
        </SwipeableViews>
      </Box>
    </div>
  );
};
