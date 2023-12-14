import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';

function LastCategoria(props) {
    // const [productCount, setProductCount] = useState(0);
  const [latestCategory, setLatestProduct] = useState(null);
  
  const getProducts = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      // setProductCount(response.data.length); 
      const sortedCategorias = response.data.sort((a, b) => {
        // Ordenar en orden descendente basado en registeredAt que hay quie traer de la bd
        return new Date(b.registeredAt) - new Date(a.registeredAt);
      });
      setLatestProduct(sortedCategorias[0]); // Tomar el primer usuario que vendria a ser el ultimo jjje
    } catch (error) {
      console.error(error);
    }
  };
  //para la fech
  const formatDate = (dateString) => {
    const formattedDate = format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
    return formattedDate;
  };

  useEffect(() => {
    getProducts('http://localhost:8000/api/products/all');
  }, []);

  return (
    <div className="col-lg-6 mb-4">
    
      <h2> ADMINISTRACION DE PRODUCTOS</h2>
      {latestCategory && latestCategory.registeredAt && (
      <p>Último producto registrado: {formatDate(latestCategory.registeredAt)}</p>
      )}
      <div className='table-container'>
        <table className="styled-table">
          <thead>
            <tr>
            <th>Nombre</th>
             <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
          {latestCategory && latestCategory.registeredAt && (
              <tr>
                <td>{latestCategory.title}</td>
                <td>{latestCategory.content}</td>
            
               
                {/* <td>{formatDate(latestProduct.registeredAt)}</td> */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}


export default LastCategoria;