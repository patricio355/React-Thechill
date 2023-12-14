import React, { useEffect, useState } from 'react';
import './ListarUsuarios.css'
import { format } from 'date-fns';
function ListarUsuarios(props) {
  const [userCount, setUserCount] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  const getUsers = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      
      // Filtrar usuarios administradores
      const adminUsers = response.users.filter(user => user.admin);
      setUserCount(adminUsers.length); 
      setUsuarios(adminUsers);
    } catch (error) {
      console.error(error);
    }
  };
  const formatDate = (dateString) => {
    const formattedDate = format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
    return formattedDate;
  };

  useEffect(() => {
    getUsers('http://localhost:8000/api/users');
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <h2> ADMINISTRADORES</h2>
      Cantidad de Administradores en el sistema: {userCount}
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
              <th>Fecha de registro</th>
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
                <td>{formatDate(usuario.registeredAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarUsuarios;
