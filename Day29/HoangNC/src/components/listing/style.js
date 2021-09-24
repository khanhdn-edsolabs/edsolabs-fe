import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  // Navbar
  logout: {
    height: "30px",
  },

  // Search
  search: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  searchName: {
    marginRight: "10px",
  },
  searchGender: {
    marginRight: "10px",
  },
  searchAge: {
    marginRight: "10px",
    width: "80px",
  },

  // Student
  showStudent: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    border: "1px solid black",
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  id: {
    paddingLeft: "10px",
    width: "40px",
  },
  frsName: {
    width: "100px",
  },
  lName: {
    width: "100px",
  },
  gender: {
    width: "60px",
  },
  age: {
    width: "60px",
  },
  rank: {
    width: "60px",
  },
  loadmore: {
    marginTop: "50px",
    height: "30px",
    textAlign: "center",
  },
  // Teams
  teams: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "50px",
  },
  group: {
    width: "350px",
  },
  groupInfo: {
    border: "1px solid black",
    padding: "8px 20px",
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
  },
  teamsItem: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
  },
}));
