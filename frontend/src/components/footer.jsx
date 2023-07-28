import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import './StyleComponent.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="">
          <img className='footer_logo' src="logo.png" alt="Logo" />
          {/* <p>Chaussures propres</p> */}
        </div>
        <div className="footer_description">
          <p>Smile_Shoes est une entreprise de nettoyage de chaussures offrant des services de nettoyage de haute qualité et de cordonnerie. Notre objectif est de rendre vos chaussures impeccables et de vous faire sourire à chaque pas.</p>
        </div>
        <div className="footer_social">
          <FaFacebook className='sociel_icon'/>
          <FaInstagram className='sociel_icon'/>
          <FaLinkedin className='sociel_icon'/>
          <FaTiktok className='sociel_icon'/>
          <FaTwitter className='sociel_icon'/>
          <FaYoutube className='sociel_icon'/>
        </div>
      </footer>
    );
  };
  
export default Footer;