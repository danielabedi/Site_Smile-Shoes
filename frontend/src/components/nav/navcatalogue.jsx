import { FaTimes } from 'react-icons/fa'; 
import { FiMoreHorizontal} from "react-icons/fi";
import '../StyleComponent.css';

const Navcatalogue = () => {
    return (
        <nav className="navbar">
        <div  className="navbar_logo">
           <FaTimes className='Off'/>
        </div>
        <h4 className='navbar_title'>Catalogue</h4>
        {/* <button> */}
         <FiMoreHorizontal className='Off'/>
        {/* </button> */}
    
    </nav>
    );
};
export default Navcatalogue;