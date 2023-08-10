import React from 'react';

const ChaussureCuire = ({ chaussure }) => {
  return (
    <div className="Chaussure-cards">
      <img className='chaussure-imgs' src="img/Mens_Shoes_Sale_Online_Cheap-removebg-preview.png" />
      <h4>Chaussure Jordan</h4>
      <p>Toutes couleurs</p>
      <h4>$2,5</h4>
      {/* Ajoutez d'autres détails de la chaussure si nécessaire */}
    </div>
  );
};

export default ChaussureCuire;
