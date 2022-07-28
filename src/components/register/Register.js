import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import noProfile from "../../assets/no-profile-img.jpg";

function Login() {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const { register, isRegister } = useUser();

  let navigate = useNavigate();

  useEffect(() => {
    if (isRegister) navigate("/dashboard");
  }, [isRegister, navigate]);

  const registerUser = (e) => {
    e.preventDefault();
    register(username, password, email, age);
  };

  return (
    <div className="loginContainer">
      <h1>Registrate en nuestro sitio web</h1>
      <form onSubmit={registerUser}>
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
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingrese su email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Edad</label>

        <input
          type="number"
          placeholder="Ingrese su edad"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
