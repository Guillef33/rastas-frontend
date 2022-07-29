import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { UserContext } from "../../context/UserContext";
import noProfile from "../../assets/no-profile-img.jpg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import harcodeUsers from "../../hooks/harcodeUsers";

function Login() {
  const {
    login,
    setLogin,
    loginSubmit,
    user,
    setUser,
    username,
    setUserame,
    password,
    setPassword,
  } = useContext(UserContext);

  const [loginStatus, setLoginStatus] = useState("");

  let navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const loginWeb = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3050/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        setUser(response.data);
        setLogin(true);
        // store the user in localStorage
        localStorage.setItem("user", username);
        localStorage.setItem("password", password);
        localStorage.setItem("login", login);

        console.log(response.data);
        navigate("/dashboard");
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      console.log(response);
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);

      }
    });
  }, []);

  return (
    <div className="loginContainer">
      <form>
        <img src={noProfile} alt="profile-pic" />
        <label>Username</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(e) => setUserame(e.target.value)}
          value={username}
        />
        <label>Password</label>

        <input
          type="password"
          placeholder="Ingrese su password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={loginWeb} type="submit">
          Enviar
        </button>
        <h3>{loginStatus}</h3>
      </form>
    </div>
  );
}

export default Login;
