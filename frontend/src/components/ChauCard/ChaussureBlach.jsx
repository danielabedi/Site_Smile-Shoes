import React from 'react';

const ChaussureBlash = ({ chaussure }) => {
  return (
    <div className="chaussure-card">
      <img className='chaussure-img' src="img/Tênis_Top_de_mais_-removebg-preview (2).png" />
      <h4>Chaussures Blaches</h4>
      <p>Toutes marques</p>
      <h4>$2,5</h4>
      {/* Ajoutez d'autres détails de la chaussure si nécessaire */}
    </div>
  );
};

export default ChaussureBlash;
