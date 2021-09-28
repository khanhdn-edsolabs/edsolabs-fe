import { Grid } from "@material-ui/core";
import Login from "../containers/login/login";

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