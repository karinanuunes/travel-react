import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-heading">
          <a href="/">
            <h2>Exploratio</h2>
          </a>
        </div>
        <div className="nav-links">
          <a href="/destinos">Destinos</a>
          <a href="/hoteis">Hotéis</a>
          <a href="/">Voôs</a>
          <a href="/">Bookings</a>
          <a href="/">Entrar</a>
          <button className="classic-button">Registre-se</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
