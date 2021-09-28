import { CircularProgress, Grid } from '@material-ui/core';
import './Loading.css'

export default function Loading() {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <CircularProgress className="loading-icon" />
        </Grid>
        <Grid item>
          <p className="loading-content">Getting information, please wait...</p>
        </Grid>
      </Grid>
    </>
  );
}
