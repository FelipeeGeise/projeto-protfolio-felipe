import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

//assets
import Github from "../../assets/github.png";
import Instagran from "../../assets/Instagran.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div className="mobile-Menu">
        <button className="button-mobile" onClick={()=>setIsOpen(!isOpen)}>Menu</button>
      </div>
      <nav className={`${isOpen ? 'open': ''}`}>
        <button className="mobile-Menu close-btn" onClick={()=>setIsOpen(!isOpen)}>
          x
        </button>
        <ul>
          <li>
            <Link to="/">Projetos</Link>
          </li>
          <li>
            <Link to="/tecnologia">Tecnologias</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre mim</Link>
          </li>
        </ul>

        <div className="Logo">
          <Link to="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src={Github} />
          </Link>
          <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img className="instagran" src={Instagran} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
