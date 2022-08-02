import React, { useState, useEffect } from "react";

import Axios from "axios";

import './table.css'

function Admin() {
  const [listaEmpleados, setListaEmpleados] = useState([]);

  const getTurnos = (e) => {
    // console.log("estoy");
    // e.preventDefault();
    Axios.get("http://localhost:3050/turnos").then((response) => {
      setListaEmpleados(response.data);
    });
  };

  useEffect(() => {
    getTurnos();
  }, []);

  return (
    <div className="mostrarEmpleados">
      {/* <button onClick={getTurnos}>Mostrar Turnos Actuales</button> */}

      <table id="customers">
        <tr className="first-row">
          <th>Tipo de corte</th>
          <th>Peluquero</th>
          <th>Fecha</th>
          <th>Tiempo de turno</th>
        </tr>
        {listaEmpleados.map((item) => {
          return (
            <tr className="table">
              <td>{item.corte}</td>
              <td>{item.peluquero}</td>
              <td>{item.fecha}</td>
              <td>{item.tiempo}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Admin;
