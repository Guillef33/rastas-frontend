import React, { useState, useEffect } from "react";

import Axios from "axios";

import "./table.css";

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

  function cancelarTurno () {
    console.log('El turno va a ser cancelado. Enviar notificacion al cliente?')
  }

    function editarTurno() {
      console.log(
        "El turno va a ser editado. Enviar notificacion al cliente?"
      );
    }

  return (
      <table id="tabla-turnos">
        <tr className="first-row">
          <th>Tipo de corte</th>
          <th>Peluquero</th>
          <th>Fecha</th>
          <th>Tiempo de turno</th>
          <th>Borrar</th>
          <th>Editar</th>
        </tr>
        {listaEmpleados.map((item) => {
          return (
            <tr className="table">
              <td>{item.corte}</td>
              <td>{item.peluquero}</td>
              <td>{item.fecha}</td>
              <td>{item.tiempo}</td>
              <td>
                <button onClick={cancelarTurno}>Cancelar</button>
              </td>
              <td>
                <button onClick={editarTurno}>Editar</button>
              </td>
            </tr>
          );
        })}
      </table>
  );
}

export default Admin;
