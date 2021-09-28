import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  ul: {
    listStyleType: "none",
    "& li": {
      cursor: "pointer",
      padding: "10px 0 10px 42px",
      transition: "ease-in-out .3s",
      "&:hover": {
        opacity: ".6",
        backgroundColor: "#909090",
        transition: "linear .4s",
        color: "#FFF",
      },
    },
  },
  listStyle: {
    backgroundColor: "#FFF",
    zIndex: 1,
    width: 500,
    borderRadius: 40,
    overflow: "hidden",
    border: "1px solid #ddd",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    position: "absolute",
    top: 200,
  },
  titleList: {
    fontSize: 25,
    backgroundColor: "#333",
    padding: 20,
    color: "#fff",
  },
});
export default function FilterSearch(props) {
  const classes = useStyles();
  let renderFilterSearch = props.dataSearchFromApi.map((item, index) => {
    const getUrlItem = () => {
      props.eventLoading();
      props.hanldeUrl(item.url);
      props.handleHidden([]);
    };
    return (
      <ul key={index} className={classes.ul}>
        <li onClick={getUrlItem}>{item.name}</li>
      </ul>
    );
  });
  return (
    <div className={classes.listStyle}>
      <div className={classes.titleList}>Search Results</div>
      {renderFilterSearch}
    </div>
  );
}
