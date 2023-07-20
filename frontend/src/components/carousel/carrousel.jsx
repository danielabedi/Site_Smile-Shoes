import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = ['Trendtation-removebg-preview.png', 'Brunsh-removebg-preview.png', 'removebg-preview.png']; // Ajoute les chemins de tes images ici
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000); // Définit l'intervalle de 30 secondes

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;
