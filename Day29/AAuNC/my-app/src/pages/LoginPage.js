import { Grid } from "@mui/material";
import Login from "../containers/Login/Login";

export default function LoginPage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Login />
    </Grid>
  );
}
