import Humberger from '../btn/Humberger.jsx';
import '../../style/StyleComponents/Component.css';

const Navbar = () => {


  return (
    <nav className="navbar">
      <div  className="navbar_logo">
        <img src="../img/logo.png" alt="Logo" />
      </div>
      <div className="">
        <Humberger/>
      </div>

    </nav>
  );
};

export default Navbar;

