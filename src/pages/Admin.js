import React, { useState } from "react";

import Axios from "axios";

function Admin() {
  const [listaEmpleados, setListaEmpleados] = useState([]);

  const getTurnos = (e) => {
    // console.log("estoy");
    e.preventDefault();
    Axios.get("http://localhost:3050/turnos").then((response) => {
      setListaEmpleados(response.data);
    });
  };
  return (
    <div className="mostrarEmpleados">
      <button onClick={getTurnos}>Mostrar Turnos Actuales</button>

      <>
        {listaEmpleados.map((item) => {
          return (
            <div>
              <h1>{item.corte}</h1>
              <p>{item.peluquero}</p>
              <p>{item.fecha}</p>
              <p>{item.tiempo}</p>;
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Admin;
