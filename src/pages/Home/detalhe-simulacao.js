import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function DetalheSimulacao({ match }){
const [simulacao, setSimulacao] = useState([]);

useEffect(() => {
async function loadSpots(){  
    var idSimulacao = match.params.id;
    const response = await api.get(`/Simulacao/${idSimulacao}`)

   setSimulacao(response.data);
   
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

        <div className="container"> 

           <p>Data: {FormataData(simulacao.dataCompra)}</p>
           <p>Valor: {new Intl.NumberFormat("pt-BR", {
                                                           style: "currency",
                                                           currency: "BRL"
                                                          }).format(simulacao.valorCompra)}</p>
           <p>Juros: {`${simulacao.juros}%`}</p>
           <p>Montante: {new Intl.NumberFormat("pt-BR", {
                                                     style: "currency",
                                                     currency: "BRL"
                                                     }).format(simulacao.totalFinal)}</p>
           <p>Quantidade de parcelas: {simulacao.quantidadeParcelas}</p>
             <br></br>
            <h1>Detalhamento de parcelas</h1>           
         <ul className="spot-list">             
          {simulacao.parcelas !== undefined ? simulacao.parcelas.map(spot => (
                <li key={spot.id}>                    
                    <strong>Valor: {new Intl.NumberFormat("pt-BR", { 
                                                           style: "currency",   
                                                           currency: "BRL"
                                                          }).format(spot.valor)}</strong>
                    <span>Vencimento: {new Intl.DateTimeFormat('pt-BR').format(new Date(spot.vencimento))}</span>
                    <span>Juros: {`${spot.juros}%`}</span>
                    <span>Montante: {new Intl.NumberFormat("pt-BR", {
                                                     style: "currency",
                                                     currency: "BRL"
                                                     }).format(spot.montante)}</span>                    
                </li>
            )): ""}
         </ul>
        </div>

          <Link to="/home">
              <button className="btn">Voltar</button>
          </Link>

        </>
    )
}