import { Button, Grid } from "@mui/material";
import TableList from "../../components/TableData/TableList";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";

const getAge = (value) => {
  let dob = new Date(value);
  let seconds = Date.now() - dob.getTime();
  let datefrom1970 = new Date(seconds);
  let year = datefrom1970.getUTCFullYear();
  return Math.abs(year - 1970);
};

export default function PanelList(props) {
  const { list } = props;
  const [next, setNext] = useState(5);
  const clickLoadMore = () => {
    setNext((pre) => pre + 6);
  };

  const [filterValue, setFilterValue] = useState({
    name: "",
    gender: "",
    age: "",
  });

  const getFilterValue = (name, gender, age) => {
    setNext(6);
    setFilterValue({ name: name, gender: gender, age: age });
  };

  let listF = list;
  const getListByName = () => {
    listF = listF.filter(
      (o) =>
        o.full_name
          .toString()
          .toUpperCase()
          .indexOf(filterValue.name.toString().toUpperCase()) > -1
    );
  };

  const getListByGender = () => {
    listF = listF.filter(
      (o) =>
        o.gender.toString().toUpperCase() ===
        filterValue.gender.toString().toUpperCase()
    );
  };

  const getListByAge = () => {
    listF = listF.filter((o) => getAge(o.dob) === Number(filterValue.age));
  };

  if (
    filterValue.name !== "" &&
    filterValue.gender !== "" &&
    filterValue.age !== ""
  ) {
    getListByName();
    getListByGender();
    getListByAge();
  } else if (filterValue.name !== "" && filterValue.gender !== "") {
    getListByName();
    getListByGender();
  } else if (filterValue.gender !== "" && filterValue.age !== "") {
    getListByGender();
    getListByAge();
  } else if (filterValue.name !== "" && filterValue.age !== "") {
    getListByName();
    getListByAge();
  } else if (filterValue.name !== "") {
    getListByName();
  } else if (filterValue.gender !== "") {
    getListByGender();
  } else if (filterValue.age !== "") {
    getListByAge();
  }

  return (
    <Grid>
      <Filter getFilter={getFilterValue} />
      <TableList list={listF.slice(0, next)} />
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: "3%", marginBottom: "3%" }}
      >
        {next <= listF.length && (
          <Button
            onClick={clickLoadMore}
            type="submit"
            style={{
              padding: "1% 2%",
              border: "1px solid black",
              fontSize: "13px",
              fontWeight: "bold",
              color: "white",
              background: "#1976d2",
            }}
          >
            Load more students
          </Button>
        )}

        {next > listF.length && (
          <Button
            disabled
            style={{
              padding: "1% 2%",
              border: "1px solid #e0e0e0",
              fontSize: "13px",
              fontWeight: "bold",
              color: "grey",
              background: "#e0e0e0",
            }}
          >
            Load more students
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
