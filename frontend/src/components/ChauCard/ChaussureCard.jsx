import React from 'react';

const ChaussureCard = ({ chaussure }) => {
  return (
    <div className="chaussure-card">
      <img className='chaussure-img' src="img/3_Ways_to_Keep_White_Adidas_Superstar_Shoes_Clean_-_wikiHow-removebg-preview.png" />
      <h4>Nottoyage Express</h4>
      <p>Toutes marques</p>
      <h4>$10</h4>
      {/* Ajoutez d'autres détails de la chaussure si nécessaire */}
    </div>
  );
};

export default ChaussureCard;
