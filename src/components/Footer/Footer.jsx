import { Link } from "react-router-dom";
import "./Footer.css";

//assets
import GithubFoooter from "../../assets/github-footer.png"
import InstagranFoooter from "../../assets/instagran-footer.png"
import FigmaFoooter from "../../assets/figma-footer.png"

function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <div className="contact-number">
          <p>Meu contato:</p>
          <p>(81)999599815</p>
        </div>

        <div className="contact-email">
          <p>Email:</p>
          <p> felipe19852024@hotmail.com</p>
        </div>
      </div>
      <div className="footer-logo">
        <Link to="https://github.com" target="_blank" rel="noopener noreferrer"><img src={GithubFoooter} /></Link>
        <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><img className="instagran-footer" src={InstagranFoooter} /></Link>
        <Link to="/"><img src={FigmaFoooter} /></Link>
      </div>
    </footer>
  );
}

export default Footer;
