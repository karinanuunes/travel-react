import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../assets/menu.svg";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const registrar = () => {
    navigate("/registrar");
  };

  const [showMenu, setShowMenu] = useState(false);

  const abrirMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-heading">
          <div className="menu-nav">
            <img src={menu} alt="" className="menu-hamb" onClick={abrirMenu} />
          </div>
          <a href="/">
            <h2>Exploratio</h2>
          </a>
        </div>
        <div className={`nav-links ${showMenu ? "show" : "hide"}`}>
          <Link to={"/destinos"}>Destinos</Link>
          <Link to={"/hoteis"}>Hotéis</Link>
          <Link to={"/voos"}>Voôs</Link>
          <Link to={"/bookings"}>Bookings</Link>
          <Link to={"/login"}>Entrar</Link>
          <button className="classic-button" onClick={registrar}>
            Registre-se
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
