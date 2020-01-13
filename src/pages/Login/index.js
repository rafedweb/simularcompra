import React, {useState} from 'react';
//import api from '../../services/api';

export default function Login({ history }){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event){
      event.preventDefault()
         
         
     // localStorage.setItem('user', _id);
    
      history.push('/home');
      //console.log(_id);
    } 

    return (
     <>
        <p>
          Esta é uma aplicação de teste clique em <strong>Entrar</strong>.
        </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="usuario">Usuario *</label>
        <input 
         type="text"
         id="usuario" 
         placeholder="Informe o usuário"
         value={usuario}
         onChange ={event => setUsuario(event.target.value)}
         />

        <label htmlFor="senha">Senha *</label>
        <input 
         type="text"
         id="senha" 
         placeholder="Informe a senha"
         value={senha}
         onChange ={event => setSenha(event.target.value)}
         />

         <button className="btn">Entrar</button>
      </form>
    </>
    )
}