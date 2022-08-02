import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <>
    <div>Admin</div>
    <Link to={'/admin'}>Ver los turnos actuales</Link>
    </>
  )
}

export default Admin