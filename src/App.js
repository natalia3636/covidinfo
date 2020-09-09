import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) =>
      console.error("Erro ao buscar dados", err)
    ); /*ACONTECE SE PASSAR UMA URL QUE NÃO EXISTE OU QUE É FECHADA PARA ACESSO*/
}

export default function App() {
  const [casos, setCasos] = useState(
    []
  ); /*criando um vetor, o use state serve para poder alterar algo, sem precisar recarregar a  página*/
  useEffect(() => {
    /*use vai ser executada uma vez quando  a pagina for carregada */
    buscaDados().then((dados) =>
      setCasos(dados.data)
    ); /*vai buscar os dados e setar os dados*/
  }, []);
  return (
    <div className="App">
      <h3>Informações sobre COVID-19</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Estado </th>
            <th>Casos </th>
            <th>Mortes </th>
            <th>Suspeitos </th>
          </tr>
        </thead>
        <tbody>
          {casos.map(function (item, index) {
            return (
              <tr key={index}>
                <td>{item.state}</td>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.suspects}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
