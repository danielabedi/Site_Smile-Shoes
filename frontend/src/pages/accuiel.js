import React from "react";
import Navbar from "../components/nav/navbar.jsx";
import Carousel from "../components/carousel/carrousel.jsx";
import './App.css';
export default function Home () {
    return(
       <div className="">
        <Navbar/>
        <div className="header_carrousel">
            <div className="">
              
            </div>
            <Carousel/>
        </div>
     
       </div>

    )
}