import React, { useEffect, useState } from 'react';

import './ListarUsuarios.css'
import { Link } from 'react-router-dom';

function ListarUsuarios(props) {
  const [userCount, setUserCount] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  
  const getUsers = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setUserCount(response.users.length); 
      setUsuarios(response.users.map(user => user));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers('http://localhost:8000/api/users');
  }, []);

  return (
    <div className="col-lg-6 mb-4">
    
        
            <h2> ADMINISTRACION GENERAL </h2>
            <label>  Cantidad total de USUARIOS en el sistema: {userCount}</label>
          
     <div className='table-container'>
     <table className="styled-table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Teléfono</th>
      <th>Género</th>
      <th>Tipo</th>
      
    </tr>
  </thead>
  <tbody>
    {usuarios.map((usuario, index) => (
      <tr key={index}>
        <td>{usuario.first_name}</td>
        <td>{usuario.last_name}</td>
        <td>{usuario.email}</td>
        <td>+{usuario.mobile}</td>
        <td>{usuario.gender}</td>
        <td>{usuario.admin === false ? "Usuario" : "Administrador"}</td>
       
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  );
}

export default ListarUsuarios;