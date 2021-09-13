import "./search.css";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
}));

// Style boder
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "40%", height: "3rem" },
};

const Search = (props) => {
  const [enterCity, setEnterCity] = useState("");
  const [loading, setLoading] = useState(false);
  const enteredHandler = (e) => {
    setEnterCity(e.target.value);
  };

  const classes = useStyles();

  // Call API
  // const api = environment.startAPI+enterCity+environment.endAPI;
  const api =
    process.env.REACT_APP_URL_START + enterCity + process.env.REACT_APP_URL_END;
  console.log(api);

  const callApi = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        props.getRegionalWeather(data);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <Box
      className="box-search"
      textAlign="center"
      width="100%"
      display="inline-block"
    >
      <h1>EdsoLabs 3-Day Forecast</h1>
      <Box
        borderRadius={50}
        {...defaultProps}
        display="inline-block"
        className="wrapper-input-search"
      >
        <Box display="flex" width="80%">
          <SearchIcon className="icon-search" />
          <form
            onSubmit={callApi}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              placeholder="Nhập thành phố muốn xem"
              onChange={enteredHandler}
              className="input"
            />
          </form>
        </Box>
      </Box>
      <br />
      {loading && (
        <Box
          component="h3"
          display="flex"
          textAlign="center"
          justifyContent="center"
          alignItems='center'
        >
          <CircularProgress/>
          <Box ml={2}>Getting information, please wait ...</Box>
        </Box>
      )}
    </Box>
  );
};

export default Search;
