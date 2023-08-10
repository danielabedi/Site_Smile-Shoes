import React, { useState, useEffect } from 'react';
import './carrousel.css'

const Carousel = () => {
  const images = ['/public/../img/Trendtation-removebg-preview.png', '/public/../img/8-removebg-preview.png', '/public/../img/Way-removebg-preview.png', '/public/../img/removebg-preview.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Définit l'intervalle de 30 secondes

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className="carousel">
       <div className="carousel_left">
           <h1 className="carousel_title">SMILE SHOES</h1>
           <p className="carousel_description">Vos chaussures vont sourire de propriété</p>
           <button className="cta-button">Clique ici</button>
       </div>
          
       <img
        className="carousel_image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
       />
    </div>
  );
};

export default Carousel;
