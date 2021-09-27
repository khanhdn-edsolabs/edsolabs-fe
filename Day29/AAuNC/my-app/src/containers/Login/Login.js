import { Grid, Paper, FormGroup, Button } from "@mui/material";
import InputText from "../../components/InputText/InputText";
import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { useHistory } from "react-router-dom";
import { getAllStudent } from "../../service/User";

export default function Login() {
  const [email, setEmail] = useState("");
  const getEmail = (value) => setEmail(value);
  const [password, setPassword] = useState("");
  const getPassword = (value) => setPassword(value);
  const [users, setUsers] = useState([]);

  let history = useHistory();

  useEffect(() => {
    getAllStudent((data) => {
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
    <Paper className={styles.paper}>
      <h2 align="center">Admin login</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <p className={styles.p}>Email</p>
          <InputText type="text" getValue={getEmail} />
        </FormGroup>

        <FormGroup className={styles.formGroup}>
          <p className={styles.p}>Password</p>
          <InputText type="password" getValue={getPassword} />
        </FormGroup>

        <Grid container justifyContent="center" className={styles.grid}>
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
