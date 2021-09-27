import { Grid } from "@material-ui/core";
import Header from "../layout/Header";
import Tabs from "../containers/tabs/Tabs";

export default function MainPage() {
  return (
    <Grid container direction="column">
      <Header />
      <Tabs />
    </Grid>
  );
}