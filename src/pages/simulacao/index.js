import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';


import './styles.css';

export default function New({history}){
   const [valorCompra, setValorCompra] = useState('');
   const [juros, setJuros] = useState('');
   const [parcela, setParcela] = useState('');   
   const [startDate, setStartDate] = useState(new Date());
   const FORMAT = 'dd/MM/yyyy';

   function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }
  
  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }   

    async function handleSubmit(event){
        event.preventDefault();       

      await api.post('/Simulacao', {'quantidadeParcelas': parcela, 'juros': juros, 'valorCompra': valorCompra, 'DataCompra': startDate})

        history.push('/home');
    }

    return (
      <>
        <form onSubmit={handleSubmit}>           

          <label htmlFor="valorCompra">VALOR*<span>(Valor da compra a ser simulada)</span></label>
          <input
          id="valorCompra"
          placeholder="Valor da compra"
          value={valorCompra}
          onChange={event => setValorCompra(event.target.value)}
          />

        <label htmlFor="juros">JUROS * <span>(porcentagem dos juros)</span></label>
          <input
          id="juros"
          placeholder="Informa a porcentagem"
          value={juros}
          onChange={event => setJuros(event.target.value)}
          />

        <label htmlFor="parcela">PARCELAS * <span>(quantidade de parcelas)</span></label>
          <input
          id="parcela"
          placeholder="Quantidade de parcelas"
          value={parcela}
          onChange={event => setParcela(event.target.value)}
          />

        <label htmlFor="dataCompra">DATA * <span>(data a ser realizada a compra)</span></label>        
          <DayPickerInput
           formatDate={formatDate}
           format={FORMAT}
           parseDate={parseDate}
           onDayChange={date => setStartDate(date)} 
           placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}           
          />

          <button type="submit" className="btn">Cadastrar</button>

        </form>
        <br></br>
         <Link to="/home">
           <button className="btn">Voltar</button>
         </Link>
     </>
    )
}