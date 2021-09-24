import React, { useEffect } from "react";
import { useStyles } from "./style";
import { useStudentContext } from "../common/studentContext";
import moment from "moment";
import Button from "@mui/material/Button";
import Search from "./search";

export default function Student() {
  const classes = useStyles();
  const { student, handleLoadmore, limit } = useStudentContext();

  return (
    <>
      <Search />
      <div className={classes.showStudent}>
        <div className={classes.item}>
          <div className={classes.id}>#</div>
          <div className={classes.frsName}>First Name</div>
          <div className={classes.lName}>Last Name</div>
          <div className={classes.gender}>Gender</div>
          <div className={classes.age}>Age</div>
          <div className={classes.rank}>Rank</div>
        </div>
        {student.slice(0, limit).map((e) => {
          return (
            <div key={e.id} className={classes.item}>
              <div className={classes.id}>{e.id}</div>
              <div className={classes.frsName}>{e.full_name.split(" ")[0]}</div>
              <div className={classes.lName}>
                {e.full_name.split(" ")[e.full_name.split(" ").length - 1]}
              </div>
              {e.gender === "M" ? (
                <div className={classes.gender}>Male</div>
              ) : (
                <div className={classes.gender}>Female</div>
              )}
              <div className={classes.age}>{moment().diff(e.dob, "years")}</div>
              <div className={classes.rank}>{e.rank}</div>
            </div>
          );
        })}
      </div>
      <div className={classes.loadmore}>
        {" "}
        {limit < student.length ? (
          <Button variant="contained" onClick={handleLoadmore}>
            Load more
          </Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
