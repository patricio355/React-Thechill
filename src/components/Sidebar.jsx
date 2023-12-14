import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
      Usuarios: false,
      Productos: false,
      Categorias: false,
    });
  
    const anchorMap = {
      Usuarios: 'left',
      Productos: 'left',
      Categorias: 'left',
      // Agrega otros mapeos si es necesario
    };
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {anchor === 'Usuarios' && (
            <>
              
              <ListItem key="admin" disablePadding>
                <ListItemButton component={Link} to="/usuarios/administrar">
                  Todos los usuarios
                </ListItemButton>
              </ListItem>
              <ListItem key="VerTodosu" disablePadding>
                <ListItemButton component={Link} to="/usuarios/ver-usuarios">
                 Ver Usuarios Clientes
                </ListItemButton>
              </ListItem>
              <ListItem key="VerTodosa" disablePadding>
                <ListItemButton component={Link} to="/usuarios/ver-administradores">
                 Ver Administradores
                </ListItemButton>
              </ListItem>
              <ListItem key="ultimacat" disablePadding>
                <ListItemButton component={Link} to="/usuarios/ver-ultimou">
                  Ultimo usuario registrado
                </ListItemButton>
              </ListItem>
             
              {/* Agregar los demás items para Usuarios */}
            </>
          )}
          {anchor === 'Productos' && (
            <>
             
              <ListItem key="VerTodos" disablePadding>
                <ListItemButton component={Link} to="/productos/ver-productos">
                  Ver todos los Productos
                </ListItemButton>
              </ListItem>
              {/* <ListItem key="ultimacat" disablePadding>
                <ListItemButton component={Link} to="/productos/ver-ultimop">
                  Ultimo Producto agregado
                </ListItemButton>
              </ListItem> */}
              {/* Agregar los demás items para Productos */}
            </>
          )}
           {anchor === 'Categorias' && (
            <>
             
              <ListItem key="Eliminar categoria" disablePadding>
                <ListItemButton component={Link} to="/categoria/ver-categorias">
                  Ver todas las Categorias
                </ListItemButton>
              </ListItem>
              {/* <ListItem key="VerTodosc" disablePadding>
                <ListItemButton component={Link} to="/categoria/ver-ultimoc">
                  Ultima categoria Agregada
                </ListItemButton>
              </ListItem> */}
             
              {/* Agregar los demás items para Productos */}
            </>
          )}
        </List>
        <Divider />
      </Box>
    );
  
    return (
      <div>
        {['Usuarios', 'Productos','Categorias'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchorMap[anchor]} // Usa el valor mapeado para anchor
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }