import React, { useEffect, useState } from 'react';
import './ListarUsuarios.css'
import { format } from 'date-fns';
function ListarProductos(props) {
  const [productCount, setProductCount] = useState(0);
  const [productos, setProductos] = useState([]);
  
  const getProducts = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setProductCount(response.meta.total); 
      setProductos(response.data.map(producto => producto));
     
    } catch (error) {
      console.error(error);
    }
  };
  const formatDate = (dateString) => {
    const formattedDate = format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
    return formattedDate;
  };


  useEffect(() => {
    getProducts('http://localhost:8000/api/products/all');
  }, []);

  return (
    <div className="col-lg-6 mb-4">
     <h2> Lista de Productos</h2>
            
            <label>Cantidad de Productos : {productCount}</label>
           
     <div className='table-container'>
     <table className="styled-table">
  <thead>
    <tr>
      <th>Nombre</th>
      {/* <th>Descripcion</th> */}
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Descuento</th>
      <th>Género</th>
      
      <th>Marca</th>
      <th>Talle</th>
      <th>Categoria</th>
      <th>Modelo</th>
    </tr>
  </thead>
  <tbody>
    {productos.map((producto, index) => (
      <tr key={index}>
        <td>{producto.title}</td>
        {/* <td>   {producto.content}  </td> */}
        <td>{producto.quantity} unidades</td>
        <td>${producto.price}</td>
        <td>%{producto.discount}</td>
        <td>{producto.gender}</td>
        
        <td>{producto.brand }</td>
        <td>{producto.size }</td>
        <td> {producto.categories.map((category, i) => (
        <span key={i}>{category.title},</span>
      ))}</td>
        <td>{producto.model_name }</td>
        {/* <td>{formatDate(producto.registeredAt)}</td> */}
      </tr>
    ))}
  </tbody>
</table>
</div>
    </div>
  );
}

export default ListarProductos;