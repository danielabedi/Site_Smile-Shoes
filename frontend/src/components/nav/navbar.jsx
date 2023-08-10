import Humberger from '../btn/Humberger.jsx';
import '../StyleComponent.css';

const Navbar = () => {


  return (
    <nav className="navbar">
      <div  className="navbar_logo">
        <img src="/public/../img/logo.png" alt="Logo" />
      </div>
      <div className="">
        <Humberger/>
      </div>
    
    </nav>
  );
};

export default Navbar;

