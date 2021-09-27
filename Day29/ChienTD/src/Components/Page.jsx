import React, { useContext } from "react";
import { Box } from "@mui/system";
import Login from "./Login/Login";
import { DataContext } from "../Context/dataContext";
import Home from "./Home/Home";

function Page() {
  // get data in useContext
  const { isLoginHome } = useContext(DataContext);

  return (
    <Box>
      <Box display="flex">
        {isLoginHome ? <Home /> : <Login onLogin={isLoginHome} />}
      </Box>
    </Box>
  );
}

export default Page;
