import React, { useEffect, useState } from 'react';
import './ListarUsuarios.css'
import { format } from 'date-fns';
import ContentRowTop from './ContentRowTop';
import LastUser from './LastUser'
import LastProduct from './LastProduct';
import ListarCategorias from './ListarCategorias';
import ListarProductos from './ListarProductos';
function PanelGeneral(props) {
  const [userCount, setUserCount] = useState(0);

  const [productosCount, setProductCount] = useState(0);

  const [categoriaCount, setCategoriaCount] = useState(0);


  const [usuarios, setUsuarios] = useState([]);
  
  const getUsers = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setUserCount(response.total); 
      const users = response.users.filter(user => !user.admin);
      setUserCount(users.length); 
      setUsuarios(users)
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
    <div>
        <h1>Panel General</h1>
    
    
    <div className='row'>
      <div className='col-5'>
      <ContentRowTop/>
      </div>
      <LastUser/>
      <div>
     
        <ListarCategorias/>
        <ListarProductos/>
      </div>
       
    </div>
    {/* <LastProduct/> */}
    


    </div>
  );
}

export default PanelGeneral;