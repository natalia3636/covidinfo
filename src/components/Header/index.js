import React from "react";
import "./style.css";

function Header() {
  //JSX
  return (
    <div id="cabecalho" className="jumbotron">
      <h1 className="display-4">Sistemas de Informação sobre o Covid 19</h1>
      <p className="lead">Lista de mortes no Brasil por estado</p>
    </div>
  );
}
export default Header;
