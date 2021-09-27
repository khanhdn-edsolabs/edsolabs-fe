import { Grid } from "@mui/material";
import Header from "../containers/Header/Header";
import Tabs from "../containers/Tabs/Tabs";

export default function MainPage() {
  return (
    <Grid container direction="column">
      <Header />
      <Tabs />
    </Grid>
  );
}
