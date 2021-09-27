import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3002/",
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    "Content-type": "application/json"
  }
});
