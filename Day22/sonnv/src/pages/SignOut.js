import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import statusBar from "../assets/StatusBar2.svg";
import maskGroup from "../assets/MaskGroup2.svg";
import group from "../assets/Group.svg";
import key from "../assets/key.svg";
const SignOut = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <main class="container container__signup">
      <header class="hearder">
        <img src={statusBar} alt="Status Bar" />
        <img src={maskGroup} alt="Mask Group" class="header__image1" />
        <div class="heaer__title">
          <h4>Hi there!</h4>
          <h2>Let's Get Started</h2>
        </div>
      </header>
      <form onSubmit={(e) => handleLogin(e)} class="form">
        <div class="form__user">
          <i class="form__icon far fa-user"></i>
          <input
            type="email"
            name="email"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form__pass">
          <img class="form__icon" src={key} alt="pass" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn__create">
          Create an Account
        </button>
        <img src={group} alt="Group" class="form__unline" />
        <Link to="/signin" class="btn btn__custom">
          Log In
        </Link>
      </form>
    </main>
  );
};

export default SignOut;
