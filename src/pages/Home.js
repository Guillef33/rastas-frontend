import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "./home.css";

import NuevoTurno from "../components/turnos/NuevoTurno";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-presentation">
          <h1>Bienvenido, amigo</h1>
          <p>No está autenticado. Si quieres hacerlo ve a login</p>
          <button className="btn-login-home">
            {" "}
            <Link to={"/auth/login"}> Login </Link>
          </button>
          <button className="btn-login-home">
            {" "}
            <Link to={"/auth/register"}> Register </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
