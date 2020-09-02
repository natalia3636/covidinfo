import React from "react";

function Footer(props) {
  //props propriedade, um atributo que define uma ação. Ou pode-se dizer que é uma propriedade que esse componente vai receber
  //JSX
  return (
    <footer className="py-4 bg-dark text-white-50">
      <div className="container text-center">
        <small> {props.texto}</small>
      </div>
    </footer>
  );
}
export default Footer;
