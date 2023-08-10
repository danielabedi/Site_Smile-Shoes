import React from 'react';
import Home from './pages/accuiel.js';
import FormulaireCommande from './pages/commande.js';
import Catalogue from './pages/catalogue.js';
import './App.css';

function App() {
  return (
    <div className="App">
       {/* <Home/> */}
       {/* <FormulaireCommande/> */}
       <Catalogue />
    </div>
  );
}

export default App;
