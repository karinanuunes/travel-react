import "./footer.css";
import applestore from "../../../public/logos/applestore.png";
import googleplay from "../../../public/logos/googleplay.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-exploratio">
          <h2>Exploratio</h2>
          <h5>Garanta sua viagem em minutos no conforto de casa.</h5>
        </div>
        <div className="footer-companhia">
          <h3>Companhia</h3>
          <a href="/">Sobre nós</a>
          <a href="/">Carreiras</a>
          <a href="/">Privacidade</a>
        </div>
        <div className="footer-contato">
          <h3>Contato</h3>
          <a href="/">Ajuda/FAQ</a>
          <a href="/">Atendimento</a>
          <a href="/">Afiliados</a>
        </div>
        <div className="footer-mais">
          <h3>Mais</h3>
          <a href="/">Companhias aéreas</a>
          <a href="/">Hotéis</a>
          <a href="/">Pacotes</a>
        </div>
        <div className="footer-redes">
          <div className="footer-redes-sociais">
            <button className="arrow-button">
              <img src={facebook} alt="Logo do Facebook" />
            </button>
            <button className="arrow-button">
              <img src={instagram} alt="Logo do Instagram" />
            </button>
            <button className="arrow-button">
              <img src={twitter} alt="Logo do Twitter" />
            </button>
          </div>
          <h4>Conheça nosso app</h4>
          <button className="basic-button">
            <img
              src={applestore}
              alt="Logo da Apple Store"
              className="app-logo"
            />
          </button>
          <button className="basic-button">
            <img
              src={googleplay}
              alt="Logo da Google Play"
              className="app-logo"
            />
          </button>
        </div>
      </div>
      <small>Todos os direitos reservados 2024</small>
    </footer>
  );
};

export default Footer;
