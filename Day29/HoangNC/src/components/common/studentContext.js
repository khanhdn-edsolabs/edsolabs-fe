import React, { useContext, createContext, useState, useEffect } from "react";
import { getStudents } from "../apis/apis";
import moment from "moment";

export const StudentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [student, setStudent] = useState([]);
  const [limit, setLimit] = useState(5);
  const [searchGender, setSearchGender] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchAge, setSearchAge] = useState("");

  const handleChange = (event) => {
    setSearchGender(event.target.value);
  };

  const handleLoadmore = () => {
    setLimit(limit + 6);
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };
  const handleSearchAge = (e) => {
    setSearchAge(e.target.value);
  };

  const handleSearch = () => {
    const results = student.filter((e) => {
      if (searchAge !== "") {
        return moment().diff(e.dob, "years") === parseInt(searchAge);
      }
    });
    setStudent(results);
  };

  useEffect(() => {
    getStudents(searchName, searchGender)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [searchName, searchGender, searchAge]);

  const data = {
    student,
    limit,
    searchGender,
    handleLoadmore,
    handleChange,
    handleSearchName,
    handleSearchAge,
    handleSearch,
  };

  return (
    <StudentContext.Provider value={data}>{children}</StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};
