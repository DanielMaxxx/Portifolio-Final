import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Meu Portfólio</div>
      <ul className="navbar-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/materia/Matematica">Matemática</Link></li>
        <li><Link to="/materia/Humanas">Humanas</Link></li>
        <li><Link to="/materia/Natureza">Natureza</Link></li>
        <li><Link to="/materia/Linguagens">Linguagens</Link></li>
        <li><Link to="/materia/Banco de Dados">Banco de Dados</Link></li>
        <li><Link to="/materia/Programação de Aplicativos">Programação de Aplicativos</Link></li>
        <li><Link to="/materia/Teste de Sistemas">Teste de Sistemas</Link></li>
        <li><Link to="/materia/Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</Link></li>
        <li><Link to="/materia/Modelagem de Sistemas">Modelagem de Sistemas</Link></li>
        <li><Link to="/materia/Implementação de Sistemas">Implementação de Sistemas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
