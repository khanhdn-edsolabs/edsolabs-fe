import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import StudentList from "../../component/StudentList/StudentList";
import Team from "../../component/Team/Team";
import Header from "../../component/Header/Header";
import { getData, tokenAuth } from "../../apis/axiosBase";

const Home = () => {
  let history = useHistory();
  const [value, setValue] = useState("0");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [reset, setReset] = useState(false);
  const [sizeLoad, setSizeLoad] = useState(5);
  const [dataTeam, setDatateam] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadMore = (value) => {
    setSizeLoad(value);
    setReset(!reset);
  };

  const groupListStudent = (listStudent) => {
    const newArr = [];
    const newListStudent = [...listStudent];
    const dem = Math.ceil(newListStudent.length / 5);
    for (let i = 0; i < dem; i++) {
      const subArr = [];
      if (subArr.length <= 5) {
        newListStudent.forEach((student, index) => {
          if (
            subArr.every(
              (item) => item.id !== student.id && item.rank !== student.rank
            )
          ) {
            subArr.push(student);
            newListStudent.splice(index, 1, {});
          }
        });
      }
      newArr.push(subArr);
    }

    return newArr.map((item) =>
      item.filter((subItem) => Object.keys(subItem).length > 0)
    );
  };

  useEffect(() => {
    localStorage.getItem("accessToken")
      ? history.replace("/home")
      : history.replace("/");
  }, [localStorage.getItem("accessToken")]);

  useEffect(() => {
    getData(localStorage.getItem("token"))
      .then((res) => {
        setData(res.data);
        setDatateam(groupListStudent(res.data));
      })
      .catch((err) => {
        alert("Token timeout please login again");
        history.push("/");
      });

    tokenAuth(1, localStorage.getItem("accessToken"))
      .then((res) => {
        const data = res.data;
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });

      return () => {
        setDatateam([]);
        setData([]);
        setUser([]);
      }
  }, [reset]);

  return (
    <>
      <Header user={user} />
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 70px)",
          typography: "body1",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Student list" value="0" />
              <Tab label="Team" value="1" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <StudentList data={data} loadMore={loadMore} sizeLoad={sizeLoad} />
          </TabPanel>
          <TabPanel value="1">
            <Team dataTeam={dataTeam} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Home;
