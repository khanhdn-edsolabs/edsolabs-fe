import React from "react";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "grid",
    placeItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: "960px",
    maxHeight: "100vh",
    overflow: "scroll",
    [theme.breakpoints.up("sm")]: {
      overflow: "initial",
    },
  },
  img: {
    maxWidth: "100%",
    display: "block",
    margin: "auto",
  },
  cardInfo: {
    margin: 0,
  },
}));

export default function AuthorModal(props) {
  const classes = useStyles();
  return (
    <Modal
      open={props.modal}
      className={classes.modal}
      onClose={() => {
        props.setModal(false);
      }}
    >
      <Card className={classes.card}>
        <CardHeader
          title="About me"
          action={
            <IconButton
              onClick={() => {
                props.setModal(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item container spacing={3} className={classes.cardInfo}>
              <Grid
                item
                container
                xs={12}
                sm={8}
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Grid item>
                  <Typography variant="h6">Họ tên: Trần Mạnh Quân</Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h6">Ngày sinh: 10/11/1999</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Quê quán: Hà Nội</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Sở thích: Lướt web</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    Mục tiêu: Trở thành fullstack developer
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  numquam nesciunt neque temporibus est nemo voluptate quisquam
                  sequi! Blanditiis, autem nam! Repudiandae cum exercitationem
                  officia libero voluptates commodi nam cupiditate?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
}
