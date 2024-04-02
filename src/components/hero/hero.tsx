import Nav from "../nav/nav";
import "./hero.css";
import { Link } from "react-router-dom";
import thinRightArrow from "../../assets/thin-right-arrow.svg";

const Hero = () => {
  return (
    <div className="hero">
      <Nav />
      <section className="hero-content">
        <div className="description">
          <h6 className="hero-uptitle">MELHORES DESTINOS DO MUNDO</h6>
          <h1 className="hero-title">Viajar, curtir e viver a vida</h1>
          <p>
            Descubra viagens inesquecíveis com a Agência de Viagens Exploratio.
            Deixe-nos transformar seus sonhos em realidade, explorando destinos
            exóticos e experiências memoráveis. Visite nosso site e comece sua
            jornada hoje mesmo!
          </p>
          <div className="hero-destiny">
            <button className="classic-button hero-button">
              <Link to={"/destinos"} className="white-button">
                Descubra novos destinos
              </Link>
            </button>
            <Link to={"/"}>Vá direto ao ponto</Link>
            <img src={thinRightArrow} alt="Seeta fina para a direita" />
          </div>
        </div>
        <img
          src="https://vistovilamariana.com.br/wp-content/uploads/2023/07/Mulher-com-Mala-com-fundo-amarelo-1024x1024.png"
          alt="Mulher de origem asiática, cabelo liso e castanho escuro, com passaporte em frente do rosto, uma mala vermelha e um blazer cor de goiaba."
          className="hero-image"
        />
      </section>
    </div>
  );
};

export default Hero;
