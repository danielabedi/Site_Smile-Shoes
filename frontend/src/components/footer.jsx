import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../style/StyleComponents/Component.css';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer_logos">
          <img className='footer_logo' src="/public/../img/logo.png" alt="Logo" />
        </div>
        <div className="footer_description">
          <h3>SERVICES</h3>
          <ul>
            <li>NETTOYAGE CHAUSSURE</li>
            <li>CORDONNIERIS</li>
            <li>AUTRES SERVICE</li>
          </ul>
          <h3>Àpropos</h3>
          <ul>
            <li>NETTOYAGE CHAUSSURE</li>
            <li>CORDONNIERIS</li>
            <li>AUTRES SERVICE</li>
          </ul>

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