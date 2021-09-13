import { CircularProgress, Grid } from '@material-ui/core';
import './loading.scss'

export default function LoadingData() {
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