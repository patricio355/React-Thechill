import React, { useEffect, useState } from 'react';

import { format } from 'date-fns';

function LastProduct(props) {
  const [productCount, setProductCount] = useState(0);
  const [latestProduct, setLatestProduct] = useState(null);
  
  const getProducts = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      // setProductCount(response.data.length); 
      const sortedProducts = response.data.sort((a, b) => {
        // Ordenar en orden descendente basado en registeredAt que hay quie traer de la bd
        return new Date(b.registeredAt) - new Date(a.registeredAt);
      });
      setLatestProduct(sortedProducts[0]); // Tomar el primer usuario que vendria a ser el ultimo jjje
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
    
      <h2> ULTIMO PRODUCTO AGREGADO</h2>
      {latestProduct && latestProduct.registeredAt && (
      <p>FECHA Y HORA: {formatDate(latestProduct.registeredAt)}</p>
      )}
      <div className='table-container'>
        <table className="styled-table">
          <thead>
            <tr>
            <th>Nombre</th>
      <th>Descripcion</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Descuento</th>
      <th>Género</th>
      <th>Color</th>
      <th>Marca</th>
      <th>Talle</th>
      <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
          {latestProduct && latestProduct.registeredAt && (
              <tr>
                <td>{latestProduct.title}</td>
                <td>{latestProduct.content}</td>
                <td>{latestProduct.quantity}</td>
                <td>+{latestProduct.discount}</td>
                <td>{latestProduct.gender}</td>
                <td>{latestProduct.colour}</td>
                <td>{latestProduct.brand}</td>
                <td>{latestProduct.size}</td>
                <td>{latestProduct.model_name}</td>
               
                {/* <td>{formatDate(latestProduct.registeredAt)}</td> */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default LastProduct;