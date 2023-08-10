import React from 'react';

const ChaussureCards = ({ chaussure }) => {
  return (
    <div className="chaussure-cards">
      <img className='chaussure-imgs' src="img/Brand__Nunn_Bush_Nunn_Bush_Men_s_Barklay_Canvas_Plain_Toe_Oxford_Lace_Up-removebg-preview.png" />
      <h4>Chaussure en Daim</h4>
      <p>Trois couleurs</p>
      <h4>$10</h4>
      {/* Ajoutez d'autres détails de la chaussure si nécessaire */}
    </div>
  );
};

export default ChaussureCards;
