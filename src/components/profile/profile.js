import React, { useState, useEffect, useContext } from "react";

import "./profile.css";

import noProfile from "../../assets/no-profile-img.jpg";
import { UserContext } from "../../context/UserContext";

import Axios from "axios";

function Profile() {
  const { username } = useContext(UserContext);
  const [id, setId] = useState("");
  const [userComplete, setUserComplete] = useState(false);
  const [newbiography, setNewBiography] = useState("");
  const [newwebsite, setNewWebsite] = useState("");
  const [newage, setNewAge] = useState("");
  const [newcompany, setNewCompany] = useState("");
  const [newphone, setNewPhone] = useState("");
  const [role, setRole] = useState("");

  const [userLogged, setUserLogged] = useState({});

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      console.log(response.data.user[0].id);
      if (response.data.loggedIn === true) {
        setId(response.data.user[0].id);
        setUserLogged(response.data.user[0]);
        setUserComplete(true);
      }
    });
  }, []);

  console.log(userLogged.email);

  const updateUser = (e) => {
    e.preventDefault();
    console.log(newwebsite, newage, newcompany, newphone, newbiography, id);
    Axios.put("http://localhost:3050/update", {
      website: newwebsite,
      age: newage,
      company: newcompany,
      phone: newphone,
      biography: newbiography,
      role: role,
      id: id,
    }).then((response) => {
      console.log(response);
    });
    setUserComplete(true);
  };

  return (
    <div className="profile-container">
      <div className="profile-data">
        <img src={noProfile} alt="profile-pic" />
        <h2>Bienvenido, {username}</h2>

        {userComplete ? (
          <>
            <h2>La informacion del usuario es</h2>
            <p>Phone: {userLogged.phone}</p>
            <p>Website: {userLogged.website}</p>
            <p>Email: {userLogged.email}</p>
            <p>Company: {userLogged.company}</p>
            <p>Age: {userLogged.age}</p>
            <p>Biography:{userLogged.bio}</p>
          </>
        ) : (
          <p>
            Por favor, completa el formulario para ingresar tus datos de perfil
          </p>
        )}
      </div>
      <div className="loginContainer profileContainer">
        <form>
          <label>Website</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChange={(e) => setNewWebsite(e.target.value)}
            value={newwebsite}
          />
          <label>Age</label>
          <input
            type="number"
            placeholder="Ingrese su age"
            onChange={(e) => setNewAge(e.target.value)}
            value={newage}
          />
          <label>Company</label>
          <input
            type="text"
            placeholder="Ingrese su compnay"
            onChange={(e) => setNewCompany(e.target.value)}
            value={newcompany}
          />
          <label>Phone</label>
          <input
            type="number"
            placeholder="Ingrese su phone"
            onChange={(e) => setNewPhone(e.target.value)}
            value={newphone}
          />
          <label>Biography</label>
          <input
            type="textarea"
            placeholder="Ingrese su biografia"
            onChange={(e) => setNewBiography(e.target.value)}
            value={newbiography}
          />
          <label>Role: puedes elegir entre admin, moderator o visitor</label>
          <input
            type="text"
            placeholder="Ingrese su rol"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
          <button onClick={(e) => updateUser(e)} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
