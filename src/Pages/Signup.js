import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState();
  const [users, setUsers] = useState([]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setUsers([{ mail, password, userName, number }, ...users]);
    console.log(users);
  };

  return (
    <div className="signup_page">
      <div className="welcome">Welcome to Lorem</div>
      <div className="sign-up">Sign up</div>
      <Link to={"/"} className="signup_option">
        Have an Account?<span>Sign in</span>
      </Link>
      <form onSubmit={handleSignUp}>
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
          required
        />

        <label id="label_name" htmlFor="name">
          User name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <label id="label_number" htmlFor="number">
          Contact Number
        </label>
        <input
          type="text"
          id="number"
          name="number"
          placeholder="Contact number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label className="label_password" htmlFor="password">
          Enter your password
        </label>
        <input
          type="password"
          className="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="submit">Sign in</button>
      </form>
    </div>
  );
}

export default Signup;
