import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../Api/_getAPI";

const Login = () => {
   const [data,setdata] = useState(null);
   const [userName, setuserName] = useState("");
   const [password,setpassword] = useState("");
   const history = useHistory();
   useEffect(()=>{
      getUsers().then(response=>setdata(response.data));
   },[]);

   const handleLogin = () =>{
        if(userName === data[0].email && password === data[0].password){
            localStorage.setItem('userName',userName);
            localStorage.setItem('password',password);
            history.push("/Admin");
        }
        else{
            alert("Đăng nhập thất bại");
        }
   }

    return(
        <div className="Login__container">
            <div className="Login">
                    <div className="Login__title">
                        <h3 className="title--addition">Admin login</h3>
                    </div>
                    <div className="Login__form">
                        <Form>
                            <Form.Group className="Login__password">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="Email" 
                                    placeholder="Enter Email" 
                                    onChange={(e)=>setuserName(e.target.value)}
                                    value={userName}
                                />
                            </Form.Group>
                            <Form.Group className="Login__password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter password" 
                                    onChange={(e)=>setpassword(e.target.value)}
                                    value={password}
                                />
                            </Form.Group>
                            <Button 
                                className="submit__form" 
                                type="submit"
                                onClick={handleLogin}
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
            </div>
        </div>
    )
}

export default Login;