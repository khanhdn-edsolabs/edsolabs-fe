import { Container, Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styles from "./Tabs.module.css";
import PanelList from "../Panel/PanelList";
import { useEffect, useState } from "react";
import { getAll } from "../../service/Student";
import PanelGroup from "../Panel/PanelGroup";

export default function Tabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, value) => {
    setValue(value);
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    getAll((data) => setList([...data]));
  }, []);

  return (
    <Grid item container direction="column">
      <Container className={styles.container}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            className={styles.tabList}
          >
            <Tab label="Students List" value="1" />
            <Tab label="Teams" value="2" />
          </TabList>

          <TabPanel
            value="1"
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
          >
            <PanelList list={list} />
          </TabPanel>
          <TabPanel
            value="2"
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
          >
            <PanelGroup list={list} />
          </TabPanel>
        </TabContext>
      </Container>
    </Grid>
  );
}
