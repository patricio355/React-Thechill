import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Estilo para el header

const Header = () => {
  
  const linkColor = {
    color: "white",
    textDecoration: "none"
}

  return (
    <div>
     
      
      <Link to={'/'}  style={linkColor}>
      <div className="header">
      THE CHILL.
                        <h1>DASHBOARD</h1>
                        </div>
                    </Link>
    </div>
  );
};

export default Header;