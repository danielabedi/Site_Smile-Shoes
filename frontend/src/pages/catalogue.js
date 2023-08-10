import React from 'react';
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';
import ChaussureCard from '../components/ChauCard/ChaussureCard';
import ChaussureBlash from '../components/ChauCard/ChaussureBlach.jsx';
import ChaussureCards from '../components/ChauCards/ChaussureCards.jsx';
import ChaussureCuire from '../components/ChauCards/ChaussureCuire.jsx';
import Navcatalogue from '../components/nav/navcatalogue.jsx';
import Footer from '../components/footer.jsx';
import '../App.css';

const Catalogue = () => {
  // Exemple de données pour le catalogue
  return (
      <BrowserRouter>
        <div className="catalogue">
              <Navcatalogue/>
              <div className="catalogue-heading">
                  <ul className="catalogue-links">
                        <Link className='catalogue-link' to="/men">Men shoes</Link>
                        <Link className='catalogue-link' to="/women">Women shoes</Link>
                        <Link className='catalogue-link' to="/shoemaking">Shoemaking</Link>
                  </ul>
              </div>
            <div className="catalogue__cards">
                <div>
                  <ChaussureCard/>
                  <ChaussureBlash/>
                  <ChaussureCard/>
                </div>
                <div>
                  <ChaussureCards/>
                  <ChaussureCuire/>
                  <ChaussureCards/>
                </div>
            </div>
            <Footer/>
        </div>
      </BrowserRouter>
  );

   
};

export default Catalogue;
