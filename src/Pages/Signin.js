import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const credentials = {
    email: "admin@propelius.tech",
    password: "123",
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (mail === credentials.email && password === credentials.password) {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", mail);
      navigate("/dashboard");
    }
    setPassword("");
    document
      .getElementById("signin_password")
      .setAttribute("placeholder", "Enter correct password");
  };

  return (
    <div className="login_page">
      <div className="welcome">Welcome to Lorem</div>
      <div className="sign-in">Sign in</div>
      <Link to={"/signup"} className="signup_option">
        No Account?<span>Sign up</span>
      </Link>
      <form onSubmit={handleSignIn}>
        <label id="label_mail" htmlFor="mail">
          Enter your username or email address
        </label>
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Username or email address"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label className="label_password" htmlFor="password">
          Enter your password
        </label>
        <input
          type="password"
          id="signin_password"
          className="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={"/"} id="forgot_password">
          Forgot Password
        </Link>
        <button className="submit">Sign in</button>
        <div id="or">OR</div>

        <div id="google">Sign in with Google</div>
        <div id="facebook"></div>
        <div id="apple"></div>
      </form>
    </div>
  );
}

export default Signin;
