import React, { useState, useEffect, useRef } from "react";

import CortesDePelo from "./data/cortesDePelo";
import Peluqueros from "./data/Peluquero";
import Tiempo from "./data/Tiempo";
import Horarios from "./data/HorariosDias";
import Axios from "axios";

function NuevoTurno() {
  const [corte, setCorte] = useState(CortesDePelo[0].value);
  const [fecha, setFecha] = useState("");
  const [horarios, setHorarios] = useState("lunes");
  const [horas, setHoras] = useState("");

  const [peluquero, setPeluquero] = useState(Peluqueros[0].value);
  const [tiempo, setTiempo] = useState(Tiempo[0].value);
  const [turno, setTurno] = useState({});
  const [usuarioLogeado, setUsuarioLogeado] = useState("");

  const selectid = useRef(0);

  let variable = "";

  Axios.defaults.withCredentials = true;

  // console.log(horarios.id);

  useEffect(() => {
    Axios.get("http://localhost:3050/login").then((response) => {
      // console.log(response.data);
      // console.log(response.data.user[0].id);
      if (response.data.loggedIn === true) {
        setUsuarioLogeado(response.data.user[0].id);
      }
    });
  }, []);

  const crearTurno = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3050/turnos/registro", {
      corte: corte,
      fecha: fecha,
      peluquero: peluquero,
      tiempo: tiempo,
      horarios: horarios,
      hora: horas,
      cliente: usuarioLogeado,
    }).then((response) => {
      console.log(response);
    });
  };

  // let divElement = '';

  useEffect(() => {
    variable = selectid.current;
    console.log(variable.value); // logs <div>I'm an element</div>
  }, [selectid]);

  return (
    <div className="loginContainer">
      <form>
        <label>Que tipo de corte te vas a hacer</label>

        <select value={corte} onChange={(e) => setCorte(e.target.value)}>
          {CortesDePelo.map((o, id) => (
            <option key={o.value} value={o.value}>
              {o.tipo}
            </option>
          ))}
        </select>
        <select
          value={peluquero}
          onChange={(e) => setPeluquero(e.target.value)}
        >
          {Peluqueros.map((p, id) => (
            <option key={p.value} value={p.value}>
              {p.nombre}
            </option>
          ))}
        </select>
        <select value={tiempo} onChange={(e) => setTiempo(e.target.value)}>
          {Tiempo.map((t, id) => (
            <option key={t.value} value={t.value}>
              {t.cantidad}
            </option>
          ))}
        </select>
        <select
          value={horarios}
          onChange={(e) => setHorarios(e.target.value)}
          ref={selectid}
        >
          {Horarios.map((h, id) => (
            <option key={h.value} value={h.id}>
              {h.dia}
            </option>
          ))}
        </select>
        <select onChange={(e) => setHoras(e.target.value)}>
          {Horarios[0].hora.map((h, id) => (
            <option key={h} value={horas}>
              {h}
            </option>
          ))}
        </select>
        <input type="date" onChange={(e) => setFecha(e.target.value)} />

        <button type="submit" onClick={(e) => crearTurno(e)}>
          Aceptar
        </button>
      </form>
    </div>
  );
}

export default NuevoTurno;
