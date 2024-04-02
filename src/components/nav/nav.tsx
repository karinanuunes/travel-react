import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const registrar = () => {
    navigate("/registrar");
  };

  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-heading">
          <a href="/">
            <h2>Exploratio</h2>
          </a>
        </div>
        <div className="nav-links">
          <Link to={"/destinos"}>Destinos</Link>
          <Link to={"/hoteis"}>Hotéis</Link>
          <Link to={"/"}>Voôs</Link>
          <Link to={"/"}>Bookings</Link>
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
