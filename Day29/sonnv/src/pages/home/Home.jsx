import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "styled-components";
import StudentList from "../../containers/StudentList";
import Teams from "../../containers/Teams";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Student List" />
          <Tab label="Teams " />
        </Tabs>
      </Box>
      {value === 0 && <StudentList />}
      {value === 1 && <Teams />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MuiTabs-flexContainer {
    justify-content: center;
  }
`;

export default Home;
