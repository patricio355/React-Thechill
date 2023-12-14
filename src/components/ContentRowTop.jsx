
import DataContent from './DataContent';
import React, { useEffect, useState } from 'react';



function ContentRowTop(){

  const [categoriasCount, setCategoriasCount] = useState(0);
  const [productosCount, setProductosCount] = useState(0);
  const [usuariosCount, setUsuariosCount] = useState(0);
  const getCategorias = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setCategoriasCount(response.categorias.length); 
     
    } catch (error) {
      console.error(error);
    }
  };

  const getUsuarios = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setUsuariosCount(response.users.length); 
     
    } catch (error) {
      console.error(error);
    }
  };

  const getProductos = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setProductosCount(response.data.length); 
     
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getCategorias('http://localhost:8000/api/categoria');
  }, []);

  useEffect(() => {
    getProductos('http://localhost:8000/api/products/all');
  }, []);

  useEffect(() => {
    getUsuarios('http://localhost:8000/api/users');
  }, []);











    const dataBoxes = [
      {
        title: "Cantidad de Usuarios",
        amount: usuariosCount,
        icon: 'fa-film',
        styles: ['border-left-primary' ,'text-primary']
      },
      {
        title: "Cantidad de Productos",
        amount: productosCount,
        icon: 'fa-award',
        styles: [ 'border-left-success' ,'text-success']
      },
      {
        title: "Cantidad de Categorias",
        amount: categoriasCount,
        icon: 'fa-user',
        styles: ['border-left-warning', 'text-warning']
      }
    ]


    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
       
        </div>
        {/* Content Row Movies*/}
        <div className="row">
          {/* Movies in Data Base */}
          {
            dataBoxes.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>
        {/* End movies in Data Base */}
        {/* Content Row Last Movie in Data Base */}

      </div>
    )
}

export default ContentRowTop;