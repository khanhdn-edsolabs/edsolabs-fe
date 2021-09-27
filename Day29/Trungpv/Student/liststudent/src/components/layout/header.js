import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { getUser } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [data, setData] = useState(() => {
        getUser()
          .then((res) => res.data)
          .then((e) => {
            setData(e);
          })
          .catch(() => {})
          .finally(() => {});
      });
      const Logout = () => {
        localStorage.clear();
      };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm-12" style={{width:'100wh', marginBottom: '50px',backgroundColor: '#cfe8fc', height: '50px'}}>
      {typeof data === "object" ? (
        <div className="right">
          <h5 >Xin Chao : {data[0].fullname}</h5>
            <Link className="btn-link" to="/" onClick={Logout}>Logout</Link>
        </div>
      ) : (
        ""
      )}
     
      </Container>
    </React.Fragment>
  );
}