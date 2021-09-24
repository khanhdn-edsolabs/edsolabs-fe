import React, { useContext, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { fetchStudent } from "apis/studentsAPI";

const theme = createTheme();
const GlobalContext = React.createContext();

export const getLocalUser = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export default function GlobalContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    (async () => {
      const res = await fetchStudent();
      setStudents(res.data);
    })();
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser, students, setStudents }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
