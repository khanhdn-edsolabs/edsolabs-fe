import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  FlexColumn,
  LoadmoreButton,
  MyButton,
  MySelect,
  MyTextField,
  TaskSearch,
} from "./style";
import TableStudent from "../TableStudent/TableStudent";

const StudentList = ({ data, loadMore, sizeLoad }) => {
  const [search,setSearch] =useState({name:'',gender:'',Age:''})
  const [dataFind, setDataFind] = useState([]);
  const [isFind, setIsFind] = useState(false);
  const calculateAge = (value) => {
    const day = Number(value.split("/")[1]);
    const month = Number(value.split("/")[0]);
    if (month > moment().month()) {
      return moment().diff(value, "years");
    } else if (month === moment().month() && day > moment().day()) {
      return moment().diff(value, "years");
    } else {
      return moment().diff(value, "years") + 1;
    }
  };

  const handleChangeInputSearch = (event) => {
    setSearch({...search,name:event.target.value})
  };

  const handleChangeInputAge = (event) => {
    setSearch({...search,Age:event.target.value})
  };

  const handleSelecter = (event) => {
    setSearch({...search,gender:event.target.value})
  };

  const handleOnClickSearch = () => {
    const dataSearchName = [...data].filter(item => item.full_name.toLowerCase().indexOf(search.name.toLowerCase()) !== -1)
    const dataSearchGender = search.gender === "" ? [...dataSearchName].map(item => item) : [...dataSearchName].filter(item => item.gender === search.gender)
    const dataSearchAge = search.Age === "" ? [...dataSearchGender].map(item => item) : [...dataSearchGender].filter(item => Math.floor((Number(new Date().getTime()) - Number(new Date(item.dob).getTime())) / 31622400000) === Number(search.Age))
    console.log(search.name,search.gender,search.Age);
    setDataFind(dataSearchAge);
    setIsFind(true);
  }

  const handleLoadmore = () => {
    loadMore(sizeLoad + 6);
  };

  const showTable = () => {
    if (isFind) {
      return <TableStudent data={dataFind} sizeLoad={sizeLoad} />;
    } else {
      return <TableStudent data={data} sizeLoad={sizeLoad} />;
    }
  };

  const showLoadmore = () => {
    if (sizeLoad >= data.length) {
      return "";
    } else {
      return (
        <LoadmoreButton
          onClick={() => {
            handleLoadmore();
          }}
        >
          Loadmore
        </LoadmoreButton>
      );
    }
  };
  return (
    <FlexColumn>
      <TaskSearch>
        <MyTextField
          onChange={handleChangeInputSearch}
          value={search.name}
          size="large"
          placeholder="Search name"
          variant="outlined"
        />
        <MySelect
          value={search.gender}
          onChange={handleSelecter}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </MySelect>
        <MyTextField
          onChange={handleChangeInputAge}
          value={search.Age}
          size="small"
          placeholder="age"
          variant="outlined"
        />
        <MyButton
          onClick={() => {
            handleOnClickSearch();
          }}
          variant="outlined"
        >
          <SearchOutlinedIcon />
        </MyButton>
      </TaskSearch>
      {showTable()}
      {showLoadmore()}
    </FlexColumn>
  );
};

export default StudentList;
