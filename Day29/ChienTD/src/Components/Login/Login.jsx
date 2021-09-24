import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { DataContext } from "../../Context/dataContext";
import { BrowserRouter as NavLink } from "react-router-dom";

const Login = () => {
  // Lấy dữ liệu context
  const { listUsers, setIsLoginHome } = useContext(DataContext);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [isLogin, setIsLogin] = useState(false);

  // get data in input cell
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPass = (e) => {
    setPass(e.target.value);
  };

  // event login
  const handlerLogin = (e) => {
    e.preventDefault();
    setIsLoginHome(isLogin);
  };

  // event: update isLogin khi thay đổi pass và email
  useEffect(() => {
    const authLogin = listUsers.filter(
      (user) => user.email === email && user.password === pass
    );
    if (authLogin.length > 0) {
      setIsLogin(authLogin);
    } else setIsLogin(false);
  }, [email, pass, listUsers]);

  return (
    <NavLink to="/Login">
      <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
        <Box
          width="50%"
          maxWidth="500px"
          bgcolor="white"
          height="400px"
          border={2}
          textAlign="center"
          component="form"
          onSubmit={handlerLogin}
        >
          <Box component="h1">Admin login</Box>
          <Box>
            <Box width="80%" display="inline-block" mb={3}>
              <Box textAlign="left" fontSize="20px" fontWeight="bold" mb={1}>
                Email:
              </Box>
              <TextField style={{ width: "100%" }} onChange={handlerEmail} />
            </Box>
            <Box width="80%" display="inline-block">
              <Box textAlign="left" fontSize="20px" fontWeight="bold" mb={1}>
                Password:
              </Box>
              <TextField
                style={{ width: "100%" }}
                type="password"
                onChange={handlerPass}
              />
            </Box>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100px" }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};

export default Login;
