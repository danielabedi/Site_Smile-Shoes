import { FaBars } from 'react-icons/fa'; 
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import '../../style/StyleComponents/Component.css';

const Humberger = () => {

   const [isOpen, setIsOpen] = useState(false);
  
     return (
       <div className='sidebar'>
          <button className="navbar_menu-button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className='Off'/> : <FaBars className='On' />} 
          </button>
         {isOpen && (
            <div className="menu">
            <a href="#">Accueil</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
            <a href="#">A propos</a> 
            </div>
         )}
       </div> 
     )
  } 
export default Humberger;