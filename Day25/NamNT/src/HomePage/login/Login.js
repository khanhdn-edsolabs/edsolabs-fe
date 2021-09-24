import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser } from "../../getAPI/getAPI";
Login.propTypes = {};

function Login() {
  const history = useHistory();
  const [userName, setuserName] = useState("");
  const [pass, setPass] = useState("");
  const [getData, setgetData] = useState([]);

  const handleSubmit = (e) => e.preventDefault();

  useEffect(() => {
    getUser()
      .then((res) => res.data)
      .then((e) => {
        setgetData(e);
      });
  }, []);

  //kiểm tra đăng nhập
  const handleLogin = () => {
    if (userName.trim() === getData[0].username && pass.trim() === getData[0].password) {
      localStorage.setItem("user", userName);
      localStorage.setItem("password", pass);
      history.push("/Timer");
    }
    else{
      alert("Tên đăng nhập hoặc password không chính xác !!!")
    }
  };

  return (
    <main className="container-fluid d-flex justify-content-center">
      <div className="Login col-4 d-flex flex-column align-items-center">
        <header className="Login__header">
          <h2>Login</h2>
        </header>
        <section className="Login__content d-flex justify-content-center">
          <form className="Login__form">
            <div className="form-group Login__userName">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="User Name"
                onChange={(e) => setuserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="form-group Login__password">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </div>
          </form>
        </section>
        <footer className="Login__footer d-flex justify-content-end">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <button
              type="submit"
              className="btn btn-light btn-login"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </footer>
      </div>
    </main>
  );
}

export default Login;
