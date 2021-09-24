import React, { createContext, useState, useEffect } from "react";
import listStudent from "../API/listStudent";
import listUser from "../API/listUser";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [listStudents, setListStudents] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [isLoginHome, setIsLoginHome] = useState(false);
  const [valueTab, setValueTab] = useState(true);

  useEffect(() => {
    const fetchListStudents = async () => {
      try {
        const response = await listStudent.getAll();
        console.log(response);
        setListStudents(response);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchListUsers = async () => {
      try {
        const response = await listUser.getAll();
        console.log(response);
        setListUsers(response);
      } catch (error) {}
    };
    fetchListStudents();
    fetchListUsers();
  }, []);

  const ContextData = { listStudents, listUsers, isLoginHome, setIsLoginHome, valueTab, setValueTab };
  return (
    <DataContext.Provider value={ContextData}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
