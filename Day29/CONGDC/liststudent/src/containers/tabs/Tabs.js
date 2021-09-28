import { Container, Grid } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import PanelList from "../Panel/PanelList";
import { useEffect, useState } from "react";
import { getAll } from "../../api/StudentApi";
import PanelGroup from "../Panel/PanelGroup";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "20px",
      },
    TabList : {
        marginTop : "5%"
      },
    button : {
        width: "150px",
        border: '1px solid black !important',
        borderBottom: '0px !important',
        borderTopLeftRadius: '20px !important',
        borderTopRightRadius: '20px !important'
      }
  }));
  
export default function Tabs() {
    const classes = useStyles();
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
      <Container className={classes.container}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            className={classes.tabList}
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