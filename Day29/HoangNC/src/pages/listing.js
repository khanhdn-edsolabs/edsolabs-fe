import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Navbar from "../components/listing/navbar";
import Students from "../components/listing/students";
import Teams from "../components/listing/teams";
import { useStyles } from "../components/listing/style";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", typography: "body1", marginTop: "40px" }}>
        <TabContext value={value}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                sx={{
                  borderTop: "1px solid #1976d2",
                  borderLeft: "1px solid #1976d2",
                  borderRight: "1px solid #1976d2",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
                label="Students list"
                value="1"
              />
              <Tab
                sx={{
                  borderTop: "1px solid #1976d2",
                  borderLeft: "1px solid #1976d2",
                  borderRight: "1px solid #1976d2",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
                label="Student Team"
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Students />
          </TabPanel>
          <TabPanel value="2">
            <Teams />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
