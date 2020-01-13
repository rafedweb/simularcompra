import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="container">      
       <div className="contentlogo">
          <img src={logo} alt="Fortes"/>
       </div>
        <div className="content">
           <Routes />      
         </div>
    </div>
  );
}

export default App;
