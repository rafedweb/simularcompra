import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard(){
const [simulacao, setSimulacao] = useState([]);


useEffect(() => {
async function loadSpots(){   
    
    const response = await api.get('/Simulacao')

    setSimulacao(response.data);
    console.log(response.data);
}
loadSpots();
}, []);


function FormataData(data){  
    if(data !== undefined) {
        var date = new Date(data);
        return new Intl.DateTimeFormat('pt-BR').format(date);
    } 
}

    return (
        <>
         <Link to="/new">
              <button className="btn">Simular Compra</button>
          </Link>

        <div className="container">
          {simulacao.length > 0 ? <h1>Minhas Simulações</h1> : <h1>Nenhuma Simulação Encontrada!</h1> }
          <br></br>
         <ul className="spot-list">
          {simulacao.map(spot => (
                <li key={spot.id}> 
                    <strong>Data: {FormataData(spot.dataCompra)}</strong>                   
                    <strong>Valor: {new Intl.NumberFormat("pt-BR", {
                                                     style: "currency",
                                                     currency: "BRL"
                                                     }).format(spot.valorCompra)}</strong>
                    <span>Parcelas: {spot.quantidadeParcelas}</span>
                    <span>Juros: {`${spot.juros}%`}</span>
                    <span>Montante: {new Intl.NumberFormat("pt-BR", {
                                                     style: "currency",
                                                     currency: "BRL"
                                                     }).format(spot.totalFinal)}</span>
                    <Link to={`/detalhe/${spot.id}`}>
                      <button className="btn" >Detalhes</button>
                    </Link>
                </li>
            ))}
         </ul>
        </div>

          <Link to="/">
              <button className="btn">Sair</button>
          </Link>

        </>
    )
}