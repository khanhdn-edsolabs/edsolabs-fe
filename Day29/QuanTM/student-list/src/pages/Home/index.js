import React, { useState, useEffect } from "react";
import { Tabs, Tab, CircularProgress, Box } from "@mui/material";

import MainContainer from "containers/MainContainer";
import StudentListContainer from "containers/StudentListContainer";
import TeamListContainer from "containers/TeamListContainer";
import HomeHeader from "components/HomeHeader";
import history from "historyObj";
import { tokenAuth } from "apis/signInAPI";
import { useGlobalContext, getLocalUser } from "components/GlobalContext";

export default function Home() {
  const { user, setUser } = useGlobalContext();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const localUser = getLocalUser();
    if (localUser) {
      const {
        accessToken,
        user: { id },
      } = localUser;

      (async () => {
        try {
          await tokenAuth(id, accessToken);
          setUser(localUser);
        } catch (error) {
          if (error.response.status === 401) {
            history.push("/login");
            return;
          }
          console.log(error.response.data);
        }
      })();
    } else {
      history.push("/login");
    }
  }, [setUser]);

  if (!user) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <HomeHeader />
      <MainContainer>
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab label="Student List" />
          <Tab label="Team" />
        </Tabs>
        <StudentListContainer tab={tab} />
        <TeamListContainer tab={tab} />
      </MainContainer>
    </>
  );
}
