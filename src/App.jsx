
import Sidebar from './components/Sidebar';
import ListarUsuarios from './components/ListarUsuarios';
import Form from './components/Form';
import Footer from './components/Footer';
import AdminUser from './components/AdminUser'
import Header from './components/Header';
import AddUser from './components/AddUser';
import ListarAdmin from './components/ListarAdmin'
import LastUser from './components/LastUser'
import LastProduct from './components/LastProduct'
import ListarProductos from './components/ListarProductos';
import ListarCategorias from './components/ListarCategorias'
import LastCategoria from './components/LastCategoria'

import { Routes, Route } from 'react-router-dom';
import PanelGeneral from './components/PanelGeneral';



function App() {

  return (
    <>
    
        <Header/>
      
        <Sidebar />
       
        <Routes>

        <Route path="/" exact element={<PanelGeneral/>} />
        
        <Route path="/usuarios/agregar" exact element={<AddUser/>} />
        <Route path="/usuarios/administrar" exact element={<AdminUser/>} />
        <Route path="/usuarios/ver-usuarios" exact element={<ListarUsuarios/>} />
        <Route path="/usuarios/ver-administradores" exact element={<ListarAdmin/>} />
        <Route path="/usuarios/ver-ultimou" exact element={<LastUser/>} />


        <Route path="/productos/agregar" exact element={<Form/>} />
        <Route path="/productos/ver-productos" exact element={<ListarProductos/>} />
        <Route path="/productos/ver-ultimop" exact element={<LastProduct/>} />


        <Route path="/categoria/agregar" exact element={<Form/>} />
        <Route path="/categoria/ver-categorias" exact element={<ListarCategorias/>} />
        <Route path="/categoria/ver-ultimoc" exact element={<LastCategoria/>} />
          
        </Routes>


        <Footer/>
    </>

  )
}

export default App
