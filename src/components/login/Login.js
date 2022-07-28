import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import noProfile from "../../assets/no-profile-img.jpg";
import harcodeUsers from "../../hooks/harcodeUsers";

function Login() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLogged } = useUser();

  let navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/dashboard");
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInDB = harcodeUsers.find((el) => el.username === username);

    if (username === userInDB.username && password === userInDB.password) {
      login(username, password);
    } else {
      setError("No se ha encontrado el usuario");
    }
  };

  console.log(error);

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
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

        <button>Enviar</button>
        <span>{error}</span>
      </form>
    </div>
  );
}

export default Login;
