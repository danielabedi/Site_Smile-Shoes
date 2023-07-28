import React from "react";
import Navbar from "../components/nav/navbar.jsx";
import Carousel from "../components/carousel/carrousel.jsx";
import Footer from "../components/footer.jsx";
import '../App.css';

export default function Home () {
    return(
       <div className="">
            <Navbar/>
          <div className="Home_carrousel">
            <Carousel/>
          </div>
            <h2 className="Hom_text">Rends tes chaussures propres</h2>
          <div className="Home_card">
            <img className="Home_img" src="preview.png" alt=""/>
          </div>
              <Footer/>
       </div>

    )
}