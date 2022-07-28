import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function AuthHome() {
  const [userNameReg, SetUserNameReg] = useState("");
  const [passwordReg, SetPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const register = () => {
    Axios.post("http://localhost:3050/register", {
      username: userNameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3050/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
    navigate("/dashboard");
  };

  return (
    <>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => SetUserNameReg(e.target.value)} />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => SetPasswordReg(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}

export default AuthHome;
