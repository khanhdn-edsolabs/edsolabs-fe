import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'

export default function Login() {
  const history=useHistory()
  const [user, setuser] = useState({
    email: "",
    password: ""
  })
  const onchangeEmail = (e) => {
    setuser({ ...user, email: e.target.value })
  }
  const onchangePass = (e) => {
    setuser({ ...user, password: e.target.value })
  }
  const onclickLogin = () => {
    var axios = require('axios')
    var config = {
      method: 'post',
      url: "http://localhost:4000/auth/login",
      headers: {
        'content-Type': 'application/json'
      },
      data: user
    }
    axios(config)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token)
        history.push("/student")
      })
      .catch(() => {
        alert("tài khoản hoặc mật khẩu sai")
      })
  }
  return (
    <>
      <Container >
        <Row className="justify-content-center mt-5">
          <Col className="col-lg-4 col-xs-12 border p-5">
            <h2 className="col-12 text-center mb-4">Admin login</h2>
            <FormGroup className="col-12">
              <Label for="exampleEmail">Email</Label>
              <Input type="email" placeholder="account" onChange={onchangeEmail} />
            </FormGroup>
            <FormGroup className="col-12 mt-2">
              <Label for="exampleEmail">Password</Label>
              <Input type="password" id="exampleEmail" placeholder="pass" onChange={onchangePass} />
            </FormGroup>
            <FormGroup className="mt-4 text-center">
              <Button outline color="danger" onClick={onclickLogin}>Login</Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}
