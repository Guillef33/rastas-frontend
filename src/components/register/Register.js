import { useState } from "react";

import harcodeUsers from "../../hooks/harcodeUsers";
import "../login/login.css";
import noProfile from "../../assets/no-profile-img.jpg";
import Axios from "axios";

import { Link } from "react-router-dom";

export default function Form() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3050/register", {
      username: name,
      password: password,
      email: email,
    }).then((response) => {
      console.log(response);
    });
    setSubmitted(true);
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>El {name} fue registrado exitosamente.</p>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Por favor, complete todos los campos.</p>
      </div>
    );
  };

  return (
    <>
      <div className="loginContainer">
        <form>
          <img src={noProfile} alt="profile-pic" />
          <label>Username</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
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

          <button onClick={register} type="button">
            Enviar
          </button>

          {submitted ? (
            <>
              <Link to={"/auth/login"} className="button-main">
                Login
              </Link>
            </>
          ) : (
            ""
          )}

          <div className="feedback-registro">
            {errorMessage()}
            {successMessage()}
          </div>
        </form>
      </div>
    </>
  );
}
