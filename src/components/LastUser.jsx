import React, { useEffect, useState } from 'react';
import './ListarUsuarios.css';
import { format } from 'date-fns';

function ListarUsuarios(props) {
  const [userCount, setUserCount] = useState(0);
  const [latestUser, setLatestUser] = useState(null);
  
  const getUsers = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setUserCount(response.users.length); 
      const sortedUsers = response.users.sort((a, b) => {
        // Ordenar en orden descendente basado en registeredAt
        return new Date(b.registeredAt) - new Date(a.registeredAt);
      });
      setLatestUser(sortedUsers[0]); // Tomar el primer usuario (último registrado)
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
    
      <h2> ULTIMO USUARIO REGISTRADO</h2>
      {latestUser && latestUser.registeredAt && (
      <p>FECHA Y HORA: {formatDate(latestUser.registeredAt)}</p>
      )}
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
          {latestUser && latestUser.registeredAt && (
              <tr>
                <td>{latestUser.first_name}</td>
                <td>{latestUser.last_name}</td>
                <td>{latestUser.email}</td>
                <td>+{latestUser.mobile}</td>
                <td>{latestUser.gender}</td>
                <td>{latestUser.admin === false ? "Usuario" : "Administrador"}</td>
                
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default ListarUsuarios;