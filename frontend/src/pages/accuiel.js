import React from "react";
import Navbar from "../components/nav/navbar.jsx";
import Carousel from "../components/carousel/carrousel.jsx";
import Card from "../components/card.jsx";
import Cards from "../components/cards.jsx";
import Footer from "../components/footer.jsx";
import '../style/App.css';

export default function Home () {
    return(
       <div className="">
            <Navbar/>
            <div className="Home_carrousel">
               <Carousel/>
            </div>
            <h2 className="Hom_text">Rends tes chaussures propres</h2>

            <Card/>
            {/* <Card/> */}
            <Cards/>
            <Footer/>
       </div>

    )
}