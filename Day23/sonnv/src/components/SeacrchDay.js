import React, { useReducer, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Next5Days from "./Next5Days";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import WeatherToday from "./WeatherToday";
import axios from "axios";

const reducer = (state, action) => {
  if (action.type === "GET_NAME") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "NO_NAME") {
    return { ...state, isModalOpen: true, titleModal: "Please Enter Location" };
  }
};

const SeacrchDay = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    isModalOpen: false,
    titleModal: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      setLoading(true);
      axios
        .get(
          `${process.env.REACT_APP_API_WEATHER}/forecast.json?key=dbb9c7bb8e4242c0b17125401211009&q=${name}&days=3&aqi=no&alerts=no`
        )
        .then((res) => {
          const data = res.data;
          if (data) {
            dispatch({ type: "GET_NAME" });
            setData(data);
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          dispatch({ type: "NO_NAME" });
          setLoading(false);
        });

      setName("");
    } else {
    }
  }
  return (
    <>
      {state.isModalOpen && <Modal titleModal={state.titleModal} />}
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Enter Location"
            value={name}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </Wrapper>
      <FiveWeather>
        <section>
          <WeatherToday data={data} loading={loading} />
          <Next5Days data3Days={data} />
        </section>
      </FiveWeather>
    </>
  );
};

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  .MuiInputBase-root {
    border-radius: 30px;
    background-color: white;
  }
  .MuiInputBase-root:hover {
    box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.1);
  }
  input {
    width: 50rem;
  }
`;

const FiveWeather = styled.section`
  text-align: center;
`;

export default SeacrchDay;
