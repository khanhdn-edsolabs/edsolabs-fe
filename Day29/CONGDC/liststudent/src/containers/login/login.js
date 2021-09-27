import { Grid, Paper, FormGroup, Button } from "@material-ui/core";
import InputText from "../../components/Input/InputText";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllUser } from "../../api/UserApi";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      marginRight: "20px",
    },
    Paper :{
        width: '25%',
        paddingLeft: '5%',
        paddingRight: '5%' ,
        border : '2px solid black'
    },
      
    FormGroup : {
        marginTop: '5%'
      },
      
      p :{
        fontWeight: 'bold'
      },
      
      Grid : {
        marginTop: '7%',
        marginBottom: '7%'
      }
  }));

export default function Login() {
    const classes = useStyles();
  const [email, setEmail] = useState("");
  const getEmail = (value) => setEmail(value);
  const [password, setPassword] = useState("");
  const getPassword = (value) => setPassword(value);
  const [users, setUsers] = useState([]);

  let history = useHistory();

  useEffect(() => {
    getAllUser((data) => {
      setUsers([...data]);
    });
  }, []);

  function handleSubmit(e) {
    let ok = false;
    e.preventDefault();
    if (email == "") {
      alert("Enter email");
      return;
    } else if (password == "") {
      alert("Enter password");
      return;
    } else {
      for (const u of users) {
        if (email === u.email && password === u.password) {
          localStorage.setItem("name", JSON.stringify(u.fullname));
          localStorage.setItem("isLogged", "true");
          ok = true;
        }
      }
    }

    if (ok === true) history.replace("/");
    else alert("Error information !!!");
  }

  return (
    <Paper className={classes.Paper}>
      <h2 align="center">Admin login</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <p className={classes.p}>Email</p>
          <InputText type="text" getValue={getEmail} />
        </FormGroup>

        <FormGroup className={classes.FormGroup}>
          <p className={classes.p}>Password</p>
          <InputText type="password" getValue={getPassword} />
        </FormGroup>

        <Grid container justifyContent="center" className={classes.Grid}>
          <Button
            type="submit"
            style={{
              padding: "2% 5%",
              border: "1px solid black",
              fontSize: "14px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Login
          </Button>
        </Grid>
      </form>
    </Paper>
  );
}