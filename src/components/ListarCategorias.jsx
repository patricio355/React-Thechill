import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
function ListarCategorias(props) {
  const [categoriasCount, setCategoriasCount] = useState(0);
  const [categorias, setCategorias] = useState([]);

  const getCategorias = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setCategoriasCount(response.categorias.length);
      setCategorias(response.categorias.map(categoria => categoria));

    } catch (error) {
      console.error(error);
    }
  };

  //Para la fech
  const formatDate = (dateString) => {
    const formattedDate = format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
    return formattedDate;
  };


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






  const productosPorCategoria = categorias.map((categoria) => {
    const productosEnCategoria = productos.filter((producto) =>
      producto.categories.some((cat) => cat.title === categoria.title)
    );
    return {
      categoria: categoria.title,
      cantidadProductos: productosEnCategoria.length,
    };

  });








  useEffect(() => {
    getProducts('http://localhost:8000/api/products/all');
  }, []);


  useEffect(() => {
    getCategorias('http://localhost:8000/api/categoria');
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <h2> Lista de Categorias</h2>
      <label>Cantidad de Categorías : {categoriasCount}</label>
      <div className='table-container'>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Productos de esta categoria</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, index) => (
              <tr key={index}>
                <td><h5>{categoria.title}</h5></td>
                <td>{categoria.content}</td>
                <td>
                  {productosPorCategoria.map((producto) => {
                    if (producto.categoria === categoria.title) {
                      return producto.cantidadProductos;
                    }
                   
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarCategorias;